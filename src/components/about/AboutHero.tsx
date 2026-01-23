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
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0">
        {/* Luxury creamy pista gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #f6f9f3 0%, #e7f2e4 30%, #f9fbf6 60%, #eaf4ec 100%)",
              "linear-gradient(135deg, #eaf4ec 0%, #f7faf4 30%, #e3f0e6 60%, #f6f9f3 100%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft mesh texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(60,120,80,0.6) 1px, transparent 0)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Floating luxury orbs */}
        <motion.div
          className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] opacity-60"
          style={{
            background: "radial-gradient(circle, #bfe6c7 0%, #cfeedd 40%, transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[-15%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-50"
          style={{
            background: "radial-gradient(circle, #f3eecf 0%, #f6f2dc 40%, transparent 70%)",
          }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] opacity-40"
          style={{
            background: "radial-gradient(circle, #cfe8d9 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-wide relative z-10 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[75vh]">
          {/* LEFT CONTENT */}
          <motion.div style={{ y, opacity }} className="lg:col-span-5">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-[#cfe5d6] shadow-xl">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-4 h-4 text-[#4c8f6a]" />
                </motion.div>
                <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[#3b6f55]">
                  Clean Energy Infrastructure
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.05] text-[#143a2a] mb-6"
            >
              <span className="block">Engineering</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-[#4c8f6a] via-[#3f7f61] to-[#2f6f58] bg-clip-text text-transparent">
                  Sustainable
                </span>
              </span>
              <span className="block mt-2">Futures</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-[#456b5a] leading-relaxed max-w-md mb-9"
            >
              Transforming agricultural waste into high-value clean energy systems. Building India's next-generation
              Bio-CNG infrastructure with precision, scale and sustainability.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-5 mb-12"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#4c8f6a] to-[#2f6f58] text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/70 backdrop-blur-xl border border-[#cfe5d6] text-[#2f6f58] font-semibold shadow-xl hover:bg-white transition-all duration-300"
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
              className="flex gap-10"
            >
              {[
                { value: "63+", label: "Plants Delivered" },
                { value: "₹1,500Cr", label: "Project Value" },
                { value: "8 States", label: "Pan-India Reach" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#143a2a]">{stat.value}</div>
                  <div className="text-xs text-[#5f8572] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div style={{ y: imageY, scale }} className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                alt="Clean Energy Infrastructure"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Floating glass cards */}
            <div className="absolute -bottom-8 left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-[#cfe5d6]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4c8f6a] to-[#2f6f58] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xl font-bold text-[#143a2a]">100%</div>
                  <div className="text-xs text-[#5f8572]">Project Success</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 right-10 bg-gradient-to-r from-[#4c8f6a] to-[#2f6f58] px-6 py-2.5 rounded-full shadow-xl">
              <span className="text-xs font-semibold text-white tracking-wide">Since 2018</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f6f9f3] to-transparent" />
    </section>
  );
};

export default AboutHero;
