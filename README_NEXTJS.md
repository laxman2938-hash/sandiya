# Sandiya HRM - Full Stack Next.js Application

A complete Human Resource Management system built with Next.js 15, TypeScript, Tailwind CSS, and Prisma ORM with multilingual support (English & Nepali).

## 📋 Features

- ✅ **Multilingual Support** - English and Nepali
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **SEO Optimized** - Built-in metadata support
- ✅ **Database** - SQLite with Prisma ORM
- ✅ **API Routes** - Built-in Next.js API routes (no separate backend)
- ✅ **Full-Stack** - Frontend and backend in one project
- ✅ **TypeScript** - Full type safety

## 📁 Project Structure

```
sandiyahrm/
├── src/
│   ├── app/
│   │   ├── api/              # API routes (backend)
│   │   │   ├── gallery/
│   │   │   ├── company-info/
│   │   │   ├── team-members/
│   │   │   ├── employment-categories/
│   │   │   ├── jobs/
│   │   │   ├── recruitment-policy/
│   │   │   ├── recruitment-process/
│   │   │   ├── legal-documents/
│   │   │   ├── achievements/
│   │   │   ├── clients/
│   │   │   └── contact/
│   │   ├── [locale]/         # Locale-specific pages
│   │   │   ├── page.tsx      # Home
│   │   │   ├── about/
│   │   │   ├── gallery/
│   │   │   ├── employment-categories/
│   │   │   ├── who-we-are/
│   │   │   ├── quality-compliance/
│   │   │   ├── legal-documents/
│   │   │   ├── achievements/
│   │   │   ├── recruitment/
│   │   │   ├── clients/
│   │   │   └── contact/
│   ├── components/           # React components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── api.ts           # API client
│   │   ├── prisma.ts        # Prisma client
│   │   └── utils.ts         # Utility functions
│   ├── messages/            # i18n translations
│   │   ├── en.json
│   │   └── np.json
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   └── i18n.ts             # i18n configuration
├── prisma/
│   ├── schema.prisma        # Database schema
│   ├── seed.ts              # Database seeders
│   └── dev.db               # SQLite database (generated)
├── .env.local               # Environment variables
├── middleware.ts            # Next.js middleware for i18n
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to project directory**

```bash
cd "sandiyahrm"
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

The `.env.local` file is already configured:

```bash
DATABASE_URL="file:./prisma/dev.db"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

4. **Generate Prisma client**

```bash
npm run db:generate
```

5. **Create database schema**

```bash
npm run db:push
```

6. **Seed sample data**

```bash
npm run db:seed
```

7. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Database Schema

The application includes 11 models:

- **GalleryImage** - Gallery with multilingual titles/descriptions
- **CompanyInfo** - Company mission, vision, values
- **TeamMember** - Team members information
- **EmploymentCategory** - Job categories with benefits
- **JobPosting** - Job listings
- **RecruitmentPolicy** - HR policies
- **RecruitmentProcess** - Recruitment steps
- **LegalDocument** - Legal/compliance documents
- **Achievement** - Company achievements timeline
- **Client** - Client companies
- **ContactMessage** - Contact form submissions

All models support **multilingual content** with separate `_en` and `_np` fields.

## 🛣️ API Endpoints

All endpoints are prefixed with `/api/`

### Gallery

- `GET /api/gallery` - List all gallery images
- `GET /api/gallery/:id` - Get single image

### Company Info

- `GET /api/company-info` - Get company information
- `GET /api/team-members` - Get team members list

### Employment

- `GET /api/employment-categories` - List employment categories
- `GET /api/employment-categories/:id` - Get single category

### Jobs

- `GET /api/jobs` - List active job postings
- `GET /api/jobs/:id` - Get single job

### Recruitment

- `GET /api/recruitment-policy` - Get recruitment policies
- `GET /api/recruitment-process` - Get recruitment process steps

### Legal Documents

- `GET /api/legal-documents` - List legal documents
- `GET /api/legal-documents/:id` - Get single document

### Achievements

- `GET /api/achievements` - List achievements
- `GET /api/achievements/:id` - Get single achievement

### Clients

- `GET /api/clients` - List clients

### Contact

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List all contact messages (admin)

## 📄 Frontend Pages

All pages support English and Nepali translations.

- `/en/` - Home page
- `/en/about` - About us
- `/en/who-we-are` - Company overview
- `/en/gallery` - Image gallery with lightbox
- `/en/employment-categories` - Job categories
- `/en/recruitment` - Recruitment info
- `/en/recruitment/policy` - Recruitment policies
- `/en/recruitment/process` - Recruitment steps
- `/en/legal-documents` - Legal documents
- `/en/achievements` - Achievements timeline
- `/en/clients` - Our clients
- `/en/contact` - Contact form
- `/np/` - Nepali version (same pages)

## 🌐 Multilingual Support

Uses `next-intl` for internationalization:

- **English** - `/en/...`
- **Nepali** - `/np/...`

Switch languages using the language toggle button in the navbar.

### Adding Translations

Edit message files:

- `src/messages/en.json` - English
- `src/messages/np.json` - Nepali

## 🎨 Styling

- **Tailwind CSS** v4 for utility-first styling
- Mobile-first responsive design
- Dark mode support (ready to implement)

## 📦 Database Commands

```bash
# Generate Prisma client
npm run db:generate

# Create/update database schema
npm run db:push

# Create migration
npm run db:migrate

# Seed database with sample data
npm run db:seed

# Open Prisma Studio (GUI)
npm run db:studio
```

## 🔧 Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

The app is Vercel-ready. Just connect your GitHub repository.

## 📝 Environment Variables

```bash
# Database
DATABASE_URL="file:./prisma/dev.db"

# API
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

For production, update `NEXT_PUBLIC_API_URL` to your production domain.

## 🤝 Adding New Features

### Add a New API Endpoint

1. Create new route file: `src/app/api/new-endpoint/route.ts`
2. Implement GET/POST/PUT/DELETE handlers
3. Update `src/lib/api.ts` with the new function

### Add a New Page

1. Create folder: `src/app/[locale]/new-page/`
2. Create `page.tsx` inside
3. Add translations to `src/messages/en.json` and `src/messages/np.json`
4. Update navigation links

### Add Database Model

1. Update `prisma/schema.prisma`
2. Run `npm run db:migrate`
3. Update `src/types/index.ts`
4. Create API routes in `src/app/api/`

## 📞 Contact

For questions or support, contact: info@sandiyahrm.com

## 📄 License

This project is proprietary to Sandiya HR Management.

---

**Happy coding!** 🚀
