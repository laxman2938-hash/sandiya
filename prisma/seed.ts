import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.demandLetter.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.client.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.legalDocument.deleteMany();
  await prisma.employmentCategory.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.galleryImage.deleteMany();


  // Create Gallery Images
  await prisma.galleryImage.createMany({
    data: [
      {
        title: 'Office Space',
        image: 'https://via.placeholder.com/400x300?text=Office+Space',
      },
      {
        title: 'Team Meeting',
        image: 'https://via.placeholder.com/400x300?text=Team+Meeting',
      },
      {
        title: 'Training Session',
        image: 'https://via.placeholder.com/400x300?text=Training+Session',
      },
    ],
  });

  // Create Team Members
  await prisma.teamMember.createMany({
    data: [
      {
        name: 'Ram Sharma',
        designation: 'CEO & Founder',
        image: 'https://via.placeholder.com/200?text=Ram+Sharma',
      },
      {
        name: 'Sita Poudel',
        designation: 'HR Manager',
        image: 'https://via.placeholder.com/200?text=Sita+Poudel',
      },
    ],
  });

  // Create Employment Categories
  await prisma.employmentCategory.createMany({
    data: [
      {
        title: 'Full-Time Position',
        image: 'https://via.placeholder.com/300x200?text=Full+Time',
      },
      {
        title: 'Contract Position',
        image: 'https://via.placeholder.com/300x200?text=Contract',
      },
    ],
  });

  // Create Achievements
  await prisma.achievement.createMany({
    data: [
      {
        title: 'ISO 9001:2015 Certified',
        image: 'https://via.placeholder.com/300x200?text=ISO+Certified',
      },
      {
        title: '1000+ Placements',
        image: 'https://via.placeholder.com/300x200?text=1000+Placements',
      },
    ],
  });

  // Create Clients
  await prisma.client.createMany({
    data: [
      {
        name: 'TechCorp Nepal',
        logo: 'https://via.placeholder.com/200?text=TechCorp',
      },
      {
        name: 'Global Logistics',
        logo: 'https://via.placeholder.com/200?text=Global+Logistics',
      },
    ],
  });

  // Create Legal Documents
  await prisma.legalDocument.createMany({
    data: [
      {
        title: 'Privacy Policy',
        image: 'https://via.placeholder.com/300x200?text=Privacy',
      },
      {
        title: 'Terms of Service',
        image: 'https://via.placeholder.com/300x200?text=Terms',
      },
    ],
  });

  // Create Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'John Doe',
        position: 'Project Manager',
        photo: 'https://via.placeholder.com/100?text=John',
      },
      {
        name: 'Jane Smith',
        position: 'HR Director',
        photo: 'https://via.placeholder.com/100?text=Jane',
      },
    ],
  });

  // Create Demand Letters
  await prisma.demandLetter.createMany({
    data: [
      {
        title: 'Sample Demand Letter 1',
        image: 'https://via.placeholder.com/300x400?text=Demand+Letter',
      },
      {
        title: 'Sample Demand Letter 2',
        image: 'https://via.placeholder.com/300x400?text=Demand+Letter',
      },
    ],
  });

  console.log('Seed data created successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
