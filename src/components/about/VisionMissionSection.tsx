import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Zap, TrendingUp, ArrowUpRight } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(220,25%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,6%)] via-[hsl(200,20%,7%)] to-[hsl(168,25%,6%)]" />
        
        {/* Subtle ambient lighting */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-gradient-radial from-primary/[0.08] via-transparent to-transparent blur-[100px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-gradient-radial from-accent/[0.06] via-transparent to-transparent blur-[80px]"
        />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 py-28 md:py-36">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 mb-8"
          >
            <Zap className="w-7 h-7 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Driven by a commitment to sustainability and innovation, we're reshaping India's energy future.
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Mission Card - Premium glass design */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -5 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="group relative"
          >
            {/* Glow backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/25 via-primary/5 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative h-full rounded-[1.5rem] overflow-hidden">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-primary/40 via-primary/10 to-accent/5 p-[1px]">
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[hsl(220,25%,8%)]" />
              </div>
              
              <div className="relative z-10 p-10 md:p-12 h-full flex flex-col">
                {/* Background accent layer */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/[0.06] via-transparent to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/[0.04] via-transparent to-transparent rounded-tr-full" />
                
                {/* Icon with premium styling */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-[hsl(168,55%,35%)] flex items-center justify-center mb-8 shadow-xl shadow-primary/30"
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Our Mission
                </h3>
                <p className="relative text-white/50 text-lg leading-relaxed mb-10 font-body flex-grow">
                  To transform India's energy landscape by converting agricultural waste into sustainable 
                  Bio-CNG fuel, creating a circular economy that benefits farmers, reduces emissions, 
                  and powers cleaner transportation nationwide.
                </p>

                {/* Key pillars */}
                <div className="relative space-y-4">
                  {[
                    { icon: Zap, text: "Zero waste to landfill approach" },
                    { icon: TrendingUp, text: "Converting trash to treasure" },
                    { icon: Target, text: "Supporting India's clean energy goals" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/item:border-primary/40 transition-colors">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white/60 font-body text-sm group-hover/item:text-white/80 transition-colors">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: 5 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="group relative"
          >
            {/* Glow backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-br from-accent/25 via-accent/5 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative h-full rounded-[1.5rem] overflow-hidden">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-accent/40 via-accent/10 to-primary/5 p-[1px]">
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[hsl(220,25%,8%)]" />
              </div>
              
              <div className="relative z-10 p-10 md:p-12 h-full flex flex-col">
                {/* Background accent */}
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/[0.06] via-transparent to-transparent rounded-tl-full" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-[hsl(100,50%,40%)] flex items-center justify-center mb-8 shadow-xl shadow-accent/30"
                >
                  <Eye className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="relative text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Our Vision
                </h3>
                <p className="relative text-white/50 text-lg leading-relaxed mb-10 font-body flex-grow">
                  We work on the motto of Zero Waste to Landfill. As a proud member of the Indian Biogas 
                  Association, we are committed to helping India become a global leader in clean energy 
                  production within this decade.
                </p>

                {/* Vision target highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-primary/5 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10 rounded-2xl" />
                  <div className="relative p-6 rounded-2xl border border-accent/20">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/15 to-transparent rounded-bl-full" />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                          100 Plants
                        </div>
                        <div className="text-white/40 font-body text-sm uppercase tracking-wider">Target by 2025</div>
                      </div>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 border border-accent/30 flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-6 h-6 text-accent" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
