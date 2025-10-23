const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { PrismaClient } = require('@prisma/client');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const prisma = new PrismaClient();

async function uploadImageToStorage(filePath, bucketPath) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const fileName = path.basename(filePath);
    const storagePath = `${bucketPath}/${fileName}`;

    console.log(`  Uploading ${fileName} to storage...`);

    const { data, error } = await supabase.storage
      .from('uploads')
      .upload(storagePath, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: true,
      });

    if (error) {
      console.error(`  ❌ Upload failed: ${error.message}`);
      return null;
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('uploads')
      .getPublicUrl(storagePath);

    console.log(`  ✅ Uploaded: ${publicUrl}`);
    return publicUrl;
  } catch (err) {
    console.error(`  ❌ Error: ${err.message}`);
    return null;
  }
}

async function migrateTeamMemberImages() {
  console.log('\n🚀 Starting team member image migration...\n');

  try {
    const teamMembersDir = path.join(__dirname, '../public/uploads/team-members');

    if (!fs.existsSync(teamMembersDir)) {
      console.log('❌ Team members directory not found');
      return;
    }

    const files = fs.readdirSync(teamMembersDir);
    console.log(`Found ${files.length} image files\n`);

    for (const file of files) {
      const filePath = path.join(teamMembersDir, file);
      const fileName = path.basename(file);

      console.log(`Processing: ${fileName}`);

      // Upload to storage
      const publicUrl = await uploadImageToStorage(filePath, 'team-members');

      if (!publicUrl) {
        console.log(`  ⏭️ Skipping database update for ${fileName}`);
        continue;
      }

      // Update database record
      try {
        const updated = await prisma.teamMember.updateMany({
          where: {
            image: {
              contains: fileName.split('-').slice(1).join('-'),
            },
          },
          data: {
            image: publicUrl,
          },
        });

        if (updated.count > 0) {
          console.log(`  ✅ Updated ${updated.count} database record(s)`);
        } else {
          console.log(`  ℹ️ No matching database records found (file might be unused)`);
        }
      } catch (err) {
        console.error(`  ❌ Database update failed: ${err.message}`);
      }

      console.log('');
    }

    console.log('✅ Migration complete!');
    console.log('\nNote: Images are now served from Supabase Storage.');
    console.log('Local /public/uploads/ directory can be safely removed from git.\n');
  } catch (error) {
    console.error('Fatal error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

migrateTeamMemberImages();
