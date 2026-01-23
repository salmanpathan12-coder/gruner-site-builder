import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react";

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
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full rounded-2xl overflow-hidden">
        {/* Premium border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-white/10 to-accent/20 p-[1px]">
          <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[hsl(220,25%,9%)]" />
        </div>

        <div className="relative z-10 overflow-hidden rounded-2xl">
          {/* Image container - Compact aspect ratio */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover object-top"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            />
            
            {/* Multi-layer overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,6%)] via-[hsl(220,25%,6%)]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hover reveal overlay with bio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,6%)] via-[hsl(220,25%,6%)]/95 to-[hsl(220,25%,6%)]/80 flex items-end"
            >
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-5"
              >
                <p className="text-white/70 text-sm leading-relaxed font-body mb-5">
                  {leader.bio}
                </p>
                
                {/* Social links */}
                <div className="flex gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 hover:from-primary/30 hover:to-accent/20 border border-white/10 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white/70" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 hover:from-primary/30 hover:to-accent/20 border border-white/10 flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/70" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Info section - Compact & premium */}
          <div className="relative p-5 bg-[hsl(220,25%,9%)]">
            {/* Gradient accent line */}
            <motion.div
              initial={{ width: '30px' }}
              animate={{ width: isHovered ? '100%' : '30px' }}
              transition={{ duration: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-primary via-accent to-transparent mb-4 rounded-full"
            />
            
            <h3 className="text-base font-heading font-semibold text-white mb-1 truncate group-hover:text-primary transition-colors duration-300">
              {leader.name}
            </h3>
            <p className="text-primary/80 text-xs font-body tracking-wide uppercase">{leader.role}</p>
          </div>
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
      {/* Premium layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[hsl(220,25%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(168,20%,6%)] via-[hsl(200,22%,7%)] to-[hsl(220,25%,8%)]" />
        
        {/* Ambient orbs */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-primary/[0.06] via-transparent to-transparent blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, -25, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-accent/[0.05] via-transparent to-transparent blur-[100px]"
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
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
            <Users className="w-7 h-7 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Seasoned industry veterans from the Biofuel sector guiding Gruner Renewable 
            with deep expertise and unwavering commitment to India's clean energy future.
          </p>
        </motion.div>

        {/* Leadership grid - Compact, modern 3-column layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="/careers"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/[0.1] text-white hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 font-body text-sm"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-[hsl(168,55%,35%)] text-white font-body text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300"
            >
              <span>Contact Leadership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
