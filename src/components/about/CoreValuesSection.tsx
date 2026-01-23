import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Target, Users, Shield, Lightbulb, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  accentColor: string;
}

const ValueCard = ({ icon: Icon, title, description, index, isInView, accentColor }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.07 }}
      className="group relative"
    >
      <div className="relative h-full bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5">
        {/* Accent line */}
        <div className={`absolute top-0 left-5 right-5 h-0.5 ${accentColor} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />
        
        {/* Icon */}
        <div className={`w-10 h-10 rounded-lg ${accentColor} flex items-center justify-center mb-3 shadow-sm`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-sm font-heading font-bold text-foreground mb-1.5">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed font-body">
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
    description: "Every decision guided by environmental responsibility.",
    accentColor: "bg-gradient-to-br from-[hsl(160,45%,40%)] to-[hsl(175,40%,35%)]"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries of biogas technology.",
    accentColor: "bg-gradient-to-br from-[hsl(45,65%,50%)] to-[hsl(35,70%,45%)]"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building relationships based on trust and growth.",
    accentColor: "bg-gradient-to-br from-[hsl(220,50%,50%)] to-[hsl(240,45%,45%)]"
  },
  {
    icon: Target,
    title: "Impact at Scale",
    description: "Making substantial impact on renewable energy.",
    accentColor: "bg-gradient-to-br from-[hsl(280,40%,50%)] to-[hsl(260,45%,45%)]"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency in every project.",
    accentColor: "bg-gradient-to-br from-[hsl(200,50%,45%)] to-[hsl(210,55%,40%)]"
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "Striving for operational excellence always.",
    accentColor: "bg-gradient-to-br from-[hsl(350,50%,55%)] to-[hsl(340,55%,45%)]"
  }
];

const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Mint to sage gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(160,25%,92%)] via-[hsl(150,20%,94%)] to-[hsl(140,25%,90%)]" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(160,40%,30%) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Accent orbs */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-gradient-to-l from-[hsl(45,50%,70%)]/20 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-[hsl(160,40%,60%)]/15 to-transparent rounded-full blur-[80px]" />

      <div className="container-wide relative z-10">
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(160,40%,35%)]/10 border border-[hsl(160,40%,35%)]/20 mb-4">
            <Heart className="w-3.5 h-3.5 text-[hsl(160,40%,35%)]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[hsl(160,40%,35%)] font-medium font-body">
              What We Stand For
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
            Our Core <span className="text-[hsl(160,40%,35%)]">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-body text-sm">
            The principles that guide everything we do.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              {...value}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Compact promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-[hsl(160,35%,30%)] to-[hsl(175,30%,25%)] rounded-xl p-5 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsl(45,60%,55%)]/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="relative text-sm md:text-base font-heading font-medium text-white leading-relaxed">
              "Building sustainable infrastructure that powers India's clean energy future."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
