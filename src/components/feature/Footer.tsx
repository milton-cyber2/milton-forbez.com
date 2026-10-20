import { Link } from "react-router-dom";
import { brand, navLinks } from "@/mocks/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background-100 border-t border-background-200/60 text-foreground-700">
      <div className="container-x py-16 md:py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-500 text-background-50 font-heading font-bold text-lg tracking-widest">
              MS
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-foreground-950 text-lg tracking-widest uppercase">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground-500">
                Elite Coach · Dubai
              </span>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-foreground-600 max-w-sm">
            Personalized coaching, live online group classes, functional training, nutrition guidance, and HYROX preparation designed for lasting results.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300/60 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
            >
              <i className="ri-whatsapp-line" />
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300/60 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
            >
              <i className="ri-instagram-line" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300/60 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
            >
              <i className="ri-tiktok-line" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300/60 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
            >
              <i className="ri-youtube-line" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-foreground-950 uppercase tracking-widest text-sm mb-5">
            Explore
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks.slice(0, 7).map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="hover:text-primary-500 transition-colors cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/brand-collaborations#modelling"
                className="hover:text-primary-500 transition-colors cursor-pointer"
              >
                Modelling
              </Link>
            </li>
            <li>
              <Link
                to="/brand-collaborations"
                className="hover:text-primary-500 transition-colors cursor-pointer"
              >
                Brand Collaborations
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary-500 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-foreground-950 uppercase tracking-widest text-sm mb-5">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks[2]?.children?.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  className="hover:text-primary-500 transition-colors cursor-pointer"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-foreground-950 uppercase tracking-widest text-sm mb-5">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 flex items-center justify-center mt-0.5 text-primary-500">
                <i className="ri-map-pin-2-line" />
              </span>
              <span>{brand.location}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 flex items-center justify-center mt-0.5 text-primary-500">
                <i className="ri-whatsapp-line" />
              </span>
              <a
                href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 whitespace-nowrap cursor-pointer"
              >
                {brand.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 flex items-center justify-center mt-0.5 text-primary-500">
                <i className="ri-mail-line" />
              </span>
              <a
                href={`mailto:${brand.email}`}
                className="hover:text-primary-500 break-all cursor-pointer"
              >
                {brand.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 flex items-center justify-center mt-0.5 text-primary-500">
                <i className="ri-instagram-line" />
              </span>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 whitespace-nowrap cursor-pointer"
              >
                {brand.instagramHandle}
              </a>
            </li>
          </ul>
          <Link
            to="/book"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors"
          >
            Book Free Consultation
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>

      <div className="border-t border-background-200/60">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-foreground-500">
          <p>© {year} Martin Sei Coaching. Crafted in Dubai.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-primary-500 cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-500 cursor-pointer">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}