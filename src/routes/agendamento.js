import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { sendEmail } from "../services/mail/sendEmail.js";
import { EmailTemplate } from "../services/mail/templates/welcome.js";
import { organizer } from "../services/mail/templates/organizer.js";

const prisma = new PrismaClient();

export default async function (app) {
  app.get("/agendamento/:token", async (req, res) => {
    const { token } = req.params;

    const agendamento = await prisma.agendamento.findUnique({
      where: { token },
      include: { convidados: true },
    });

    if (!agendamento) {
      return res.status(404).send({ error: "Agendamento não encontrado" });
    }

    res.send(agendamento);
  });

  app.post("/agendamento", async (req, res) => {
    const {
      nome,
      organizadorEmail,
      data,
      horario,
      tipo,
      info,
      tema,
      convidados,
    } = req.body;
    const token = randomUUID();

    const agendamento = await prisma.agendamento.create({
      data: {
        nome,
        organizadorEmail,
        data: new Date(data),
        horario,
        tipo,
        info,
        tema,
        token,
        convidados: {
          create: convidados.map((c) => ({
            nome: c.nome || "",
            email: c.email,
          })),
        },
      },
      include: { convidados: true },
    });

    res.send({ token });

    const linkDetalhes = `http://localhost:5173/agendamento?protocolo=${token}`;
    sendEmail(
      organizadorEmail,
      "Seu agendamento foi criado! 🎉",
      organizer({ nome }, token, linkDetalhes)
    );
    agendamento.convidados.forEach((c) => {
      const linkConfirmacao = `http://localhost:5173/confirmar/${c.id}`;

      sendEmail(
        c.email,
        `🎉 Você está convidado para ${tema}!`,
        EmailTemplate.convite(c, tema, linkConfirmacao, info)
      );
    });
  });
}
