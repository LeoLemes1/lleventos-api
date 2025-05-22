-- CreateTable
CREATE TABLE "Agendamento" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horario" TEXT NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Convidado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "agendamentoId" TEXT NOT NULL,

    CONSTRAINT "Convidado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Convidado" ADD CONSTRAINT "Convidado_agendamentoId_fkey" FOREIGN KEY ("agendamentoId") REFERENCES "Agendamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
