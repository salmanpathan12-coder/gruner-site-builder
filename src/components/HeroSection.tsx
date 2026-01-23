import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { ArrowDown, TrendingUp, Leaf, Factory } from "lucide-react";

// Animated counter for hero metrics
const AnimatedMetric = ({ 
  value, 
  suffix, 
  label, 
  icon: Icon,
  delay = 0 
}: { 
  value: string; 
  suffix: string; 
  label: string; 
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-xl md:text-2xl font-bold text-white">
            {isAnimated ? displayValue : "0"}
          </span>
          <span className="text-lg md:text-xl font-bold text-primary">{suffix}</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-white/50">{label}</span>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const metrics = [
    { value: "1500", suffix: "Cr+", label: "Secured Projects", icon: TrendingUp },
    { value: "60", suffix: "M", label: "USD Funding", icon: Factory },
    { value: "88", suffix: "K+", label: "TPY Capacity", icon: Leaf },
  ];

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Video Background */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlay - slightly lighter to show video better */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
      
      {/* Floating particles */}
      <FloatingParticles count={30} />
      
      {/* Animated grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container-wide text-center text-white px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          
          {/* Main headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-6 leading-[1.15]">
            India's Leading Bio-CNG Infrastructure Company
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed font-body">
            Gruner Renewable Energy designs, builds, and operates Bio-CNG plants that convert agricultural and organic waste into clean, reliable fuel.
          </p>

          {/* Animated Metrics */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {metrics.map((metric, index) => (
              <AnimatedMetric
                key={metric.label}
                {...metric}
                delay={800 + index * 300}
              />
            ))}
          </div>

          {/* CTA Buttons with gradient */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Projects
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white rounded-md border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Partner With Us
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.15em] font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
