import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Play } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Deep layered background */}
      <div className="absolute inset-0">
        {/* Base gradient - deep dark with teal undertones */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,20%,8%)] via-[hsl(200,25%,10%)] to-[hsl(168,30%,8%)]" />
        
        {/* Ambient gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-primary/15 via-primary/5 to-transparent blur-[100px]"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent blur-[80px]"
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container-wide relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left: Brand Message */}
          <motion.div 
            style={{ y, opacity }}
            className="relative"
          >
            {/* Overline badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs tracking-[0.25em] uppercase text-white/50 font-body font-medium">
                  About Gruner Renewable Energy
                </span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-white leading-[1.05] mb-8"
            >
              Pioneering
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-[hsl(120,50%,50%)] to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  India's Clean
                </span>
              </span>
              <br />
              Energy Future
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/40 max-w-lg leading-relaxed font-body mb-10"
            >
              Transforming agricultural waste into sustainable Bio-CNG fuel, 
              reducing fossil fuel dependency while empowering rural communities across India.
            </motion.p>

            {/* Key stats inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: "₹1,500+ Cr", label: "Project Orders" },
                { value: "63+", label: "Plants" },
                { value: "250+", label: "Team" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/30 uppercase tracking-[0.15em] font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Premium Image Composition */}
          <motion.div
            style={{ y: imageY }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Main image container with premium frame */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 z-0" />
                
                <div className="relative z-10 rounded-3xl overflow-hidden m-[1px]">
                  <motion.div
                    style={{ scale }}
                    className="relative aspect-[4/5]"
                  >
                    <img
                      src="https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/7e6baf576c4.png"
                      alt="Gruner Bio-CNG Plant"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Premium overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,8%)] via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                  </motion.div>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 blur-sm -z-10"
              />
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-gradient-to-br from-accent to-primary opacity-15 blur-sm -z-10"
              />

              {/* Stats floating card */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: -30 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-4 -left-4 md:-left-12"
              >
                <div className="bg-[hsl(220,20%,12%)]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-white">8+ States</div>
                      <div className="text-sm text-white/40 font-body">Pan-India Presence</div>
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-body group-hover:text-white/50 transition-colors">
            Explore
          </span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-white/40 transition-colors">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
    </section>
  );
};

export default AboutHero;
