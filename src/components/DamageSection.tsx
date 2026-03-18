import { useEffect, useRef, useState } from "react";
import cardFreeflow from "@/assets/card-freeflow.jpg";
import cardDjs from "@/assets/card-djs.jpg";
import cardBoatparty from "@/assets/card-boatparty.jpg";
import SplashBadge from "@/components/SplashBadge";

const CARDS = [
  {
    image: cardFreeflow,
    title: "Free-Flow Party",
    description: "Hours of free-flow fuel. We're pouring orange, you're wearing orange. It's a beautiful thing.",
    badge: "Limited Tickets",
    rotation: "rotate-2",
  },
  {
    image: cardDjs,
    title: "Live DJs All Day",
    description: "Banging tunes from noon to midnight. From Dutch house to filthy techno — the party doesn't stop.",
    badge: "All Day",
    rotation: "-rotate-2",
  },
  {
    image: cardBoatparty,
    title: "Boat Parties",
    description: "One boat. No escape. The most unhinged King's Day party on the water.",
    badge: "Sell Out Warning",
    rotation: "-rotate-1",
  },
];

const DamageCard = ({ card }: { card: typeof CARDS[number] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card border-2 border-orange-deep p-4 md:p-6 group transition-transform hover:-translate-y-2 relative"
    >
      <div className="aspect-video bg-muted border-2 border-orange-deep mb-4 md:mb-6 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 md:grayscale md:group-hover:grayscale-0 ${
            isVisible ? "grayscale-0 scale-105" : "grayscale"
          } md:scale-100`}
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 md:mb-3 text-orange-pale">{card.title}</h3>
      <p className="text-base md:text-lg font-bold leading-snug text-orange-pale/60">{card.description}</p>
      <div className="absolute -top-4 -right-3 md:-top-5 md:-right-4">
        <SplashBadge size="sm" rotation={card.rotation}>{card.badge}</SplashBadge>
      </div>
    </div>
  );
};

const DamageSection = () => {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-16 orange-gradient-bg border-b-4 border-divider overflow-visible">
      {/* Blue star accents */}
      <span className="blue-star absolute top-6 left-6 md:top-12 md:left-16 text-2xl md:text-4xl">✦</span>
      <span className="blue-star absolute top-10 right-8 md:top-16 md:right-20 text-lg md:text-3xl">✦</span>
      <span className="blue-star absolute bottom-8 right-12 md:bottom-16 md:right-32 text-xl md:text-3xl">✦</span>

      <h2 className="text-4xl md:text-8xl font-black uppercase text-center mb-8 md:mb-16 text-orange-pale leading-none tracking-tighter">
        The King's Day Survival Kit
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
        {CARDS.map((card) => (
          <DamageCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export default DamageSection;
