/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `SmeHealthcheck` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SmeHealthcheck_phone_key" ON "SmeHealthcheck"("phone");
