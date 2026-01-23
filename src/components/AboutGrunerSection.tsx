import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Leaf, Factory, Globe } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To accelerate India's transition to clean energy by converting agricultural waste into sustainable Bio-CNG fuel.",
  },
  {
    icon: Factory,
    title: "Industry Leader",
    description: "Building Asia's largest CBG plant in Gujarat with 1 million TPY processing capacity.",
  },
  {
    icon: Globe,
    title: "Pan-India Presence",
    description: "Operating across 8+ states with partnerships from major Oil Marketing Companies.",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Reducing carbon emissions while creating rural employment and farmer income opportunities.",
  },
];

const AboutGrunerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <defs>
            <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="container-wide relative z-10" ref={ref}>
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
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gruner Renewable</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg font-body leading-relaxed">
            Gruner Renewable Energy is a Noida-based clean energy company pioneering India's Bio-CNG revolution. 
            We design, build, and operate compressed biogas plants that transform agricultural residue into 
            sustainable transportation fuel, reducing fossil fuel dependency while empowering rural communities.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Pioneering Clean Energy Since 2023
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Founded with a vision to address India's dual challenge of agricultural waste management and 
                energy security, Gruner has rapidly grown to become a leading Bio-CNG infrastructure company. 
                We've secured over ₹1,500 Crore in project orders and $60M in funding to expand our CBG footprint.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our proprietary technology processes diverse feedstocks including Napier Grass, agricultural 
                residue, and organic waste to produce high-quality compressed biogas that meets automotive fuel standards.
              </p>
            </div>

            {/* Key achievement */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-foreground">Asia's Largest CBG Plant</div>
                <div className="text-sm text-muted-foreground font-body">Rs 220 Crore investment in Gujarat</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-5 rounded-xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 p-6 rounded-2xl bg-gradient-to-r from-primary to-accent"
        >
          {[
            { value: "₹1,500+ Cr", label: "Project Orders" },
            { value: "$60M", label: "Funding Secured" },
            { value: "50+", label: "Plants Planned" },
            { value: "8+", label: "States Covered" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/60 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGrunerSection;
