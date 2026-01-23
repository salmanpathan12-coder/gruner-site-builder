import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Target, Users, Shield, Lightbulb, Heart, Sparkles, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  accent: string;
}

const ValueCard = ({ icon: Icon, title, description, index, isInView, accent }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg shadow-[hsl(150,20%,50%)]/8 border border-[hsl(90,25%,88%)] overflow-hidden transition-all duration-400 hover:shadow-xl hover:border-[hsl(90,30%,75%)]">
        {/* Hover gradient overlay */}
        <motion.div 
          className={`absolute inset-0 ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
        
        {/* Icon */}
        <div className={`relative w-12 h-12 rounded-xl ${accent} flex items-center justify-center mb-5 shadow-md`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <h3 className="relative text-lg font-heading font-bold text-[hsl(150,25%,18%)] mb-2 group-hover:text-[hsl(150,25%,18%)]">
          {title}
        </h3>
        <p className="relative text-[hsl(150,12%,45%)] text-sm leading-relaxed font-body group-hover:text-[hsl(150,10%,40%)]">
          {description}
        </p>

        {/* Hover arrow */}
        <motion.div 
          className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowRight className="w-4 h-4 text-[hsl(90,45%,40%)]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision guided by environmental responsibility and building a cleaner future for all.",
    accent: "bg-gradient-to-br from-[hsl(90,45%,45%)] to-[hsl(120,40%,40%)]"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of biogas technology with cutting-edge research and development.",
    accent: "bg-gradient-to-br from-[hsl(45,55%,50%)] to-[hsl(35,50%,45%)]"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships based on trust, transparency, and mutual growth.",
    accent: "bg-gradient-to-br from-[hsl(200,50%,45%)] to-[hsl(210,45%,40%)]"
  },
  {
    icon: Target,
    title: "Impact at Scale",
    description: "Making substantial, measurable impact on India's renewable energy landscape.",
    accent: "bg-gradient-to-br from-[hsl(150,45%,38%)] to-[hsl(170,40%,35%)]"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency and ethical practices in every project we undertake.",
    accent: "bg-gradient-to-br from-[hsl(250,40%,50%)] to-[hsl(270,35%,45%)]"
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "Striving for operational excellence and quality in every plant we build.",
    accent: "bg-gradient-to-br from-[hsl(340,50%,50%)] to-[hsl(350,45%,45%)]"
  }
];

const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      {/* Creamy ivory gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(48,45%,96%)] via-[hsl(45,40%,95%)] to-[hsl(40,35%,94%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(90, 45%, 75%) 0%, transparent 70%)" }}
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, hsl(45, 55%, 80%) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.span 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[hsl(45,40%,92%)] border border-[hsl(45,35%,80%)] mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Heart className="w-4 h-4 text-[hsl(45,50%,40%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[hsl(45,40%,30%)] font-semibold font-body">
              What We Stand For
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(150,25%,15%)] mb-4 leading-tight">
            Our Core{" "}
            <span className="bg-gradient-to-r from-[hsl(90,50%,40%)] to-[hsl(150,45%,38%)] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-[hsl(150,15%,45%)] max-w-2xl mx-auto font-body text-base md:text-lg">
            The principles that guide everything we do at Gruner Renewable Energy.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {coreValues.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
              isInView={isInView}
              accent={value.accent}
            />
          ))}
        </div>

        {/* Promise banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-[hsl(90,40%,40%)] via-[hsl(120,38%,38%)] to-[hsl(150,42%,36%)] rounded-2xl p-8 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-white/80" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold font-body">Our Promise</span>
              <Sparkles className="w-5 h-5 text-white/80" />
            </div>
            <p className="text-lg md:text-xl font-heading font-medium text-white leading-relaxed max-w-2xl mx-auto">
              "Building sustainable infrastructure that powers India's clean energy future, one plant at a time."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
