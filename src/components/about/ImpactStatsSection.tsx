import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Factory, TrendingUp, Users, MapPin, Leaf, BarChart3, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ================================
   Animated Counter
================================ */

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", isInView }: AnimatedCounterProps) => {
  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span>{display}</motion.span>;
};

/* ================================
   CTA Button
================================ */

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  icon?: boolean;
}

const CTAButton = ({ label, onClick, icon = true }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center gap-2
        px-6 py-3
        bg-gradient-to-r from-primary via-primary/90 to-accent
        text-white
        font-medium font-body text-sm
        shadow-lg shadow-primary/25
        hover:shadow-xl hover:shadow-primary/40
        hover:-translate-y-[1px]
        transition-all duration-300
        text-center
        rounded-none
        border border-white/10
      "
    >
      <span>{label}</span>
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};

/* ================================
   Stat Card
================================ */

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: LucideIcon;
  index: number;
  isInView: boolean;
  variant: "primary" | "light";
}

const StatCard = ({ value, suffix, prefix, label, icon: Icon, index, isInView, variant }: StatCardProps) => {
  const variants = {
    primary: "bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20",
    light: "bg-white text-foreground shadow-lg shadow-primary/5 border border-primary/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.05 + index * 0.08,
      }}
    >
      <div
        className={`relative h-full p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${variants[variant]}`}
      >
        {/* Soft accents */}
        {variant === "primary" && (
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 -translate-y-1/2 translate-x-1/2 rounded-full" />
        )}

        {variant === "light" && (
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 translate-y-1/2 -translate-x-1/2 rounded-full" />
        )}

        <div className="relative flex items-start gap-4">
          <div
            className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
              variant === "light" ? "bg-gradient-to-br from-primary/10 to-accent/10" : "bg-white/15"
            }`}
          >
            <Icon className={`w-5 h-5 ${variant === "light" ? "text-primary" : "text-white"}`} />
          </div>

          <div>
            <div
              className={`font-heading font-bold text-2xl md:text-3xl mb-1 ${
                variant === "light" ? "text-foreground" : "text-white"
              }`}
            >
              <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
            </div>

            <div className={`text-xs font-body ${variant === "light" ? "text-muted-foreground" : "text-white/80"}`}>
              {label}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ================================
   Data
================================ */

const stats = [
  { value: 63, suffix: "+", label: "Bio-CNG Plants", icon: Factory, variant: "primary" as const },
  { value: 1500, suffix: "+", prefix: "₹", label: "Crore Value", icon: TrendingUp, variant: "light" as const },
  { value: 8, suffix: "+", label: "Indian States", icon: MapPin, variant: "primary" as const },
  { value: 250, suffix: "+", label: "Team Members", icon: Users, variant: "light" as const },
  { value: 60, suffix: "M", prefix: "$", label: "Funding", icon: BarChart3, variant: "light" as const },
  { value: 9000, suffix: "+", label: "Eng. Hours", icon: Leaf, variant: "primary" as const },
];

/* ================================
   Section
================================ */

const ImpactStatsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* ===== PROFESSIONAL THEME BACKGROUND ===== */}
      <div className="absolute inset-0">
        {/* Base neutral layer */}
        <div className="absolute inset-0 bg-[hsl(160,30%,97%)]" />

        {/* Theme gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-accent/8 to-primary/12" />

        {/* Energy flow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
      </div>

      {/* Theme glow orbs */}
      <div className="absolute top-0 left-[15%] w-[420px] h-[420px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-[15%] w-[360px] h-[360px] bg-accent/15 blur-[110px] rounded-full" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs tracking-[0.12em] uppercase text-primary font-medium font-body">Our Impact</span>
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Driving{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Measurable
            </span>{" "}
            Change
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto font-body text-sm mt-2">
            Real metrics showcasing our commitment to India's clean energy transformation.
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-center gap-4">
            <CTAButton label="Explore Our Impact" />
            <button
              className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-transparent
                text-primary
                font-medium font-body text-sm
                border border-primary/30
                hover:border-primary/60
                hover:bg-primary/5
                transition-all duration-300
                rounded-none
              "
            >
              View Projects
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default ImpactStatsSection;
