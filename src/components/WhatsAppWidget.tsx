"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/utils/whatsapp";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: "Book a Session",
      message: WHATSAPP_MESSAGES.BOOK_SESSION,
      icon: "📅",
    },
    {
      title: "General Inquiry",
      message: WHATSAPP_MESSAGES.GENERAL_INQUIRY,
      icon: "💬",
    },
    {
      title: "Emergency Support",
      message: "Hi! I need urgent counselling support. Can you help me?",
      icon: "🆘",
    },
  ];

  const handleQuickMessage = (message: string) => {
    openWhatsApp(message);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Open WhatsApp Chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
          />
        )}
      </motion.div>

      {/* Chat Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Chat with us</h3>
                  <p className="text-xs text-white/80">We typically reply instantly</p>
                </div>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground mb-3">
                Choose a quick message to start:
              </p>
              {quickMessages.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleQuickMessage(item.message)}
                  className="w-full text-left p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        {item.title}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.button>
              ))}

              {/* Custom Message Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  openWhatsApp("Hi! I'd like to talk to someone.");
                  setIsOpen(false);
                }}
                className="w-full p-3 rounded-2xl bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Send Custom Message
              </motion.button>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-xs text-center text-muted-foreground">
                Available Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
