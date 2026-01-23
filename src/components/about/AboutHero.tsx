import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* ================= HEADER CONTRAST ZONE ================= */}
      {/* This ensures white header is ALWAYS visible */}
      <div className="absolute top-0 left-0 right-0 h-[140px] z-[2] bg-gradient-to-b from-[#0b1f17] via-[#0b1f17]/80 to-transparent" />

      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 z-0">
        {/* Base innovation gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(180deg, #0b1f17 0%, #f6faf7 18%, #eef6f1 45%, #f9fbf9 100%)",
              "linear-gradient(180deg, #0b1f17 0%, #f7fbf8 18%, #ecf4ef 45%, #f9fbf9 100%)",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft innovation mesh */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(40,100,80,0.6) 1px, transparent 0)",
            backgroundSize: "46px 46px",
          }}
        />

        {/* Premium light orbs */}
        <motion.div
          className="absolute top-[20%] right-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-50"
          style={{
            background: "radial-gradient(circle, #cdeee0 0%, #dff5ea 40%, transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-45"
          style={{
            background: "radial-gradient(circle, #f2ecd4 0%, #f7f2dc 40%, transparent 70%)",
          }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-wide relative z-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
          {/* LEFT CONTENT */}
          <motion.div style={{ y, opacity }} className="lg:col-span-5">
            {/* Elite badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/85 backdrop-blur-xl border border-[#dbeee5] shadow-xl">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-4 h-4 text-[#2f7a60]" />
                </motion.div>
                <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[#245c4a]">
                  Future Energy Systems
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.05] text-[#0e2f23] mb-7"
            >
              <span className="block">Designing</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[#2f7a60] via-[#3a8c6d] to-[#1f5f4b] bg-clip-text text-transparent">
                  Intelligent
                </span>
              </span>
              <span className="block mt-2">Energy</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-[#4b6f63] leading-relaxed max-w-md mb-10"
            >
              Transforming agricultural waste into next-generation clean energy systems. Building scalable Bio-CNG
              infrastructure with innovation, precision and trust.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-5 mb-14"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#2f7a60] to-[#1f5f4b] text-white font-semibold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/85 backdrop-blur-xl border border-[#dbeee5] text-[#1f5f4b] font-semibold shadow-xl hover:bg-white transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Watch Vision
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex gap-12"
            >
              {[
                { value: "63+", label: "Plants Delivered" },
                { value: "₹1,500Cr", label: "Project Value" },
                { value: "8 States", label: "Pan-India Reach" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#0e2f23]">{stat.value}</div>
                  <div className="text-xs text-[#5f8572] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div style={{ y: imageY, scale }} className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: 90, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative rounded-[2.8rem] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                alt="Clean Energy Infrastructure"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </motion.div>

            {/* Floating premium cards */}
            <div className="absolute -bottom-8 left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-[#dbeee5]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2f7a60] to-[#1f5f4b] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0e2f23]">100%</div>
                  <div className="text-xs text-[#5f8572]">Project Success</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 right-10 bg-gradient-to-r from-[#2f7a60] to-[#1f5f4b] px-6 py-2.5 rounded-full shadow-xl">
              <span className="text-xs font-semibold text-white tracking-wide">Since 2018</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f9fbf9] to-transparent" />
    </section>
  );
};

export default AboutHero;
