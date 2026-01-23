import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={containerRef} className="relative min-h-[95vh] overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #f6faf7 0%, #eaf4ef 30%, #f9fbf8 60%, #eef6f2 100%)",
              "linear-gradient(135deg, #eef6f2 0%, #f9fbf8 30%, #eaf4ef 60%, #f6faf7 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ambient orbs */}
        <motion.div
          className="absolute top-20 right-[5%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-50"
          style={{ background: "radial-gradient(circle, #cdeee0 0%, transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-45"
          style={{ background: "radial-gradient(circle, #f4efd8 0%, transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />

        {/* AI grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(60,120,90,0.4) 1px, transparent 1px),linear-gradient(to bottom, rgba(60,120,90,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-wide relative z-10 pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[75vh]">
          {/* LEFT CONTENT */}
          <motion.div style={{ y }} className="lg:col-span-5 relative z-10">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-[#dbeee5] shadow-lg">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-4 h-4 text-[#2f7a60]" />
                </motion.div>
                <span className="text-xs tracking-[0.15em] uppercase text-[#2f7a60] font-semibold">
                  Clean Energy Innovation
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-[#0e2f23] leading-[1.05] mb-6"
            >
              <span className="block">Engineering</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[#2f7a60] via-[#3a8c6d] to-[#1f5f4b] bg-clip-text text-transparent">
                  Living Energy
                </span>
              </span>
              <span className="block mt-2">Systems</span>
            </motion.h1>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-base md:text-lg text-[#4b6f63] leading-relaxed mb-8 max-w-md"
            >
              Transforming agricultural waste into intelligent clean energy ecosystems. Building India's next-generation
              Bio-CNG infrastructure.
            </motion.p>

            {/* CTAs */}
            <div className="flex gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2f7a60] to-[#1f5f4b] text-white font-semibold shadow-xl hover:-translate-y-1 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/80 backdrop-blur border border-[#dbeee5] text-[#1f5f4b] font-semibold shadow-lg"
              >
                <Play className="w-4 h-4" />
                Watch Vision
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE SYSTEM ================= */}
          <motion.div style={{ y: imageY, scale }} className="lg:col-span-7 relative">
            <div className="relative">
              {/* Rotating energy ring */}
              <motion.div
                className="absolute -inset-8 rounded-full border border-[#6ee7b7]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Light sweep */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(120deg, transparent 30%, rgba(110,231,183,0.15) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
              />

              {/* Floating particles */}
              {[...Array(12)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#6ee7b7]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.6,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                  alt="Clean Energy Infrastructure"
                  className="w-full aspect-[4/3] object-cover"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* animated overlays */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(110,231,183,0.25), transparent 60%)",
                  }}
                />

                {/* scanline glow */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(110,231,183,0.15), transparent)",
                    height: "200%",
                  }}
                />
              </motion.div>

              {/* Floating data card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-[#dbeee5]"
              >
                <div className="text-xl font-bold text-[#0e2f23]">100%</div>
                <div className="text-xs text-[#5f8572]">Project Success</div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-4 right-8 bg-gradient-to-r from-[#2f7a60] to-[#1f5f4b] px-5 py-2.5 rounded-full shadow-xl"
              >
                <span className="text-xs font-semibold text-white tracking-wide">Since 2018</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f9fcfa] to-transparent" />
    </section>
  );
};

export default AboutHero;
