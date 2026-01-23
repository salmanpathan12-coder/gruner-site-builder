import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

/* ---------- Animated Counter ---------- */
const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(v) {
        setCount(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
};

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] overflow-hidden">
      {/* ================= CINEMATIC SKY BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* Animated sky gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(to bottom, #fff7e6 0%, #fdebd2 30%, #e8f5ef 65%, #f7fbf9 100%)",
              "linear-gradient(to bottom, #fff2dc 0%, #fde6c8 30%, #e2f3ec 65%, #f7fbf9 100%)",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 🌅 Sun core */}
        <motion.div
          className="absolute top-[12%] right-[15%] w-[420px] h-[420px] rounded-full blur-[60px]"
          style={{
            background: "radial-gradient(circle, #ffd27d 0%, #ffb347 40%, #ff944d 65%, transparent 75%)",
          }}
          animate={{
            y: [0, 25, 0],
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sun rays */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-[18%] right-[18%] w-[500px] h-[2px] opacity-30"
            style={{
              background: "linear-gradient(to right, #ffd27d, transparent)",
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Energy waves */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[280px]"
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            background: "linear-gradient(90deg, rgba(47,122,96,0.08), rgba(110,231,183,0.15), rgba(47,122,96,0.08))",
            backgroundSize: "200% 100%",
          }}
        />

        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#6ee7b7]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Horizon glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[220px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(to top, rgba(255,179,71,0.25), transparent)",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-wide relative z-10 pt-40 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* LEFT CONTENT */}
          <motion.div style={{ y }} className="lg:col-span-5">
            <motion.div className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-[#f1e6d5] shadow-lg">
                <Sparkles className="w-4 h-4 text-[#ff944d]" />
                <span className="text-xs tracking-[0.18em] uppercase text-[#8a5a2b] font-semibold">
                  Clean Energy Revolution
                </span>
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-[#1f3b32] mb-6">
              <span className="block">Where</span>
              <span className="block mt-2 bg-gradient-to-r from-[#ff944d] via-[#6ee7b7] to-[#2f7a60] bg-clip-text text-transparent">
                Energy Meets Future
              </span>
              <span className="block mt-2">Innovation</span>
            </h1>

            <p className="text-base md:text-lg text-[#4b6f63] max-w-md mb-8">
              Transforming agricultural waste into intelligent clean-energy ecosystems. Building India's next-generation
              Bio-CNG infrastructure.
            </p>

            <div className="flex gap-4 mb-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ff944d] to-[#ffb347] text-white font-semibold shadow-xl hover:-translate-y-1 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/80 backdrop-blur border border-[#f1e6d5] text-[#2f7a60] font-semibold shadow-lg"
              >
                <Play className="w-4 h-4" />
                Watch Vision
              </a>
            </div>

            {/* Animated Counters */}
            <div className="flex gap-10">
              <div>
                <div className="text-3xl font-bold text-[#1f3b32]">
                  <Counter value={63} />+
                </div>
                <div className="text-xs text-[#5f8572]">Plants Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1f3b32]">
                  ₹<Counter value={1500} />
                  Cr
                </div>
                <div className="text-xs text-[#5f8572]">Project Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#1f3b32]">
                  <Counter value={8} />+
                </div>
                <div className="text-xs text-[#5f8572]">Indian States</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div style={{ y: imageY, scale }} className="lg:col-span-7 relative">
            {/* Energy aura */}
            <motion.div
              className="absolute -inset-10 rounded-full blur-[120px] opacity-40"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{
                background: "radial-gradient(circle, rgba(255,179,71,0.4), rgba(110,231,183,0.3), transparent 65%)",
              }}
            />

            {/* Floating ring */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-[#ffb347]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            {/* Image */}
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
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Light flow */}
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPositionX: ["0%", "200%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(120deg, transparent 30%, rgba(255,179,71,0.25) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
              />

              {/* Pulse overlay */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  background: "radial-gradient(circle at center, rgba(110,231,183,0.25), transparent 60%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7fbf9] to-transparent" />
    </section>
  );
};

export default AboutHero;
