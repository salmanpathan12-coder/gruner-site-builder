import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, Target, Users, Shield, Lightbulb, Heart, Diamond, Sparkles, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  gradient: string;
  iconBg: string;
}

const ValueCard = ({ icon: Icon, title, description, index, isInView, gradient, iconBg }: ValueCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.06 + index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full bg-white rounded-2xl p-5 md:p-6 shadow-lg shadow-[hsl(270,25%,50%)]/8 border border-[hsl(270,25%,90%)] overflow-hidden transition-all duration-400 hover:shadow-xl hover:border-[hsl(270,30%,82%)] hover:-translate-y-1">
        {/* Gradient overlay on hover */}
        <motion.div 
          className={`absolute inset-0 ${gradient} rounded-2xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.04 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon container */}
        <div className={`relative w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-105`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <h3 className="relative text-base md:text-lg font-heading font-bold text-[hsl(270,20%,18%)] mb-2 group-hover:text-[hsl(270,30%,25%)] transition-colors">
          {title}
        </h3>
        <p className="relative text-[hsl(270,10%,45%)] text-sm leading-relaxed font-body">
          {description}
        </p>

        {/* Hover indicator */}
        <motion.div 
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -5 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-4 h-4 text-[hsl(270,40%,55%)]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision guided by environmental responsibility and a cleaner future.",
    gradient: "bg-gradient-to-br from-[hsl(120,45%,45%)] to-[hsl(150,40%,40%)]",
    iconBg: "bg-gradient-to-br from-[hsl(120,45%,45%)] to-[hsl(150,40%,40%)]"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries of biogas technology with cutting-edge R&D.",
    gradient: "bg-gradient-to-br from-[hsl(45,60%,50%)] to-[hsl(35,55%,45%)]",
    iconBg: "bg-gradient-to-br from-[hsl(45,55%,50%)] to-[hsl(35,50%,45%)]"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships based on trust and mutual growth.",
    gradient: "bg-gradient-to-br from-[hsl(200,55%,48%)] to-[hsl(210,50%,42%)]",
    iconBg: "bg-gradient-to-br from-[hsl(200,50%,48%)] to-[hsl(210,45%,42%)]"
  },
  {
    icon: Target,
    title: "Impact at Scale",
    description: "Making substantial, measurable impact on India's energy landscape.",
    gradient: "bg-gradient-to-br from-[hsl(168,50%,40%)] to-[hsl(180,45%,35%)]",
    iconBg: "bg-gradient-to-br from-[hsl(168,50%,40%)] to-[hsl(180,45%,35%)]"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency and ethical practices in every project.",
    gradient: "bg-gradient-to-br from-[hsl(260,45%,52%)] to-[hsl(280,40%,45%)]",
    iconBg: "bg-gradient-to-br from-[hsl(260,45%,52%)] to-[hsl(280,40%,45%)]"
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "Striving for operational excellence and quality in every plant we build.",
    gradient: "bg-gradient-to-br from-[hsl(340,55%,52%)] to-[hsl(350,50%,45%)]",
    iconBg: "bg-gradient-to-br from-[hsl(340,50%,52%)] to-[hsl(350,45%,45%)]"
  }
];

const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24">
      {/* Soft purple/lavender gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,35%,97%)] via-[hsl(280,30%,96%)] to-[hsl(260,28%,95%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(270, 45%, 75%) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30"
        style={{ background: "radial-gradient(circle, hsl(200, 40%, 70%) 0%, transparent 70%)" }}
        animate={{ y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[hsl(270,35%,92%)] border border-[hsl(270,30%,85%)] mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Diamond className="w-4 h-4 text-[hsl(270,45%,50%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[hsl(270,35%,35%)] font-semibold font-body">
              What We Stand For
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(270,20%,18%)] mb-3 leading-tight">
            Our Core{" "}
            <span className="bg-gradient-to-r from-[hsl(270,50%,50%)] to-[hsl(200,50%,48%)] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-[hsl(270,15%,45%)] max-w-xl mx-auto font-body text-base">
            The principles that guide everything we do at Gruner Renewable.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
              isInView={isInView}
              gradient={value.gradient}
              iconBg={value.iconBg}
            />
          ))}
        </div>

        {/* Promise banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-[hsl(270,45%,48%)] via-[hsl(260,42%,45%)] to-[hsl(200,48%,45%)] rounded-2xl p-6 md:p-7 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex items-center justify-center gap-2.5 mb-2.5">
              <Sparkles className="w-4 h-4 text-white/70" />
              <span className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold font-body">Our Promise</span>
              <Sparkles className="w-4 h-4 text-white/70" />
            </div>
            <p className="text-base md:text-lg font-heading font-medium text-white leading-relaxed max-w-2xl mx-auto">
              "Building sustainable infrastructure that powers India's clean energy future, one plant at a time."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
