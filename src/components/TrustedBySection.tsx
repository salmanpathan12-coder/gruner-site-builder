import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Partner logos with their official brand colors
const partners = [
  { 
    name: "Indian Oil", 
    logo: (
      <svg viewBox="0 0 200 60" className="h-8 md:h-10 w-auto">
        <text x="10" y="40" fontFamily="Arial Black, sans-serif" fontSize="32" fontWeight="900" fill="currentColor">
          <tspan fill="#E21836">Indian</tspan>
          <tspan fill="#F7941D">Oil</tspan>
        </text>
      </svg>
    )
  },
  { 
    name: "Bharat Petroleum", 
    logo: (
      <svg viewBox="0 0 120 50" className="h-8 md:h-10 w-auto">
        <text x="5" y="35" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#1B4F8E">BPCL</text>
      </svg>
    )
  },
  { 
    name: "Hindustan Petroleum", 
    logo: (
      <svg viewBox="0 0 120 50" className="h-8 md:h-10 w-auto">
        <text x="5" y="35" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#00529B">HPCL</text>
      </svg>
    )
  },
  { 
    name: "GAIL India", 
    logo: (
      <svg viewBox="0 0 120 50" className="h-8 md:h-10 w-auto">
        <text x="5" y="35" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#005DAA">GAIL</text>
      </svg>
    )
  },
  { 
    name: "Adani Group", 
    logo: (
      <svg viewBox="0 0 140 50" className="h-8 md:h-10 w-auto">
        <text x="5" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="#002B5C" letterSpacing="2">ADANI</text>
      </svg>
    )
  },
  { 
    name: "Indraprastha Gas", 
    logo: (
      <svg viewBox="0 0 100 50" className="h-8 md:h-10 w-auto">
        <text x="5" y="35" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900" fill="#E31937">IGL</text>
      </svg>
    )
  },
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
              className="group relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              title={partner.name}
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
