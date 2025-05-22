/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `Agendamento` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Made the column `info` on table `Agendamento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tema` on table `Agendamento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo` on table `Agendamento` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "token" TEXT NOT NULL,
ALTER COLUMN "info" SET NOT NULL,
ALTER COLUMN "tema" SET NOT NULL,
ALTER COLUMN "tipo" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Agendamento_token_key" ON "Agendamento"("token");
