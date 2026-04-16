"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Local Guide · ★★★★★",
    text: "Tempatnya enak banget buat nongkrong, adem dan nyaman. Kopinya mantap, especially es kopi susunya. Recommended banget untuk yang cari cafe di Jombang!",
    initials: "RP",
    color: "from-amber-500 to-amber-700",
  },
  {
    name: "Siti Rahayu",
    role: "Google Maps · ★★★★★",
    text: "Udah langganan di sini dari 2019. Quesadilla dan loaded friesnya selalu konsisten enak. Parkir luas, WiFi kencang, cocok buat kerja sambil ngopi.",
    initials: "SR",
    color: "from-coffee-600 to-coffee-800",
  },
  {
    name: "Andi Wijaya",
    role: "Local Guide · ★★★★☆",
    text: "Pesen coffee catering buat acara kantor dan hasilnya memuaskan banget! Barista nya ramah dan profesional. Pasti bakal repeat order lagi.",
    initials: "AW",
    color: "from-amber-700 to-coffee-700",
  },
  {
    name: "Dewi Kusuma",
    role: "Google Maps · ★★★★★",
    text: "Lychee tea-nya juara! Beda sama cafe lain, rasanya lebih natural dan pas manisnya. Suasananya bikin betah lama-lama, tempatnya bersih dan instagramable.",
    initials: "DK",
    color: "from-pink-600 to-rose-800",
  },
  {
    name: "Budi Santoso",
    role: "Local Guide · ★★★★★",
    text: "Meeting point yang sempurna. Udah beberapa kali ngadain rapat kecil di sini. Makasih Eazy Coffee sudah jadi tempat produktif favoritku di Jombang!",
    initials: "BS",
    color: "from-blue-600 to-blue-800",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="ulasan" className="py-24 md:py-32 bg-coffee-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            — Ulasan Pelanggan —
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Yang Mereka Katakan
          </h2>
          <p className="text-cream-200/60 max-w-xl mx-auto text-base">
            Kepercayaan pelanggan adalah hal terpenting bagi kami. Ini kata mereka tentang Eazy Coffee.
          </p>
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-cream-200/60 text-sm">5.0 / 5.0 di Google Maps</span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          {testimonials.slice(3, 5).map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <svg className="w-4 h-4 text-cream-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-amber-400" : "w-2 h-2 bg-white/30"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-light flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <svg className="w-4 h-4 text-cream-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-light rounded-2xl p-6 hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Quote Icon */}
      <svg className="w-8 h-8 text-amber-500/40 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-cream-200/70 text-sm leading-relaxed flex-1 mb-5">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-cream-100 font-semibold text-sm">{testimonial.name}</p>
          <p className="text-amber-400/80 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
