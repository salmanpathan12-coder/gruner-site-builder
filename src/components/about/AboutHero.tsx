import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden min-h-[85vh]"
    >
      {/* Innovative multi-color gradient - Deep navy to teal */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,35%,12%)] via-[hsl(200,30%,18%)] to-[hsl(175,35%,15%)]" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle, hsl(160,50%,45%,0.3) 0%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, hsl(45,60%,55%,0.2) 0%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.15, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, hsl(280,40%,50%,0.15) 0%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main content with safe header offset */}
      <div className="container-wide relative z-10 pt-36 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Content - 7 columns */}
          <motion.div 
            style={{ y }}
            className="lg:col-span-7 relative z-10"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(160,50%,45%)]/20 to-[hsl(45,60%,55%)]/20 border border-white/10 backdrop-blur-sm">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-4 h-4 text-[hsl(45,60%,60%)]" />
                </motion.span>
                <span className="text-xs tracking-[0.15em] uppercase text-white/80 font-medium font-body">
                  India's Bio-CNG Pioneer
                </span>
              </span>
            </motion.div>

            {/* Bold headline with gradient text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.08] mb-5"
            >
              Powering India's
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-[hsl(160,55%,50%)] via-[hsl(45,65%,60%)] to-[hsl(160,55%,50%)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Clean Energy
                </span>
              </span>
              <br />
              Revolution
            </motion.h1>

            {/* Description with better contrast */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-white/65 leading-relaxed mb-7 max-w-lg font-body"
            >
              Transforming agricultural waste into sustainable Bio-CNG fuel, 
              building India's largest clean energy infrastructure network.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(160,50%,45%)] to-[hsl(175,45%,40%)] text-white font-medium shadow-lg shadow-[hsl(160,50%,45%)]/25 hover:shadow-xl hover:shadow-[hsl(160,50%,45%)]/35 hover:-translate-y-0.5 transition-all duration-300 font-body text-sm"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white font-medium transition-all duration-300 font-body text-sm backdrop-blur-sm"
              >
                Our Solutions
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "63+", label: "Plants Built" },
                { value: "₹1,500Cr", label: "Project Value" },
                { value: "8 States", label: "Nationwide" },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  <div className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 font-body uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-[hsl(160,50%,45%)] to-[hsl(45,60%,55%)]"
                    initial={{ width: 0 }}
                    animate={{ width: 28 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Creative image composition - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Asymmetric frame container */}
            <div className="relative">
              {/* Background accent shape */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-[hsl(160,50%,45%)]/20 via-[hsl(45,60%,55%)]/10 to-transparent rounded-3xl blur-sm"
                style={{ scale: imageScale }}
              />
              
              {/* Main image */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ scale: imageScale }}
              >
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
                  alt="Clean Energy Future"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,35%,12%)]/60 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(160,50%,45%)] to-[hsl(45,60%,55%)] flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-heading font-bold text-white">Since 2018</div>
                        <div className="text-xs text-white/60 font-body">Building the future</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[hsl(45,60%,55%)] to-[hsl(35,70%,50%)] rounded-2xl flex items-center justify-center shadow-xl"
              >
                <span className="text-white font-heading font-bold text-xl">100%</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
