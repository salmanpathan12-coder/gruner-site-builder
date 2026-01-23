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

const StatItem = ({ value, suffix, prefix, label, icon: Icon, delay, isInView }: StatItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
    >
      <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500 text-center overflow-hidden">
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center shadow-lg shadow-primary/20"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Number */}
        <div className="relative text-3xl md:text-4xl font-heading font-bold text-white mb-2">
          <AnimatedNumber value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
        </div>

        {/* Label */}
        <div className="relative text-sm text-white/50 uppercase tracking-wider font-body">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  { value: 63, suffix: "+", label: "Plants Nationwide", icon: Factory },
  { value: 9000, suffix: "+", label: "Engineering Hours", icon: TrendingUp },
  { value: 250, suffix: "+", label: "Team Members", icon: Users },
  { value: 1500, suffix: "+ Cr", prefix: "₹", label: "Project Orders", icon: Award },
  { value: 8, suffix: "+", label: "States Covered", icon: Globe },
  { value: 60, suffix: "M", prefix: "$", label: "Funding Secured", icon: Leaf },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-accent/10 to-transparent blur-3xl"
      />

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
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-4 text-white mb-6">
            Driving Change at Scale
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-body text-lg">
            Real numbers that reflect our commitment to transforming India's clean energy landscape.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              icon={stat.icon}
              delay={0.1 + index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
