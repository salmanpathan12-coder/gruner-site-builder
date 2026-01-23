import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Globe, Sparkles } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] overflow-hidden"
    >
      {/* Dynamic gradient background with animated mesh */}
      <div className="absolute inset-0">
        {/* Base gradient - Deep teal to charcoal */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[hsl(168,45%,12%)] via-[hsl(180,35%,15%)] to-[hsl(200,30%,10%)]"
        />
        
        {/* Animated gradient mesh */}
        <motion.div 
          className="absolute top-0 right-0 w-[70%] h-[80%] opacity-60"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, hsl(168, 55%, 35%) 0%, transparent 50%)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.7, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[60%] h-[70%] opacity-50"
          style={{
            background: "radial-gradient(ellipse at 30% 70%, hsl(85, 50%, 40%) 0%, transparent 50%)"
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating energy particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[hsl(85,60%,55%)]"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{ 
              duration: 4 + i * 0.5, 
              repeat: Infinity, 
              delay: i * 0.3 
            }}
          />
        ))}

        {/* Geometric grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(168, 50%, 50%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(168, 50%, 50%) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main content with safe top offset */}
      <div className="container-wide relative z-10 pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left: Content block - 6 columns */}
          <motion.div 
            style={{ y, opacity }}
            className="lg:col-span-6 relative z-10"
          >
            {/* Animated brand badge */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-[hsl(85,55%,55%)]" />
                </motion.div>
                <span className="text-xs tracking-[0.15em] uppercase text-white/90 font-semibold font-body">
                  India's Bio-CNG Pioneer
                </span>
              </span>
            </motion.div>

            {/* Hero headline with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.08] mb-5"
            >
              <span className="block">Engineering</span>
              <span className="block mt-1">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[hsl(85,55%,55%)] via-[hsl(120,50%,50%)] to-[hsl(168,55%,50%)] bg-clip-text text-transparent">
                    India's Energy
                  </span>
                </span>
              </span>
              <span className="block mt-1">Future</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base md:text-lg text-white/70 leading-relaxed mb-7 max-w-md font-body"
            >
              Transforming agricultural waste into clean Bio-CNG fuel. 
              Building India's largest sustainable energy infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a 
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[hsl(168,55%,40%)] to-[hsl(85,50%,45%)] text-white font-semibold shadow-xl shadow-[hsl(168,50%,30%)]/40 font-body text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/solutions"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/25 text-white font-semibold transition-all duration-300 font-body text-sm backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <Globe className="w-4 h-4" />
                Our Solutions
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex gap-10"
            >
              {[
                { value: "63+", label: "Bio-CNG Plants" },
                { value: "₹1,500Cr", label: "Project Value" },
                { value: "8 States", label: "Nationwide" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 font-body mt-0.5">
                    {stat.label}
                  </div>
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-[hsl(85,55%,55%)] to-[hsl(168,55%,50%)]"
                    initial={{ width: 0 }}
                    animate={{ width: 28 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Creative asymmetric image composition - 6 columns */}
          <motion.div
            style={{ y: imageY, scale }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Background glow */}
              <motion.div 
                className="absolute -inset-8 rounded-[2rem] opacity-40"
                style={{
                  background: "radial-gradient(ellipse at center, hsl(168, 50%, 40%) 0%, transparent 60%)"
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.5, 0.4],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {/* Main image with creative frame */}
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/30"
              >
                {/* Frame border */}
                <div className="absolute inset-0 rounded-[1.5rem] border border-white/10 z-10 pointer-events-none" />
                
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                  alt="Clean Energy Infrastructure"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(180,40%,8%)]/60 via-transparent to-[hsl(180,40%,15%)]/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(168,50%,30%)]/20 to-transparent" />
              </motion.div>

              {/* Floating metric card - bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: -30 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -bottom-5 left-4 md:left-8 z-20"
              >
                <div className="bg-white rounded-2xl p-4 shadow-2xl border border-[hsl(168,30%,85%)]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(168,55%,40%)] to-[hsl(85,50%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(168,50%,35%)]/30">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-heading font-bold text-[hsl(180,30%,15%)]">100%</div>
                      <div className="text-xs text-[hsl(180,15%,45%)] font-body">Project Success</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Year badge - top right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-3 right-6 z-20"
              >
                <div className="bg-gradient-to-r from-[hsl(168,55%,42%)] to-[hsl(85,50%,45%)] px-5 py-2 rounded-full shadow-xl shadow-[hsl(168,50%,35%)]/30">
                  <span className="text-xs font-semibold text-white font-body tracking-wide">Est. 2018</span>
                </div>
              </motion.div>

              {/* Vertical accent line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 80 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 rounded-full bg-gradient-to-b from-[hsl(85,55%,55%)] to-[hsl(168,55%,50%)]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(45,35%,95%)] to-transparent" />
    </section>
  );
};

export default AboutHero;
