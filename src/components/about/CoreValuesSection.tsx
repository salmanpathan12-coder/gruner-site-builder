import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Target, Users, Shield, Lightbulb, Heart, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  color: string;
}

const ValueCard = ({ icon: Icon, title, description, index, isInView, color }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-2xl p-6 md:p-8 shadow-md shadow-foreground/5 border border-foreground/5 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        {/* Hover background accent */}
        <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`relative w-14 h-14 rounded-xl ${color.replace('bg-gradient-to-br', 'bg-gradient-to-br').replace('/5', '/100')} flex items-center justify-center mb-6`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="relative text-xl font-heading font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
          {title}
        </h3>
        <p className="relative text-muted-foreground leading-relaxed font-body text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision is guided by our commitment to environmental responsibility and building a cleaner future.",
    color: "bg-gradient-to-br from-primary/5 to-accent/5"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously pushing boundaries of biogas technology with cutting-edge solutions for maximum efficiency.",
    color: "bg-gradient-to-br from-accent/5 to-primary/5"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships with clients, communities, and stakeholders based on trust and growth.",
    color: "bg-gradient-to-br from-primary/5 to-accent/5"
  },
  {
    icon: Target,
    title: "Impact at Scale",
    description: "Making substantial, measurable impact on India's renewable energy landscape and carbon reduction.",
    color: "bg-gradient-to-br from-accent/5 to-primary/5"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency and ethical practices form the foundation of every project we undertake.",
    color: "bg-gradient-to-br from-primary/5 to-accent/5"
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "Striving for operational excellence in every plant we design, build, and operate.",
    color: "bg-gradient-to-br from-accent/5 to-primary/5"
  }
];

const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium font-body">
              What We Stand For
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            The principles that guide everything we do at Gruner Renewable.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
              isInView={isInView}
              color={value.color}
            />
          ))}
        </div>

        {/* Bottom commitment banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-10 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-white/80" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-body">Our Promise</span>
                <Sparkles className="w-5 h-5 text-white/80" />
              </div>
              <p className="text-xl md:text-2xl font-heading font-semibold text-white leading-relaxed">
                "Building sustainable infrastructure that powers India's clean energy future, 
                one Bio-CNG plant at a time."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
