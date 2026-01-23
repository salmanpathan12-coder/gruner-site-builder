import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Target, Users, Globe, Shield, Lightbulb, Heart, Sparkles } from "lucide-react";
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
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl overflow-hidden">
        {/* Gradient border with dynamic color */}
        <div className={`absolute inset-0 rounded-2xl ${accent} p-[1px]`}>
          <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[hsl(220,25%,8%)]" />
        </div>
        
        <div className="relative z-10 h-full p-7 md:p-8">
          {/* Hover glow effect */}
          <div className={`absolute inset-0 ${accent.replace('/40', '/10').replace('/35', '/8')} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`} />
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className={`relative w-14 h-14 rounded-xl ${accent} flex items-center justify-center mb-6 shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="relative text-xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="relative text-white/45 leading-relaxed font-body text-sm">
            {description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            initial={{ width: '20%' }}
            whileHover={{ width: '80%' }}
            transition={{ duration: 0.5 }}
            className={`absolute bottom-0 left-0 h-[2px] ${accent.replace('bg-gradient-to-br', 'bg-gradient-to-r')}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision is guided by our commitment to environmental responsibility and building a cleaner future.",
    accent: "bg-gradient-to-br from-primary/40 via-primary/20 to-accent/10"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously pushing boundaries of biogas technology with cutting-edge solutions for maximum efficiency.",
    accent: "bg-gradient-to-br from-accent/35 via-accent/15 to-primary/10"
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships with clients, communities, and stakeholders based on trust and growth.",
    accent: "bg-gradient-to-br from-[hsl(180,50%,35%)]/40 via-primary/15 to-transparent"
  },
  {
    icon: Globe,
    title: "Impact at Scale",
    description: "Making substantial, measurable impact on India's renewable energy landscape and carbon reduction.",
    accent: "bg-gradient-to-br from-primary/35 via-accent/15 to-transparent"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Complete transparency and ethical practices form the foundation of every project we undertake.",
    accent: "bg-gradient-to-br from-accent/40 via-primary/15 to-transparent"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for operational excellence in every plant we design, build, and operate.",
    accent: "bg-gradient-to-br from-primary/40 via-[hsl(150,40%,30%)]/20 to-transparent"
  }
];

const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(220,25%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,6%)] via-[hsl(210,22%,7%)] to-[hsl(200,20%,7%)]" />
        
        {/* Subtle ambient lighting */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-primary/[0.06] via-transparent to-transparent blur-[100px]"
        />
        
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 py-28 md:py-36">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 mb-8"
          >
            <Heart className="w-7 h-7 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-body text-lg leading-relaxed">
            The principles that guide everything we do at Gruner Renewable, driving our mission forward.
          </p>
        </motion.div>

        {/* Values Grid - Modern bento layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
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

        {/* Bottom highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30" />
            <div className="relative p-8 md:p-10 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-body">Our Commitment</span>
                <Sparkles className="w-5 h-5 text-accent" />
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
