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
  gradient: string;
}
const ValueCard = ({
  icon: Icon,
  title,
  description,
  index,
  isInView,
  gradient
}: ValueCardProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 25
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.5,
    delay: 0.05 + index * 0.08
  }} className="group">
      <div className="relative h-full bg-white p-5 shadow-md shadow-primary/5 border border-primary/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/20 rounded-md">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon with gradient */}
        <div className="relative w-10 h-10 rounded-md bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <h3 className="relative text-base font-heading font-bold mb-2 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="relative text-muted-foreground text-sm leading-relaxed font-body group-hover:text-foreground/70 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>;
};
const coreValues = [{
  icon: Leaf,
  title: "Sustainability First",
  description: "Every decision guided by environmental responsibility and building a cleaner future.",
  gradient: "bg-gradient-to-br from-primary to-accent"
}, {
  icon: Lightbulb,
  title: "Innovation",
  description: "Pushing boundaries of biogas technology with cutting-edge solutions.",
  gradient: "bg-gradient-to-br from-accent to-primary"
}, {
  icon: Users,
  title: "Partnership",
  description: "Building long-term relationships based on trust and mutual growth.",
  gradient: "bg-gradient-to-br from-[hsl(200,60%,45%)] to-primary"
}, {
  icon: Target,
  title: "Impact at Scale",
  description: "Making substantial impact on India's renewable energy landscape.",
  gradient: "bg-gradient-to-br from-primary to-[hsl(160,60%,40%)]"
}, {
  icon: Shield,
  title: "Integrity",
  description: "Complete transparency and ethical practices in every project.",
  gradient: "bg-gradient-to-br from-[hsl(180,50%,40%)] to-accent"
}, {
  icon: Heart,
  title: "Excellence",
  description: "Striving for operational excellence in every plant we build.",
  gradient: "bg-gradient-to-br from-accent to-[hsl(140,50%,45%)]"
}];
const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,30%,96%)] via-[hsl(40,25%,94%)] to-[hsl(35,20%,92%)]" />
      
      {/* Accent orbs */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-[100px]" />

      <div className="container-wide relative z-10">
        {/* Compact header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-left mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-primary/10 border border-primary/20 mb-4">
            <Heart className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs tracking-[0.12em] uppercase text-primary font-medium font-body">
              What We Stand For
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Our Core <span className="text-accent">Values</span>
          </h2>
          <p className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            The principles that guide everything we do at Gruner Renewable.
          </p>
        </motion.div>

        {/* Compact values grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {coreValues.map((value, index) => <ValueCard key={value.title} icon={value.icon} title={value.title} description={value.description} index={index} isInView={isInView} gradient={value.gradient} />)}
        </div>

        {/* Compact promise banner */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-10 w-full">
          <div className="relative bg-gradient-to-r from-primary via-primary/90 to-accent p-6 text-center overflow-hidden rounded w-full">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-white/80" />
              <span className="text-xs uppercase tracking-[0.15em] text-white/70 font-body">Our Promise</span>
              <Sparkles className="w-4 h-4 text-white/80" />
            </div>
            <p className="text-base md:text-lg font-heading font-medium text-white leading-relaxed">
              "Building sustainable infrastructure that powers India's clean energy future."
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CoreValuesSection;