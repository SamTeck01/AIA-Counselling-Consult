import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp, WHATSAPP_MESSAGES } from "@/utils/whatsapp";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+234 803 406 7608", "+234 808 765 4321"],
    action: "Call us during business hours",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["ibcounsellor@yahoo.com"],
    action: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office Locations",
    details: [
      "No 1, Olagoke Close, Wakajaye, Ibadan",
      "No 12, Shabra Estate, Trademore Road, Lugbe, Abuja"
    ],
    action: "Available for in-person sessions",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
    action: "Online sessions available 24/7",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-[#F5F8FC] relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
      />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-7 mb-8">
          <div className="h-[1.2px] bg-primary w-[50px]" />
          <span className="text-sm text-primary tracking-wider uppercase">
            Get In Touch
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Header & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-[52px] leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
                fontWeight: 400,
              }}
            >
              We're here to help you on your journey
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Reach out to us through any of the channels below. Whether you prefer a
              call, email, or WhatsApp message, we're ready to listen and support you.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => openWhatsApp(WHATSAPP_MESSAGES.BOOK_SESSION)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Book via WhatsApp
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+2348034067608'}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Call Now
              </Button>
            </div>

            {/* Pricing Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border border-primary/10"
            >
              <h3 className="text-lg font-medium mb-2">Session Pricing</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our counselling sessions are affordable and tailored to your needs.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light text-primary">₦15,000</span>
                <span className="text-muted-foreground">- ₦25,000</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Starting price per session. Final cost depends on session type and duration.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-primary font-semibold">{info.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground">
            <strong>Note:</strong> All consultations are strictly confidential. We offer both
            online and in-person sessions to accommodate your preferences and schedule.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
