import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Rocket, ArrowUpRight } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Clean modern background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Subtle accent shapes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium font-body">
              Our Direction
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Driving India's <span className="text-primary">Clean Energy</span> Future
          </h2>
        </motion.div>

        {/* Modern two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: -20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="relative h-full bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-foreground/5 border border-foreground/5 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-primary/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-body">
                  To be India's leading force in the Bio-CNG revolution, creating a sustainable 
                  ecosystem where agricultural waste transforms into clean energy, powering 
                  millions of vehicles and industries.
                </p>

                {/* Stats */}
                <div className="flex gap-8 mt-8 pt-8 border-t border-foreground/10">
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">2030</div>
                    <div className="text-sm text-muted-foreground font-body">Net Zero Goal</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground font-body">Plants Target</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: 20 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-foreground to-foreground/95 rounded-3xl p-8 md:p-10 shadow-xl shadow-foreground/20 overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Background accent */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/70 text-lg leading-relaxed font-body">
                  Delivering world-class Bio-CNG infrastructure through innovative technology, 
                  operational excellence, and unwavering commitment to environmental stewardship 
                  and community development.
                </p>

                {/* Key pillars */}
                <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-white/10">
                  {["Innovation", "Sustainability", "Excellence", "Partnership"].map((pillar) => (
                    <span 
                      key={pillar}
                      className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-body border border-white/10"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom image banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
              alt="Sustainable Energy"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-10 md:px-16 max-w-xl">
                <p className="text-xl md:text-2xl font-heading font-semibold text-white leading-relaxed">
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
