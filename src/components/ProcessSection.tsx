import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wheat, Beaker, Zap, Leaf } from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Feedstock Collection",
      description: "Agricultural residues, cattle dung, and Napier Grass collected through established supply chains.",
      icon: Wheat,
    },
    {
      number: "02", 
      title: "Anaerobic Digestion",
      description: "Organic matter broken down in controlled digesters to produce raw biogas.",
      icon: Beaker,
    },
    {
      number: "03",
      title: "Purification & Compression",
      description: "Biogas purified to 97%+ methane and compressed to produce high-quality Bio-CNG.",
      icon: Zap,
    },
    {
      number: "04",
      title: "Distribution",
      description: "Clean fuel distributed through OMC networks to replace fossil alternatives.",
      icon: Leaf,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            From agricultural waste to clean energy — a proven transformation process
          </p>
        </motion.div>

        {/* Desktop: Horizontal layout with all steps active */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Single continuous connection line */}
            <div className="absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-1 z-0">
              {/* Background track */}
              <div className="absolute inset-0 bg-border/50 rounded-full" />
              
              {/* Gradient fill line */}
              <motion.div
                className="absolute inset-0 rounded-full origin-left"
                style={{
                  background: "linear-gradient(90deg, hsl(168, 65%, 40%) 0%, hsl(85, 55%, 50%) 100%)",
                }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
              
              {/* Moving progress dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10"
                style={{
                  background: "linear-gradient(135deg, hsl(168, 65%, 50%), hsl(85, 55%, 55%))",
                  boxShadow: "0 0 20px hsl(168, 65%, 50%, 0.6), 0 0 40px hsl(85, 55%, 50%, 0.4)",
                }}
                initial={{ left: "0%" }}
                animate={isInView ? { left: ["0%", "100%"] } : {}}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
              />
            </div>

            {/* Step nodes - all active */}
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="flex flex-col items-center"
                  >
                    {/* Node */}
                    <div className="relative mb-6">
                      {/* Subtle glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "linear-gradient(135deg, hsl(168, 65%, 32%, 0.15), hsl(85, 55%, 45%, 0.15))",
                        }}
                        initial={{ scale: 1, opacity: 0 }}
                        animate={isInView ? { scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] } : {}}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      />
                      
                      {/* Main node - all active with gradient */}
                      <motion.div
                        className="relative w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, hsl(168, 65%, 32%) 0%, hsl(85, 55%, 45%) 100%)",
                          boxShadow: "0 4px 20px hsl(168, 65%, 32%, 0.25)"
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Step number badge */}
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-accent text-white shadow-lg"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading font-semibold text-center mb-3 text-primary">
                      {step.title}
                    </h3>

                    {/* Description - always visible */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="text-sm text-muted-foreground text-center max-w-[200px] leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical layout with all steps active */}
        <div className="lg:hidden relative max-w-md mx-auto">
          {/* Vertical connection line */}
          <div className="absolute left-[34px] top-6 bottom-6 w-1">
            {/* Background track */}
            <div className="absolute inset-0 bg-border/50 rounded-full" />
            
            {/* Gradient fill */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full origin-top"
              style={{
                background: "linear-gradient(180deg, hsl(168, 65%, 40%) 0%, hsl(85, 55%, 50%) 100%)",
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
            
            {/* Flowing particle */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10"
              style={{
                background: "linear-gradient(135deg, hsl(168, 65%, 50%), hsl(85, 55%, 55%))",
                boxShadow: "0 0 15px hsl(168, 65%, 50%, 0.6)",
              }}
              initial={{ top: "0%" }}
              animate={isInView ? { top: ["0%", "100%"] } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            />
          </div>

          {/* Mobile Steps - all active */}
          <div className="space-y-8 pl-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  {/* Node on the line */}
                  <motion.div
                    className="absolute -left-[46px] top-1 w-10 h-10 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: "linear-gradient(135deg, hsl(168, 65%, 32%) 0%, hsl(85, 55%, 45%) 100%)",
                      boxShadow: "0 2px 12px hsl(168, 65%, 32%, 0.3)"
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Content card */}
                  <div className="p-5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                    <div className="text-xs font-bold uppercase tracking-wider mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Step {step.number}
                    </div>
                    <h3 className="font-heading font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
