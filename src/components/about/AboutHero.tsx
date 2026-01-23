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

/* ================= HOLOGRAM COUNTER ================= */
const HologramCounter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 70,
    damping: 20,
    mass: 1,
  });

  const display = useMotionTransform(spring, (latest) => `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`);

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
      {display}

      {/* hologram glow */}
      <motion.span
        className="absolute inset-0 -z-10 blur-xl"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(110,231,183,0.55), transparent 60%)",
        }}
      />
    </motion.span>
  );
};

/* ================= HERO ================= */
const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  /* scroll motion */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  /* mouse reactive sun orbit */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] overflow-hidden">
      {/* ================= HEADER SAFE ZONE ================= */}
      <div className="absolute top-0 left-0 right-0 h-[140px] z-10 bg-gradient-to-b from-[#0b1f17]/70 via-[#0b1f17]/40 to-transparent" />

      {/* ================= BACKGROUND WORLD ================= */}
      <div className="absolute inset-0">
        {/* cinematic sky */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(to bottom, #f7fbf9 0%, #eef6f2 35%, #fdf2df 70%, #fff7e8 100%)",
              "linear-gradient(to bottom, #f9fcfa 0%, #eef6f2 35%, #fdebd2 70%, #fff4e2 100%)",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* neural grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(47,122,96,0.4) 1px, transparent 1px),linear-gradient(to bottom, rgba(47,122,96,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* AI noise waves */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[280px]"
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{
            background: "linear-gradient(90deg, rgba(47,122,96,0.08), rgba(110,231,183,0.18), rgba(47,122,96,0.08))",
            backgroundSize: "200% 100%",
          }}
        />

        {/* ================= SUN SYSTEM ================= */}

        {/* solar core */}
        <motion.div
          className="absolute top-[12%] right-[18%] w-[420px] h-[420px] rounded-full blur-[60px]"
          style={{
            x: mouseX,
            y: mouseY,
            background: "radial-gradient(circle, #ffd27d 0%, #ffb347 35%, #ff944d 60%, transparent 72%)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* lens flare */}
        <motion.div
          className="absolute top-[16%] right-[20%] w-[600px] h-[120px] blur-[80px] opacity-40"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,210,125,0.8), transparent)",
          }}
        />

        {/* parallax clouds */}
        <motion.div
          className="absolute top-[25%] left-[10%] w-[600px] h-[180px] blur-[60px] opacity-30"
          animate={{ x: [0, 120, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)",
          }}
        />

        {/* particle physics */}
        {[...Array(22)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#6ee7b7]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-wide relative z-20 pt-40 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* LEFT CONTENT */}
          <motion.div style={{ y }} className="lg:col-span-5">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-[#e6f1ec] shadow-lg mb-8">
              <Sparkles className="w-4 h-4 text-[#ff944d]" />
              <span className="text-xs tracking-[0.18em] uppercase text-[#2f7a60] font-semibold">
                Intelligent Clean Energy
              </span>
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-[#0e2f23] mb-6">
              <span className="block">Building</span>
              <span className="block mt-2 bg-gradient-to-r from-[#ff944d] via-[#6ee7b7] to-[#2f7a60] bg-clip-text text-transparent">
                Living Energy
              </span>
              <span className="block mt-2">Ecosystems</span>
            </h1>

            <p className="text-base md:text-lg text-[#4b6f63] max-w-md mb-8">
              Transforming agricultural waste into intelligent clean-energy systems. Engineering India’s next-generation
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/85 backdrop-blur border border-[#e6f1ec] text-[#2f7a60] font-semibold shadow-lg"
              >
                <Play className="w-4 h-4" />
                Watch Vision
              </a>
            </div>

            {/* COUNTERS */}
            <div className="flex gap-12">
              <div>
                <div className="text-3xl font-bold text-[#0e2f23]">
                  <HologramCounter value={63} suffix="+" />
                </div>
                <div className="text-xs text-[#5f8572]">Plants Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0e2f23]">
                  <HologramCounter value={1500} prefix="₹" suffix="Cr" />
                </div>
                <div className="text-xs text-[#5f8572]">Project Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0e2f23]">
                  <HologramCounter value={8} suffix="+" />
                </div>
                <div className="text-xs text-[#5f8572]">Indian States</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div style={{ y: imageY, scale }} className="lg:col-span-7 relative">
            {/* cinematic aura */}
            <motion.div
              className="absolute -inset-12 rounded-full blur-[140px] opacity-40"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{
                background: "radial-gradient(circle, rgba(255,210,125,0.35), rgba(110,231,183,0.25), transparent 65%)",
              }}
            />

            {/* energy orbit ring */}
            <motion.div
              className="absolute -inset-6 rounded-full border border-[#ffb347]/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* image */}
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

              {/* energy flow */}
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPositionX: ["0%", "200%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "linear-gradient(120deg, transparent 35%, rgba(255,179,71,0.25) 50%, transparent 65%)",
                  backgroundSize: "200% 100%",
                }}
              />

              {/* hologram pulse */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  background: "radial-gradient(circle at center, rgba(110,231,183,0.3), transparent 60%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7fbf9] to-transparent" />
    </section>
  );
};

export default AboutHero;
