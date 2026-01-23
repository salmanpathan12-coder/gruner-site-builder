import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const imageX = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Deep premium background layers */}
      <div className="absolute inset-0">
        {/* Base - Rich dark gradient */}
        <div className="absolute inset-0 bg-[hsl(220,25%,6%)]" />
        
        {/* Layered gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(168,40%,8%)] via-[hsl(200,30%,6%)] to-[hsl(240,25%,8%)]" />
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/[0.08] via-transparent to-accent/[0.05]" />
        
        {/* Animated ambient orbs */}
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-0 w-[900px] h-[900px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-[150px]"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-radial from-accent/15 via-primary/5 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[hsl(180,50%,20%)]/10 to-transparent blur-[100px]"
        />
        
        {/* Premium grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[hsl(220,25%,4%)]/60" />
      </div>

      <div className="container-wide relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh]">
          
          {/* Left: Brand Authority Content */}
          <motion.div 
            style={{ y, opacity }}
            className="relative z-10"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20 backdrop-blur-sm">
                <motion.span 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="relative flex h-5 w-5"
                >
                  <Sparkles className="w-5 h-5 text-primary" />
                </motion.span>
                <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-body font-medium">
                  India's Leading Bio-CNG Company
                </span>
              </span>
            </motion.div>

            {/* Hero headline with premium typography */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white leading-[0.95] mb-8"
            >
              <span className="block">Powering</span>
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-[hsl(140,60%,45%)] to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    India's
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </span>
              </span>
              <span className="block mt-2 text-white/90">Clean Future</span>
            </motion.h1>

            {/* Premium subhead */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-body mb-12"
            >
              Transforming agricultural waste into sustainable Bio-CNG fuel, 
              building the nation's largest compressed biogas infrastructure 
              with a vision for net-zero emissions.
            </motion.p>

            {/* Premium stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: "₹1,500+", unit: "Cr", label: "Project Value" },
                { value: "63+", unit: "", label: "Plants" },
                { value: "8+", unit: "", label: "States" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
                  className="relative group"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-lg text-primary font-heading font-semibold">
                      {stat.unit}
                    </span>
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-[0.15em] font-body mt-1">
                    {stat.label}
                  </div>
                  {/* Hover accent */}
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Premium Visual Composition */}
          <motion.div
            style={{ x: imageX }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Glowing backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/15 rounded-[2.5rem] blur-3xl opacity-60" />
              
              {/* Main image frame */}
              <div className="relative rounded-[2rem] overflow-hidden">
                {/* Gradient border ring */}
                <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-br from-primary/50 via-accent/30 to-primary/20 z-0" />
                
                <div className="relative z-10 rounded-[1.9rem] overflow-hidden m-[2px] bg-[hsl(220,25%,8%)]">
                  <motion.div
                    style={{ scale }}
                    className="relative aspect-[4/5]"
                  >
                    <img
                      src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/7e6baf576c4.png"
                      alt="Gruner Bio-CNG Infrastructure"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Multi-layer overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,6%)] via-[hsl(220,25%,6%)]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(220,25%,6%)]/40 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-3xl bg-gradient-to-br from-primary to-accent opacity-20 blur-xl"
              />
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-primary opacity-15 blur-lg"
              />

              {/* Premium floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 40, x: -40 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 md:-left-16"
              >
                <div className="relative group">
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/40 to-accent/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />
                  <div className="relative bg-[hsl(220,25%,10%)]/95 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                        <span className="text-2xl font-heading font-bold text-white">CBG</span>
                      </div>
                      <div>
                        <div className="text-3xl font-heading font-bold text-white">250+</div>
                        <div className="text-sm text-white/50 font-body">Expert Team</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-body group-hover:text-primary/60 transition-colors">
            Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-2 group-hover:border-primary/30 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-gradient-to-b from-primary to-accent"
            />
          </div>
          <ArrowDown className="w-4 h-4 text-white/20 group-hover:text-primary/50 transition-colors" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[hsl(220,25%,6%)] via-[hsl(220,25%,6%)]/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default AboutHero;
