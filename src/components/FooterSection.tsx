import madMonkeyLogo from "@/assets/mad-monkey-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-card text-foreground border-t-4 border-divider">
      {/* Dutch flag stripe */}
      <div className="h-2 dutch-flag-stripe" />
      
      <div className="py-8 md:py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-8">
          <img
            src={madMonkeyLogo}
            alt="Mad Monkey"
            className="w-48 md:w-64"
            style={{
              filter:
                "drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white)",
            }}
          />

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {[
              { name: "INSTAGRAM", url: "https://www.instagram.com/madmonkeyhostels/" },
              { name: "TIKTOK", url: "https://www.tiktok.com/@madmonkeyhostels" },
              { name: "FACEBOOK", url: "https://www.facebook.com/MadMonkeyHostels" },
              { name: "YOUTUBE", url: "https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw" },
              { name: "WEBSITE", url: "https://madmonkeyhostels.com" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black uppercase text-xs md:text-sm hover:text-orange-light transition-colors border-2 border-orange-deep px-3 md:px-4 py-1.5 text-orange-pale"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-orange-pale/20">
            © 2026 MAD MONKEY HOSTELS. LONG LIVE THE KING.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
