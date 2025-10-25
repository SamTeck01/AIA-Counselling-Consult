// WhatsApp utility function
// Replace with your actual WhatsApp number (include country code without + or spaces)
const WHATSAPP_NUMBER = "2348136567766"; // Replace with actual number

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

// Pre-defined messages for different actions
export const WHATSAPP_MESSAGES = {
  BOOK_SESSION: "Hi! I would like to book a counselling session. Could you please provide me with available time slots?",
  BOOK_TODAY: "Hello! I'm interested in booking a session today. What are your available times?",
  CONTACT_US: "Hi! I have some questions about your counselling services. Could you help me?",
  LETS_TALK: "Hello! I'd like to discuss your counselling services.",
  GENERAL_INQUIRY: "Hi! I would like to know more about AIA Counselling Consult services.",
};
