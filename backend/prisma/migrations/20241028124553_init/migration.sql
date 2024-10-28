-- CreateEnum
CREATE TYPE "ScrapeStatus" AS ENUM ('InProgress', 'Completed', 'Failed');

-- CreateTable
CREATE TABLE "Scrape" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT,
    "location" TEXT,
    "price" TEXT,
    "pictures" TEXT[],
    "status" "ScrapeStatus" NOT NULL DEFAULT 'InProgress',

    CONSTRAINT "Scrape_pkey" PRIMARY KEY ("id")
);
