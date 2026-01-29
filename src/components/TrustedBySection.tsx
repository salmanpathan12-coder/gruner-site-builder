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
  { name: "GAIL India", logo: gailLogo },
  { name: "Indian Oil", logo: ioLogo },
  { name: "Bharat Petroleum", logo: bpclLogo },
  { name: "Reliance Industries", logo: relianceLogo },
  { name: "Adani Group", logo: adaniLogo },
  { name: "Indraprastha Gas", logo: iglLogo },
];

const TrustedBySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-muted/30 border-y border-border/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Trusted by Industry Leaders
          </span>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative transition-all duration-300"
              title={partner.name}
              style={{
                filter: "drop-shadow(0 2px 8px rgba(34, 197, 94, 0.15))",
              }}
              whileHover={{
                filter: "drop-shadow(0 4px 16px rgba(34, 197, 94, 0.35))",
                scale: 1.05,
              }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 md:h-12 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
