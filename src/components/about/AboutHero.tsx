import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden"
    >
      {/* Animated gradient background - Pista/Creamy/Sage theme */}
      <div className="absolute inset-0">
        {/* Base gradient - creamy to pista */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, hsl(80, 40%, 92%) 0%, hsl(90, 35%, 88%) 25%, hsl(75, 30%, 95%) 50%, hsl(85, 40%, 90%) 75%, hsl(70, 35%, 93%) 100%)",
              "linear-gradient(135deg, hsl(85, 40%, 90%) 0%, hsl(75, 35%, 93%) 25%, hsl(90, 30%, 88%) 50%, hsl(80, 40%, 92%) 75%, hsl(85, 35%, 95%) 100%)",
              "linear-gradient(135deg, hsl(80, 40%, 92%) 0%, hsl(90, 35%, 88%) 25%, hsl(75, 30%, 95%) 50%, hsl(85, 40%, 90%) 75%, hsl(70, 35%, 93%) 100%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating gradient orbs */}
        <motion.div 
          className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-60"
          style={{
            background: "radial-gradient(circle, hsl(90, 50%, 70%) 0%, hsl(120, 40%, 75%) 50%, transparent 70%)"
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-[5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(45, 60%, 85%) 0%, hsl(55, 50%, 80%) 50%, transparent 70%)"
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-40"
          style={{
            background: "radial-gradient(circle, hsl(150, 35%, 75%) 0%, transparent 60%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle mesh pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(120, 30%, 40%) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="container-wide relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[70vh]">
          
          {/* Left: Content - 5 columns */}
          <motion.div 
            style={{ y }}
            className="lg:col-span-5 relative z-10"
          >
            {/* Creative badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[hsl(90,45%,35%)]/15 to-[hsl(150,40%,40%)]/15 border border-[hsl(90,40%,50%)]/30 backdrop-blur-sm shadow-lg shadow-[hsl(90,40%,50%)]/10">
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-[hsl(90,50%,40%)]" />
                </motion.div>
                <span className="text-xs tracking-[0.15em] uppercase text-[hsl(90,40%,30%)] font-semibold font-body">
                  India's Clean Energy Pioneer
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-[hsl(150,25%,15%)] leading-[1.05] mb-6"
            >
              <span className="block">Powering</span>
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[hsl(90,50%,40%)] via-[hsl(120,45%,38%)] to-[hsl(150,50%,35%)] bg-clip-text text-transparent">
                    Tomorrow's
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[hsl(90,50%,50%)] to-[hsl(150,50%,45%)] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
              </span>
              <span className="block mt-2">Energy</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-[hsl(150,15%,35%)] leading-relaxed mb-8 max-w-md font-body"
            >
              Transforming agricultural waste into sustainable Bio-CNG fuel. 
              We're building India's largest clean energy infrastructure for a greener future.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[hsl(90,45%,38%)] to-[hsl(150,45%,35%)] text-white font-semibold shadow-xl shadow-[hsl(90,40%,40%)]/25 hover:shadow-2xl hover:shadow-[hsl(90,40%,40%)]/35 hover:-translate-y-1 transition-all duration-300 font-body text-sm"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/solutions"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/70 hover:bg-white border border-[hsl(90,30%,70%)] text-[hsl(150,30%,25%)] font-semibold transition-all duration-300 font-body text-sm backdrop-blur-sm shadow-lg"
              >
                <Play className="w-4 h-4" />
                Watch Story
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-8"
            >
              {[
                { value: "63+", label: "Plants Delivered" },
                { value: "₹1,500Cr", label: "Project Value" },
                { value: "8 States", label: "Pan-India Reach" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-[hsl(150,30%,20%)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[hsl(150,15%,45%)] font-body mt-0.5">
                    {stat.label}
                  </div>
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-[hsl(90,50%,50%)] to-[hsl(150,50%,45%)]"
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Creative image composition - 7 columns */}
          <motion.div
            style={{ y: imageY, scale }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              {/* Background decorative elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-full h-full rounded-3xl bg-gradient-to-br from-[hsl(90,40%,75%)]/30 to-[hsl(150,35%,70%)]/20 blur-sm"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-3/4 h-3/4 rounded-3xl bg-gradient-to-tr from-[hsl(45,50%,80%)]/25 to-transparent blur-sm"
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              {/* Main image */}
              <motion.div 
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[hsl(150,30%,30%)]/15"
              >
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                  alt="Clean Energy Infrastructure"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,25%,15%)]/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(90,40%,50%)]/10 to-transparent" />
              </motion.div>

              {/* Floating accent cards */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: -30 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -bottom-6 -left-6 md:left-6 z-10"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-[hsl(90,30%,80%)]/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(90,45%,45%)] to-[hsl(150,45%,40%)] flex items-center justify-center shadow-lg shadow-[hsl(90,40%,40%)]/30">
                      <span className="text-white text-xl font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-[hsl(150,30%,20%)]">100%</div>
                      <div className="text-xs text-[hsl(150,15%,45%)] font-body">Project Success</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Year badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -top-4 right-8 z-10"
              >
                <div className="bg-gradient-to-r from-[hsl(90,45%,42%)] to-[hsl(150,45%,38%)] px-5 py-2.5 rounded-full shadow-xl shadow-[hsl(90,40%,40%)]/30">
                  <span className="text-xs font-semibold text-white font-body tracking-wide">Since 2018</span>
                </div>
              </motion.div>

              {/* Secondary floating element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 -right-4 md:right-4 z-10 hidden md:block"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-[hsl(90,30%,80%)]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(45,50%,60%)] to-[hsl(55,45%,55%)] flex items-center justify-center">
                      <span className="text-white text-lg">🌱</span>
                    </div>
                    <div>
                      <div className="text-sm font-heading font-semibold text-[hsl(150,30%,20%)]">Carbon Neutral</div>
                      <div className="text-xs text-[hsl(150,15%,45%)] font-body">By 2030</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(45,30%,96%)] to-transparent" />
    </section>
  );
};

export default AboutHero;
