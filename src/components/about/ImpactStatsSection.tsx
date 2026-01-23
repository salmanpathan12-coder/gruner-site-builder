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

const AnimatedCounter = ({ value, suffix = "", prefix = "", isInView }: AnimatedCounterProps) => {
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
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
  sublabel?: string;
  icon: LucideIcon;
  index: number;
  isInView: boolean;
  featured?: boolean;
}

const StatCard = ({ value, suffix, prefix, label, sublabel, icon: Icon, index, isInView, featured }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
        featured 
          ? 'bg-gradient-to-br from-primary to-primary/90 p-8 md:p-10' 
          : 'bg-white p-6 md:p-8 shadow-lg shadow-foreground/5 border border-foreground/5 hover:shadow-xl hover:shadow-primary/10'
      }`}>
        {/* Decorative elements */}
        {featured && (
          <>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
          </>
        )}

        <div className="relative flex flex-col h-full">
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
            featured 
              ? 'bg-white/20' 
              : 'bg-gradient-to-br from-primary/10 to-accent/10'
          }`}>
            <Icon className={`w-6 h-6 ${featured ? 'text-white' : 'text-primary'}`} />
          </div>

          {/* Content */}
          <div className="mt-auto">
            <div className={`font-heading font-bold mb-2 ${
              featured 
                ? 'text-5xl md:text-6xl lg:text-7xl text-white' 
                : 'text-4xl md:text-5xl text-foreground'
            }`}>
              <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
            </div>
            <div className={`font-body ${featured ? 'text-white/80 text-lg' : 'text-muted-foreground text-sm'}`}>
              {label}
            </div>
            {sublabel && (
              <div className={`text-xs mt-1 font-body ${featured ? 'text-white/60' : 'text-muted-foreground/60'}`}>
                {sublabel}
              </div>
            )}
          </div>

          {/* Hover effect line */}
          {!featured && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: '0%' }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.4 }}
            />
          )}
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
    sublabel: "Operational across India",
    icon: Factory,
    featured: true
  },
  { 
    value: 1500, 
    suffix: "+", 
    prefix: "₹", 
    label: "Crore Project Value", 
    icon: TrendingUp
  },
  { 
    value: 8, 
    suffix: "+", 
    label: "Indian States", 
    sublabel: "Pan-India presence",
    icon: MapPin
  },
  { 
    value: 250, 
    suffix: "+", 
    label: "Team Members", 
    icon: Users
  },
  { 
    value: 60, 
    suffix: "M", 
    prefix: "$", 
    label: "Funding Secured", 
    icon: BarChart3
  },
  { 
    value: 9000, 
    suffix: "+", 
    label: "Engineering Hours", 
    sublabel: "Annual expertise",
    icon: Leaf
  },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />
      
      {/* Subtle patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium font-body">
              Our Impact
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Driving <span className="text-primary">Measurable</span> Change
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Real metrics that showcase our commitment to India's clean energy transformation.
          </p>
        </motion.div>

        {/* Stats Grid - Modern bento layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={stat.icon}
              index={index}
              isInView={isInView}
              featured={stat.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
