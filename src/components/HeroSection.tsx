import heroImage from "@/assets/hero-party.jpg";
import crownImg from "@/assets/crown.png";
import madMonkeyLogo from "@/assets/mad-monkey-logo.png";

const HeroSection = () => {
  return (
    <section className="relative z-30 w-full min-h-[100svh] md:min-h-[85vh] flex flex-col md:flex-row overflow-visible">
      {/* Left - Text */}
      <div className="flex-1 px-5 pt-2 pb-6 md:p-12 flex flex-col justify-center items-start relative overflow-hidden">
        <img src={madMonkeyLogo} alt="Mad Monkey" className="w-28 md:w-40 mb-3 md:mb-4 z-10" style={{ filter: 'drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white)' }} />
        
        <div className="mb-4 md:mb-6 inline-flex items-center gap-2 font-black uppercase px-4 py-2 text-xs md:text-lg border-2 border-orange-light -rotate-2 z-10 rounded-sm bg-orange-light text-orange-deep" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.15)' }}>
          April 27th 2026
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] mb-5 md:mb-8 z-10">
          <span className="text-orange-pale">KING'S</span><br />
          <span className="text-orange-light">DAY</span>{" "}
          <span className="text-orange-pale">PARTY.</span>
        </h1>
        
        <p className="text-[13px] md:text-2xl font-bold mb-6 md:mb-10 max-w-xl z-10 text-orange-pale/70 leading-[1.8] md:leading-relaxed whitespace-pre-line">
          {`The canals are flowin',\nthe drinks never stop,\nCrowns on our heads\nand the bass gonna drop.\nOne day, one city,\nno sleep till it's done,\nMad Monkey's callin' -\nthe King says it's on.`}
        </p>
      </div>

      {/* Dutch flag divider between text and image */}
      <div className="h-2 dutch-flag-stripe-h md:hidden shrink-0 relative z-10" />
      <div className="hidden md:block w-2 dutch-flag-stripe shrink-0 relative z-10" />

      {/* Right - Image + Crown */}
      <div className="flex-1 relative flex items-center justify-center min-h-[300px] md:min-h-[400px] z-20">
        <div className="relative w-4/5 aspect-square md:aspect-auto md:h-4/5 flex items-center justify-center">
          <img
            src={heroImage}
            alt="King's Day Party"
            className="w-full h-full object-cover border-2 border-orange-warm brutalist-shadow rotate-3"
            style={{ objectPosition: '50% 20%' }}
          />
          <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-orange-light text-orange-deep p-2 md:p-4 border-2 border-orange-pale font-black text-sm md:text-xl uppercase rotate-12 shadow-lg z-20">
            👑 Proost!
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-card text-orange-pale p-2 md:p-4 border-2 border-orange-deep font-black text-sm md:text-xl uppercase -rotate-6 shadow-lg z-20">
            Mad Monkey 2026
          </div>
        </div>

        {/* Crown - floating element */}
        <img
          src={crownImg}
          alt="Crown"
          className="absolute w-40 md:w-72 lg:w-96 bottom-0 right-2 md:-bottom-20 md:right-10 lg:-bottom-24 lg:right-16 z-40 animate-float drop-shadow-lg pointer-events-none"
          style={{ "--float-rotate": "3deg" } as React.CSSProperties}
        />
      </div>
    </section>
  );
};

export default HeroSection;
