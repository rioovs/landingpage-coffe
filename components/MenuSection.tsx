import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

const menuItems = [
  {
    name: "Quesadilla",
    description: "Tortilla renyah berisi keju leleh dan isian pilihan. Gurih dan mengenyangkan.",
    image: getAssetPath("/menu-quesadilla.png"),
    badge: "Best Seller",
    badgeColor: "bg-amber-500 text-coffee-950",
    price: "Rp 25.000",
  },
  {
    name: "Loaded Fries",
    description: "Kentang goreng crispy dipadukan dengan topping keju, saus spesial, dan taburan bumbu rahasia.",
    image: getAssetPath("/menu-fries.png"),
    badge: "Favorit",
    badgeColor: "bg-red-500 text-white",
    price: "Rp 22.000",
  },
  {
    name: "Es Kopi Susu",
    description: "Perpaduan espresso premium dengan susu segar dan es batu yang menyegarkan. Khas Eazy Coffee.",
    image: getAssetPath("/menu-kopi-susu.png"),
    badge: "Signature",
    badgeColor: "bg-amber-700 text-cream-100",
    price: "Rp 18.000",
  },
  {
    name: "Lychee Tea",
    description: "Teh premium dengan infus lychee segar, manis alami dan menyegarkan di setiap tegukan.",
    image: getAssetPath("/menu-lychee-tea.png"),
    badge: "Non-Coffee",
    badgeColor: "bg-pink-500 text-white",
    price: "Rp 18.000",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-coffee-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            — Menu Andalan —
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gradient mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Rasa yang Bikin Balik Lagi
          </h2>
          <p className="text-cream-200/60 max-w-xl mx-auto text-base">
            Setiap menu dirancang untuk memberikan pengalaman yang tak terlupakan — dari camilan hingga minuman khas.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group glass-light rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Badge */}
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor} shadow-lg`}
                >
                  {item.badge}
                </span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="text-lg font-bold text-cream-100"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.name}
                  </h3>
                  <span className="text-amber-400 font-bold text-sm whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-cream-200/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-14">
          <p className="text-cream-200/50 text-sm mb-5">
            Tersedia juga via GoFood & GrabFood
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://gofood.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-green-500/30"
            >
              🛵 GoFood
            </a>
            <a
              href="https://food.grab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 hover:bg-green-600 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-green-700/30"
            >
              🚗 GrabFood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
