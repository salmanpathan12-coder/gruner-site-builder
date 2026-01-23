import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Factory, TrendingUp, Users, MapPin, Leaf, BarChart3, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", isInView }: AnimatedCounterProps) => {
  const spring = useSpring(0, { duration: 2500, bounce: 0 });
  const display = useTransform(spring, (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span>{display}</motion.span>;
};

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
  index: number;
  isInView: boolean;
  variant: 'primary' | 'accent' | 'light';
}

const StatCard = ({ value, suffix, prefix, label, icon: Icon, index, isInView, variant }: StatCardProps) => {
  const variants = {
    primary: "bg-gradient-to-br from-[hsl(90,45%,40%)] to-[hsl(120,40%,35%)]",
    accent: "bg-gradient-to-br from-[hsl(150,40%,35%)] to-[hsl(170,35%,30%)]",
    light: "bg-white border border-[hsl(90,25%,85%)] shadow-lg shadow-[hsl(150,20%,50%)]/8"
  };

  const isLight = variant === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group"
    >
      <div className={`relative h-full rounded-2xl p-6 overflow-hidden transition-all duration-400 ${variants[variant]}`}>
        {/* Decorative accent */}
        {!isLight && (
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-500" />
        )}
        {isLight && (
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[hsl(90,40%,85%)]/50 to-transparent rounded-full translate-y-1/3 translate-x-1/3" />
        )}

        <div className="relative">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
            isLight 
              ? 'bg-gradient-to-br from-[hsl(90,40%,88%)] to-[hsl(150,35%,85%)]' 
              : 'bg-white/15'
          }`}>
            <Icon className={`w-5 h-5 ${isLight ? 'text-[hsl(90,45%,35%)]' : 'text-white'}`} />
          </div>

          <div className={`font-heading font-bold text-3xl md:text-4xl mb-1.5 ${
            isLight ? 'text-[hsl(150,25%,18%)]' : 'text-white'
          }`}>
            <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
          </div>
          <div className={`text-sm font-body ${isLight ? 'text-[hsl(150,15%,45%)]' : 'text-white/75'}`}>
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  { value: 63, suffix: "+", label: "Bio-CNG Plants", icon: Factory, variant: 'primary' as const },
  { value: 1500, suffix: "+", prefix: "₹", label: "Crore Value", icon: TrendingUp, variant: 'light' as const },
  { value: 8, suffix: "+", label: "Indian States", icon: MapPin, variant: 'accent' as const },
  { value: 250, suffix: "+", label: "Team Members", icon: Users, variant: 'light' as const },
  { value: 60, suffix: "M", prefix: "$", label: "Funding Raised", icon: BarChart3, variant: 'light' as const },
  { value: 9000, suffix: "+", label: "Engineering Hours", icon: Leaf, variant: 'primary' as const },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      {/* Soft sage/mint gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(100,30%,94%)] via-[hsl(120,25%,96%)] to-[hsl(90,25%,93%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, hsl(90, 50%, 70%) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(150, 40%, 65%) 0%, transparent 70%)" }}
        animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
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
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[hsl(90,35%,85%)] to-[hsl(150,30%,88%)] border border-[hsl(90,30%,75%)] mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Zap className="w-4 h-4 text-[hsl(90,45%,35%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[hsl(90,35%,30%)] font-semibold font-body">
              Our Impact
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(150,25%,15%)] mb-4 leading-tight">
            Driving{" "}
            <span className="bg-gradient-to-r from-[hsl(90,50%,40%)] to-[hsl(150,45%,38%)] bg-clip-text text-transparent">
              Measurable
            </span>{" "}
            Change
          </h2>
          <p className="text-[hsl(150,15%,45%)] max-w-2xl mx-auto font-body text-base md:text-lg">
            Real metrics that showcase our commitment to transforming India's clean energy landscape.
          </p>
        </motion.div>

        {/* Stats grid - Creative layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              icon={stat.icon}
              index={index}
              isInView={isInView}
              variant={stat.variant}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[hsl(150,15%,50%)] font-body">
            <span className="font-semibold text-[hsl(90,40%,35%)]">Impact</span> that drives real environmental change across India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
