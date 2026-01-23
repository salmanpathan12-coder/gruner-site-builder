import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Cpu, Leaf, Settings, Award, Zap, Shield, Clock, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

const FeatureItem = ({ icon: Icon, title, description, index, isInView }: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(90,30%,50%)]/10"
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(90,45%,45%)] to-[hsl(150,42%,40%)] flex items-center justify-center flex-shrink-0 shadow-md shadow-[hsl(90,40%,40%)]/20 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <h4 className="font-heading font-semibold text-[hsl(150,25%,18%)] text-base mb-1 group-hover:text-[hsl(90,45%,35%)] transition-colors">
          {title}
        </h4>
        <p className="text-[hsl(150,12%,45%)] font-body text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const features = [
  {
    icon: Cpu,
    title: "Advanced CSTR Technology",
    description: "State-of-the-art technology for maximum biogas yield and efficiency."
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Eco-friendly approaches that reduce carbon footprint significantly."
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailor-made plant designs for your specific requirements."
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "Open communication and real-time project tracking."
  },
  {
    icon: Award,
    title: "Industry Leaders",
    description: "Pioneers in India's Bio-CNG sector with proven track record."
  },
  {
    icon: Clock,
    title: "Rapid Execution",
    description: "Industry-leading turnaround times without compromising quality."
  }
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      {/* Soft pista/emerald gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(90,28%,95%)] via-[hsl(100,22%,94%)] to-[hsl(85,25%,93%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-35"
        style={{ background: "radial-gradient(circle, hsl(90, 50%, 72%) 0%, transparent 70%)" }}
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-[100px] opacity-30"
        style={{ background: "radial-gradient(circle, hsl(150, 40%, 68%) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background decorative shapes */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[hsl(90,40%,75%)]/30 to-[hsl(150,35%,70%)]/20 rounded-3xl blur-sm" />
              
              {/* Main image */}
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[hsl(150,30%,30%)]/15"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop"
                  alt="Clean Energy Technology"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,25%,15%)]/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:right-6 z-10"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-[hsl(90,30%,85%)]/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(90,45%,45%)] to-[hsl(150,45%,40%)] flex items-center justify-center shadow-lg shadow-[hsl(90,40%,40%)]/30">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-heading font-bold text-[hsl(150,30%,20%)]">100%</div>
                      <div className="text-xs text-[hsl(150,15%,45%)] font-body">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Top accent */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 left-6 z-10"
              >
                <div className="bg-gradient-to-r from-[hsl(90,45%,42%)] to-[hsl(150,45%,38%)] px-5 py-2.5 rounded-full shadow-xl shadow-[hsl(90,40%,40%)]/30">
                  <span className="flex items-center gap-2 text-xs font-semibold text-white font-body">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Growing 40% YoY
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <motion.span 
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[hsl(90,35%,88%)] border border-[hsl(90,30%,75%)] mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Award className="w-4 h-4 text-[hsl(90,45%,35%)]" />
              <span className="text-xs tracking-[0.15em] uppercase text-[hsl(90,35%,30%)] font-semibold font-body">
                Why Partner With Us
              </span>
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[hsl(150,25%,15%)] mb-5 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[hsl(90,50%,40%)] to-[hsl(150,45%,38%)] bg-clip-text text-transparent">
                Gruner Renewable
              </span>
            </h2>
            
            <p className="text-[hsl(150,12%,40%)] text-base md:text-lg leading-relaxed mb-8 font-body max-w-xl">
              Ready to embrace a cleaner future? We make it seamless to set up your own Bio-CNG 
              plant with industry-leading technology and comprehensive support.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-2 mb-10">
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[hsl(90,45%,40%)] to-[hsl(150,45%,38%)] text-white font-semibold shadow-xl shadow-[hsl(90,40%,40%)]/25 hover:shadow-2xl hover:shadow-[hsl(90,40%,40%)]/35 hover:-translate-y-1 transition-all duration-300 font-body text-sm"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/solutions"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/80 hover:bg-white border border-[hsl(90,30%,75%)] text-[hsl(150,30%,25%)] font-semibold transition-all duration-300 font-body text-sm backdrop-blur-sm shadow-lg"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
