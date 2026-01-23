import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Users, ArrowRight, ChevronRight } from "lucide-react";

const leadership = [
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    bio: "Strategic advisor with decades of experience driving innovation in renewable energy infrastructure and policy.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Asit Chaterjee",
    role: "Group President",
    bio: "Veteran leader with deep expertise in organizational excellence and strategic partnerships across sectors.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Mr. Anil Dhussa",
    role: "Chief Advisor",
    bio: "Industry pioneer with extensive expertise in biogas technology and sustainable energy solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Rajesh Gupta",
    role: "EVP - Engineering",
    bio: "Engineering excellence leader ensuring world-class quality standards in every project we deliver.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Ajmal Singh Kathat",
    role: "EVP - Projects",
    bio: "Project management expert overseeing multi-state operations with precision and excellence.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Sanjay Nandre",
    role: "EVP - Design",
    bio: "Innovative design leader creating cutting-edge Bio-CNG plant architectures and systems.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  }
];

interface LeaderCardProps {
  leader: typeof leadership[0];
  index: number;
  isInView: boolean;
}

const LeaderCard = ({ leader, index, isInView }: LeaderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-[hsl(150,20%,50%)]/10 border border-[hsl(90,25%,88%)] transition-all duration-400 hover:shadow-xl hover:-translate-y-1.5 hover:border-[hsl(90,30%,75%)]">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,25%,12%)]/90 via-[hsl(150,20%,15%)]/30 to-transparent" />
          
          {/* Hover overlay with bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[hsl(90,40%,35%)]/95 via-[hsl(120,38%,32%)]/85 to-[hsl(150,35%,30%)]/70 flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="p-5"
            >
              <p className="text-white/95 text-sm leading-relaxed font-body mb-4">
                {leader.bio}
              </p>
              
              {/* Social links */}
              <div className="flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <Mail className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Default info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <motion.div
              animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-base font-heading font-bold text-white mb-1 leading-tight">
                {leader.name}
              </h3>
              <p className="text-white/80 text-sm font-body flex items-center gap-1.5">
                {leader.role}
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-28">
      {/* Dark emerald gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(150,35%,12%)] via-[hsl(140,30%,16%)] to-[hsl(130,25%,10%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{ background: "radial-gradient(circle, hsl(90, 50%, 45%) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, hsl(150, 45%, 50%) 0%, transparent 70%)" }}
        animate={{ y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.span 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Users className="w-4 h-4 text-[hsl(90,55%,60%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-white/90 font-semibold font-body">
              Meet The Team
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[hsl(90,55%,60%)] to-[hsl(150,50%,55%)] bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-body text-base md:text-lg">
            Seasoned industry veterans guiding Gruner Renewable with deep expertise and vision.
          </p>
        </motion.div>

        {/* Leadership grid - Compact 6-column on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-7xl mx-auto">
          {leadership.map((leader, index) => (
            <LeaderCard
              key={leader.name}
              leader={leader}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="/careers"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white hover:border-[hsl(90,50%,55%)] hover:text-[hsl(90,55%,65%)] transition-all duration-300 font-body text-sm backdrop-blur-sm"
            >
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(90,45%,45%)] to-[hsl(150,42%,40%)] text-white font-semibold shadow-xl shadow-[hsl(90,40%,35%)]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 font-body text-sm"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
