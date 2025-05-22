export class EmailTemplate {
  static convite(convidado, tema, link, info) {
    return `
      <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f8fafc; border-radius: 12px; color: #1e293b;">
        <h2 style="color: #1e40af;">🎊 Você foi convidado para:</h2>
        <h1 style="color: #1d4ed8; margin-top: 0;">${tema}</h1>
        <p style="font-size: 16px;">Olá <strong>${convidado.nome}</strong>,</p>
        <p style="font-size: 15px;">Você está na lista de convidados para um momento especial 💫. Clique no botão abaixo para confirmar sua presença:</p>
        <div style="margin: 30px 0;">
          <a href="${link}" style="display: inline-block; padding: 12px 24px; background-color: #1e40af; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Confirmar presença
          </a>
        </div>
        <div style="margin-top: 30px; padding: 16px; background-color: #e0e7ff; border-left: 4px solid #1e3a8a; border-radius: 8px;">
          <p style="margin: 0; font-style: italic; color: #1e293b;">💬 Mensagem do anfitrião:</p>
          <p style="margin: 4px 0 0 0;"><strong>${info}</strong></p>
        </div>
        <p style="margin-top: 40px; font-size: 14px; color: #64748b;">Aguardamos você com carinho. 💙</p>
      </div>
    `
  }
}
