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
  const isLarge = index === 0 || index === 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative ${isLarge ? 'lg:col-span-2' : ''}`}
    >
      <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/20">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/[0.04] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className={`relative flex ${isLarge ? 'flex-col md:flex-row md:items-center gap-6' : 'flex-col gap-5'}`}>
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`${isLarge ? 'w-16 h-16' : 'w-14 h-14'} rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0`}
          >
            <Icon className={`${isLarge ? 'w-8 h-8' : 'w-6 h-6'} text-primary`} />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <h3 className={`relative ${isLarge ? 'text-xl md:text-2xl' : 'text-lg'} font-heading font-semibold text-white mb-2`}>
              {title}
            </h3>
            <p className="relative text-white/40 leading-relaxed font-body text-sm">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-transparent"
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
    <section ref={ref} className="relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(210,18%,9%)] to-[hsl(200,15%,10%)]" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient orb */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/[0.06] via-transparent to-transparent blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent to-primary"
            />
            <span className="text-primary text-xs font-medium uppercase tracking-[0.3em] font-body">
              Our Foundation
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-l from-transparent to-primary"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-5">
            Core Values
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-body text-lg">
            The principles that guide everything we do at Gruner Renewable, 
            driving our mission to transform India's energy future.
          </p>
        </motion.div>

        {/* Values grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
