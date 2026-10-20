import { useState } from "react";
import { brand } from "@/mocks/site";

const quickMessages = [
  "Hi Martin, I'm interested in Personal Training.",
  "I want HYROX Coaching \u2014 how do we start?",
  "I'd like to book a Free Consultation.",
  "Tell me about your Online Group Classes.",
  "Can you share your Membership plans?",
  "I'm interested in Nutrition Coaching.",
  "We'd like to discuss Corporate Wellness.",
  "I'm interested in Brand Collaborations with Martin.",
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const phone = brand.whatsapp.replace(/\D/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div className="glass rounded-lg w-[320px] max-w-[85vw] overflow-hidden animate-fade-up">
          <div className="bg-primary-500 text-background-50 dark:text-foreground-950 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-background-50 text-primary-500">
              <i className="ri-whatsapp-line text-xl" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Chat with Martin</p>
              <p className="text-[11px] opacity-80">Usually replies within minutes</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-auto w-7 h-7 flex items-center justify-center rounded-full hover:bg-background-50/20 cursor-pointer"
              aria-label="Close"
            >
              <i className="ri-close-line" />
            </button>
          </div>
          <ul className="max-h-[320px] overflow-y-auto p-2">
            {quickMessages.map((msg) => (
              <li key={msg}>
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-sm text-foreground-800 hover:text-primary-500 hover:bg-background-100 rounded-md transition-colors cursor-pointer"
                >
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white text-2xl cursor-pointer transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
        <i className="ri-whatsapp-line relative z-10" />
      </button>
    </div>
  );
}