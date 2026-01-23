import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Play, Zap } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Modern gradient background - Fresh new theme */}
      <div className="absolute inset-0">
        {/* Base with warm undertones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180,15%,97%)] via-[hsl(160,20%,95%)] to-[hsl(140,15%,93%)]" />
        
        {/* Modern mesh gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-accent/10 via-accent/5 to-transparent rounded-full blur-[100px]" />
        </div>

        {/* Subtle geometric pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.08) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          
          {/* Left: Content with modern typography */}
          <motion.div 
            style={{ y, opacity }}
            className="relative z-10 pt-24 lg:pt-0"
          >
            {/* Modern label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium font-body">
                  India's Clean Energy Pioneer
                </span>
              </span>
            </motion.div>

            {/* Modern headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-6"
            >
              Transforming
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Agricultural Waste
                </span>
              </span>
              <br />
              Into Clean Energy
            </motion.h1>

            {/* Modern subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl font-body"
            >
              We're building India's largest Bio-CNG infrastructure, turning organic 
              waste into sustainable fuel for a greener tomorrow.
            </motion.p>

            {/* Modern CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 font-body"
              >
                Get Started
                <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-foreground font-medium transition-all duration-300 font-body"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Play className="w-3 h-3 text-white ml-0.5" />
                </div>
                Watch Our Story
              </button>
            </motion.div>

            {/* Modern stats with horizontal layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: "63+", label: "Bio-CNG Plants" },
                { value: "₹1,500 Cr", label: "Project Value" },
                { value: "8 States", label: "Pan-India" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {stat.label}
                  </div>
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-[3px] w-8 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 32 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Modern image composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div style={{ scale: imageScale }} className="relative">
              {/* Main image with modern frame */}
              <div className="relative">
                {/* Decorative background shapes */}
                <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] -z-10" />
                <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 bg-gradient-to-tr from-accent/15 to-primary/10 rounded-[2rem] -z-10" />
                
                {/* Main image */}
                <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl shadow-foreground/10">
                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                    alt="Clean Energy Infrastructure"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                </div>

                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, x: -30 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-8 -left-8 z-10"
                >
                  <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-5 shadow-xl shadow-foreground/10 border border-foreground/5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-heading font-bold text-foreground">250+</div>
                        <div className="text-sm text-muted-foreground font-body">Expert Team</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Small floating element */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 right-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary opacity-80 blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-body group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2 group-hover:border-primary/50 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
