/*
  Warnings:

  - You are about to drop the column `email` on the `Agendamento` table. All the data in the column will be lost.
  - Added the required column `email` to the `Convidado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "Convidado" ADD COLUMN     "email" TEXT NOT NULL;
