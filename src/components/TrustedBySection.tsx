import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Partner logos with their official brand colors
const partners = [
  { 
    name: "Indian Oil", 
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/io.png" alt="Indian Oil" className="h-8 md:h-10 w-auto" />
  },
  { 
    name: "Bharat Petroleum", 
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/bpcl.png" alt="BPCL" className="h-8 md:h-10 w-auto" />
  },
  { 
    name: "Hindustan Petroleum", 
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/igl.png" alt="HPCL" className="h-8 md:h-10 w-auto" />
  },
  { 
    name: "Adani Group", 
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/adani.png" alt="ADANI" className="h-8 md:h-10 w-auto" />
  },
  { 
    name: "GAIL India", 
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/gail.png" alt="GAIL" className="h-8 md:h-10 w-auto" />
  },
  { 
    name: "Indraprastha Gas", 
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/reliance.png" alt="IGL" className="h-8 md:h-10 w-auto" />
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
