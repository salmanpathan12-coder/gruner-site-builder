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
    role: "EVP - Engineering Quality & Commissioning",
    bio: "Engineering excellence leader ensuring highest quality standards across all plant installations.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/457decaf8d4.jpeg"
  },
  {
    name: "Ajmal Singh Kathat",
    role: "EVP - Project Oversight",
    bio: "Project management expert overseeing multi-state operations and ensuring timely delivery.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/36a83cac955.jpeg"
  },
  {
    name: "Mr. Sanjay Nandre",
    role: "EVP - Engineering Design",
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500">
        {/* Image container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-80" />
          
          {/* Hover overlay with bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/95 to-foreground/80 flex items-end p-6"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white/70 text-sm leading-relaxed font-body"
            >
              {leader.bio}
            </motion.p>
          </motion.div>
        </div>

        {/* Info section */}
        <div className="relative p-6">
          {/* Gradient accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : '40px' }}
            transition={{ duration: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-primary to-accent mb-4"
          />
          
          <h3 className="text-lg font-heading font-semibold text-white mb-1">
            {leader.name}
          </h3>
          <p className="text-primary text-sm font-body mb-4">{leader.role}</p>
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="flex gap-3"
          >
            <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4 text-white/70" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4 text-white/70" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          />
          <span className="text-primary text-sm font-medium uppercase tracking-[0.2em] font-body">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mt-4 text-white mb-6">
            Leadership
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-body text-lg">
            Veterans from the Biofuel Industry guiding Gruner Renewable with 
            deep expertise and unwavering commitment to India's clean energy future.
          </p>
        </motion.div>

        {/* Leadership grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-300 font-body group"
          >
            <span>Join Our Team</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
