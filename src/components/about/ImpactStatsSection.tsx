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
  const spring = useSpring(0, { duration: 2200, bounce: 0 });
  const display = useTransform(spring, (current) => `${prefix}${Math.round(current).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) spring.set(value);
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
}

const StatCard = ({ value, suffix, prefix, label, icon: Icon, index, isInView }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.015 }}
      className="group"
    >
      <div className="relative h-full rounded-2xl p-5 bg-white/6 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
        {/* glow accent */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2f7a60]/15 via-transparent to-[#1f5f4b]/20" />

        <div className="relative flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2f7a60] to-[#1f5f4b] flex items-center justify-center shadow-lg">
            <Icon className="w-5 h-5 text-white" />
          </div>

          <div className="flex-1">
            <div className="text-2xl font-bold text-white leading-tight">
              <AnimatedCounter value={value} suffix={suffix} prefix={prefix} isInView={isInView} />
            </div>
            <div className="text-xs text-white/65 tracking-wide mt-0.5">{label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const stats = [
  { value: 63, suffix: "+", label: "Bio-CNG Plants", icon: Factory },
  { value: 1500, suffix: "+", prefix: "₹", label: "Crore Value", icon: TrendingUp },
  { value: 8, suffix: "+", label: "Indian States", icon: MapPin },
  { value: 250, suffix: "+", label: "Team Members", icon: Users },
  { value: 60, suffix: "M", prefix: "$", label: "Funding Raised", icon: BarChart3 },
  { value: 9000, suffix: "+", label: "Engineering Hours", icon: Leaf },
];

const ImpactStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f17] via-[#0e2a21] to-[#0b1f17]" />

      {/* ambient lights */}
      <motion.div
        className="absolute top-[-20%] left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30"
        style={{ background: "radial-gradient(circle, #2f7a60 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{ background: "radial-gradient(circle, #1f5f4b 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ================= CONTENT ================= */}
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-4">
            <Zap className="w-4 h-4 text-[#6ee7b7]" />
            <span className="text-[11px] tracking-[0.18em] uppercase text-white/70 font-semibold">Impact Metrics</span>
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
            Measurable{" "}
            <span className="bg-gradient-to-r from-[#6ee7b7] to-[#34d399] bg-clip-text text-transparent">Impact</span>
          </h2>

          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mt-3">
            Real performance indicators driving India’s clean energy transformation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
            />
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-white/50 tracking-wide">
            Structured growth • Scalable systems • Sustainable engineering
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
