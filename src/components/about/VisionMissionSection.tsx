import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Compass, Globe } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Warm cream to sage gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,35%,92%)] via-[hsl(60,25%,94%)] to-[hsl(140,20%,92%)]" />
      
      {/* Subtle accent layers */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(160,30%,88%)]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[hsl(45,50%,80%)]/30 to-transparent rounded-full blur-[100px]" />

      <div className="container-wide relative z-10">
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(160,40%,35%)]/10 border border-[hsl(160,40%,35%)]/20 mb-4">
            <Compass className="w-3.5 h-3.5 text-[hsl(160,40%,35%)]" />
            <span className="text-xs tracking-[0.12em] uppercase text-[hsl(160,40%,35%)] font-medium font-body">
              Our Direction
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
            Driving India's <span className="text-[hsl(160,40%,35%)]">Sustainable</span> Future
          </h2>
        </motion.div>

        {/* Vision & Mission - Creative asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-5 max-w-5xl mx-auto">
          {/* Vision Card - Larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 group"
          >
            <div className="relative h-full bg-gradient-to-br from-[hsl(160,35%,25%)] to-[hsl(180,30%,20%)] rounded-2xl p-6 md:p-7 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[hsl(45,60%,55%)]/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[hsl(160,50%,45%)]/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(45,60%,55%)] to-[hsl(35,65%,50%)] flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.15em] text-white/50 font-body">Our Vision</span>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 leading-snug">
                  To be India's leading Bio-CNG infrastructure company
                </h3>
                <p className="text-white/65 text-sm leading-relaxed font-body mb-5">
                  Creating a sustainable ecosystem where agricultural waste transforms into 
                  clean energy, powering India's green revolution.
                </p>

                <div className="flex gap-5 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-xl font-heading font-bold text-[hsl(45,60%,55%)]">2030</div>
                    <div className="text-xs text-white/50 font-body">Net Zero Target</div>
                  </div>
                  <div>
                    <div className="text-xl font-heading font-bold text-[hsl(45,60%,55%)]">500+</div>
                    <div className="text-xs text-white/50 font-body">Plants Planned</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 group"
          >
            <div className="relative h-full bg-white rounded-2xl p-6 md:p-7 shadow-lg shadow-foreground/5 border border-foreground/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[hsl(160,40%,35%)]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[hsl(160,40%,35%)] to-[hsl(175,35%,30%)] flex items-center justify-center shadow-lg shadow-[hsl(160,40%,35%)]/20">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body">Our Mission</span>
                </div>

                <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                  Delivering world-class infrastructure
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-5">
                  Through innovative technology and operational excellence in every project.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Innovation", "Excellence", "Impact"].map((pillar) => (
                    <span 
                      key={pillar}
                      className="px-3 py-1.5 rounded-full bg-[hsl(160,40%,35%)]/10 text-[hsl(160,40%,35%)] text-xs font-medium font-body border border-[hsl(160,40%,35%)]/15"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote banner - Full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-12"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop"
                alt="Sustainable Future"
                className="w-full h-36 md:h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(160,35%,25%)]/90 via-[hsl(160,35%,25%)]/70 to-transparent" />
              <div className="absolute inset-0 flex items-center px-6 md:px-8">
                <div className="flex items-center gap-4">
                  <Globe className="w-8 h-8 text-[hsl(45,60%,55%)] flex-shrink-0" />
                  <p className="text-base md:text-lg font-heading font-medium text-white leading-relaxed max-w-lg">
                    "Building a circular economy where waste becomes wealth and energy becomes sustainable."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
