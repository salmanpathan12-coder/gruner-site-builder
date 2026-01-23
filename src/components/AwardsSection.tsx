import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, BadgeCheck, FileCheck, Star, Medal } from "lucide-react";

const recognitions = [
  { 
    icon: Award, 
    label: "Industry Recognition",
    description: "Acknowledged leader in Bio-CNG",
  },
  { 
    icon: ShieldCheck, 
    label: "Association Memberships",
    description: "Active industry participation",
  },
  { 
    icon: BadgeCheck, 
    label: "Regulatory Compliance",
    description: "100% compliant operations",
  },
  { 
    icon: FileCheck, 
    label: "Certified Bio-CNG Quality",
    description: "ISO certified processes",
  },
  { 
    icon: Star, 
    label: "Excellence Awards",
    description: "Multiple recognitions",
  },
  { 
    icon: Medal, 
    label: "Safety Standards",
    description: "Zero incident record",
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding-sm bg-gradient-to-b from-background to-off-white border-t border-border" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"
          />
          <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2">
            Recognition & Certifications
          </h3>
          <p className="text-sm text-muted-foreground">
            Trusted by industry, certified by authorities
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {recognitions.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="group"
              >
                <div className="flex flex-col items-center text-center p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  {/* Gradient icon container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      className="w-7 h-7 text-white" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;