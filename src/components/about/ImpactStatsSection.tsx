import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Factory, TrendingUp, Users, Award, Globe, Leaf, Zap, Building } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  delay: number;
  isInView: boolean;
  size?: "large" | "medium" | "small";
  gradient: string;
}

const AnimatedNumber = ({ value, suffix = "", prefix = "", isInView }: { value: number; suffix?: string; prefix?: string; isInView: boolean }) => {
  const spring = useSpring(0, { duration: 2500, bounce: 0 });
  const display = useTransform(spring, (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span>{display}</motion.span>;
};

const StatItem = ({ value, suffix, prefix, label, sublabel, icon: Icon, delay, isInView, size = "medium", gradient }: StatItemProps) => {
  const sizeClasses = {
    large: "lg:col-span-2 lg:row-span-2",
    medium: "lg:col-span-1 lg:row-span-1",
    small: "lg:col-span-1 lg:row-span-1"
  };

  const numberSize = {
    large: "text-6xl md:text-7xl lg:text-8xl",
    medium: "text-4xl md:text-5xl",
    small: "text-3xl md:text-4xl"
  };

  const iconSize = {
    large: "w-8 h-8",
    medium: "w-5 h-5",
    small: "w-4 h-4"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative ${sizeClasses[size]}`}
    >
      <div className="relative h-full rounded-2xl overflow-hidden">
        {/* Gradient border */}
        <div className={`absolute inset-0 rounded-2xl ${gradient} p-[1px]`}>
          <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[hsl(220,25%,8%)]" />
        </div>

        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
          {/* Background glow on hover */}
          <div className={`absolute inset-0 ${gradient.replace('from-', 'from-').replace('/40', '/10').replace('/30', '/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />
          
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-bl-full" />
          
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className={`relative ${size === 'large' ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20 flex items-center justify-center mb-auto`}
          >
            <Icon className={`${iconSize[size]} text-primary`} />
          </motion.div>

          <div className="relative mt-6">
            {/* Number with premium styling */}
            <div className={`${numberSize[size]} font-heading font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent mb-2`}>
              <AnimatedNumber value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
            </div>

            {/* Label */}
            <div className="text-sm text-white/50 uppercase tracking-wider font-body">
              {label}
            </div>
            {sublabel && (
              <div className="text-xs text-white/30 font-body mt-1">
                {sublabel}
              </div>
            )}

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '50%' } : {}}
              transition={{ duration: 1, delay: delay + 0.4 }}
              className="absolute -bottom-4 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  { 
    value: 63, 
    suffix: "+", 
    label: "Bio-CNG Plants", 
    sublabel: "Across India",
    icon: Factory, 
    size: "large" as const,
    gradient: "bg-gradient-to-br from-primary/40 via-primary/20 to-accent/10" 
  },
  { 
    value: 1500, 
    suffix: "+", 
    prefix: "₹", 
    label: "Crore", 
    sublabel: "Project Orders",
    icon: Award, 
    size: "medium" as const,
    gradient: "bg-gradient-to-br from-accent/35 via-accent/15 to-primary/10" 
  },
  { 
    value: 8, 
    suffix: "+", 
    label: "States", 
    sublabel: "Pan-India Presence",
    icon: Globe, 
    size: "medium" as const,
    gradient: "bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" 
  },
  { 
    value: 250, 
    suffix: "+", 
    label: "Team Members", 
    icon: Users, 
    size: "medium" as const,
    gradient: "bg-gradient-to-br from-[hsl(180,50%,30%)]/30 via-primary/10 to-transparent" 
  },
  { 
    value: 9000, 
    suffix: "+", 
    label: "Engineering Hours", 
    icon: TrendingUp, 
    size: "medium" as const,
    gradient: "bg-gradient-to-br from-accent/30 via-accent/10 to-transparent" 
  },
  { 
    value: 60, 
    suffix: "M", 
    prefix: "$", 
    label: "Funding Secured", 
    icon: Building, 
    size: "medium" as const,
    gradient: "bg-gradient-to-br from-primary/35 via-accent/15 to-transparent" 
  },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(220,25%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(168,25%,6%)] via-[hsl(200,22%,7%)] to-[hsl(220,25%,6%)]" />
        
        {/* Dynamic ambient lighting */}
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent/10 via-transparent to-transparent blur-[100px]"
        />

        {/* Premium grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
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
            <Leaf className="w-7 h-7 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Driving <span className="bg-gradient-to-r from-primary via-[hsl(140,50%,45%)] to-accent bg-clip-text text-transparent">Impact</span> at Scale
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Real metrics that demonstrate our commitment to transforming India's clean energy landscape.
          </p>
        </motion.div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={stat.icon}
              delay={0.1 + index * 0.1}
              isInView={isInView}
              size={stat.size}
              gradient={stat.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
