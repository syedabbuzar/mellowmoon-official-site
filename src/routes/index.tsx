import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2, Smartphone, Database, Globe2, Bot, CheckCircle2, GraduationCap, Building2, Briefcase, Phone, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero.jpg";
import ctaBand from "@/assets/cta-band.jpg";
import training from "@/assets/training.jpg";
import caseRE from "@/assets/case-realestate.jpg";
import caseBeauty from "@/assets/case-beauty.jpg";
import caseEdu from "@/assets/case-education.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MellowMoon SoftTech Pvt Ltd — Engineering Software. Empowering Business." },
      { name: "description", content: "AI-powered software, web & mobile apps, CRM, inventory and business platforms — built by MellowMoon SoftTech Pvt Ltd." },
      { property: "og:title", content: "MellowMoon SoftTech Pvt Ltd" },
      { property: "og:description", content: "Engineering software. Empowering business." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Bot, title: "Agentic AI", desc: "Autonomous AI agents that reason, plan and act inside your workflows.", to: "/services/agentic-ai" },
  { icon: Globe2, title: "Web Applications", desc: "Production-grade web platforms engineered for scale and performance.", to: "/services/web-apps" },
  { icon: Smartphone, title: "Hybrid Mobile Apps", desc: "One codebase. iOS, Android and the web — all natively fast.", to: "/services/mobile-apps" },
  { icon: Code2, title: "Custom Software", desc: "Bespoke business software shaped exactly around your operations.", to: "/services/custom-software" },
  { icon: Database, title: "CRM & Inventory", desc: "Sales, inventory and operations portals that scale with your team.", to: "/services/crm-inventory" },
  { icon: Building2, title: "Business Websites", desc: "Real-estate, education, retail and service websites that convert.", to: "/services/business-sites" },
];

const stats = [
  { v: "120+", l: "Projects delivered" },
  { v: "60+", l: "Happy clients" },
  { v: "300+", l: "Students trained" },
  { v: "12", l: "Industries served" },
];

const cases = [
  { img: caseEdu, tag: "Education", title: "Scholar Educational Campus", desc: "A full institutional website for admissions, programmes and student services." },
  { img: caseBeauty, tag: "Beauty & Wellness", title: "Muskan Beauty Parlour", desc: "Service catalogue, gallery and online bookings for a premium beauty studio." },
  { img: caseRE, tag: "Real Estate", title: "Skyline Developers Portal", desc: "Project listings, floor plans and a lead-capture pipeline for a developer." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative bg-maroon-dark text-cream overflow-hidden">
        <img src={hero} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon-dark/85 to-transparent" />
        <div className="container-x relative py-28 md:py-40 max-w-6xl">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">MellowMoon SoftTech Pvt Ltd</div>
          <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.02] max-w-4xl">
            Engineering software.<br />
            <span className="text-gradient-gold">Empowering business.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-cream/85 leading-relaxed">
            We build AI-powered software, web and mobile platforms, and business systems
            that turn ambitious ideas into shipped products — and we train the engineers
            who'll build the next generation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-maroon-dark px-7 py-3.5 font-medium hover:bg-cream transition-colors">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-cream/30 text-cream px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-cream border-b border-border">
        <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center md:text-left md:border-l md:first:border-0 md:pl-6">
              <div className="font-display text-4xl md:text-5xl font-medium text-maroon">{s.v}</div>
              <div className="text-xs mt-1 uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="container-x py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-maroon font-medium">About MellowMoon</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            A software house where craft meets corporate discipline.
          </h2>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>
            MellowMoon SoftTech Pvt Ltd is a full-stack technology partner for businesses that
            want serious engineering without enterprise bloat. From agentic AI to CRMs, hybrid
            mobile apps to fully bespoke platforms, we ship work that holds up in production.
          </p>
          <p>
            Alongside our client work we train BCA, MCA, Diploma and Engineering students
            through structured internships — the same engineers who go on to build with us.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-maroon font-medium hover:text-maroon-light">
            More about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary/40 py-20 md:py-28 border-y border-border">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-maroon font-medium">What we do</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">Services</h2>
            </div>
            <Link to="/services" className="text-sm text-maroon hover:text-maroon-light inline-flex items-center gap-2">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="group bg-card p-8 hover:bg-maroon hover:text-cream transition-colors">
                <s.icon className="h-8 w-8 text-maroon group-hover:text-gold transition-colors" />
                <h3 className="mt-5 font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-cream/80 leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maroon group-hover:text-gold">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={training} alt="Training and internships" width={1600} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div className="absolute -bottom-6 -right-6 bg-gold text-maroon-dark p-6 hidden md:block">
            <div className="font-display text-3xl font-medium">300+</div>
            <div className="text-xs uppercase tracking-wider mt-1">Students trained</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-maroon font-medium flex items-center gap-2">
            <GraduationCap className="h-4 w-4" /> Training & Internship
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
            Real engineering experience for BCA, MCA, Diploma & Engineering students.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our internship and training programme puts students inside live client projects —
            full-stack web, mobile, AI and DevOps — with mentorship from senior engineers.
            Graduates leave with a real portfolio, not a certificate of attendance.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["Full-stack web", "Hybrid mobile", "AI & automation", "Cloud & DevOps", "UI/UX foundations", "Live client work"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-maroon" />{t}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/training" className="inline-flex items-center gap-2 bg-maroon text-cream px-6 py-3 font-medium hover:bg-maroon-light transition-colors">
              Apply for internship <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-cream py-20 md:py-28 border-y border-border">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-maroon font-medium">Selected work</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium">Featured projects</h2>
            </div>
            <Link to="/portfolio" className="text-sm text-maroon hover:text-maroon-light inline-flex items-center gap-2">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <article key={c.title} className="group bg-card border border-border overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} width={1200} height={800} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-semibold">{c.tag}</div>
                  <h3 className="mt-2 font-display text-2xl font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-maroon font-medium">Why MellowMoon</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
              Engineered for outcomes, not just deliverables.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { i: Sparkles, t: "Custom by default", d: "Every build is shaped around your business, not a template." },
              { i: CheckCircle2, t: "100% satisfaction", d: "We iterate until you're genuinely happy with what we ship." },
              { i: Code2, t: "Fully responsive", d: "Polished experiences across mobile, tablet and desktop." },
              { i: Briefcase, t: "Post-launch support", d: "We stay with you after go-live — maintenance, monitoring, growth." },
            ].map((f) => (
              <div key={f.t}>
                <f.i className="h-6 w-6 text-maroon" />
                <h3 className="mt-3 font-display text-xl">{f.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative text-cream overflow-hidden">
        <img src={ctaBand} alt="" width={1920} height={600} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-maroon-dark/80" />
        <div className="container-x py-20 relative grid md:grid-cols-[2fr_1fr] gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight max-w-2xl">
              Have a product to build, an idea to validate, or a team to train?
            </h2>
            <p className="mt-4 text-cream/80 max-w-xl">
              Tell us what you're trying to ship. We'll come back with a plan, a timeline and a number.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-maroon-dark px-7 py-3.5 font-medium hover:bg-cream transition-colors">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+910000000000" className="inline-flex items-center justify-center gap-2 border border-cream/30 px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors">
              <Phone className="h-4 w-4" /> +91 00000 00000
            </a>
            <a href="mailto:hello@mellowmoon.tech" className="inline-flex items-center justify-center gap-2 border border-cream/30 px-7 py-3.5 font-medium hover:bg-cream/10 transition-colors">
              <Mail className="h-4 w-4" /> hello@mellowmoon.tech
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
