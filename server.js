import fastify from "fastify"
import cors from "@fastify/cors"
import agendamento from "./src/routes/agendamento.js"
import confirmacao from "./src/routes/confirmacao.js"
import pagamento from "./src/routes/pagamento.js"

const app = fastify()
const port = 3000

const start = async () => {
  await app.register(cors, { origin: "http://localhost:5173" })
  app.register(agendamento)
  app.register(confirmacao)
  app.register(pagamento)
  try {
    await app.listen({ port })
    console.log(`Server running in: http://localhost:${port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
