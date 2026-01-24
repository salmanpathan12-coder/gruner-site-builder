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
      <span className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
        {count}
        {suffix}
      </span>
      <span className="text-xs text-white/70 uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
};

// Pulsing status indicator
const StatusIndicator = ({ label, active = true }: { label: string; active?: boolean }) => (
  <div className="flex items-center gap-2">
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`w-2.5 h-2.5 rounded-full ${active ? "bg-gradient-to-r from-accent to-primary shadow-lg shadow-accent/40" : "bg-white/30"}`}
    />
    <span className="text-xs text-white/80 uppercase tracking-wider">{label}</span>
  </div>
);

// Energy flow line animation
const EnergyFlowLine = ({ delay = 0, vertical = false }: { delay?: number; vertical?: boolean }) => (
  <div className={`relative overflow-hidden ${vertical ? "w-0.5 h-full" : "h-0.5 w-full"}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
    <motion.div
      animate={vertical ? { y: ["-100%", "100%"] } : { x: ["-100%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "linear" }}
      className={`absolute ${vertical ? "w-full h-10" : "h-full w-20"} bg-gradient-to-r from-transparent via-accent to-transparent blur-sm`}
    />
  </div>
);

// Animated bio-gas system visualization - Dark About Us Theme
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/20 border-2 border-accent/60 rounded-t-full rounded-b-lg shadow-2xl shadow-primary/40">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [50, -30], opacity: [0, 1, 0], scale: [0.6, 1.2, 0.4] }}
              transition={{ duration: 2.5 + Math.random(), repeat: Infinity, delay: i * 0.4 }}
              className="absolute bottom-1/4 rounded-full bg-gradient-to-t from-accent/70 to-primary/50 shadow-lg"
              style={{
                left: `${15 + i * 13}%`,
                width: `${8 + Math.random() * 10}px`,
                height: `${8 + Math.random() * 10}px`,
              }}
            />
          ))}
          <motion.div
            animate={{ height: ["55%", "75%", "60%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent/50 via-primary/30 to-transparent rounded-b-lg"
          />
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 md:w-32 h-5 bg-gradient-to-r from-accent to-primary rounded-full border-2 border-accent shadow-xl" />
      </motion.div>

      {/* Feedstock conveyor */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
      >
        <div className="relative w-28 md:w-36 h-10 bg-gradient-to-r from-primary/30 to-accent/30 border-2 border-accent/50">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 100] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-accent to-primary rounded-sm shadow-lg"
            />
          ))}
        </div>
        <span className="text-[10px] text-white/70 uppercase tracking-wider mt-2 block">Feedstock</span>
      </motion.div>

      <div className="absolute left-32 md:left-44 top-1/2 -translate-y-1/2 w-16 md:w-20">
        <EnergyFlowLine delay={0.2} />
      </div>
      <div className="absolute right-28 md:right-36 top-1/3 w-12 md:w-16">
        <EnergyFlowLine delay={0.8} />
      </div>

      {/* Gas storage tank */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute right-4 md:right-8 top-1/3"
      >
        <div className="relative w-16 md:w-20 h-24 md:h-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/20 border-2 border-primary/60 rounded-lg shadow-2xl">
            <motion.div
              animate={{ height: ["40%", "60%", "40%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent/60 to-primary/40 rounded-b-lg"
            />
          </div>
          <motion.div
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-accent rounded-full bg-foreground/90 flex items-center justify-center shadow-xl"
          >
            <div className="w-0.5 h-3 bg-primary origin-bottom" />
          </motion.div>
        </div>
        <span className="text-[10px] text-white/70 uppercase tracking-wider mt-2 block text-center">Bio-CNG</span>
      </motion.div>

      {/* Compressor */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute right-8 md:right-16 bottom-16 md:bottom-20"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 md:w-14 md:h-14 border-2 border-accent/60 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shadow-2xl"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 border border-primary/60 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 bg-accent rounded-full"
            />
          </div>
        </motion.div>
        <span className="text-[10px] text-white/70 uppercase tracking-wider mt-1 block text-center">Compressor</span>
      </motion.div>

      {/* Grid node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute right-12 md:right-20 top-8 md:top-12"
      >
        <motion.div
          animate={{
            boxShadow: ["0 0 15px rgba(20,136,88,0.4)", "0 0 35px rgba(20,136,88,0.8)", "0 0 15px rgba(20,136,88,0.4)"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-accent/40 to-primary/40 border border-accent/70 flex items-center justify-center shadow-2xl"
        >
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-accent" />
        </motion.div>
        <span className="text-[10px] text-white/70 uppercase tracking-wider mt-1 block text-center">Grid</span>
      </motion.div>

      {/* Processing unit */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute left-8 md:left-16 bottom-12 md:bottom-16"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 md:w-16 md:h-16 border-2 border-dashed border-primary/60 rounded-full flex items-center justify-center"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-accent/40 to-primary/30 rounded-full flex items-center justify-center shadow-xl">
            <Wind className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </div>
        </motion.div>
        <span className="text-[10px] text-white/70 uppercase tracking-wider mt-1 block text-center">Processing</span>
      </motion.div>

      {/* Energy flow paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="energyGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <motion.path
          d="M200 150 Q 280 150 300 200"
          fill="none"
          stroke="url(#energyGradientDark)"
          strokeWidth="4"
          strokeDasharray="12 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M100 320 Q 150 280 200 250"
          fill="none"
          stroke="url(#energyGradientDark)"
          strokeWidth="4"
          strokeDasharray="12 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        <motion.path
          d="M320 300 Q 340 250 320 100"
          fill="none"
          stroke="url(#energyGradientDark)"
          strokeWidth="4"
          strokeDasharray="12 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        />
      </svg>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, Math.random() * 60 - 30, 0], y: [0, Math.random() * 60 - 30, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.3 }}
          className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent to-primary shadow-lg shadow-accent/60 blur-sm"
          style={{ left: `${8 + Math.random() * 84}%`, top: `${8 + Math.random() * 84}%` }}
        />
      ))}

      {/* Status overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-5 py-4 bg-foreground/80 border-2 border-accent/50 backdrop-blur-md shadow-2xl"
      >
        <div className="flex items-center gap-8">
          <StatusIndicator label="System Active" active />
          <StatusIndicator label="Digestion" active />
        </div>
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-accent" />
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg font-mono font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
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
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 bg-white">
      {/* WHITE BACKGROUND */}
      <div className="absolute inset-0 bg-white" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Content */}
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-white border border-black/15"
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Cpu className="w-5 h-5 text-green-600" />
              </motion.div>
              <span className="text-sm uppercase tracking-wider font-bold text-black">Advanced Engineering</span>
            </motion.div>

            {/* Title */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-black"
              >
                <span>CSTR </span>
                <span className="text-green-600">Technology</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.5, duration: 0.9 }}
                className="h-1.5 bg-green-600 mt-8"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-black/70 text-lg leading-relaxed max-w-xl"
            >
              Continuous-Flow Stirred Tank Reactor — the backbone of efficient biogas production. Engineering clean
              energy through advanced anaerobic digestion systems.
            </motion.p>

            {/* Metrics */}
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

            {/* Tags */}
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
                  className="px-5 py-2.5 text-sm text-black border border-black/15 uppercase tracking-wider hover:bg-black/5 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-10 pt-8"
            >
              <div className="flex items-center gap-3">
                <Flame className="w-6 h-6 text-green-600" />
                <span className="text-sm text-black/70 uppercase tracking-wider">Biogas Output</span>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-green-700" />
                <span className="text-sm text-black/70 uppercase tracking-wider">Process Control</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual (UNCHANGED GREEN SYSTEM) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
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
