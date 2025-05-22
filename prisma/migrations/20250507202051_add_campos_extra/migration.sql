/*
  Warnings:

  - Added the required column `email` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "email" TEXT NOT NULL;
