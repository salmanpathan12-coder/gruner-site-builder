import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import local logo assets
import ioLogo from "@/assets/logos/io.png";
import bpclLogo from "@/assets/logos/bpcl.png";
import iglLogo from "@/assets/logos/igl.png";
import adaniLogo from "@/assets/logos/adani.png";
import gailLogo from "@/assets/logos/gail.png";
import relianceLogo from "@/assets/logos/reliance.png";

// Partner logos ordered by business relevance/priority
const partners = [
  { name: "GAIL India", logo: gailLogo, featured: false },
  { name: "Indian Oil", logo: ioLogo, featured: false },
  { name: "Bharat Petroleum", logo: bpclLogo, featured: false },
  { name: "Reliance Industries", logo: relianceLogo, featured: true },
  { name: "Adani Group", logo: adaniLogo, featured: false },
  { name: "Indraprastha Gas", logo: iglLogo, featured: false },
];

const TrustedBySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Double the array for seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-muted/30 border-y border-border/50 overflow-hidden">
      {/* Full width container */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Trusted by Industry Leaders
          </span>
        </motion.div>

        {/* Infinite scroll container - full width */}
        <div className="relative w-full">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <motion.div
              className="flex items-center gap-16 md:gap-24 lg:gap-32"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex-shrink-0 relative transition-all duration-300 group ${
                    partner.featured ? "px-4 py-2" : ""
                  }`}
                  title={partner.name}
                  style={{
                    filter: partner.featured
                      ? "drop-shadow(0 4px 20px rgba(34, 197, 94, 0.4))"
                      : "drop-shadow(0 2px 8px rgba(34, 197, 94, 0.15))",
                  }}
                >
                  {/* Featured highlight ring for Reliance */}
                  {partner.featured && (
                    <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-sm" />
                  )}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`relative ${
                      partner.featured
                        ? "h-14 md:h-16 w-auto"
                        : "h-10 md:h-12 w-auto"
                    } transition-transform duration-300 group-hover:scale-110`}
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

export default TrustedBySection;
