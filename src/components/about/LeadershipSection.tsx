import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Users, ArrowRight, Crown } from "lucide-react";

const leadership = [
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    bio: "Strategic advisor with decades of experience driving innovation in renewable energy infrastructure.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Asit Chaterjee",
    role: "Group President",
    bio: "Veteran leader with deep expertise in organizational excellence and strategic partnerships.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Mr. Anil Dhussa",
    role: "Chief Advisor",
    bio: "Industry pioneer with extensive expertise in biogas technology and sustainable solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Rajesh Gupta",
    role: "EVP - Engineering",
    bio: "Engineering leader ensuring world-class quality standards in every project.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Ajmal Singh Kathat",
    role: "EVP - Projects",
    bio: "Project management expert overseeing multi-state operations with precision.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Sanjay Nandre",
    role: "EVP - Design",
    bio: "Innovative design leader creating cutting-edge Bio-CNG plant architectures.",
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.08 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/15 transition-all duration-400 hover:border-white/25 hover:bg-white/15">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,35%,8%)]/95 via-[hsl(220,30%,12%)]/40 to-transparent" />
          
          {/* Hover overlay with bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[hsl(220,40%,15%)]/98 via-[hsl(220,35%,18%)]/85 to-[hsl(220,30%,22%)]/60 flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 15, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="p-4"
            >
              <p className="text-white/85 text-xs md:text-sm leading-relaxed font-body mb-3">
                {leader.bio}
              </p>
              
              {/* Social links */}
              <div className="flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Default info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <motion.div
              animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 8 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-sm md:text-base font-heading font-bold text-white mb-0.5 leading-tight">
                {leader.name}
              </h3>
              <p className="text-white/65 text-xs font-body">
                {leader.role}
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
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24">
      {/* Deep navy/charcoal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,35%,12%)] via-[hsl(215,30%,15%)] to-[hsl(210,28%,10%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, hsl(200, 50%, 45%) 0%, transparent 70%)" }}
        animate={{ x: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full blur-[120px] opacity-18"
        style={{ background: "radial-gradient(circle, hsl(260, 45%, 50%) 0%, transparent 70%)" }}
        animate={{ y: [0, -35, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '45px 45px'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-5"
            whileHover={{ scale: 1.02 }}
          >
            <Crown className="w-4 h-4 text-[hsl(200,55%,60%)]" />
            <span className="text-xs tracking-[0.15em] uppercase text-white/80 font-semibold font-body">
              Meet The Team
            </span>
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[hsl(200,55%,60%)] to-[hsl(260,50%,60%)] bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-body text-base">
            Seasoned industry veterans guiding Gruner Renewable with deep expertise and vision.
          </p>
        </motion.div>

        {/* Leadership grid - 6 column compact layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
            <motion.a 
              href="/careers"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white hover:border-[hsl(200,50%,55%)] hover:text-[hsl(200,55%,65%)] transition-all duration-300 font-body text-sm backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[hsl(200,50%,48%)] to-[hsl(260,45%,52%)] text-white font-semibold shadow-xl shadow-[hsl(220,40%,25%)]/40 font-body text-sm"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
