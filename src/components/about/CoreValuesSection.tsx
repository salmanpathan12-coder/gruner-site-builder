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
      <div className="relative h-full bg-white rounded-xl p-5 shadow-md shadow-foreground/5 border border-foreground/5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className={`relative w-10 h-10 rounded-lg ${gradient.replace('/5', '')} flex items-center justify-center mb-4`}>
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <h3 className="relative text-base font-heading font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="relative text-muted-foreground text-sm leading-relaxed font-body">
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
      {/* Soft green-tinted background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(140,20%,96%)] via-[hsl(160,15%,97%)] to-[hsl(150,20%,95%)]" />
      
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
      }} className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Heart className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs tracking-[0.12em] uppercase text-primary font-medium font-body">
              What We Stand For
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
            Our Core <span className="text-accent">Values</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-sm">
            The principles that guide everything we do at Gruner Renewable.
          </p>
        </motion.div>

        {/* Compact values grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
      }} className="mt-10 max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary via-primary/90 to-accent rounded-xl p-6 text-center overflow-hidden">
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