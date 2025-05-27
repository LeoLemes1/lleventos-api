import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../services/mail/sendEmail.js";
import { GuestConfirmationTemplate } from "../services/mail/templates/guestConfirmation.js";

const prisma = new PrismaClient();

export default async function (app) {
  app.get("/confirmar/:convidadoId", async (req, res) => {
    const { convidadoId } = req.params;

    const convidado = await prisma.convidado.findUnique({
      where: { id: convidadoId },
      include: {
        agendamento: {
          include: { convidados: true },
        },
      },
    });

    if (!convidado) {
      return res.status(404).send({ error: "Convidado não encontrado" });
    }

    return res.status(200).send({
      status: convidado.status,
      agendamento: convidado.agendamento,
    });
  });

  app.post("/confirmar/:convidadoId", async (req, res) => {
    const { convidadoId } = req.params;

    const convidado = await prisma.convidado.findUnique({
      where: { id: convidadoId },
      include: {
        agendamento: {
          include: { convidados: true },
        },
      },
    });

    if (!convidado) {
      return res.status(404).send({ error: "Convidado não encontrado" });
    }

    if (convidado.status === "CONFIRMADO") {
      return res.status(200).send({
        jaConfirmado: true,
        agendamento: convidado.agendamento,
      });
    }

    const atualizado = await prisma.convidado.update({
      where: { id: convidadoId },
      data: { status: "CONFIRMADO" },
      include: {
        agendamento: {
          include: { convidados: true },
        },
      },
    });

    await sendEmail(
      atualizado.email,
      "Confirmação recebida! ✅",
      GuestConfirmationTemplate.gerar(atualizado)
    );

    return res.status(200).send({
      jaConfirmado: false,
      agendamento: atualizado.agendamento,
    });
  });
}
