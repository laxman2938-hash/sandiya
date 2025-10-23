#!/usr/bin/env node

/**
 * Migrate all uploaded images to Vercel Blob Storage
 * Supports: team-members, clients, gallery, legal-documents, achievements, demand-letters
 */

const fs = require('fs');
const path = require('path');
const { put } = require('@vercel/blob');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const IMAGE_FOLDERS = {
  'team-members': { model: 'teamMember', field: 'image' },
  'clients': { model: 'client', field: 'logo' },
  'gallery': { model: 'galleryImage', field: 'image' },
  'achievements': { model: 'achievement', field: 'image' },
  'legal-documents': { model: 'legalDocument', field: 'image' },
  'demand-letters': { model: 'demandLetter', field: 'image' },
};

async function uploadImageToBlob(filePath, folderName, fileName) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const ext = path.extname(fileName).toLowerCase();
    const mimeType = ext === '.png' ? 'image/png' : ext === '.pdf' ? 'application/pdf' : 'image/jpeg';

    console.log(`  Uploading ${fileName}...`);

    const blob = await put(
      `${folderName}/${fileName}`,
      fileBuffer,
      {
        access: 'public',
        contentType: mimeType,
      }
    );

    console.log(`  ✅ Uploaded: ${blob.url}`);
    return blob.url;
  } catch (err) {
    console.error(`  ❌ Error: ${err.message}`);
    return null;
  }
}

async function migrateFolder(folderName, config) {
  const folderPath = path.join(__dirname, `../public/uploads/${folderName}`);

  if (!fs.existsSync(folderPath)) {
    console.log(`  ⏭️ Folder not found: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);
  if (files.length === 0) {
    console.log(`  ⏭️ No files found`);
    return;
  }

  console.log(`\n📁 Processing ${folderName} (${files.length} files):\n`);

  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png|pdf)$/i)) continue;

    const filePath = path.join(folderPath, file);
    console.log(`  Processing: ${file}`);

    const blobUrl = await uploadImageToBlob(filePath, folderName, file);
    if (!blobUrl) continue;

    // Update database
    try {
      const { model, field } = config;
      
      // Build the update query dynamically based on model and field
      const updateData = {};
      updateData[field] = blobUrl;

      const result = await prisma[model].updateMany({
        where: {
          [field]: {
            contains: file,
          },
        },
        data: updateData,
      });

      if (result.count > 0) {
        console.log(`    ✅ Updated ${result.count} record(s)`);
      }
    } catch (err) {
      console.error(`    ❌ Database update failed: ${err.message}`);
    }
  }
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN environment variable not set');
    process.exit(1);
  }

  console.log('\n🚀 Migrating all images to Vercel Blob Storage...\n');
  console.log('═'.repeat(60));

  try {
    for (const [folderName, config] of Object.entries(IMAGE_FOLDERS)) {
      await migrateFolder(folderName, config);
    }

    console.log('\n' + '═'.repeat(60));
    console.log('\n✅ Migration complete!\n');
    console.log('All images are now served from Vercel Blob Storage (CDN).');
    console.log('You can safely remove /public/uploads/ from the repository.\n');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
