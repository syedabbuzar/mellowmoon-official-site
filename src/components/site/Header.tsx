import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown, Search, Globe } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/about", label: "About Us" },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services/agentic-ai", label: "Agentic AI" },
      { to: "/services/web-apps", label: "Web Applications" },
      { to: "/services/mobile-apps", label: "Hybrid Mobile Apps" },
      { to: "/services/custom-software", label: "Custom Software" },
      { to: "/services/crm-inventory", label: "CRM & Inventory" },
      { to: "/services/business-sites", label: "Business Websites" },
    ],
  },
  { to: "/industries", label: "Industries" },
  { to: "/training", label: "Training" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/careers", label: "Careers" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = transparent && !scrolled;
  const variant = overlay ? "light" : "dark";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        overlay
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(0,0,0,0.25)]"
      }`}
    >
      {/* Utility bar — collapses on scroll */}
      <div
        className={`text-cream text-xs overflow-hidden transition-all duration-500 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        } ${overlay ? "bg-black/30 backdrop-blur-sm" : "bg-maroon-dark"}`}
      >
        <div className="container-x flex h-9 items-center justify-end gap-5">
          <a href="tel:+917796442339" className="hidden md:flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3 w-3" /> +91 77964 42339
          </a>
          <a href="mailto:mellowmoonsofttech4u@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail className="h-3 w-3" /> mellowmoonsofttech4u@gmail.com
          </a>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
          <span className="opacity-40">|</span>
          <Link to="/training" className="hover:text-gold transition-colors">Internships</Link>
          <Globe className="h-3.5 w-3.5 opacity-70" />
        </div>
      </div>

      {/* Main bar */}
      <div className="container-x flex items-center justify-between transition-all duration-500" style={{ height: scrolled ? 68 : 88 }}>
        <Link to="/" className="shrink-0">
          <Logo variant={variant} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <Link
                to={item.to}
                className={`relative flex items-center gap-1 px-4 text-sm font-medium tracking-wide transition-colors ${
                  overlay
                    ? "text-cream hover:text-gold"
                    : "text-foreground hover:text-maroon"
                }`}
                style={{ paddingBlock: scrolled ? "22px" : "32px" }}
                activeProps={{ className: overlay ? "text-gold" : "text-maroon" }}
              >
                <span className="relative">
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${overlay ? "bg-gold" : "bg-maroon"}`} />
                </span>
                {item.children && <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute top-full left-0 w-72 bg-card border-t-2 border-gold shadow-2xl py-3">
                  {item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-maroon hover:pl-7 transition-all border-l-2 border-transparent hover:border-gold"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            aria-label="Search"
            className={`h-9 w-9 grid place-items-center rounded-full border transition-colors ${
              overlay
                ? "border-cream/30 text-cream hover:bg-cream/10"
                : "border-border text-foreground hover:bg-secondary hover:text-maroon"
            }`}
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            className={`inline-flex items-center px-5 py-2.5 text-sm font-medium transition-colors ${
              overlay
                ? "bg-gold text-maroon-dark hover:bg-cream"
                : "bg-maroon text-cream hover:bg-maroon-light"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${overlay ? "text-cream" : "text-maroon"}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground hover:text-maroon"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-maroon text-cream px-5 py-2.5 text-sm font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
