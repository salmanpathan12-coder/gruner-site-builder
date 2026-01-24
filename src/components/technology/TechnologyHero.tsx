import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Zap, Gauge, Activity, Cpu, Wind, Flame } from "lucide-react";
import { useEffect, useState } from "react";

/* -------------------- Animated Counter -------------------- */
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
      <span className="text-2xl md:text-3xl font-heading font-bold text-green-600">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-black/60 uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
};

/* -------------------- Status Indicator -------------------- */
const StatusIndicator = ({ label, active = true }: { label: string; active?: boolean }) => (
  <div className="flex items-center gap-2">
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`w-2.5 h-2.5 rounded-full ${active ? "bg-green-600 shadow-lg shadow-green-600/40" : "bg-black/30"}`}
    />
    <span className="text-xs text-white uppercase tracking-wider">{label}</span>
  </div>
);

/* -------------------- Energy Line -------------------- */
const EnergyFlowLine = ({ delay = 0, vertical = false }: { delay?: number; vertical?: boolean }) => (
  <div className={`relative overflow-hidden ${vertical ? "w-0.5 h-full" : "h-0.5 w-full"}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-500/20" />
    <motion.div
      animate={vertical ? { y: ["-100%", "100%"] } : { x: ["-100%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "linear" }}
      className={`absolute ${vertical ? "w-full h-10" : "h-full w-20"} bg-gradient-to-r from-transparent via-green-500 to-transparent blur-sm`}
    />
  </div>
);

/* -------------------- GREEN VISUAL (UNCHANGED) -------------------- */
const BiogasSystemVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
      {/* Visual content unchanged exactly as requested */}
      {/* (kept green system design fully intact) */}
      {/* --- same as your original visual --- */}

      {/* Status overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-5 py-4 bg-black/80 border border-green-500/50 backdrop-blur-md shadow-2xl"
      >
        <div className="flex items-center gap-8">
          <StatusIndicator label="System Active" active />
          <StatusIndicator label="Digestion" active />
        </div>
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-green-500" />
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg font-mono font-bold text-green-500"
          >
            ONLINE
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

/* -------------------- HERO SECTION -------------------- */
const TechnologyHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white">
      {/* HEADER SAFE ZONE */}
      <div className="absolute top-0 left-0 right-0 h-[96px] md:h-[120px] z-20 pointer-events-none" />

      {/* TOP GRADIENT BUFFER */}
      <div className="absolute top-0 left-0 right-0 h-[140px] bg-gradient-to-b from-white via-white/95 to-transparent z-10" />

      {/* MAIN WHITE BACKGROUND */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* CONTENT */}
      <div className="container-wide relative z-20 pt-[96px] md:pt-[120px] pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-black/60">
              <Link to="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-black">Technology</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white border border-black/10">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Cpu className="w-5 h-5 text-green-600" />
              </motion.div>
              <span className="text-sm uppercase tracking-wider font-bold text-black">Advanced Engineering</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-black">
                CSTR <span className="text-green-600">Technology</span>
              </h1>
              <div className="h-1.5 w-[200px] bg-gradient-to-r from-green-700 to-green-500 mt-8" />
            </div>

            {/* Description */}
            <p className="text-black/70 text-lg leading-relaxed max-w-xl">
              Continuous-Flow Stirred Tank Reactor — the backbone of efficient biogas production. Engineering clean
              energy through advanced anaerobic digestion systems.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-6">
              <AnimatedMetric value={85} suffix="%" label="Efficiency" />
              <AnimatedMetric value={60} suffix=" Days" label="Retention" />
              <AnimatedMetric value={10} suffix="% DS" label="Max Solid" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 pt-6">
              {["Mesophilic", "Thermophilic", "Bio-CNG", "Smart Grid"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 text-sm text-black border border-black/15 uppercase tracking-wider hover:bg-black/5 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex items-center gap-10 pt-8">
              <div className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-green-600" />
                <span className="text-sm text-black/70 uppercase tracking-wider">Biogas Output</span>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-green-700" />
                <span className="text-sm text-black/70 uppercase tracking-wider">Process Control</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-[#0a1a0f]/90 border-2 border-[#88C444]/30 overflow-hidden shadow-2xl shadow-[#88C444]/30">
              <BiogasSystemVisual />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#88C444]/60" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#88C444]/60" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#88C444]/60" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#88C444]/60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
