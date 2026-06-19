import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-maroon-dark text-cream/90 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="bg-cream rounded-sm p-3 inline-block">
            <Logo />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/70 max-w-sm">
            MellowMoon SoftTech Pvt Ltd builds AI-powered software, web & mobile applications,
            and business platforms that turn ambitious ideas into shipped products.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center border border-cream/20 hover:bg-gold hover:text-maroon-dark hover:border-gold transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/services/agentic-ai" className="hover:text-gold">Agentic AI</Link></li>
            <li><Link to="/services/web-apps" className="hover:text-gold">Web Applications</Link></li>
            <li><Link to="/services/mobile-apps" className="hover:text-gold">Hybrid Mobile Apps</Link></li>
            <li><Link to="/services/custom-software" className="hover:text-gold">Custom Software</Link></li>
            <li><Link to="/services/crm-inventory" className="hover:text-gold">CRM & Inventory</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
            <li><Link to="/training" className="hover:text-gold">Training & Internship</Link></li>
            <li><Link to="/careers" className="hover:text-gold">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> India</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> +91 00000 00000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> hello@mellowmoon.tech</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} MellowMoon SoftTech Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
