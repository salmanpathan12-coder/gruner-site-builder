import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return <section ref={containerRef} className="relative min-h-[70vh] flex items-center bg-white overflow-hidden">
      {/* HEADER SAFE ZONE */}
      <div className="absolute top-0 left-0 right-0 h-[96px] md:h-[120px] z-20 pointer-events-none" />

      {/* TOP GRADIENT BUFFER */}
      <div className="absolute top-0 left-0 right-0 h-[140px] bg-gradient-to-b from-white via-white/95 to-transparent z-10" />

      {/* MAIN WHITE BACKGROUND */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* CONTENT */}
      <div className="container-wide relative z-20 pt-[96px] md:pt-[120px] pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div style={{
          y
        }} className="relative z-10">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-black/15 bg-white">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-xs tracking-[0.12em] uppercase text-black font-medium">
                  India's Clean Energy Pioneer
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-black leading-[1.1] mb-5">
              Transforming
              <span className="block mt-1 text-green-700">Agricultural Waste</span>
              <span className="block mt-1">Into Clean Energy</span>
            </motion.h1>

            {/* Description */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-base md:text-lg text-black/70 leading-relaxed mb-8 max-w-lg">
              We're building India's largest Bio-CNG infrastructure, turning organic waste into sustainable fuel for a
              greener tomorrow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="flex flex-wrap gap-3 mb-10">
              <a href="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm rounded-md">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="/solutions" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-black/15 text-black font-medium transition-all duration-300 text-sm rounded-md hover:bg-black/5">
                Explore Solutions
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-wrap gap-6 md:gap-10">
              {[{
              value: "63+",
              label: "Plants"
            }, {
              value: "₹1,500Cr",
              label: "Value"
            }, {
              value: "8 States",
              label: "Pan-India"
            }].map((stat, index) => <div key={stat.label} className="relative">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-black">{stat.value}</div>
                  <div className="text-xs text-black/60 uppercase tracking-wider">{stat.label}</div>
                  <motion.div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-700 to-green-500" initial={{
                width: 0
              }} animate={{
                width: 28
              }} transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1
              }} />
                </div>)}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE (UNCHANGED STYLE) */}
          <motion.div style={{
          y: imageY
        }} initial={{
          opacity: 0,
          x: 40,
          scale: 0.95
        }} animate={{
          opacity: 1,
          x: 0,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.3
        }} className="relative">
            <div className="relative">
              {/* Background decorative shape */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-green-600/30 to-green-400/20 rounded-2xl blur-sm" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" alt="Clean Energy Infrastructure" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div initial={{
              opacity: 0,
              y: 20,
              x: -20
            }} animate={{
              opacity: 1,
              y: 0,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.8
            }} className="absolute -bottom-4 -left-4 md:left-4 z-10">
                <div className="bg-white p-4 shadow-xl border border-black/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-700 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-heading font-bold text-black">100%</div>
                      <div className="text-xs text-black/60">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutHero;