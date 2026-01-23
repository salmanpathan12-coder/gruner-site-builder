import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Factory, TrendingUp, Users, Award, Globe, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
  delay: number;
  isInView: boolean;
  gradient: string;
}

const AnimatedNumber = ({ value, suffix = "", prefix = "", isInView }: { value: number; suffix?: string; prefix?: string; isInView: boolean }) => {
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span>{display}</motion.span>;
};

const StatItem = ({ value, suffix, prefix, label, icon: Icon, delay, isInView, gradient }: StatItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      <div className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/20">
        {/* Background glow on hover */}
        <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full" />
        
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center mb-5"
        >
          <Icon className="w-5 h-5 text-primary" />
        </motion.div>

        {/* Number */}
        <div className="relative text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
          <AnimatedNumber value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
        </div>

        {/* Label */}
        <div className="relative text-sm text-white/40 uppercase tracking-wider font-body">
          {label}
        </div>

        {/* Bottom gradient line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '40%' } : {}}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
        />
      </div>
    </motion.div>
  );
};

const stats = [
  { value: 63, suffix: "+", label: "Plants Nationwide", icon: Factory, gradient: "bg-gradient-to-br from-primary/10 to-transparent" },
  { value: 9000, suffix: "+", label: "Engineering Hours", icon: TrendingUp, gradient: "bg-gradient-to-br from-accent/10 to-transparent" },
  { value: 250, suffix: "+", label: "Team Members", icon: Users, gradient: "bg-gradient-to-br from-primary/10 to-transparent" },
  { value: 1500, suffix: "+ Cr", prefix: "₹", label: "Project Orders", icon: Award, gradient: "bg-gradient-to-br from-accent/10 to-transparent" },
  { value: 8, suffix: "+", label: "States Covered", icon: Globe, gradient: "bg-gradient-to-br from-primary/10 to-transparent" },
  { value: 60, suffix: "M", prefix: "$", label: "Funding Secured", icon: Leaf, gradient: "bg-gradient-to-br from-accent/10 to-transparent" },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(168,20%,8%)] via-[hsl(200,20%,8%)] to-[hsl(220,20%,8%)]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/8 to-transparent blur-[80px]"
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
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
              Our Impact
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-l from-transparent to-primary"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-5">
            Driving Change at Scale
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-body text-lg">
            Real numbers that reflect our commitment to transforming India's clean energy landscape.
          </p>
        </motion.div>

        {/* Stats grid - Bento-style layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              icon={stat.icon}
              delay={0.1 + index * 0.08}
              isInView={isInView}
              gradient={stat.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
