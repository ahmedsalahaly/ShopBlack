import React from "react";
import { Link } from "react-router-dom";

const TEAM = [
  { name: "Sarah Mitchell", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300", bio: "10+ years in e-commerce. Passionate about connecting people with quality products." },
  { name: "James Okafor", role: "Head of Product", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300", bio: "Curates every product on the platform with a focus on craftsmanship and durability." },
  { name: "Lena Park", role: "Customer Experience", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300", bio: "Ensures every customer interaction is smooth, fast, and genuinely helpful." },
];

const MILESTONES = [
  { year: "2019", text: "ShopBlack was founded with a catalog of 12 products." },
  { year: "2020", text: "Expanded to 40+ countries and crossed 1,000 customers." },
  { year: "2022", text: "Launched the Admin platform and hit 200+ product listings." },
  { year: "2024", text: "Serving 6,000+ happy customers worldwide." },
];

const sectionBase = "max-w-[1100px] mx-auto py-20 px-6 border-b border-violet-200 dark:border-[#252535]";

export default function About() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="text-center py-24 px-6 border-b border-violet-200 dark:border-[#252535] flex flex-col items-center gap-5">
        <span className="inline-block px-3.5 py-1 border border-violet-500 rounded-full text-[0.78rem] text-violet-500 tracking-wide uppercase">
          Our Story
        </span>
        <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-black text-[#1e1b4b] dark:text-violet-50 leading-[1.2]">
          We believe shopping<br />should feel good.
        </h1>
        <p className="text-violet-700 dark:text-violet-300 text-[1.05rem] max-w-[520px] leading-7">
          ShopBlack was built to cut through the noise — no gimmicks, no inflated prices. Just honest products, honest prices, and real support.
        </p>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={sectionBase}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { label: "Mission", title: "Make quality accessible.", text: "We source premium products from trusted suppliers and sell them directly to you — no middlemen, no markups. Our mission is simple: give every customer access to the best, at a price that makes sense." },
            { label: "Vision", title: "The world's most trusted store.", text: "We're building toward a future where you can shop with complete confidence — knowing every listing has been vetted, every review is real, and every package arrives exactly as described." },
          ].map((b) => (
            <div key={b.label} className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-xl p-8 flex flex-col gap-3">
              <span className="text-[0.75rem] uppercase tracking-[1px] text-violet-500">{b.label}</span>
              <h2 className="text-[1.4rem] font-bold text-[#1e1b4b] dark:text-violet-50">{b.title}</h2>
              <p className="text-violet-700 dark:text-violet-300 text-[0.92rem] leading-7">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="max-w-[1100px] mx-auto py-20 px-6 border-b border-violet-200 dark:border-[#252535]">
        <h2 className="text-[1.8rem] font-extrabold text-[#1e1b4b] dark:text-violet-50 mb-10 text-center">What drives us</h2>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {[
            { icon: "◎", title: "Transparency", desc: "No hidden fees. No dark patterns. What you see is what you pay." },
            { icon: "◈", title: "Quality First", desc: "Every product is reviewed before it lands on our platform." },
            { icon: "◇", title: "Customer Respect", desc: "Real humans handle support. 30-day returns, no questions asked." },
            { icon: "◉", title: "Sustainability", desc: "We prioritize eco-conscious packaging and responsible sourcing." },
          ].map((v) => (
            <div key={v.title} className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-[10px] p-6 flex flex-col gap-2.5 transition-colors hover:border-violet-500">
              <span className="text-[1.4rem] text-violet-500">{v.icon}</span>
              <h3 className="text-base font-bold text-[#1e1b4b] dark:text-violet-50">{v.title}</h3>
              <p className="text-[0.85rem] text-violet-700 dark:text-violet-300 leading-[1.6]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className={sectionBase}>
        <h2 className="text-[1.8rem] font-extrabold text-[#1e1b4b] dark:text-violet-50 mb-10 text-center">Our journey</h2>
        <div className="max-w-[600px] mx-auto flex flex-col">
          {MILESTONES.map((m, i) => (
            <div key={i} className="relative pb-8 last:pb-0">
              {i < MILESTONES.length - 1 && (
                <div className="absolute top-3 bottom-0 w-px bg-violet-200 dark:bg-[#252535]" style={{ left: "calc(80px + 12px + 1rem)" }} />
              )}
              <div className="grid gap-4 items-start" style={{ gridTemplateColumns: "80px 24px 1fr" }}>
                <div className="text-right text-[0.85rem] font-bold text-violet-500 pt-0.5">{m.year}</div>
                <div className="w-3 h-3 rounded-full bg-violet-500 border-2 border-violet-50 dark:border-[#09090f] outline outline-1 outline-violet-400 dark:outline-[#3d3d5c] mt-0.5 flex-shrink-0" />
                <div className="text-violet-700 dark:text-violet-300 text-[0.9rem] leading-[1.6]">{m.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className={sectionBase}>
        <h2 className="text-[1.8rem] font-extrabold text-[#1e1b4b] dark:text-violet-50 mb-10 text-center">Meet the team</h2>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {TEAM.map((member) => (
            <div key={member.name} className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-xl overflow-hidden transition-colors hover:border-violet-500">
              <img src={member.image} alt={member.name} className="w-full h-[220px] object-cover object-top block" />
              <div className="p-5 flex flex-col gap-1">
                <h3 className="text-base font-bold text-[#1e1b4b] dark:text-violet-50">{member.name}</h3>
                <span className="text-[0.8rem] text-violet-500 uppercase tracking-wide">{member.role}</span>
                <p className="mt-1.5 text-[0.85rem] text-violet-700 dark:text-violet-300 leading-[1.6]">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-20 px-6 flex flex-col items-center gap-4">
        <h2 className="text-[2rem] font-extrabold text-[#1e1b4b] dark:text-violet-50">Ready to explore?</h2>
        <p className="text-violet-700 dark:text-violet-300">Browse our collection and find something you'll love.</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/" className="inline-block px-7 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-bold text-[0.95rem] no-underline transition-colors">
            Shop Now
          </Link>
          <Link to="/contact" className="inline-block px-7 py-3 bg-transparent text-violet-700 dark:text-violet-300 border border-violet-400 dark:border-[#3d3d5c] rounded-lg font-semibold text-[0.95rem] no-underline transition-all hover:border-violet-500 hover:text-violet-500">
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
