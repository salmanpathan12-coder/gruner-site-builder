import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react";

const leadership = [
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    bio: "Strategic advisor with decades of experience in renewable energy infrastructure and policy development.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Mr. Asit Chaterjee",
    role: "Group President",
    bio: "Veteran leader driving organizational excellence and strategic partnerships across the energy sector.",
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
    bio: "Engineering excellence leader ensuring highest quality standards across all plant installations.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Ajmal Singh Kathat",
    role: "EVP - Projects",
    bio: "Project management expert overseeing multi-state operations and ensuring timely delivery.",
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-foreground/5 border border-foreground/5 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          
          {/* Hover overlay with bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/60 flex items-end"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-5"
            >
              <p className="text-white/90 text-sm leading-relaxed font-body mb-4">
                {leader.bio}
              </p>
              
              {/* Social links */}
              <div className="flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
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
              <h3 className="text-lg font-heading font-semibold text-white mb-1">
                {leader.name}
              </h3>
              <p className="text-white/80 text-sm font-body">{leader.role}</p>
            </motion.div>
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
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium font-body">
              Meet The Team
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Seasoned industry veterans guiding Gruner Renewable with deep expertise 
            and unwavering commitment to India's clean energy future.
          </p>
        </motion.div>

        {/* Leadership grid - Compact 3-column */}
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="/careers"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300 font-body"
            >
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 font-body"
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
