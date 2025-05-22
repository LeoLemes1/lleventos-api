export default async function (app) {
    app.post("/pagamento", async (req, res) => {
      const { quantidadeConvidados } = req.body
  
      const valorPorPessoa = 200 
      const total = quantidadeConvidados * valorPorPessoa
  
      res.send({
        status: "aprovado",
        total
      })
    })
  }
  