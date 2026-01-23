import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Zap, ArrowUpRight } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(200,15%,6%)] to-[hsl(168,20%,8%)]" />
        
        {/* Ambient glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-primary/[0.08] via-transparent to-transparent blur-3xl"
        />
      </div>

      <div className="container-wide relative z-10 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent to-primary"
            />
            <span className="text-primary text-xs font-medium uppercase tracking-[0.3em] font-body">
              Our Purpose
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-l from-transparent to-primary"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white">
            Vision & Mission
          </h2>
        </motion.div>

        {/* Cards - Premium glass design */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: -20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/[0.08] to-transparent rounded-bl-full" />
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[hsl(168,55%,40%)] flex items-center justify-center shadow-lg shadow-primary/30">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-2xl md:text-3xl font-heading font-semibold text-white mb-5">
                Our Mission
              </h3>
              <p className="relative text-white/50 text-lg leading-relaxed mb-8 font-body">
                To transform India's energy landscape by converting agricultural waste into sustainable 
                Bio-CNG fuel, creating a circular economy that benefits farmers, reduces emissions, 
                and powers cleaner transportation across the nation.
              </p>

              {/* Key points */}
              <div className="relative space-y-4">
                {[
                  "Zero waste to landfill approach",
                  "Converting trash to treasure",
                  "Supporting India's clean energy goals"
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/70 font-body text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-transparent to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm overflow-hidden flex flex-col">
              {/* Background accent */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/[0.08] to-transparent rounded-tr-full" />
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-[hsl(100,45%,45%)] flex items-center justify-center shadow-lg shadow-accent/30">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-2xl md:text-3xl font-heading font-semibold text-white mb-5">
                Our Vision
              </h3>
              <p className="relative text-white/50 text-lg leading-relaxed mb-8 font-body flex-grow">
                We work on the motto of Zero Waste to Landfill. As a proud member of the Indian Biogas 
                Association, we are committed to helping India become a global leader in clean energy 
                production within this decade.
              </p>

              {/* Vision goal highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1">
                      100 Plants
                    </div>
                    <div className="text-white/40 font-body text-sm">Target by 2025</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
