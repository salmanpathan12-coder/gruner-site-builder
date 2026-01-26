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

const CTAButton = ({ label }: { label: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="
        inline-flex items-center gap-2
        px-6 py-3
        bg-gradient-to-r from-primary via-primary/90 to-accent
        text-white
        font-medium font-body text-sm
        shadow-lg shadow-primary/25
        hover:shadow-xl hover:shadow-primary/40
        transition-all duration-300
        text-center
        rounded-md
        border border-white/10
      "
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </motion.button>
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
    primary: "bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/25 border border-white/10",
    light: "bg-white text-foreground shadow-xl shadow-primary/10 border border-primary/15 hover:border-primary/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group"
    >
      <div className={`relative h-full p-6 overflow-hidden transition-all duration-300 rounded-md ${variants[variant]}`}>
        {/* Eco accent shapes */}
        {variant === "primary" && (
          <>
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 -translate-y-1/2 translate-x-1/2 rounded-full" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 translate-y-1/2 -translate-x-1/2 rounded-full" />
          </>
        )}

        {variant === "light" && (
          <>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/8 to-transparent translate-y-1/2 -translate-x-1/2 rounded-full" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/8 to-transparent -translate-y-1/2 translate-x-1/2 rounded-full" />
          </>
        )}

        <div className="relative flex items-start gap-4">
          <div
            className={`w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-md transition-all duration-300 ${
              variant === "light" 
                ? "bg-gradient-to-br from-accent to-primary group-hover:shadow-lg group-hover:shadow-primary/20" 
                : "bg-white/20 group-hover:bg-white/25"
            }`}
          >
            <Icon className={`w-5 h-5 ${variant === "light" ? "text-white" : "text-white"}`} />
          </div>

          <div>
            <div
              className={`font-heading font-bold text-2xl md:text-3xl mb-1 ${
                variant === "light" 
                  ? "bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent" 
                  : "text-white"
              }`}
            >
              <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
            </div>

            <div className={`text-xs font-body font-medium tracking-wide uppercase ${variant === "light" ? "text-muted-foreground" : "text-white/85"}`}>
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
    <section ref={ref} className="relative overflow-hidden py-12 md:py-14">
      {/* ===== LIGHT GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,30%,96%)] via-[hsl(40,25%,94%)] to-[hsl(35,20%,92%)]" />

      {/* Theme gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8" />

      {/* Floating eco orbs */}
      <motion.div
        className="absolute top-0 left-[12%] w-[420px] h-[420px] bg-primary/15 blur-[120px] rounded-full"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-[12%] w-[360px] h-[360px] bg-accent/15 blur-[110px] rounded-full"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== CONTENT CONTAINER (REDUCED GAP) ===== */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs tracking qb-[0.12em] uppercase text-primary font-medium font-body">
              Our Impact
            </span>
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Driving{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Measurable
            </span>{" "}
            Change
          </h2>

          <p className="text-muted-foreground max-w-xl font-body text-sm mt-2">
            Real metrics showcasing our commitment to India's clean energy transformation.
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-start gap-4">
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
                rounded-md
              "
            >
              View Projects
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
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
