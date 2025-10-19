const { PrismaClient } = require('@prisma/client');

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
      {
        title: 'Team Lunch',
        image: 'https://via.placeholder.com/400x300?text=Team+Lunch',
      },
      {
        title: 'Recruitment Drive',
        image: 'https://via.placeholder.com/400x300?text=Recruitment+Drive',
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
      {
        name: 'Arjun Singh',
        designation: 'Recruitment Lead',
        image: 'https://via.placeholder.com/200?text=Arjun+Singh',
      },
      {
        name: 'Priya Verma',
        designation: 'Operations Head',
        image: 'https://via.placeholder.com/200?text=Priya+Verma',
      },
      {
        name: 'Rajesh Kumar',
        designation: 'Finance Manager',
        image: 'https://via.placeholder.com/200?text=Rajesh+Kumar',
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
      {
        title: 'Temporary Staff',
        image: 'https://via.placeholder.com/300x200?text=Temporary',
      },
      {
        title: 'Internship',
        image: 'https://via.placeholder.com/300x200?text=Internship',
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
      {
        title: 'Best Employer Award 2023',
        image: 'https://via.placeholder.com/300x200?text=Best+Employer',
      },
      {
        title: '20+ Years in Industry',
        image: 'https://via.placeholder.com/300x200?text=20+Years',
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
      {
        name: 'FinanceHub Ltd',
        logo: 'https://via.placeholder.com/200?text=FinanceHub',
      },
      {
        name: 'Health Plus Hospital',
        logo: 'https://via.placeholder.com/200?text=Health+Plus',
      },
      {
        name: 'Education First',
        logo: 'https://via.placeholder.com/200?text=Education',
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
      {
        title: 'Employment Contract Template',
        image: 'https://via.placeholder.com/300x200?text=Contract',
      },
      {
        title: 'Company Code of Conduct',
        image: 'https://via.placeholder.com/300x200?text=Code+Conduct',
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
      {
        name: 'Michael Brown',
        position: 'Software Engineer',
        photo: 'https://via.placeholder.com/100?text=Michael',
      },
      {
        name: 'Sarah Johnson',
        position: 'Marketing Manager',
        photo: 'https://via.placeholder.com/100?text=Sarah',
      },
      {
        name: 'David Lee',
        position: 'Business Analyst',
        photo: 'https://via.placeholder.com/100?text=David',
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
      {
        title: 'Salary Adjustment Letter',
        image: 'https://via.placeholder.com/300x400?text=Salary+Letter',
      },
      {
        title: 'Leave Application Format',
        image: 'https://via.placeholder.com/300x400?text=Leave+Letter',
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
