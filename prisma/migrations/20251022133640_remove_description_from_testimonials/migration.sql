/*
  Warnings:

  - You are about to drop the `testimonials` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "team_members" ALTER COLUMN "designation" DROP NOT NULL;

-- DropTable
DROP TABLE "public"."testimonials";
