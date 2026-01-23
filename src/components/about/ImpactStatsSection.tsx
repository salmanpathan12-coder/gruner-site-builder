import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Factory, TrendingUp, Users, MapPin, Leaf, BarChart3, Activity, Flame } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", isInView }: AnimatedCounterProps) => {
  const spring = useSpring(0, { duration: 2200, bounce: 0 });
  const display = useTransform(spring, (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span>{display}</motion.span>;
};

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
  index: number;
  isInView: boolean;
  size: 'large' | 'medium' | 'small';
}

const StatItem = ({ value, suffix, prefix, label, icon: Icon, index, isInView, size }: StatItemProps) => {
  const sizeClasses = {
    large: "col-span-2 row-span-2",
    medium: "col-span-2 md:col-span-1",
    small: "col-span-1"
  };

  const isLarge = size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.08 }}
      whileHover={{ y: -3, scale: 1.01 }}
      className={`group ${sizeClasses[size]}`}
    >
      <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-400 ${
        isLarge 
          ? 'bg-gradient-to-br from-[hsl(168,55%,38%)] via-[hsl(175,50%,35%)] to-[hsl(185,45%,30%)] p-7 md:p-8' 
          : 'bg-white border border-[hsl(168,30%,88%)] shadow-lg shadow-[hsl(168,30%,50%)]/8 p-5 md:p-6 hover:shadow-xl hover:border-[hsl(168,35%,75%)]'
      }`}>
        {/* Background accents */}
        {isLarge && (
          <>
            <motion.div 
              className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"
            />
          </>
        )}
        {!isLarge && (
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[hsl(168,40%,88%)]/40 to-transparent rounded-full translate-y-1/3 translate-x-1/3" />
        )}

        <div className="relative flex flex-col h-full">
          <div className={`rounded-xl flex items-center justify-center mb-4 ${
            isLarge 
              ? 'w-14 h-14 bg-white/15' 
              : 'w-11 h-11 bg-gradient-to-br from-[hsl(168,45%,88%)] to-[hsl(85,40%,88%)]'
          }`}>
            <Icon className={`${isLarge ? 'w-6 h-6 text-white' : 'w-5 h-5 text-[hsl(168,50%,38%)]'}`} />
          </div>

          <div className="mt-auto">
            <div className={`font-heading font-bold mb-1 ${
              isLarge ? 'text-4xl md:text-5xl text-white' : 'text-2xl md:text-3xl text-[hsl(180,25%,15%)]'
            }`}>
              <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
            </div>
            <div className={`text-sm font-body ${isLarge ? 'text-white/70' : 'text-[hsl(180,15%,45%)]'}`}>
              {label}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  { value: 63, suffix: "+", label: "Bio-CNG Plants Delivered", icon: Factory, size: 'large' as const },
  { value: 1500, suffix: "Cr", prefix: "₹", label: "Project Value", icon: TrendingUp, size: 'medium' as const },
  { value: 8, suffix: "+", label: "Indian States", icon: MapPin, size: 'small' as const },
  { value: 250, suffix: "+", label: "Team Members", icon: Users, size: 'small' as const },
  { value: 60, suffix: "M", prefix: "$", label: "Funding Raised", icon: BarChart3, size: 'medium' as const },
  { value: 9000, suffix: "+", label: "Engineering Hours", icon: Activity, size: 'medium' as const },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24">
      {/* Deep teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180,30%,95%)] via-[hsl(175,25%,93%)] to-[hsl(168,28%,92%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(168, 50%, 65%) 0%, transparent 70%)" }}
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] opacity-30"
        style={{ background: "radial-gradient(circle, hsl(85, 45%, 60%) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], scale: [1, 1.15, 1] }}
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
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[hsl(168,40%,88%)] to-[hsl(180,35%,90%)] border border-[hsl(168,35%,80%)] mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Flame className="w-4 h-4 text-[hsl(168,55%,38%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[hsl(168,40%,30%)] font-semibold font-body">
              Our Impact
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(180,25%,15%)] mb-3 leading-tight">
            Driving{" "}
            <span className="bg-gradient-to-r from-[hsl(168,55%,38%)] to-[hsl(85,50%,42%)] bg-clip-text text-transparent">
              Measurable
            </span>{" "}
            Change
          </h2>
          <p className="text-[hsl(180,15%,45%)] max-w-xl mx-auto font-body text-base">
            Real metrics showcasing our commitment to transforming India's energy landscape.
          </p>
        </motion.div>

        {/* Creative bento grid stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              icon={stat.icon}
              index={index}
              isInView={isInView}
              size={stat.size}
            />
          ))}
        </div>

        {/* Bottom accent text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[hsl(180,15%,50%)] font-body flex items-center justify-center gap-2">
            <Leaf className="w-4 h-4 text-[hsl(168,50%,42%)]" />
            <span>Impact that drives real environmental change across India</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
