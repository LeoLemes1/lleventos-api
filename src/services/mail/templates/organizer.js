export function organizer(organizador, token, link) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f8fafc; border-radius: 12px; color: #1e293b;">
      <h2 style="color: #1e40af;">✅ Agendamento Criado com Sucesso!</h2>
      <h1 style="color: #1d4ed8; margin-top: 0;">Olá ${organizador.nome}</h1>
      <p style="font-size: 16px;">Seu evento foi registrado com sucesso. Aqui está o seu token de acesso:</p>
      <div style="margin: 20px 0; padding: 16px; background-color: #e0e7ff; border-left: 4px solid #1e3a8a; border-radius: 8px;">
        <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1e293b;">${token}</p>
      </div>
      <p style="font-size: 15px;">Use o botão abaixo para visualizar os detalhes do seu evento:</p>
      <div style="margin: 30px 0;">
        <a href="${link}" style="display: inline-block; padding: 12px 24px; background-color: #1e40af; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
          Ver detalhes do evento
        </a>
      </div>
      <p style="margin-top: 40px; font-size: 14px; color: #64748b;">Qualquer dúvida, estamos à disposição. 🎉</p>
    </div>
  `
}