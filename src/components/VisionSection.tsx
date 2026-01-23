import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-40 overflow-hidden bg-off-white">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-narrow relative z-10" ref={ref}>
        <motion.div
          style={{ scale, opacity }}
          className="text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-24 h-24 mx-auto mb-10"
          >
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-3 rounded-full border border-primary/30" />
            <div className="absolute inset-6 rounded-full bg-primary/10 flex items-center justify-center">
              <motion.div
                className="w-4 h-4 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-6"
          >
            Looking Ahead
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 leading-[1.2]"
          >
            Building the Next Phase of{" "}
            <span className="relative inline-block">
              Bioenergy Infrastructure
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.path
                  d="M2 8 Q75 2 150 6 Q225 10 298 4"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            As India accelerates its energy transition, Gruner Renewable is
            positioned to scale bioenergy infrastructure that serves both
            environmental and economic imperatives — creating enduring value for
            communities, partners, and the nation.
          </motion.p>

          {/* Future roadmap indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12"
          >
            {[
              { year: "2025", label: "50 Plants Target" },
              { year: "2030", label: "Pan-India Coverage" },
              { year: "2070", label: "Net-Zero Partner" },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl font-heading font-bold text-primary">{milestone.year}</span>
                <span className="text-sm text-muted-foreground">{milestone.label}</span>
                {index < 2 && <div className="w-px h-6 bg-border ml-5" />}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
