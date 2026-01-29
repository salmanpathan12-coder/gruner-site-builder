import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

// Import local logo assets
import tetLogo from "@/assets/logos/tet.png";
import tblLogo from "@/assets/logos/tbl.png";
import bsLogo from "@/assets/logos/bs.png";
import bwLogo from "@/assets/logos/bw.png";
import ewLogo from "@/assets/logos/ew.png";
import eneLogo from "@/assets/logos/ene.png";

// Media logos with their official styling
const mediaLogos = [
  { name: "The Economic Times", logo: tetLogo },
  { name: "The Business Line", logo: tblLogo },
  { name: "Business Standard", logo: bsLogo },
  { name: "Business World", logo: bwLogo },
  { name: "Energy World", logo: ewLogo },
  { name: "Energetica India", logo: eneLogo },
];

const MediaMentionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Duplicate logos for seamless loop (twice for smoother animation)
  const duplicatedLogos = [...mediaLogos, ...mediaLogos];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-background border-y border-border/30 overflow-hidden">
      {/* Full width container */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium flex items-center justify-center gap-2">
            <ExternalLink className="w-3 h-3" />
            As Featured In
          </span>
        </motion.div>

        {/* Infinite scroll container - full width */}
        <div className="relative w-full">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos container - opposite direction for variety */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <motion.div
              className="flex items-center gap-12 md:gap-16 lg:gap-20"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((media, index) => (
                <div
                  key={`${media.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer transition-all duration-300"
                  title={media.name}
                  style={{
                    filter: "drop-shadow(0 2px 8px rgba(34, 197, 94, 0.15))",
                  }}
                >
                  <img
                    src={media.logo}
                    alt={media.name}
                    className="h-6 md:h-8 w-auto transition-all duration-300 group-hover:scale-110"
                    style={{
                      filter: "drop-shadow(0 0 0 transparent)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "drop-shadow(0 4px 16px rgba(34, 197, 94, 0.35))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "drop-shadow(0 0 0 transparent)";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaMentionsSection;
