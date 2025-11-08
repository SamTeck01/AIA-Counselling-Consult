"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { openWhatsApp } from "@/utils/whatsapp";
import { Calendar, MapPin, Video } from "lucide-react";

interface BookingFormProps {
  serviceName: string;
}

export default function BookingForm({ serviceName }: BookingFormProps) {
  const [sessionType, setSessionType] = useState<string>("");

  const handleBooking = () => {
    if (!sessionType) {
      alert("Please select a session type");
      return;
    }

    const sessionTypeText = sessionType === "online" ? "Online Session" : "Physical Session";
    const message = `Hi! I would like to book an appointment for ${serviceName}.

Session Type: ${sessionTypeText}

Could you please provide me with available time slots?`;

    openWhatsApp(message);
  };

  return (
    <div className="bg-[#FDF9F7] rounded-3xl p-8 border border-primary/10">
      <h3
        className="text-2xl md:text-3xl mb-6"
        style={{
          fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
          fontWeight: 400,
        }}
      >
        Book an Appointment
      </h3>

      <div className="space-y-6">
        {/* Session Type Selection */}
        <div className="space-y-3">
          <Label htmlFor="session-type" className="text-base font-medium">
            Select Session Type
          </Label>
          <Select value={sessionType} onValueChange={setSessionType}>
            <SelectTrigger id="session-type" className="w-full h-12">
              <SelectValue placeholder="Choose your preferred session type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="online">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  <span>Online Session</span>
                </div>
              </SelectItem>
              <SelectItem value="physical">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Session (In-Person)</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Session Type Info */}
        {sessionType && (
          <div className="bg-white rounded-xl p-4 border border-primary/10">
            {sessionType === "online" ? (
              <div className="flex gap-3">
                <Video className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-1">Online Session</p>
                  <p className="text-xs text-muted-foreground">
                    Connect with your therapist from the comfort of your home via video call.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-1">Physical Session</p>
                  <p className="text-xs text-muted-foreground">
                    Meet your therapist in person at our office location.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Book Button */}
        <Button
          onClick={handleBooking}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-white h-12"
          disabled={!sessionType}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment via WhatsApp
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          You'll be redirected to WhatsApp to confirm your appointment details
        </p>
      </div>
    </div>
  );
}
