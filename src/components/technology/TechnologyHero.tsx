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
      <span className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {count}{suffix}
      </span>
      <span className="text-xs text-white/50 uppercase tracking-wider">{label}</span>
    </div>
  );
};

// Pulsing status indicator
const StatusIndicator = ({ label, active = true }: { label: string; active?: boolean }) => (
  <div className="flex items-center gap-2">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`w-2 h-2 rounded-full ${active ? 'bg-primary' : 'bg-white/30'}`}
    />
    <span className="text-xs text-white/60 uppercase tracking-wider">{label}</span>
  </div>
);

// Energy flow line animation
const EnergyFlowLine = ({ delay = 0, vertical = false }: { delay?: number; vertical?: boolean }) => (
  <div className={`relative overflow-hidden ${vertical ? 'w-0.5 h-full' : 'h-0.5 w-full'}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
    <motion.div
      animate={vertical 
        ? { y: ['-100%', '100%'] }
        : { x: ['-100%', '100%'] }
      }
      transition={{ duration: 3, repeat: Infinity, delay, ease: "linear" }}
      className={`absolute ${vertical ? 'w-full h-8' : 'h-full w-16'} bg-gradient-to-r from-transparent via-primary to-transparent`}
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
        {/* Main reactor body */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-accent/20 border-2 border-primary/40 rounded-t-full rounded-b-lg">
          {/* Internal bubbling animation */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [40, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.3]
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.4
              }}
              className="absolute bottom-1/4 rounded-full bg-primary/40"
              style={{
                left: `${20 + i * 12}%`,
                width: `${6 + Math.random() * 8}px`,
                height: `${6 + Math.random() * 8}px`
              }}
            />
          ))}
          
          {/* Reactor level indicators */}
          <motion.div
            animate={{ height: ['60%', '70%', '60%'] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent/40 to-primary/20 rounded-b-lg"
          />
        </div>
        
        {/* Reactor cap */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 md:w-28 h-4 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full border border-primary/40" />
        
        {/* Output pipe */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-8 bg-gradient-to-t from-primary/40 to-accent/60"
        >
          <motion.div
            animate={{ y: [16, -16] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-0 w-full h-4 bg-gradient-to-t from-transparent via-primary to-accent"
          />
        </motion.div>
      </motion.div>
      
      {/* Input feedstock conveyor (left) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
      >
        <div className="relative w-24 md:w-32 h-8 bg-gradient-to-r from-primary/20 to-primary/40 border border-primary/30">
          {/* Moving particles on conveyor */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 80] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-accent/60 rounded-sm"
            />
          ))}
        </div>
        <span className="text-[10px] text-white/40 uppercase tracking-wider mt-1 block">Feedstock</span>
      </motion.div>
      
      {/* Connection line left to center */}
      <div className="absolute left-28 md:left-40 top-1/2 -translate-y-1/2 w-12 md:w-16">
        <EnergyFlowLine delay={0.2} />
      </div>
      
      {/* Gas storage tank (right) */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute right-4 md:right-8 top-1/3"
      >
        <div className="relative w-16 md:w-20 h-24 md:h-28">
          {/* Tank body */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-primary/20 border-2 border-accent/40 rounded-lg">
            {/* Gas level animation */}
            <motion.div
              animate={{ height: ['40%', '60%', '40%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/40 to-accent/30 rounded-b-lg"
            />
          </div>
          {/* Pressure gauge */}
          <motion.div
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-accent/40 rounded-full bg-foreground/80 flex items-center justify-center"
          >
            <div className="w-0.5 h-3 bg-primary origin-bottom" />
          </motion.div>
        </div>
        <span className="text-[10px] text-white/40 uppercase tracking-wider mt-2 block text-center">Bio-CNG</span>
      </motion.div>
      
      {/* Connection line center to right */}
      <div className="absolute right-24 md:right-32 top-1/3 translate-y-3 w-10 md:w-14">
        <EnergyFlowLine delay={0.8} />
      </div>
      
      {/* Compression unit (bottom right) */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute right-8 md:right-16 bottom-16 md:bottom-20"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 md:w-14 md:h-14 border-2 border-primary/40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 border border-accent/40 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
        <span className="text-[10px] text-white/40 uppercase tracking-wider mt-1 block text-center">Compressor</span>
      </motion.div>
      
      {/* Power grid node (top right) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute right-12 md:right-20 top-8 md:top-12"
      >
        <motion.div
          animate={{ boxShadow: ['0 0 10px rgba(20,136,88,0.3)', '0 0 20px rgba(20,136,88,0.6)', '0 0 10px rgba(20,136,88,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/50 flex items-center justify-center"
        >
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </motion.div>
        <span className="text-[10px] text-white/40 uppercase tracking-wider mt-1 block text-center">Grid</span>
      </motion.div>
      
      {/* Waste processing unit (bottom left) */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute left-8 md:left-16 bottom-12 md:bottom-16"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 md:w-16 md:h-16 border-2 border-dashed border-accent/40 rounded-full flex items-center justify-center"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full flex items-center justify-center">
              <Wind className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            </div>
          </motion.div>
        </div>
        <span className="text-[10px] text-white/40 uppercase tracking-wider mt-1 block text-center">Processing</span>
      </motion.div>
      
      {/* Energy flow paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        {/* Curved path from reactor to storage */}
        <motion.path
          d="M200 150 Q 280 150 300 200"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        
        {/* Path from processing to reactor */}
        <motion.path
          d="M100 320 Q 150 280 200 250"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
        />
        
        {/* Path from compressor to grid */}
        <motion.path
          d="M320 300 Q 340 250 320 100"
          fill="none"
          stroke="url(#energyGradient)"
          strokeWidth="2"
          strokeDasharray="8 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
        />
        
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating energy particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`
          }}
        />
      ))}
      
      {/* System status overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-3 py-2 bg-foreground/50 border border-primary/20 backdrop-blur-sm"
      >
        <div className="flex items-center gap-4">
          <StatusIndicator label="System Active" active />
          <StatusIndicator label="Digestion" active />
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-primary" />
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-primary font-mono"
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/98 to-primary/10" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/15 to-primary/10 rounded-full blur-3xl"
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: Content Zone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-white/40">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary">Technology</span>
            </nav>
            
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Cpu className="w-3.5 h-3.5 text-primary" />
              </motion.div>
              <span className="text-xs text-primary uppercase tracking-wider font-medium">Advanced Engineering</span>
            </motion.div>
            
            {/* Gradient heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight"
              >
                <span className="text-white">CSTR </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Technology</span>
              </motion.h1>
              
              {/* Animated divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-0.5 bg-gradient-to-r from-primary to-accent mt-4"
              />
            </div>
            
            {/* Tech description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 leading-relaxed max-w-lg"
            >
              Continuous-Flow Stirred Tank Reactor — the backbone of efficient biogas production. 
              Engineering clean energy through advanced anaerobic digestion systems.
            </motion.p>
            
            {/* Tech metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <AnimatedMetric value={85} suffix="%" label="Efficiency" />
              <AnimatedMetric value={60} suffix=" Days" label="Retention" />
              <AnimatedMetric value={10} suffix="% DS" label="Max Solid" />
            </motion.div>
            
            {/* System tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['Mesophilic', 'Thermophilic', 'Bio-CNG', 'Smart Grid'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="px-3 py-1 text-xs text-white/50 border border-white/10 bg-white/5 uppercase tracking-wider"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Status indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-accent" />
                <span className="text-xs text-white/50 uppercase tracking-wider">Biogas Output</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-primary" />
                <span className="text-xs text-white/50 uppercase tracking-wider">Process Control</span>
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
            <div className="relative bg-gradient-to-br from-foreground/80 to-primary/5 border border-primary/20 overflow-hidden">
              <BiogasSystemVisual />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default TechnologyHero;
