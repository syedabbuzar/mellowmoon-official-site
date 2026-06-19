import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/about", label: "About" },
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
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-maroon-dark text-cream text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+910000000000" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3 w-3" /> +91 00000 00000
            </a>
            <a href="mailto:hello@mellowmoon.tech" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="h-3 w-3" /> hello@mellowmoon.tech
            </a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Link to="/training" className="hover:text-gold transition-colors">Internship Program</Link>
            <Link to="/careers" className="hover:text-gold transition-colors">Careers</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-background/95 backdrop-blur border-b border-border">
        <div className="container-x flex h-20 items-center justify-between">
          <Link to="/"><Logo /></Link>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-maroon transition-colors py-7"
                  activeProps={{ className: "text-maroon" }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute top-full left-0 w-64 bg-card border border-border shadow-xl rounded-sm py-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-maroon transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center bg-maroon text-cream px-5 py-2.5 text-sm font-medium hover:bg-maroon-light transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-maroon" aria-label="Menu">
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
      </div>
    </header>
  );
}
