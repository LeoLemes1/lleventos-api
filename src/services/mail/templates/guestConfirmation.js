export class GuestConfirmationTemplate {
  static gerar(convidado) {
    return `
      <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #ecfdf5; border-radius: 12px; color: #065f46;">
        <h1 style="color: #047857;">✅ Presença confirmada!</h1>
        <p style="font-size: 16px;">Obrigado por confirmar, <strong>${convidado.nome || "convidado"}</strong>.</p>
        <p style="font-size: 15px;">Nos vemos em breve no evento <strong>${convidado.agendamento.tema}</strong>.</p>
        <p style="margin-top: 40px; font-size: 14px; color: #4b5563;">Em caso de dúvidas, fale com o organizador: ${convidado.agendamento.organizadorEmail}</p>
      </div>
    `;
  }
}
