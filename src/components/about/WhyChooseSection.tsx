import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Cpu, Leaf, Settings, Award, Shield, Clock, Star, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  index: number;
  isInView: boolean;
}

const FeatureItem = ({ icon: Icon, title, index, isInView }: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/60 transition-all duration-300"
    >
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[hsl(85,50%,45%)] to-[hsl(120,45%,40%)] flex items-center justify-center flex-shrink-0 shadow-md shadow-[hsl(85,45%,40%)]/20 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <span className="font-body font-medium text-sm text-[hsl(100,15%,25%)] group-hover:text-[hsl(85,40%,30%)] transition-colors">
        {title}
      </span>
    </motion.div>
  );
};

const features = [
  { icon: Cpu, title: "Advanced CSTR Technology" },
  { icon: Leaf, title: "Sustainable Impact" },
  { icon: Settings, title: "Custom Solutions" },
  { icon: Shield, title: "Full Transparency" },
  { icon: Award, title: "Industry Leaders" },
  { icon: Clock, title: "Rapid Execution" }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24">
      {/* Fresh green/mint gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(100,35%,95%)] via-[hsl(90,30%,93%)] to-[hsl(85,28%,92%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(85, 50%, 65%) 0%, transparent 70%)" }}
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30"
        style={{ background: "radial-gradient(circle, hsl(120, 40%, 60%) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
          
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[hsl(85,45%,70%)]/25 to-[hsl(120,40%,65%)]/15 blur-sm" />
              
              {/* Main image */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(100,30%,30%)]/15"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop"
                  alt="Clean Energy Technology"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(120,30%,12%)]/50 via-transparent to-transparent" />
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-5 -right-4 md:right-4 z-10"
              >
                <div className="bg-white rounded-xl p-4 shadow-2xl border border-[hsl(85,30%,88%)]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(85,50%,45%)] to-[hsl(120,45%,40%)] flex items-center justify-center shadow-lg shadow-[hsl(85,45%,40%)]/25">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-heading font-bold text-[hsl(100,25%,18%)]">100%</div>
                      <div className="text-xs text-[hsl(100,15%,45%)] font-body">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Growth badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-3 left-4 z-10"
              >
                <div className="bg-gradient-to-r from-[hsl(85,50%,42%)] to-[hsl(120,45%,38%)] px-4 py-2 rounded-full shadow-xl shadow-[hsl(85,45%,40%)]/25">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white font-body">
                    <Zap className="w-3.5 h-3.5" />
                    40% YoY Growth
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <motion.span 
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[hsl(85,40%,90%)] border border-[hsl(85,35%,80%)] mb-5"
              whileHover={{ scale: 1.02 }}
            >
              <Star className="w-4 h-4 text-[hsl(85,50%,38%)]" />
              <span className="text-xs tracking-[0.15em] uppercase text-[hsl(85,40%,30%)] font-semibold font-body">
                Why Partner With Us
              </span>
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(100,20%,15%)] mb-4 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[hsl(85,50%,42%)] to-[hsl(120,45%,38%)] bg-clip-text text-transparent">
                Gruner
              </span>
            </h2>
            
            <p className="text-[hsl(100,12%,40%)] text-base leading-relaxed mb-7 font-body max-w-lg">
              Ready for a cleaner future? We make it seamless to set up your Bio-CNG 
              plant with industry-leading technology and comprehensive support.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-1 mb-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(85,50%,42%)] to-[hsl(120,45%,38%)] text-white font-semibold shadow-xl shadow-[hsl(85,45%,40%)]/25 font-body text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="/solutions"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 hover:bg-white border border-[hsl(85,30%,78%)] text-[hsl(100,25%,25%)] font-semibold transition-all duration-300 font-body text-sm shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
