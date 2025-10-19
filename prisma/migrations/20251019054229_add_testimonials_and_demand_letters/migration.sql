-- CreateTable
CREATE TABLE "gallery_images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleEn" TEXT NOT NULL,
    "titleNp" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionNp" TEXT,
    "url" TEXT NOT NULL,
    "altTextEn" TEXT NOT NULL,
    "altTextNp" TEXT NOT NULL,
    "category" TEXT,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "company_info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "missionEn" TEXT NOT NULL,
    "missionNp" TEXT NOT NULL,
    "visionEn" TEXT NOT NULL,
    "visionNp" TEXT NOT NULL,
    "valuesEn" TEXT NOT NULL,
    "valuesNp" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionNp" TEXT,
    "founded" INTEGER NOT NULL DEFAULT 2015,
    "employees" INTEGER NOT NULL DEFAULT 50,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "team_members" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "designationEn" TEXT NOT NULL,
    "designationNp" TEXT NOT NULL,
    "bioEn" TEXT NOT NULL,
    "bioNp" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "employment_categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleEn" TEXT NOT NULL,
    "titleNp" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionNp" TEXT NOT NULL,
    "icon" TEXT,
    "salaryRange" TEXT,
    "benefitsEn" TEXT NOT NULL,
    "benefitsNp" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "job_postings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleEn" TEXT NOT NULL,
    "titleNp" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionNp" TEXT NOT NULL,
    "requirementsEn" TEXT NOT NULL,
    "requirementsNp" TEXT NOT NULL,
    "responsibilitiesEn" TEXT NOT NULL,
    "responsibilitiesNp" TEXT NOT NULL,
    "salaryRange" TEXT,
    "locationEn" TEXT NOT NULL,
    "locationNp" TEXT NOT NULL,
    "category" TEXT,
    "postedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline" DATETIME NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "recruitment_policies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleEn" TEXT NOT NULL,
    "titleNp" TEXT NOT NULL,
    "contentEn" TEXT NOT NULL,
    "contentNp" TEXT NOT NULL,
    "icon" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "recruitment_processes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "step" INTEGER NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleNp" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionNp" TEXT NOT NULL,
    "icon" TEXT
);

-- CreateTable
CREATE TABLE "legal_documents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleEn" TEXT NOT NULL,
    "titleNp" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionNp" TEXT,
    "fileUrl" TEXT NOT NULL,
    "uploadedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "achievements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleEn" TEXT NOT NULL,
    "titleNp" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "descriptionNp" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "icon" TEXT
);

-- CreateTable
CREATE TABLE "clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionNp" TEXT,
    "website" TEXT,
    "since" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "contact_messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending'
);

-- CreateTable
CREATE TABLE "testimonials" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT,
    "photo" TEXT,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "demand_letters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "company" TEXT,
    "position" TEXT,
    "country" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
