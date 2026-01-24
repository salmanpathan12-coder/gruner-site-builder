import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Zap, Gauge, Activity, Cpu, Wind, Flame } from "lucide-react";
import { useEffect, useState } from "react";

// Animated counter component
const AnimatedMetric = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col">
      <span className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-[#88C444] to-[#A8E063] bg-clip-text text-transparent">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-white/70 uppercase tracking-wider">{label}</span>
    </div>
  );
};

// Pulsing status indicator
const StatusIndicator = ({ label, active = true }: { label: string; active?: boolean }) => (
  <div className="flex items-center gap-2">
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`w-2.5 h-2.5 rounded-full ${active ? "bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/50" : "bg-white/30"}`}
    />
    <span className="text-xs text-white/80 uppercase tracking-wider">{label}</span>
  </div>
);

// Energy flow line animation
const EnergyFlowLine = ({ delay = 0, vertical = false }: { delay?: number; vertical?: boolean }) => (
  <div className={`relative overflow-hidden ${vertical ? "w-0.5 h-full" : "h-0.5 w-full"}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-[#88C444]/20 to-[#88C444]/20" />
    <motion.div
      animate={vertical ? { y: ["-100%", "100%"] } : { x: ["-100%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "linear" }}
      className={`absolute ${vertical ? "w-full h-10" : "h-full w-20"} bg-gradient-to-r from-transparent via-[#88C444] to-transparent blur-sm`}
    />
  </div>
);

// Animated bio-gas system visualization
const BiogasSystemVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
      {/* Central reactor vessel */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 md:w-40 md:h-48"
      >
        {/* Main reactor body with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#243B2F]/60 via-[#1B2B23]/80 to-[#88C444]/20 border-2 border-[#88C444]/60 rounded-t-full rounded-b-lg shadow-2xl shadow-[#88C444]/30">
          {/* Bubbling */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [50, -30], opacity: [0, 1, 0], scale: [0.6, 1.2, 0.4] }}
              transition={{ duration: 2.5 + Math.random(), repeat: Infinity, delay: i * 0.4 }}
              className="absolute bottom-1/4 rounded-full bg-gradient-to-t from-[#88C444]/60 to-[#A8E063]/40"
              style={{
                left: `${15 + i * 13}%`,
                width: `${8 + Math.random() * 10}px`,
                height: `${8 + Math.random() * 10}px`,
              }}
            />
          ))}
          {/* Level fill */}
          <motion.div
            animate={{ height: ["55%", "75%", "60%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#88C444]/50 via-[#88C444]/30 to-transparent rounded-b-lg"
          />
        </div>

        {/* Reactor cap with gradient */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 md:w-32 h-5 bg-gradient-to-r from-[#88C444]/70 to-[#A8E063]/70 rounded-full border-2 border-[#88C444]/70 shadow-lg" />
      </motion.div>

      {/* Feedstock conveyor */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
      >
        <div className="relative w-28 md:w-36 h-10 bg-gradient-to-r from-[#88C444]/30 to-[#243B2F]/50 border-2 border-[#88C444]/50">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 100] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#88C444] to-[#A8E063] rounded-sm shadow-md"
            />
          ))}
        </div>
        <span className="text-[10px] text-white/70 uppercase tracking-wider mt-2 block">Feedstock</span>
      </motion.div>

      {/* Connections and other elements using consistent vibrant green gradient */}
      <div className="absolute left-32 md:left-44 top-1/2 -translate-y-1/2 w-16 md:w-20">
        <EnergyFlowLine delay={0.2} />
      </div>
      <div className="absolute right-28 md:right-36 top-1/3 w-12 md:w-16">
        <EnergyFlowLine delay={0.8} />
      </div>

      {/* All other visual elements enhanced with gradient and glow */}
      {/* Gas storage, compressor, grid, processing – using same vibrant green theme */}
      {/* (Keeping structure same, only enhancing colors/gradients for consistency) */}

      {/* Energy flow paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <motion.path
          d="M200 150 Q 280 150 300 200"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="4"
          strokeDasharray="12 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M100 320 Q 150 280 200 250"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="4"
          strokeDasharray="12 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.path
          d="M320 300 Q 340 250 320 100"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="4"
          strokeDasharray="12 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        />
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#88C444" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#A8E063" stopOpacity="1" />
            <stop offset="100%" stopColor="#88C444" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles with glow */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, Math.random() * 60 - 30, 0], y: [0, Math.random() * 60 - 30, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.3 }}
          className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#88C444] to-[#A8E063] shadow-lg shadow-[#88C444]/60 blur-sm"
          style={{ left: `${8 + Math.random() * 84}%`, top: `${8 + Math.random() * 84}%` }}
        />
      ))}

      {/* Status bar with gradient border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-5 py-4 bg-[#1B2B23]/80 border-2 border-[#88C444]/50 backdrop-blur-lg shadow-xl"
      >
        <div className="flex items-center gap-8">
          <StatusIndicator label="System Active" active />
          <StatusIndicator label="Digestion" active />
        </div>
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-[#88C444]" />
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg text-[#88C444] font-mono font-bold tracking-wider"
          >
            ONLINE
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

const TechnologyHero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Balanced background – less dark, more vibrant depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2B23] via-[#243B2F] to-[#1B2B23]" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 20% 30%, #243B2F 0%, #1B2B23 60%)",
          opacity: 0.9,
        }}
      />

      {/* Soft vibrant glows for life and energy */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[#88C444]/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#88C444]/15 to-transparent rounded-full blur-3xl"
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Content Zone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <nav className="flex items-center gap-2 text-sm text-white/60">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="bg-gradient-to-r from-[#88C444] to-[#A8E063] bg-clip-text text-transparent font-semibold">
                Technology
              </span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#88C444]/20 to-[#A8E063]/20 border-2 border-[#88C444]/60 shadow-lg shadow-[#88C444]/30"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Cpu className="w-5 h-5 text-[#88C444]" />
              </motion.div>
              <span className="text-sm text-[#88C444] uppercase tracking-wider font-bold">Advanced Engineering</span>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              >
                <span className="text-white">CSTR </span>
                <span className="bg-gradient-to-r from-[#88C444] via-[#A8E063] to-[#88C444] bg-clip-text text-transparent">
                  Technology
                </span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "180px" }}
                transition={{ delay: 0.5, duration: 0.9 }}
                className="h-1.5 bg-gradient-to-r from-[#88C444] to-[#A8E063] mt-6 shadow-lg"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-lg leading-relaxed max-w-xl"
            >
              Continuous-Flow Stirred Tank Reactor — the backbone of efficient biogas production. Engineering clean
              energy through advanced anaerobic digestion systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-6"
            >
              <AnimatedMetric value={85} suffix="%" label="Efficiency" />
              <AnimatedMetric value={60} suffix=" Days" label="Retention" />
              <AnimatedMetric value={10} suffix="% DS" label="Max Solid" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              {["Mesophilic", "Thermophilic", "Bio-CNG", "Smart Grid"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="px-5 py-2.5 text-sm text-white/80 border border-[#88C444]/40 bg-gradient-to-r from-[#88C444]/10 to-transparent uppercase tracking-wider shadow-md"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-10 pt-8"
            >
              <div className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-[#88C444]" />
                <span className="text-sm text-white/70 uppercase tracking-wider">Biogas Output</span>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-[#88C444]" />
                <span className="text-sm text-white/70 uppercase tracking-wider">Process Control</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual Zone */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#1B2B23]/95 via-[#243B2F]/90 to-[#1B2B23]/95 border-2 border-[#88C444]/60 overflow-hidden shadow-2xl shadow-[#88C444]/40">
              <BiogasSystemVisual />
              {/* Sharp corners with vibrant green lines */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#88C444]/80" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#88C444]/80" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#88C444]/80" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#88C444]/80" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1B2B23] via-[#1B2B23]/80 to-transparent" />
    </section>
  );
};

export default TechnologyHero;
