import { useEffect, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Slide = {
  img: string;
  eyebrow: string;
  title: string;
  accent: string;
  desc: string;
  cta: { label: string; to: string };
};

const slides: Slide[] = [
  {
    img: hero1,
    eyebrow: "MellowMoon SoftTech Pvt Ltd",
    title: "Engineering Software.",
    accent: "Empowering Business.",
    desc: "AI-powered software, web and mobile platforms, and business systems engineered for outcomes.",
    cta: { label: "Explore Services", to: "/services" },
  },
  {
    img: hero2,
    eyebrow: "Agentic AI",
    title: "Intelligence that ships.",
    accent: "Agents that act.",
    desc: "Autonomous AI agents that reason, plan and execute inside your real workflows — not demos.",
    cta: { label: "Discover AI", to: "/services/agentic-ai" },
  },
  {
    img: hero3,
    eyebrow: "Training & Internships",
    title: "Building the next generation",
    accent: "of engineers.",
    desc: "Live client projects, senior mentorship and a real portfolio for BCA, MCA, Diploma and Engineering students.",
    cta: { label: "Apply for Internship", to: "/training" },
  },
];

export function HeroCarousel() {
  const [idx, setIdx] = useState(0);

  const go = useCallback((n: number) => {
    setIdx((p) => (p + n + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="container-x pt-28 md:pt-32 pb-16 grid lg:grid-cols-2 gap-10 items-center min-h-[640px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`contents transition-opacity duration-700 ${
              i === idx ? "" : "hidden"
            }`}
          >
            <div className="order-2 lg:order-1">
              <div
                key={`t-${idx}`}
                className="opacity-0 translate-y-6 animate-[fadeUp_0.9s_ease-out_forwards]"
              >
                <div className="text-[11px] uppercase tracking-[0.35em] text-maroon mb-5">
                  {s.eyebrow}
                </div>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground">
                  {s.title}
                  <br />
                  <span className="text-maroon">{s.accent}</span>
                </h1>
                <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to={s.cta.to}
                    className="group inline-flex items-center gap-3 bg-maroon text-cream pl-6 pr-2 py-2 font-medium hover:bg-maroon-light transition-all"
                  >
                    {s.cta.label}
                    <span className="h-9 w-9 grid place-items-center bg-maroon-dark text-cream group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 font-medium hover:bg-secondary transition-colors"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-secondary/50 border border-border overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-[560px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 md:h-14 md:w-14 rounded-full bg-maroon/70 hover:bg-maroon backdrop-blur border border-cream/20 text-cream grid place-items-center transition-all hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 md:h-14 md:w-14 rounded-full bg-maroon/70 hover:bg-maroon backdrop-blur border border-cream/20 text-cream grid place-items-center transition-all hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === idx ? "w-10 bg-gold" : "w-5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cream/60">
        Scroll
        <span className="block h-8 w-px bg-cream/40" />
      </div>
    </section>
  );
}
