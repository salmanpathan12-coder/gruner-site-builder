import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Factory, TrendingUp, Users, MapPin, Leaf, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}
const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  isInView
}: AnimatedCounterProps) => {
  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0
  });
  const display = useTransform(spring, current => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);
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
  variant: 'primary' | 'dark' | 'light';
}
const StatCard = ({
  value,
  suffix,
  prefix,
  label,
  icon: Icon,
  index,
  isInView,
  variant
}: StatCardProps) => {
  const variants = {
    primary: "bg-gradient-to-br from-primary to-primary/90 text-white",
    dark: "bg-gradient-to-br from-[hsl(200,25%,15%)] to-[hsl(180,20%,12%)] text-white",
    light: "bg-white text-foreground shadow-lg shadow-foreground/5 border border-foreground/5"
  };
  return <motion.div initial={{
    opacity: 0,
    y: 30,
    scale: 0.95
  }} animate={isInView ? {
    opacity: 1,
    y: 0,
    scale: 1
  } : {}} transition={{
    duration: 0.5,
    delay: 0.05 + index * 0.08
  }} className="group rounded">
      <div className={`relative h-full rounded-xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${variants[variant]}`}>
        {/* Decorative accent */}
        {variant === 'primary' && <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />}
        {variant === 'dark' && <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />}

        <div className="relative flex items-start gap-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${variant === 'light' ? 'bg-gradient-to-br from-primary/10 to-accent/10' : 'bg-white/15'}`}>
            <Icon className={`w-5 h-5 ${variant === 'light' ? 'text-primary' : 'text-white'}`} />
          </div>

          <div>
            <div className={`font-heading font-bold text-2xl md:text-3xl mb-1 ${variant === 'light' ? 'text-foreground' : 'text-white'}`}>
              <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
            </div>
            <div className={`text-xs font-body ${variant === 'light' ? 'text-muted-foreground' : 'text-white/70'}`}>
              {label}
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};
const stats = [{
  value: 63,
  suffix: "+",
  label: "Bio-CNG Plants",
  icon: Factory,
  variant: 'primary' as const
}, {
  value: 1500,
  suffix: "+",
  prefix: "₹",
  label: "Crore Value",
  icon: TrendingUp,
  variant: 'light' as const
}, {
  value: 8,
  suffix: "+",
  label: "Indian States",
  icon: MapPin,
  variant: 'dark' as const
}, {
  value: 250,
  suffix: "+",
  label: "Team Members",
  icon: Users,
  variant: 'light' as const
}, {
  value: 60,
  suffix: "M",
  prefix: "$",
  label: "Funding",
  icon: BarChart3,
  variant: 'light' as const
}, {
  value: 9000,
  suffix: "+",
  label: "Eng. Hours",
  icon: Leaf,
  variant: 'primary' as const
}];
const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Teal-blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180,25%,92%)] via-[hsl(190,20%,95%)] to-[hsl(200,25%,93%)]" />
      
      {/* Accent orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-[80px]" />

      <div className="container-wide relative z-10 rounded">
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
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs tracking-[0.12em] uppercase text-primary font-medium font-body">
              Our Impact
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Driving <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent ">Measurable</span> Change
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-sm">
            Real metrics showcasing our commitment to India's clean energy transformation.
          </p>
        </motion.div>

        {/* Compact stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto rounded">
          {stats.map((stat, index) => <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} prefix={stat.prefix} label={stat.label} icon={stat.icon} index={index} isInView={isInView} variant={stat.variant} />)}
        </div>
      </div>
    </section>;
};
export default ImpactStatsSection;