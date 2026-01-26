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
              <img 
                src={media.logo} 
                alt={media.name} 
                className="h-10 md:h-12 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaMentionsSection;
