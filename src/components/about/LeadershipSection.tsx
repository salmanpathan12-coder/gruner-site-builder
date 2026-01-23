import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, ChevronRight } from "lucide-react";

const leadership = [
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    bio: "Strategic advisor with decades of experience in renewable energy infrastructure and policy development.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/9c778952225.png"
  },
  {
    name: "Mr. Asit Chaterjee",
    role: "Group President",
    bio: "Veteran leader driving organizational excellence and strategic partnerships across the energy sector.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/21eff9bca03.jpeg"
  },
  {
    name: "Mr. Anil Dhussa",
    role: "Chief Advisor",
    bio: "Industry pioneer with extensive expertise in biogas technology and sustainable energy solutions.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/60737fd0ffe.png"
  },
  {
    name: "Mr. Rajesh Gupta",
    role: "EVP - Engineering",
    bio: "Engineering excellence leader ensuring highest quality standards across all plant installations.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/457decaf8d4.jpeg"
  },
  {
    name: "Ajmal Singh Kathat",
    role: "EVP - Projects",
    bio: "Project management expert overseeing multi-state operations and ensuring timely delivery.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/36a83cac955.jpeg"
  },
  {
    name: "Mr. Sanjay Nandre",
    role: "EVP - Design",
    bio: "Innovative design leader creating cutting-edge Bio-CNG plant architectures and systems.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/c6b23a5abd9.jpeg"
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm transition-all duration-500 hover:border-primary/25">
        {/* Image container - Compact */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,8%)] via-[hsl(220,20%,8%)]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover overlay with bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,8%)] via-[hsl(220,20%,8%)]/95 to-[hsl(220,20%,8%)]/70 flex items-end"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-5"
            >
              <p className="text-white/60 text-sm leading-relaxed font-body">
                {leader.bio}
              </p>
              
              {/* Social links */}
              <div className="flex gap-2 mt-4">
                <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 flex items-center justify-center transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-white/60" />
                </button>
                <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 flex items-center justify-center transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white/60" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Info section - Compact */}
        <div className="relative p-4">
          {/* Gradient accent line */}
          <motion.div
            initial={{ width: '24px' }}
            animate={{ width: isHovered ? '100%' : '24px' }}
            transition={{ duration: 0.4 }}
            className="h-[2px] bg-gradient-to-r from-primary via-accent to-transparent mb-3"
          />
          
          <h3 className="text-base font-heading font-semibold text-white mb-0.5 truncate">
            {leader.name}
          </h3>
          <p className="text-primary text-xs font-body tracking-wide">{leader.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(168,15%,8%)] via-[hsl(200,18%,9%)] to-[hsl(220,20%,10%)]" />
        
        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 py-24 md:py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent to-primary"
            />
            <span className="text-primary text-xs font-medium uppercase tracking-[0.3em] font-body">
              Our Team
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 40 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-l from-transparent to-primary"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-5">
            Leadership
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-body text-lg">
            Veterans from the Biofuel Industry guiding Gruner Renewable with 
            deep expertise and unwavering commitment to India's clean energy future.
          </p>
        </motion.div>

        {/* Leadership grid - Compact cards, 6 columns on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {leadership.map((leader, index) => (
            <LeaderCard
              key={leader.name}
              leader={leader}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a 
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-white hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 font-body text-sm group"
          >
            <span>Join Our Team</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
