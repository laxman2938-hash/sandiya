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
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      },
      {
        title: 'Team Meeting',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      },
      {
        title: 'Training Session',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      },
    ],
  });

  // Create Team Members
  await prisma.teamMember.createMany({
    data: [
      {
        name: 'Narottam Poudel',
        designation: 'Recruitment Expert',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      },
      {
        name: 'Poonam Shrestha',
        designation: 'HR Manager',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      },
      {
        name: 'Ganesh Gharti',
        designation: 'Operations Lead',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      },
      {
        name: 'Shiva Khatri',
        designation: 'Client Relations',
        image: 'https://images.unsplash.com/photo-1519085360771-9852372b9c5f?w=200&h=200&fit=crop',
      },
    ],
  });

  // Create Employment Categories
  await prisma.employmentCategory.createMany({
    data: [
      {
        title: 'Full-Time Position',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      },
      {
        title: 'Contract Position',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      },
    ],
  });

  // Create Achievements
  await prisma.achievement.createMany({
    data: [
      {
        title: 'ISO 9001:2015 Certified',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      },
      {
        title: '1000+ Placements',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      },
    ],
  });

  // Create Clients
  await prisma.client.createMany({
    data: [
      {
        name: 'TechCorp Nepal',
        logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
      },
      {
        name: 'Global Logistics',
        logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
      },
    ],
  });

  // Create Legal Documents
  await prisma.legalDocument.createMany({
    data: [
      {
        title: 'Privacy Policy',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      },
      {
        title: 'Terms of Service',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      },
    ],
  });

  // Create Testimonials
  await prisma.testimonial.createMany({
    // Cast to any to avoid IDE type cache issues on description field
    data: [
      {
        name: 'Sita Gurung',
        position: 'Hospitality Sector Employee',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        description: 'Sandiya HR helped me secure an amazing opportunity in the hospitality sector abroad. Their ethical approach and zero-cost policy made the entire process hassle-free. I highly recommend their services!',
      },
      {
        name: 'Mamta Shrestha',
        position: 'Global Tech Solutions',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        description: 'Working with Sandiya HR was a game-changer for my career. They connected me with a leading tech company, and the support throughout the process was exceptional. Truly professionals in their field!',
      },
    ],
  } as any);

  // Create Demand Letters
  await prisma.demandLetter.createMany({
    data: [
      {
        title: 'Sample Demand Letter 1',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop',
      },
      {
        title: 'Sample Demand Letter 2',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop',
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
