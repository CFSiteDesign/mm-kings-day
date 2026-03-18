import { useEffect, useRef, useState } from "react";
import cardFreeflow from "@/assets/card-freeflow.jpg";
import cardDjs from "@/assets/card-djs.jpg";
import cardMates from "@/assets/card-mates.jpg";
import cardBoatparty from "@/assets/card-boatparty.jpg";
import cardGames from "@/assets/card-games.jpg";

const CARDS = [
  {
    image: cardFreeflow,
    title: "Bottomless Bevvies",
    description: "3 hours of free-flow fuel. We're pouring, you're roaring.",
    badge: "Limited Tickets",
    rotation: "rotate-2",
  },
  {
    image: cardDjs,
    title: "DJs + Devilment",
    description: "Banging tunes all night. From Irish folk remixes to filthy techno — the craic doesn't stop.",
    badge: "All Night",
    rotation: "-rotate-2",
  },
  {
    image: cardBoatparty,
    title: "Boat Party",
    description: "One boat. No escape. The most unhinged party on the water.",
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
      className="bg-card border-2 border-border p-4 md:p-6 group transition-transform hover:-translate-y-2"
    >
      <div className="aspect-video bg-muted border-2 border-border mb-4 md:mb-6 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 md:grayscale md:group-hover:grayscale-0 ${
            isVisible ? "grayscale-0 scale-105" : "grayscale"
          } md:scale-100`}
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 md:mb-3">{card.title}</h3>
      <p className="text-base md:text-lg font-bold leading-snug">{card.description}</p>
      <div className={`mt-4 md:mt-6 inline-block bg-primary text-primary-foreground px-3 py-1 text-sm font-black uppercase ${card.rotation}`}>
        {card.badge}
      </div>
    </div>
  );
};

const DamageSection = () => {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-16 bg-primary border-b-4 border-divider">
      <h2 className="text-4xl md:text-8xl font-black uppercase text-center mb-8 md:mb-16 text-primary-foreground leading-none tracking-tighter">
        The St. Paddy's Survival Kit
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto">
        {CARDS.map((card) => (
          <DamageCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export default DamageSection;
