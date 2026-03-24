/**
 * Mock Email Service Configuration
 * Em um ambiente real, este arquivo conteria a configuração oficial do Resend.
 * ex: import { Resend } from 'resend';
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function sendOrderConfirmationEmail(userEmail: string, orderId: string, total: number) {
  console.log(`[EMAIL SERVICE] Preparando para enviar e-mail de Confirmação para ${userEmail}`);
  console.log(`[EMAIL SERVICE] Pedido: ${orderId} | Total: R$ ${total}`);
  
  if (!RESEND_API_KEY) {
    console.warn("[EMAIL SERVICE] RESEND_API_KEY não está definida. Simulando sucesso do envio na Vercel Console.");
    return { success: true, simulated: true };
  }

  // Lógica do Resend caso a chave estivesse configurada
  /*
  const resend = new Resend(RESEND_API_KEY);
  try {
    const data = await resend.emails.send({
      from: 'Antigravity Shop <pedidos@antigravity.shop>',
      to: [userEmail],
      subject: `Pedido Confirmado #${orderId}`,
      html: `<strong>Obrigado pela sua compra! O seu pedido já está sendo processado. Acompanhe pelo link de rastreamento.</strong>`,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
  */
}

export async function sendOrderUpdateEmail(userEmail: string, orderId: string, status: string) {
  console.log(`[EMAIL SERVICE] Status Update - Enviando para ${userEmail}: Pedido ${orderId} atualizou para ${status}`);
  return { success: true, simulated: true };
}
