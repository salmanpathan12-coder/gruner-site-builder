import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Multi-color gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,25%,12%)] via-[hsl(180,20%,15%)] to-[hsl(160,25%,10%)]" />
        
        {/* Dynamic color orbs */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/25 to-primary/15 rounded-full blur-[100px] opacity-50" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[hsl(180,60%,40%)]/20 to-transparent rounded-full blur-[80px]" />
        
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
          <motion.div 
            style={{ y }}
            className="relative z-10"
          >
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
                  India's Clean Energy Pioneer
                </span>
              </span>
            </motion.div>

            {/* Headline - Compact sizing */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-[1.1] mb-5"
            >
              Transforming
              <span className="block mt-1">
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Agricultural Waste
                </span>
              </span>
              <span className="block mt-1">Into Clean Energy</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-lg font-body"
            >
              We're building India's largest Bio-CNG infrastructure, turning organic 
              waste into sustainable fuel for a greener tomorrow.
            </motion.p>

            {/* CTA Buttons - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 font-body text-sm"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium transition-all duration-300 font-body text-sm backdrop-blur-sm"
              >
                Explore Solutions
              </a>
            </motion.div>

            {/* Stats - Compact horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6 md:gap-10"
            >
              {[
                { value: "63+", label: "Plants" },
                { value: "₹1,500Cr", label: "Value" },
                { value: "8 States", label: "Pan-India" },
              ].map((stat, index) => (
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

          {/* Right: Image composition */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decorative shapes */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl blur-sm" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                  alt="Clean Energy Infrastructure"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 md:left-4 z-10"
              >
                <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-heading font-bold text-foreground">100%</div>
                      <div className="text-xs text-muted-foreground font-body">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Top accent badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-3 right-4 z-10"
              >
                <div className="bg-gradient-to-r from-accent to-primary px-4 py-2 rounded-full shadow-lg">
                  <span className="text-xs font-medium text-white font-body">Since 2018</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
