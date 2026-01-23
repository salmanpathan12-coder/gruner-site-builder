import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useTransform as useMotionTransform,
  useInView,
} from "framer-motion";

import { useRef, useEffect } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

/* ================= PERFECT ANIMATED COUNTER ================= */
const HologramCounter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 70,
    damping: 18,
    mass: 1,
  });

  const display = useTransform(spring, (latest) => `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.span
      ref={ref}
      className="relative inline-block"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ render MotionValue correctly */}
      <motion.span>{display}</motion.span>

      {/* hologram glow */}
      <motion.span
        className="absolute inset-0 -z-10 blur-xl"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(150,220,190,0.45), transparent 65%)",
        }}
      />
    </motion.span>
  );
};

/* ================= HERO ================= */
const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 25);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 25);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] overflow-hidden">
      {/* ===== HEADER VISIBILITY ZONE ===== */}
      <div className="absolute top-0 left-0 right-0 h-[130px] z-10 bg-gradient-to-b from-[#edf4f1] via-[#edf4f1]/70 to-transparent" />

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* creamy pista gradient sky */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #f6f9f3 0%, #eaf4ee 35%, #fdf7ec 70%, #ffffff 100%)",
              "linear-gradient(135deg, #f5faf6 0%, #e8f3ec 35%, #fcf6ea 70%, #ffffff 100%)",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* soft neural grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(120,180,150,0.4) 1px, transparent 1px),linear-gradient(to bottom, rgba(120,180,150,0.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* soft creamy waves */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[260px]"
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "linear-gradient(90deg, rgba(180,220,200,0.10), rgba(220,240,225,0.18), rgba(180,220,200,0.10))",
            backgroundSize: "200% 100%",
          }}
        />

        {/* sun core (soft, elite) */}
        <motion.div
          className="absolute top-[14%] right-[18%] w-[380px] h-[380px] rounded-full blur-[70px]"
          style={{
            x: mouseX,
            y: mouseY,
            background: "radial-gradient(circle, #fff1c1 0%, #ffe0a3 40%, #ffd6a1 60%, transparent 72%)",
          }}
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.6, 0.85, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* lens glow */}
        <motion.div
          className="absolute top-[18%] right-[22%] w-[520px] h-[120px] blur-[90px] opacity-30"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,230,180,0.8), transparent)",
          }}
        />

        {/* soft clouds */}
        <motion.div
          className="absolute top-[28%] left-[8%] w-[520px] h-[170px] blur-[70px] opacity-25"
          animate={{ x: [0, 120, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)",
          }}
        />

        {/* soft particles */}
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#b8e3d1]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.35,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-wide relative z-20 pt-40 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* LEFT */}
          <motion.div style={{ y }} className="lg:col-span-5">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/75 backdrop-blur-xl border border-[#dfeee7] shadow-lg mb-8">
              <Sparkles className="w-4 h-4 text-[#7fbfa3]" />
              <span className="text-xs tracking-[0.18em] uppercase text-[#4f7f6a] font-semibold">
                Intelligent Clean Energy
              </span>
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-[#183a2f] mb-6">
              <span className="block">Building</span>
              <span className="block mt-2 bg-gradient-to-r from-[#6fbfa1] via-[#8fd3b8] to-[#5fae94] bg-clip-text text-transparent">
                Living Energy
              </span>
              <span className="block mt-2">Ecosystems</span>
            </h1>

            <p className="text-base md:text-lg text-[#5f7f73] max-w-md mb-8">
              Transforming agricultural waste into intelligent clean-energy systems. Engineering India’s next-generation
              Bio-CNG infrastructure.
            </p>

            <div className="flex gap-4 mb-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6fbfa1] to-[#8fd3b8] text-white font-semibold shadow-xl hover:-translate-y-1 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/85 backdrop-blur border border-[#dfeee7] text-[#4f7f6a] font-semibold shadow-lg"
              >
                <Play className="w-4 h-4" />
                Watch Vision
              </a>
            </div>

            {/* COUNTERS */}
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-bold text-[#183a2f]">
                  <HologramCounter value={63} suffix="+" />
                </div>
                <div className="text-xs text-[#6f8f83]">Plants Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#183a2f]">
                  <HologramCounter value={1500} prefix="₹" suffix="Cr" />
                </div>
                <div className="text-xs text-[#6f8f83]">Project Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#183a2f]">
                  <HologramCounter value={8} suffix="+" />
                </div>
                <div className="text-xs text-[#6f8f83]">Indian States</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div style={{ y: imageY, scale }} className="lg:col-span-7 relative">
            {/* elite aura */}
            <motion.div
              className="absolute -inset-12 rounded-full blur-[160px] opacity-35"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 7, repeat: Infinity }}
              style={{
                background: "radial-gradient(circle, rgba(210,240,225,0.5), rgba(255,240,210,0.4), transparent 65%)",
              }}
            />

            {/* orbit ring */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-[#cfe7dc]"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                alt="Clean Energy Infrastructure"
                className="w-full aspect-[4/3] object-cover"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 14, repeat: Infinity }}
              />

              {/* soft energy flow */}
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPositionX: ["0%", "200%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(120deg, transparent 38%, rgba(200,240,220,0.25) 50%, transparent 62%)",
                  backgroundSize: "200% 100%",
                }}
              />

              {/* hologram softness */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{
                  background: "radial-gradient(circle at center, rgba(180,230,210,0.25), transparent 65%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f6f9f3] to-transparent" />
    </section>
  );
};

export default AboutHero;
