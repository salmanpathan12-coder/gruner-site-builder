import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Zap, ArrowRight } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/[0.02] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/[0.02] to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          />
          <span className="text-primary text-sm font-medium uppercase tracking-[0.2em] font-body">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-4 text-foreground">
            Vision & Mission
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all duration-500 h-full">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                To transform India's energy landscape by converting agricultural waste into sustainable 
                Bio-CNG fuel, creating a circular economy that benefits farmers, reduces emissions, 
                and powers cleaner transportation across the nation.
              </p>

              {/* Key points */}
              <div className="space-y-4">
                {[
                  "Zero waste to landfill approach",
                  "Converting trash to treasure",
                  "Supporting India's clean energy goals"
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground font-body">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/20">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body flex-grow">
                We work on the motto of Zero Waste to Landfill. As a proud member of the Indian Biogas 
                Association, we are committed to helping India become a global leader in clean energy 
                production within this decade.
              </p>

              {/* Vision goal highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    100 Bio Gas Plants
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-body">
                    <span>by 2025</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">On Track</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
