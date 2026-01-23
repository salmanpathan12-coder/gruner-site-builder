import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Fuel, Leaf } from "lucide-react";

// Animated counter for stats
const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView && numericValue) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  const displayValue = value.includes('M') 
    ? `${count}M+` 
    : value.includes('%') 
    ? `${count}%` 
    : count.toString();

  return (
    <span ref={ref}>
      {isInView ? displayValue : value}
    </span>
  );
};

const ContextSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const statScale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);
  const statOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const leftX = useTransform(scrollYProgress, [0, 0.5], [-30, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  const stats = [
    { value: "500M+", label: "Tonnes agri-waste yearly", icon: TrendingUp },
    { value: "85%", label: "Import dependency on fuel", icon: Fuel },
    { value: "2070", label: "Net-zero target year", icon: Leaf },
  ];

  const textBlocks = [
    "India generates over 500 million tonnes of agricultural residue annually. Much of this biomass is burned in fields, contributing to severe air pollution and health hazards.",
    "The nation depends on costly fossil fuel imports, exposing the economy to volatile global energy prices and supply disruptions.",
    "Bio-CNG presents a strategic opportunity — converting agricultural waste into clean, domestically-produced transportation fuel while creating rural employment.",
  ];

  return (
    <section id="context" ref={containerRef} className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[2fr_3fr] min-h-[50vh]">
        {/* Left: Large typography with gradient background */}
        <div className="bg-gradient-dark-teal text-background py-10 md:py-12 lg:py-16 flex items-center relative" ref={ref}>
          {/* Subtle animated elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <motion.div
              className="absolute w-96 h-96 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, hsl(168, 65%, 30%) 0%, transparent 70%)",
                top: "-20%",
                right: "-10%",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full opacity-15"
              style={{
                background: "radial-gradient(circle, hsl(85, 55%, 40%) 0%, transparent 70%)",
                bottom: "-10%",
                left: "-5%",
              }}
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            {/* Subtle grid */}
            <svg className="absolute inset-0 w-full h-full opacity-5">
              <defs>
                <pattern id="context-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#context-grid)" />
            </svg>
          </div>
          
          <div className="container-wide lg:pl-8 lg:pr-4 relative z-10">
            <motion.div
              style={{ x: leftX }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-primary to-accent mb-8 rounded-full"
              />
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.15] mb-6">
                <motion.span 
                  className="block text-white/50 text-xl md:text-2xl mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  India's Waste Problem
                </motion.span>
                <motion.span 
                  className="block text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Is Also an
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1"
                  style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Energy Opportunity
                </motion.span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Right: Content and stats */}
        <div className="bg-off-white py-10 md:py-12 lg:py-16 flex items-center relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02]" />
          
          <motion.div 
            style={{ x: rightX }}
            className="container-wide lg:pr-10 lg:pl-8 relative z-10"
          >
            <div className="space-y-5">
              {textBlocks.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Animated stats with gradient icons */}
            <motion.div 
              style={{ scale: statScale, opacity: statOpacity }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center group"
                  >
                    {/* White icon on gradient background */}
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <motion.div 
                      className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                    >
                      <AnimatedCounter value={stat.value} />
                    </motion.div>
                    <div className="text-xs md:text-sm text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;