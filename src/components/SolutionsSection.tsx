import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Factory, Wrench, Settings, Fuel, ArrowRight, ChevronRight } from "lucide-react";

const solutions = [
  {
    icon: Factory,
    title: "EPC Services",
    description: "End-to-end turnkey Bio-CNG plant development from design to commissioning with German technology partnership.",
    features: ["Feasibility studies", "Engineering design", "Construction", "Commissioning"],
    stat: "50+",
    statLabel: "Plants Planned"
  },
  {
    icon: Wrench,
    title: "O&M Services",
    description: "Comprehensive operations and maintenance ensuring optimal plant performance and longevity.",
    features: ["24/7 monitoring", "Preventive maintenance", "Performance optimization", "Compliance"],
    stat: "99.5%",
    statLabel: "Uptime Target"
  },
  {
    icon: Settings,
    title: "Technology Partnership",
    description: "Collaboration with BioEnergy Germany for cutting-edge biogas technology and engineering design.",
    features: ["German technology", "Process design", "Quality systems", "Training"],
    stat: "German",
    statLabel: "Tech Partner"
  },
  {
    icon: Fuel,
    title: "Fuel Offtake",
    description: "Structured arrangements with major oil marketing companies for Bio-CNG distribution.",
    features: ["OMC partnerships", "Gas networks", "Fleet supply", "Quality assurance"],
    stat: "88K+",
    statLabel: "TPY Capacity"
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set([0, 1, 2, 3]));

  return (
    <section 
      id="solutions" 
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Section has dark background from parent wrapper */}
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mb-6 rounded-full mx-auto"
          />
          
          <motion.span 
            className="block text-background/60 text-lg md:text-xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Expertise
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.15] mb-4">
            <motion.span 
              className="block text-background"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Why Partners Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Gruner Renewable
              </span>
            </motion.span>
          </h2>

          <motion.p
            className="text-background/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Complete capabilities across the bioenergy value chain, from development to operations.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setExpandedIndices(prev => {
                const newSet = new Set(prev);
                if (newSet.has(index)) {
                  newSet.delete(index);
                } else {
                  newSet.add(index);
                }
                return newSet;
              })}
            >
              <motion.div
                className="relative bg-white border border-border/50 rounded-2xl p-5 h-full cursor-pointer overflow-hidden shadow-sm"
                whileHover={{ 
                  borderColor: "hsl(168 65% 35% / 0.4)",
                  y: -4,
                  boxShadow: "0 10px 30px -10px hsl(168 65% 35% / 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top row: Icon + Stat */}
                <div className="flex items-start justify-between mb-4">
                  {/* White icon on gradient background */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                  >
                    <solution.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  {/* Stat badge with gradient text */}
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0.7 }}
                  >
                    <div className="text-xl md:text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {solution.stat}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      {solution.statLabel}
                    </div>
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-heading font-semibold mb-2 text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 flex items-center gap-2">
                  {solution.title}
                  <motion.span
                    animate={{ x: activeIndex === index ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.span>
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {solution.description}
                </p>

                {/* Features - Expandable */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedIndices.has(index) ? "auto" : 0,
                    opacity: expandedIndices.has(index) ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                    {solution.features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 1, y: 0 }}
                        animate={expandedIndices.has(index) ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.05 }}
                        className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                >
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <defs>
                      <linearGradient id={`corner-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(168, 65%, 35%)" />
                        <stop offset="100%" stopColor="hsl(85, 55%, 50%)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M48 0 L48 48 L0 48"
                      fill="none"
                      stroke={`url(#corner-gradient-${index})`}
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: activeIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
