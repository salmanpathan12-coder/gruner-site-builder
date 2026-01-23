import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Factory } from "lucide-react";
import indiaMap from "@/assets/india-map.svg";

// Real project data based on Gruner's expansion
const projects = [
  { state: "Punjab", plants: 4, status: "Upcoming", x: 44, y: 18 },
  { state: "Haryana", plants: 3, status: "Upcoming", x: 46, y: 24 },
  { state: "Uttar Pradesh", plants: 6, status: "Upcoming", x: 54, y: 32 },
  { state: "Maharashtra", plants: 5, status: "Upcoming", x: 48, y: 52 },
  { state: "Gujarat", plants: 4, status: "In Progress", x: 38, y: 42 },
  { state: "Madhya Pradesh", plants: 4, status: "Upcoming", x: 50, y: 40 },
  { state: "Karnataka", plants: 3, status: "Upcoming", x: 48, y: 65 },
  { state: "Tamil Nadu", plants: 3, status: "Upcoming", x: 52, y: 75 },
  { state: "Rajasthan", plants: 3, status: "Upcoming", x: 40, y: 30 },
  { state: "Bihar", plants: 2, status: "Upcoming", x: 62, y: 32 },
];

const ProjectsMapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const totalPlants = projects.reduce((acc, p) => acc + p.plants, 0);

  return (
    <section id="projects" className="section-padding-sm relative overflow-hidden" ref={ref}>
      {/* Section has dark background from parent wrapper */}
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"
          />
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-background">
            Upcoming Bio-CNG Plants Across India
          </h2>
          <p className="text-background/60 max-w-2xl mx-auto font-body">
            Strategic expansion targeting high-feedstock regions with strong demand for clean transportation fuel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          {/* Project List - Compact Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.state}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.03 }}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                    activeProject === index
                      ? "bg-gradient-to-r from-primary/20 to-accent/20 border-white/40 shadow-sm"
                      : "bg-white/5 border-white/20 hover:border-white/40"
                  }`}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 transition-all ${
                    activeProject === index
                      ? "bg-gradient-to-br from-primary to-accent"
                      : "bg-white/20"
                  }`}>
                    <span className={`text-xs font-bold ${activeProject === index ? "text-white" : "text-white"}`}>
                      {project.plants}
                    </span>
                  </div>
                  <div className="min-w-0 flex-grow">
                    <span className="font-heading font-medium text-xs block truncate text-white">{project.state}</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${
                    project.status === "In Progress"
                      ? "bg-accent/30 text-accent"
                      : "bg-white/20 text-white/80"
                  }`}>
                    {project.status === "In Progress" ? "Active" : "Soon"}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Summary card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {totalPlants}
                  </p>
                  <p className="text-xs text-white/60 font-body">Total Plants</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-white">
                    {projects.length}
                  </p>
                  <p className="text-xs text-white/60 font-body">States</p>
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    88K+
                  </p>
                  <p className="text-xs text-white/60 font-body">TPY CBG</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* India Map with SVG */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Map glow effect */}
              <div className="absolute inset-0 blur-3xl opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-full" />
              </div>
              
              {/* India Map Container */}
              <div className="relative z-10">
                {/* SVG Map Image */}
                <img 
                  src={indiaMap} 
                  alt="India Map" 
                  className="w-full h-auto opacity-70"
                  style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))" }}
                />
                
                {/* State markers overlay */}
                <svg 
                  className="absolute inset-0 w-full h-full" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="markerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(168, 65%, 32%)" />
                      <stop offset="100%" stopColor="hsl(85, 55%, 45%)" />
                    </linearGradient>
                    <filter id="markerGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {projects.map((project, index) => (
                    <g key={project.state}>
                      {/* Outer pulse ring on hover/active */}
                      {activeProject === index && (
                        <>
                          <motion.circle
                            cx={project.x}
                            cy={project.y}
                            r={4}
                            fill="none"
                            stroke="url(#markerGradient)"
                            strokeWidth="0.3"
                            initial={{ scale: 0.5, opacity: 1 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <motion.circle
                            cx={project.x}
                            cy={project.y}
                            r={3}
                            fill="none"
                            stroke="url(#markerGradient)"
                            strokeWidth="0.4"
                            initial={{ scale: 0.8, opacity: 1 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                          />
                        </>
                      )}
                      
                      {/* Marker glow */}
                      <motion.circle
                        cx={project.x}
                        cy={project.y}
                        r={activeProject === index ? 2.5 : 1.8}
                        fill={activeProject === index ? "url(#markerGradient)" : "hsl(168, 65%, 32%)"}
                        opacity={activeProject === index ? 0.4 : 0.2}
                        filter="url(#markerGlow)"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.05 }}
                      />
                      
                      {/* Main marker */}
                      <motion.circle
                        cx={project.x}
                        cy={project.y}
                        r={activeProject === index ? 1.8 : 1.2}
                        fill="url(#markerGradient)"
                        className="cursor-pointer"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                        onMouseEnter={() => setActiveProject(index)}
                        onMouseLeave={() => setActiveProject(null)}
                        style={{ filter: activeProject === index ? "drop-shadow(0 0 3px hsl(168, 65%, 40%))" : "none" }}
                      />
                      
                      {/* Plant count indicator */}
                      <motion.text
                        x={project.x}
                        y={project.y + 0.5}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize={activeProject === index ? "1.4" : "1"}
                        fontWeight="bold"
                        className="pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7 + index * 0.05 }}
                      >
                        {project.plants}
                      </motion.text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Floating tooltip */}
              {activeProject !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute z-20"
                  style={{
                    left: `${projects[activeProject].x}%`,
                    top: `${projects[activeProject].y - 12}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="bg-foreground text-background px-3 py-2 rounded-lg shadow-xl border border-white/10 whitespace-nowrap">
                    <div className="flex items-center gap-2 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent" />
                      <p className="font-heading font-semibold text-sm">{projects[activeProject].state}</p>
                    </div>
                    <p className="text-xs text-background/70 flex items-center gap-1">
                      <Factory className="w-3 h-3" />
                      {projects[activeProject].plants} Plants • {projects[activeProject].status}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Map legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center items-center gap-4 mt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="text-xs text-white/60 font-body">Project Sites</span>
              </div>
              <div className="h-3 w-px bg-white/20" />
              <div className="text-xs font-body">
                <span className="font-semibold text-primary">{totalPlants}</span>
                <span className="text-white/60"> Total Plants</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMapSection;
