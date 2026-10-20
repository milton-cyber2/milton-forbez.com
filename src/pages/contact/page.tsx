import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import ContactForm from "./components/ContactForm";
import { brand } from "@/mocks/site";

const hours = [
  { d: "Monday – Sunday", h: "06:00 – 00:00" },
];

const faqs = [
  {
    q: "How quickly will you respond to my message?",
    a: "Martin typically replies within 24 hours, and usually much faster on WhatsApp. For the quickest response, message directly on WhatsApp.",
  },
  {
    q: "Do you coach clients outside Dubai?",
    a: "Yes. Online coaching and HYROX programming are available worldwide, while in-person personal training is based around Dubai Silicon Oasis.",
  },
  {
    q: "Is the first consultation really free?",
    a: "Yes. The 20-minute consultation is completely free and obligation-free. You'll get honest advice on how to reach your goals whether you train with Martin or not.",
  },
];

export default function Contact() {
  const phone = brand.whatsapp.replace(/\D/g, "");
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative container-x pt-36 pb-14 md:pt-48 md:pb-20 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            Get In Touch
          </span>
          <h1 className="mt-4 font-heading uppercase text-foreground-950 text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance max-w-3xl mx-auto">
            Let's start your transformation.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-foreground-700 leading-relaxed">
            Based in Dubai Silicon Oasis, Martin coaches clients in Dubai and worldwide. Reach out for personal training, HYROX preparation, or to book a free consultation.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-background-50">
        <div className="container-x pb-16 md:pb-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi Martin, I'd like to get in touch.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-background-100 border border-background-200/70 p-7 hover:border-primary-500 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 mb-5">
                <i className="ri-whatsapp-line text-2xl" />
              </div>
              <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                WhatsApp
              </h3>
              <p className="mt-2 text-sm text-foreground-600">{brand.whatsappDisplay}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary-500">
                Message now <i className="ri-arrow-right-line" />
              </span>
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="group rounded-lg bg-background-100 border border-background-200/70 p-7 hover:border-primary-500 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 mb-5">
                <i className="ri-mail-line text-2xl" />
              </div>
              <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                Email
              </h3>
              <p className="mt-2 text-sm text-foreground-600 break-all">{brand.email}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary-500">
                Send an email <i className="ri-arrow-right-line" />
              </span>
            </a>
            <div className="rounded-lg bg-background-100 border border-background-200/70 p-7">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 mb-5">
                <i className="ri-map-pin-2-line text-2xl" />
              </div>
              <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                Location
              </h3>
              <p className="mt-2 text-sm text-foreground-600">Dubai Silicon Oasis, Dubai, UAE</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-foreground-500">
                In-person & online coaching
              </span>
            </div>
            <Link
              to="/book"
              className="group rounded-lg bg-primary-500 hover:bg-primary-600 p-7 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-background-50 text-primary-500 mb-5">
                <i className="ri-calendar-check-line text-2xl" />
              </div>
              <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                Free Consultation
              </h3>
              <p className="mt-2 text-sm text-foreground-700">Book your free 20-minute call</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-foreground-900">
                Book now <i className="ri-arrow-right-line" />
              </span>
            </Link>
          </div>

          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden mt-4 rounded-lg bg-foreground-950 p-7 md:p-9 flex flex-col sm:flex-row sm:items-center gap-6 cursor-pointer"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-accent-500/15 blur-3xl pointer-events-none" />
            <div className="relative w-14 h-14 flex items-center justify-center rounded-md bg-accent-500/15 text-accent-400 shrink-0">
              <i className="ri-instagram-line text-3xl" />
            </div>
            <div className="relative flex-1">
              <h3 className="font-heading uppercase text-background-50 text-lg tracking-wide">
                Follow on Instagram
              </h3>
              <p className="mt-1 text-sm text-foreground-300 leading-relaxed">
                Daily training, HYROX prep, nutrition and behind-the-scenes — see it all on {brand.instagramHandle}.
              </p>
            </div>
            <span className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent-500 hover:bg-accent-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap transition-colors shrink-0">
              <i className="ri-instagram-line text-lg" />
              {brand.instagramHandle}
            </span>
          </a>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-background-100 border-y border-background-200/60">
        <div className="container-x py-16 md:py-24 grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              Send a Message
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight">
              Tell me about your goals
            </h2>
            <p className="mt-4 text-foreground-700 leading-relaxed max-w-md">
              Fill out the form and Martin will get back to you within 24 hours. For anything urgent, WhatsApp is fastest.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg overflow-hidden border border-background-200/70 h-[320px] md:h-[380px]">
              <iframe
                title="Martin Sei - Dubai Silicon Oasis location"
                src="https://www.google.com/maps?q=Dubai%20Silicon%20Oasis%2C%20Dubai%2C%20United%20Arab%20Emirates&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="rounded-lg bg-background-50 border border-background-200/70 p-7">
              <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide mb-4">
                Business Hours
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {hours.map((h) => (
                  <li key={h.d} className="flex items-center justify-between">
                    <span className="text-foreground-600">{h.d}</span>
                    <span className="text-foreground-900 font-medium">{h.h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-background-200/70 flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center mt-0.5 text-accent-500 shrink-0">
                  <i className="ri-alert-line" />
                </span>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  For medical emergencies, always contact emergency services or your doctor first. Fitness coaching is not a substitute for medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-50">
        <div className="container-x py-16 md:py-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              Quick Answers
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight">
              Before you reach out
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-lg bg-background-100 border border-background-200/70 p-6">
                <h3 className="font-medium text-foreground-900">{f.q}</h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}