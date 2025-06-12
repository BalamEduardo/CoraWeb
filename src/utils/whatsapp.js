export const openWhatsApp = (message = 'Hola! Me interesa conocer más sobre sus servicios de diseño web.') => {
  const phoneNumber = '+52XXXXXXXXXX' // Actualizar con tu número
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

export const getWhatsAppUrl = (message) => {
  const phoneNumber = '+52XXXXXXXXXX' // Actualizar con tu número
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
}