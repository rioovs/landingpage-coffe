const facilities = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Meeting Point",
    description: "Area nyaman untuk rapat, diskusi komunitas, dan sesi kerja produktif dengan WiFi kencang.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    borderColor: "group-hover:border-blue-500/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Delivery Order",
    description: "Nikmati menu favorit Eazy Coffee dari rumah. Tersedia melalui GoFood dan GrabFood.",
    color: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
    borderColor: "group-hover:border-green-500/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Coffee Catering",
    description: "Layanan barista profesional untuk acara spesialmu — pernikahan, seminar, atau event korporat.",
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-400",
    borderColor: "group-hover:border-amber-500/40",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    title: "Parking Spot",
    description: "Area parkir luas dan aman tersedia untuk kendaraan roda dua maupun roda empat.",
    color: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-400",
    borderColor: "group-hover:border-purple-500/40",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-24 md:py-32 bg-coffee-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            — Fasilitas & Layanan —
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Lebih dari Sekadar Kopi
          </h2>
          <p className="text-cream-200/60 max-w-xl mx-auto text-base">
            Eazy Coffee hadir dengan berbagai layanan untuk memenuhi kebutuhan nongkrongmu.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className={`group glass-light rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-transparent ${facility.borderColor} cursor-default`}
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={facility.iconColor}>{facility.icon}</div>
              </div>

              <h3
                className="text-lg font-bold text-cream-100 mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {facility.title}
              </h3>
              <p className="text-cream-200/60 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
