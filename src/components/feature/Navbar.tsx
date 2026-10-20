import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { brand, navLinks } from "@/mocks/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background-50/85 backdrop-blur-xl border-b border-background-200/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="container-x flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-500 text-background-50 font-heading font-bold text-lg tracking-widest">
            MS
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading text-foreground-950 text-lg tracking-widest uppercase">
              {brand.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground-500">
              Elite Coach · Dubai
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-foreground-700 hover:text-foreground-950 transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer"
                >
                  {link.label}
                  <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center" />
                </button>
                <div
                  className={[
                    "absolute top-full left-0 pt-2 min-w-[240px] transition-all duration-200",
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none",
                  ].join(" ")}
                >
                  <div className="glass rounded-lg p-2">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block px-3 py-2 text-sm text-foreground-700 hover:text-primary-500 hover:bg-background-100 rounded-md transition-colors cursor-pointer"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    [
                      "px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer",
                      isActive
                        ? "text-primary-500"
                        : "text-foreground-700 hover:text-foreground-950",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-background-300/60 text-foreground-700 hover:text-primary-500 hover:border-primary-500 transition-colors cursor-pointer"
            aria-label="WhatsApp Martin"
          >
            <i className="ri-whatsapp-line text-lg" />
          </a>
          <Link
            to="/book"
            className="px-5 py-2.5 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors cursor-pointer"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground-950 cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <i className={`text-2xl ${mobileOpen ? "ri-close-line" : "ri-menu-line"}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-all duration-500",
          mobileOpen ? "max-h-[80vh]" : "max-h-0",
        ].join(" ")}
      >
        <div className="container-x pb-6 pt-2 bg-background-50/95 backdrop-blur-xl border-t border-background-200/60">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-3 text-sm text-foreground-800 cursor-pointer list-none">
                      <span>{link.label}</span>
                      <i className="ri-arrow-down-s-line group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 flex flex-col">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className="px-3 py-2 text-sm text-foreground-600 hover:text-primary-500"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </details>
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      [
                        "block px-3 py-3 text-sm",
                        isActive ? "text-primary-500" : "text-foreground-800",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
          <Link
            to="/book"
            className="mt-4 flex items-center justify-center w-full px-5 py-3 rounded-md bg-primary-500 text-background-50 dark:text-foreground-950 text-sm font-semibold whitespace-nowrap cursor-pointer"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}