export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="lokasi" className="bg-coffee-950 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="flex flex-col justify-between">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-900/40">
                  <span
                    className="text-coffee-950 font-bold text-lg"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >E</span>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-cream-100"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Eazy <span className="text-amber-400">Coffee</span>
                  </h3>
                  <p className="text-cream-200/40 text-xs tracking-wider">Est. 2011 · Jombang</p>
                </div>
              </div>
              <p className="text-cream-200/50 text-sm leading-relaxed max-w-sm mb-8">
                Tempat nongkrong favorit di Jombang sejak 2011. Kami hadir untuk menemani hari-harimu dengan kopi berkualitas dan suasana yang hangat.
              </p>
            </div>

            {/* Operational Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream-100 font-semibold text-sm">Jam Operasional</p>
                  <p className="text-cream-200/60 text-sm">MON — SUN · 11.00 – 21.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream-100 font-semibold text-sm">Alamat</p>
                  <p className="text-cream-200/60 text-sm">
                    Jl. Adityawarman 8, Jombang,<br />Jawa Timur 61411
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://instagram.com/eazycoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-cream-200/60 hover:text-pink-400 hover:border-pink-500/30 transition-all duration-300 hover:scale-110"
                aria-label="Instagram Eazy Coffee"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-cream-200/60 hover:text-green-400 hover:border-green-500/30 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp Eazy Coffee"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://gofood.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl glass-light text-xs font-semibold text-green-400 hover:bg-green-500/10 transition-colors hover:scale-105"
              >
                GoFood
              </a>
              <a
                href="https://food.grab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl glass-light text-xs font-semibold text-green-300 hover:bg-green-500/10 transition-colors hover:scale-105"
              >
                GrabFood
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden h-[340px] md:h-[420px] glass-light border border-amber-900/20">
            <iframe
              title="Lokasi Eazy Coffee Jombang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5!2d112.23!3d-7.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.+Adityawarman+8%2C+Jombang%2C+Jawa+Timur+61411!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-amber-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-200/30 text-xs text-center sm:text-left">
            © {currentYear} Eazy Coffee. All rights reserved.
          </p>
          <p className="text-cream-200/30 text-xs">
            Jl. Adityawarman 8, Jombang, Jawa Timur 61411
          </p>
        </div>
      </div>
    </footer>
  );
}
