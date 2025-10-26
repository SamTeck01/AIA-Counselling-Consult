// WhatsApp utility function
// Replace with your actual WhatsApp numbers (include country code without + or spaces)

// WhatsApp number for booking sessions (Book Today, Book Session, Let's Talk)
const BOOKING_WHATSAPP_NUMBER = "2348034067608"; // Replace with counselor's booking number

// WhatsApp number for general contact/inquiries (Contact Us, General Inquiry)
const CONTACT_WHATSAPP_NUMBER = "2348087654321"; // Replace with contact person's number

export const openWhatsApp = (message: string, useContactNumber: boolean = false) => {
  const phoneNumber = useContactNumber ? CONTACT_WHATSAPP_NUMBER : BOOKING_WHATSAPP_NUMBER;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

// Pre-defined messages for different actions
export const WHATSAPP_MESSAGES = {
  // Booking-related messages (goes to BOOKING_WHATSAPP_NUMBER)
  BOOK_SESSION: "Hi! I would like to book a counselling session. Could you please provide me with available time slots?",
  BOOK_TODAY: "Hello! I'm interested in booking a session today. What are your available times?",
  LETS_TALK: "Hello! I'd like to discuss your counselling services.",
  
  // Contact/Inquiry messages (goes to CONTACT_WHATSAPP_NUMBER)
  CONTACT_US: "Hi! I have some questions about your counselling services. Could you help me?",
  GENERAL_INQUIRY: "Hi! I would like to know more about AIA Counselling Consult services.",
};
