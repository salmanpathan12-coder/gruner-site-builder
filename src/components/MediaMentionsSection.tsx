import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

// Media logos with their official styling
const mediaLogos = [
  { 
    name: "Economic Times",
    logo: (
      <svg viewBox="0 0 180 40" className="h-6 md:h-8 w-auto">
        <text x="5" y="28" fontFamily="Georgia, serif" fontSize="20" fontWeight="700" fontStyle="italic" fill="#1A1A1A">
          <tspan fill="#E42313">The</tspan>
          <tspan> Economic Times</tspan>
        </text>
      </svg>
    )
  },
  { 
    name: "The Hindu",
    logo: (
      <svg viewBox="0 0 140 40" className="h-6 md:h-8 w-auto">
        <text x="5" y="28" fontFamily="Times New Roman, serif" fontSize="22" fontWeight="700" fill="#1A1A1A">The Hindu</text>
      </svg>
    )
  },
  { 
    name: "Business Standard",
    logo: (
      <svg viewBox="0 0 200 40" className="h-6 md:h-8 w-auto">
        <text x="5" y="26" fontFamily="Georgia, serif" fontSize="16" fontWeight="700" fill="#C00000">Business Standard</text>
      </svg>
    )
  },
  { 
    name: "Financial Express",
    logo: (
      <svg viewBox="0 0 200 40" className="h-6 md:h-8 w-auto">
        <text x="5" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#E31837">Financial Express</text>
      </svg>
    )
  },
  { 
    name: "Mint",
    logo: (
      <svg viewBox="0 0 100 40" className="h-6 md:h-8 w-auto">
        <text x="5" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="300" fill="#2AA87B">mint</text>
      </svg>
    )
  },
  { 
    name: "Energetica India",
    logo: (
      <svg viewBox="0 0 160 40" className="h-6 md:h-8 w-auto">
        <text x="5" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#0066CC">Energetica India</text>
      </svg>
    )
  },
];

const MediaMentionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-background border-y border-border/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium flex items-center justify-center gap-2">
            <ExternalLink className="w-3 h-3" />
            As Featured In
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {mediaLogos.map((media, index) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              title={media.name}
            >
              {media.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaMentionsSection;
