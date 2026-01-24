import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Cpu, Server, CircuitBoard, Settings, Activity } from "lucide-react";

// Animated floating orb component for background
const FloatingOrb = ({ 
  className, 
  delay = 0,
  duration = 6 
}: { 
  className: string; 
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -20, 0],
      scale: [1, 1.05, 1],
      opacity: [0.5, 0.7, 0.5]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Tech node component
const TechNode = ({ 
  icon: Icon, 
  label, 
  delay,
  className 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  delay: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className={`flex flex-col items-center gap-2 ${className}`}
  >
    <motion.div 
      className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg"
      whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(20, 136, 88, 0.2)",
          "0 0 30px rgba(20, 136, 88, 0.4)",
          "0 0 20px rgba(20, 136, 88, 0.2)"
        ]
      }}
      transition={{
        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <Icon className="w-6 h-6 text-accent" />
    </motion.div>
    <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider">{label}</span>
  </motion.div>
);

// Central animated tech visual
const TechVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Middle rotating ring */}
      <motion.div
        className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-primary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Inner pulsing ring */}
      <motion.div
        className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-accent/30"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Central core */}
      <motion.div
        className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border border-white/20 flex items-center justify-center backdrop-blur-sm"
        animate={{
          boxShadow: [
            "0 0 40px rgba(20, 136, 88, 0.3)",
            "0 0 60px rgba(137, 177, 46, 0.4)",
            "0 0 40px rgba(20, 136, 88, 0.3)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cpu className="w-12 h-12 md:w-14 md:h-14 text-white/80" />
        </motion.div>
      </motion.div>

      {/* Tech nodes positioned around */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <TechNode icon={Server} label="Processing" delay={0.5} />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <TechNode icon={Activity} label="Monitoring" delay={0.7} />
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <TechNode icon={CircuitBoard} label="Control" delay={0.9} />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <TechNode icon={Settings} label="Systems" delay={1.1} />
      </div>

      {/* Floating data particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/60"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const TechnologyHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const stats = [
    { value: "85%", label: "Efficiency" },
    { value: "24/7", label: "Monitoring" },
    { value: "60+", label: "Systems" },
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Multi-color gradient background - matching About Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,25%,12%)] via-[hsl(180,20%,15%)] to-[hsl(160,25%,10%)]" />
        
        {/* Dynamic floating color orbs */}
        <FloatingOrb 
          className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[120px]"
          delay={0}
          duration={8}
        />
        <FloatingOrb 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/25 to-primary/15 rounded-full blur-[100px]"
          delay={2}
          duration={7}
        />
        <FloatingOrb 
          className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[hsl(180,60%,40%)]/20 to-transparent rounded-full blur-[80px]"
          delay={4}
          duration={6}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Main content - properly spaced from header */}
      <div className="container-wide relative z-10 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div style={{ y }} className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs tracking-[0.12em] uppercase text-white/90 font-medium font-body">
                  Advanced Technology
                </span>
              </span>
            </motion.div>

            {/* Headline - High contrast and clearly visible */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-[1.1] mb-5"
            >
              Engineering
              <span className="block mt-1">
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Clean Energy
                </span>
              </span>
              <span className="block mt-1">Systems</span>
            </motion.h1>

            {/* Description - Readable at all screen sizes */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-lg font-body"
            >
              Our proprietary Bio-CNG technology combines advanced engineering with 
              intelligent automation to maximize efficiency and reliability at every plant.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a 
                href="/solutions" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 font-body text-sm text-center rounded"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium transition-all duration-300 font-body text-sm backdrop-blur-sm rounded"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Stats - Compact horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 md:gap-10"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 font-body uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 24 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Animated tech visual */}
          <motion.div 
            style={{ y: visualY }}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <TechVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
