#!/usr/bin/env node

/**
 * Upload team member images to Vercel Blob Storage
 * Usage: BLOB_READ_WRITE_TOKEN=your_token node scripts/upload-to-vercel-blob.js
 */

const fs = require('fs');
const path = require('path');
const { put } = require('@vercel/blob');

async function uploadImageToBlob(filePath, fileName) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const mimeType = filePath.endsWith('.png') ? 'image/png' : 'image/jpeg';

    console.log(`  Uploading ${fileName}...`);

    const blob = await put(
      `team-members/${fileName}`,
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

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN environment variable not set');
    console.log('Set it from your Vercel dashboard: https://vercel.com/account/storage/blob');
    process.exit(1);
  }

  console.log('\n🚀 Uploading team member images to Vercel Blob...\n');

  const teamMembersDir = path.join(__dirname, '../public/uploads/team-members');
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

  try {
    const files = fs.readdirSync(teamMembersDir);
    
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

      const filePath = path.join(teamMembersDir, file);
      console.log(`\nProcessing: ${file}`);

      const blobUrl = await uploadImageToBlob(filePath, file);
      if (!blobUrl) continue;

      // Update database
      try {
        const result = await prisma.teamMember.updateMany({
          where: {
            image: {
              contains: file,
            },
          },
          data: {
            image: blobUrl,
          },
        });

        if (result.count > 0) {
          console.log(`  ✅ Updated ${result.count} database record(s) with new URL`);
        }
      } catch (err) {
        console.error(`  ❌ Database update failed: ${err.message}`);
      }
    }

    console.log('\n✅ Upload complete!\n');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
