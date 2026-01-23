import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Rocket, ArrowUpRight, Compass, Mountain } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24">
      {/* Warm creamy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,50%,96%)] via-[hsl(40,45%,94%)] to-[hsl(35,40%,93%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, hsl(45, 60%, 75%) 0%, transparent 70%)" }}
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(85, 45%, 70%) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[hsl(45,45%,88%)] border border-[hsl(45,40%,78%)] mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Compass className="w-4 h-4 text-[hsl(40,50%,40%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[hsl(40,40%,30%)] font-semibold font-body">
              Our Direction
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(180,25%,15%)] leading-tight">
            Guided by{" "}
            <span className="bg-gradient-to-r from-[hsl(168,55%,38%)] to-[hsl(85,50%,42%)] bg-clip-text text-transparent">
              Purpose
            </span>
          </h2>
        </motion.div>

        {/* Creative asymmetric cards layout */}
        <div className="grid lg:grid-cols-12 gap-5 max-w-6xl mx-auto">
          {/* Vision Card - Larger, light theme */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: -20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 group"
          >
            <div className="relative h-full bg-white rounded-2xl p-7 md:p-8 shadow-xl shadow-[hsl(45,30%,50%)]/10 border border-[hsl(45,35%,88%)] overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsl(45,50%,85%)]/60 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(40,55%,50%)] to-[hsl(30,50%,45%)] flex items-center justify-center shadow-lg shadow-[hsl(40,50%,45%)]/25">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <motion.span 
                    className="px-3 py-1.5 rounded-full bg-[hsl(40,40%,92%)] text-xs font-medium text-[hsl(40,45%,35%)] font-body"
                    whileHover={{ scale: 1.05 }}
                  >
                    2030 Goal
                  </motion.span>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-[hsl(180,25%,15%)] mb-3">
                  Our Vision
                </h3>
                <p className="text-[hsl(180,10%,40%)] text-sm md:text-base leading-relaxed font-body mb-6">
                  To lead India's Bio-CNG revolution, creating a sustainable ecosystem where 
                  agricultural waste transforms into clean energy, empowering communities 
                  and protecting our planet.
                </p>

                {/* Vision metrics */}
                <div className="flex gap-8 pt-5 border-t border-[hsl(40,25%,90%)]">
                  <div>
                    <div className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-[hsl(168,55%,38%)] to-[hsl(85,50%,42%)] bg-clip-text text-transparent">500+</div>
                    <div className="text-xs text-[hsl(180,15%,50%)] font-body mt-0.5">Plants Target</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-[hsl(168,55%,38%)] to-[hsl(85,50%,42%)] bg-clip-text text-transparent">Net Zero</div>
                    <div className="text-xs text-[hsl(180,15%,50%)] font-body mt-0.5">Carbon Goal</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card - Dark theme */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 group"
          >
            <div className="relative h-full bg-gradient-to-br from-[hsl(180,35%,15%)] via-[hsl(168,30%,18%)] to-[hsl(200,25%,12%)] rounded-2xl p-7 md:p-8 shadow-xl overflow-hidden">
              {/* Glow accent */}
              <motion.div 
                className="absolute top-0 right-0 w-36 h-36 rounded-full blur-[60px] opacity-40"
                style={{ background: "radial-gradient(circle, hsl(85, 55%, 50%) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(85,55%,50%)] to-[hsl(168,50%,45%)] flex items-center justify-center shadow-lg mb-5">
                  <Target className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-body mb-6">
                  Delivering world-class Bio-CNG infrastructure through innovation, 
                  excellence, and environmental stewardship across India.
                </p>

                {/* Mission pillars */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10">
                  {["Innovation", "Sustainability", "Excellence"].map((pillar) => (
                    <span 
                      key={pillar}
                      className="px-3 py-1.5 rounded-full bg-white/10 text-white/85 text-xs font-medium font-body border border-white/10 hover:bg-white/15 transition-colors cursor-default"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Purpose statement banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
              alt="Sustainable Energy"
              className="w-full h-44 md:h-52 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(180,35%,12%)]/90 via-[hsl(168,30%,18%)]/80 to-[hsl(85,35%,25%)]/65" />
            <div className="absolute inset-0 flex items-center px-7 md:px-12">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(85,55%,50%)] to-[hsl(168,50%,45%)] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mountain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-heading font-medium text-white leading-relaxed max-w-xl">
                    "Building a circular economy where waste becomes wealth and energy becomes sustainable."
                  </p>
                  <p className="text-xs text-white/50 font-body mt-2">— Gruner Renewable Vision 2030</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
