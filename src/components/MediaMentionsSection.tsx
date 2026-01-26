import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

// Media logos with their official styling
const mediaLogos = [
  { 
    name: "The Economic Times",
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/tet.png" alt="The Economic Times" className="h-6 md:h-8 w-auto" />
  },
  { 
    name: "The Business Line",
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/tbl.png" alt="The Business Line" className="h-6 md:h-8 w-auto" />
  },
  { 
    name: "Business Standard",
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/bs.png" alt="Business Standard" className="h-6 md:h-8 w-auto" />
  },
  { 
    name: "Business World",
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/bw.png" alt="Business World" className="h-6 md:h-8 w-auto" />
  },
  { 
    name: "Energy World",
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/ew.png" alt="Energy World" className="h-6 md:h-8 w-auto" />
  },
  { 
    name: "Energetica India",
    logo: <img src="http://13.233.180.71/gre-new2/assets/logos/ene.png" alt="Energetica India" className="h-6 md:h-8 w-auto" />
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
