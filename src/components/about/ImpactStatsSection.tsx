import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Factory, TrendingUp, Users, MapPin, Leaf, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const AnimatedCounter = ({ value, suffix = "", prefix = "", isInView }: { 
  value: number; suffix?: string; prefix?: string; isInView: boolean 
}) => {
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) spring.set(value);
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
  const sizeStyles = {
    large: "lg:col-span-2 lg:row-span-2 p-6 md:p-7",
    medium: "lg:col-span-1 lg:row-span-2 p-5",
    small: "lg:col-span-1 p-4"
  };

  const textStyles = {
    large: "text-4xl md:text-5xl",
    medium: "text-2xl md:text-3xl",
    small: "text-xl md:text-2xl"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.07 }}
      className={`group relative bg-white rounded-xl shadow-md shadow-foreground/5 border border-foreground/5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${sizeStyles[size]}`}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(260,35%,45%)]/5 to-[hsl(220,40%,50%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full flex flex-col justify-between">
        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(260,35%,50%)] to-[hsl(220,40%,45%)] flex items-center justify-center mb-3 ${size === 'large' ? 'w-11 h-11' : ''}`}>
          <Icon className={`text-white ${size === 'large' ? 'w-5 h-5' : 'w-4 h-4'}`} />
        </div>

        <div>
          <div className={`font-heading font-bold text-foreground mb-1 ${textStyles[size]}`}>
            <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
          </div>
          <div className={`text-muted-foreground font-body ${size === 'large' ? 'text-sm' : 'text-xs'}`}>
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  { value: 63, suffix: "+", label: "Bio-CNG Plants Commissioned", icon: Factory, size: 'large' as const },
  { value: 1500, suffix: "", prefix: "₹", label: "Crore Project Value", icon: TrendingUp, size: 'medium' as const },
  { value: 8, suffix: "+", label: "Indian States", icon: MapPin, size: 'small' as const },
  { value: 250, suffix: "+", label: "Team Members", icon: Users, size: 'small' as const },
  { value: 9000, suffix: "+", label: "Engineering Hours", icon: Zap, size: 'small' as const },
  { value: 100, suffix: "K+", label: "Tons CO₂ Reduced", icon: Leaf, size: 'small' as const },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Purple-indigo gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(260,25%,94%)] via-[hsl(240,20%,96%)] to-[hsl(220,25%,93%)]" />
      
      {/* Accent orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[hsl(260,40%,65%)]/10 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tl from-[hsl(220,45%,60%)]/10 to-transparent rounded-full blur-[80px]" />

      <div className="container-wide relative z-10">
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(260,40%,50%)]/10 border border-[hsl(260,40%,50%)]/20 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[hsl(260,40%,50%)]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[hsl(260,40%,50%)] font-medium font-body">
              Our Impact
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
            Driving <span className="text-[hsl(260,40%,50%)]">Measurable</span> Change
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-body text-sm">
            Real metrics reflecting our commitment to India's clean energy transformation.
          </p>
        </motion.div>

        {/* Creative bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto auto-rows-fr">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
