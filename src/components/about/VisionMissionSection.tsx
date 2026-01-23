import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Rocket, Globe } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      {/* Warm cream/ivory gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,40%,96%)] via-[hsl(40,35%,94%)] to-[hsl(50,30%,95%)]" />
      
      {/* Animated accent orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, hsl(90, 45%, 75%) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.5, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(45, 50%, 80%) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.span 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[hsl(90,35%,88%)] border border-[hsl(90,30%,75%)] mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Rocket className="w-4 h-4 text-[hsl(90,45%,35%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[hsl(90,35%,30%)] font-semibold font-body">
              Our Direction
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(150,25%,15%)] leading-tight">
            Driving India's{" "}
            <span className="bg-gradient-to-r from-[hsl(90,50%,40%)] to-[hsl(150,45%,38%)] bg-clip-text text-transparent">
              Clean Energy
            </span>{" "}
            Revolution
          </h2>
        </motion.div>

        {/* Vision & Mission cards - Creative asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Vision Card - Larger */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: -30 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 group"
          >
            <div className="relative h-full bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-[hsl(150,20%,50%)]/8 border border-[hsl(90,25%,85%)] overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[hsl(90,40%,85%)]/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(90,45%,45%)] to-[hsl(120,40%,40%)] flex items-center justify-center shadow-lg shadow-[hsl(90,40%,40%)]/25">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-[hsl(90,35%,90%)] text-xs font-medium text-[hsl(90,40%,30%)] font-body">2030 Goal</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-[hsl(150,25%,18%)] mb-4">
                  Our Vision
                </h3>
                <p className="text-[hsl(150,10%,40%)] text-base leading-relaxed font-body mb-8">
                  To be India's leading force in the Bio-CNG revolution, creating a sustainable 
                  ecosystem where agricultural waste transforms into clean energy, empowering 
                  communities and protecting our planet for future generations.
                </p>

                {/* Vision metrics */}
                <div className="flex gap-8 pt-6 border-t border-[hsl(90,20%,90%)]">
                  <div>
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[hsl(90,50%,40%)] to-[hsl(150,45%,38%)] bg-clip-text text-transparent">500+</div>
                    <div className="text-xs text-[hsl(150,15%,50%)] font-body mt-1">Plants Target</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-[hsl(90,50%,40%)] to-[hsl(150,45%,38%)] bg-clip-text text-transparent">Net Zero</div>
                    <div className="text-xs text-[hsl(150,15%,50%)] font-body mt-1">Carbon Goal</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card - Darker theme */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: 30 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 group"
          >
            <div className="relative h-full bg-gradient-to-br from-[hsl(150,30%,18%)] via-[hsl(140,25%,22%)] to-[hsl(130,20%,15%)] rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[hsl(90,45%,50%)]/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] opacity-30"
                style={{ background: "radial-gradient(circle, hsl(90, 50%, 55%) 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(90,50%,55%)] to-[hsl(150,45%,45%)] flex items-center justify-center shadow-lg mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/75 text-base leading-relaxed font-body mb-8">
                  Delivering world-class Bio-CNG infrastructure through innovative technology, 
                  operational excellence, and environmental stewardship across India.
                </p>

                {/* Mission pillars */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {["Innovation", "Sustainability", "Excellence", "Growth"].map((pillar) => (
                    <span 
                      key={pillar}
                      className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-xs font-medium font-body border border-white/10 hover:bg-white/15 transition-colors"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Creative quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
              alt="Sustainable Energy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,30%,15%)]/90 via-[hsl(150,25%,20%)]/75 to-[hsl(90,30%,25%)]/60" />
            <div className="absolute inset-0 flex items-center px-8 md:px-14">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(90,50%,50%)] to-[hsl(150,45%,45%)] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg md:text-xl font-heading font-medium text-white leading-relaxed max-w-xl">
                  "Building a circular economy where waste becomes wealth and energy becomes sustainable."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
