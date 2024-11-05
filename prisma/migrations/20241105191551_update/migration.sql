/*
  Warnings:

  - You are about to drop the `BlockList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BlockList";

-- CreateTable
CREATE TABLE "IpBlockList" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "reason" TEXT,

    CONSTRAINT "IpBlockList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryWhitelist" (
    "id" SERIAL NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,

    CONSTRAINT "CountryWhitelist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IpBlockList_ip_key" ON "IpBlockList"("ip");

-- CreateIndex
CREATE UNIQUE INDEX "CountryWhitelist_countryCode_key" ON "CountryWhitelist"("countryCode");
