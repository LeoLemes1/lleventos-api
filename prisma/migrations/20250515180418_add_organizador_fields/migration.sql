/*
  Warnings:

  - Added the required column `nome` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizadorEmail` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "organizadorEmail" TEXT NOT NULL;
