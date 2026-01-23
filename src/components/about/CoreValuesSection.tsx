import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Target, Users, Globe, Shield, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const ValueCard = ({ icon: Icon, title, description, index, isInView }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 overflow-hidden">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg shadow-primary/20"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="relative text-xl font-heading font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="relative text-muted-foreground leading-relaxed font-body">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
};

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision we make is guided by our commitment to environmental responsibility and building a cleaner future for generations to come."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously push the boundaries of biogas technology, leveraging cutting-edge solutions to maximize efficiency and output."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building long-term relationships with our clients, communities, and stakeholders based on trust and mutual growth."
  },
  {
    icon: Globe,
    title: "Impact at Scale",
    description: "Our goal is to make a substantial, measurable impact on India's renewable energy landscape and carbon reduction targets."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency and ethical practices form the foundation of every project and partnership we undertake."
  },
  {
    icon: Lightbulb,
    title: "Excellence",
    description: "We strive for operational excellence in every plant we design, build, and operate, setting new industry benchmarks."
  }
];

const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <pattern id="values-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#values-grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          />
          <span className="text-primary text-sm font-medium uppercase tracking-[0.2em] font-body">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-4 text-foreground mb-6">
            Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            The principles that guide everything we do at Gruner Renewable, 
            driving our mission to transform India's energy future.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
