import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react";

const leadership = [
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    bio: "Strategic advisor with decades of experience in renewable energy.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Asit Chaterjee",
    role: "Group President",
    bio: "Veteran leader driving organizational excellence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Mr. Anil Dhussa",
    role: "Chief Advisor",
    bio: "Industry pioneer in biogas technology solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Rajesh Gupta",
    role: "EVP - Engineering",
    bio: "Engineering excellence and quality standards leader.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Ajmal Singh Kathat",
    role: "EVP - Projects",
    bio: "Project management expert across multi-state operations.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Sanjay Nandre",
    role: "EVP - Design",
    bio: "Innovative design leader for Bio-CNG architectures.",
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.07 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,35%,10%)]/90 via-[hsl(220,35%,10%)]/30 to-transparent" />
          
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[hsl(200,50%,40%)]/95 via-[hsl(200,50%,40%)]/70 to-[hsl(200,50%,40%)]/30"
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            {/* Default state */}
            <motion.div
              animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-sm font-heading font-semibold text-white leading-tight mb-0.5">
                {leader.name}
              </h3>
              <p className="text-white/70 text-xs font-body">{leader.role}</p>
            </motion.div>

            {/* Hover state */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 bottom-0 p-4"
            >
              <h3 className="text-sm font-heading font-semibold text-white leading-tight mb-0.5">
                {leader.name}
              </h3>
              <p className="text-white/80 text-xs font-body mb-2">{leader.role}</p>
              <p className="text-white/70 text-xs leading-relaxed font-body mb-3">
                {leader.bio}
              </p>
              
              {/* Social links */}
              <div className="flex gap-2">
                <button className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                </button>
                <button className="w-7 h-7 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Deep navy to teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,35%,12%)] via-[hsl(210,30%,15%)] to-[hsl(190,35%,12%)]" />
      
      {/* Accent orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-[hsl(200,50%,45%)]/15 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-[hsl(45,60%,55%)]/10 to-transparent rounded-full blur-[100px]" />

      <div className="container-wide relative z-10">
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
            <Users className="w-3.5 h-3.5 text-[hsl(45,60%,60%)]" />
            <span className="text-xs tracking-[0.12em] uppercase text-white/80 font-medium font-body">
              Leadership Team
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
            Our <span className="text-[hsl(45,60%,60%)]">Leadership</span>
          </h2>
          <p className="text-white/55 max-w-md mx-auto font-body text-sm">
            Seasoned industry veterans guiding Gruner Renewable with expertise.
          </p>
        </motion.div>

        {/* Compact 6-column grid */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
            <a 
              href="/careers"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white hover:border-[hsl(45,60%,55%)] hover:text-[hsl(45,60%,60%)] transition-all duration-300 font-body text-sm"
            >
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[hsl(160,45%,40%)] to-[hsl(200,50%,40%)] text-white font-medium shadow-lg shadow-[hsl(160,45%,40%)]/25 transition-all duration-300 font-body text-sm"
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
