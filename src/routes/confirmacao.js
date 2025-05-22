import { PrismaClient } from "@prisma/client"
import { sendEmail } from "../services/mail/sendEmail.js"
import { EmailTemplate } from "../services/mail/templates/welcome.js"

const prisma = new PrismaClient()

export default async function (app) {
  app.get("/confirmar/:convidadoId", async (req, res) => {
    const { convidadoId } = req.params
    const convidado = await prisma.convidado.update({
      where: { id: convidadoId },
      data: { status: "CONFIRMADO" },
      include: {
        agendamento: { include: { convidados: true } }
      }
    })
    
    await sendEmail(
      convidado.email,
      "Confirmação recebida! ✅",
      EmailTemplate.confirmacao(convidado)
    )

    res.send(convidado.agendamento)
  })
}
