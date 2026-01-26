import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail, Users, ArrowRight } from "lucide-react";
const leadership = [{
  name: "Mr. Anil Kumar Tyagi",
  role: "Chief Consultant",
  bio: "Strategic advisor with decades of experience in renewable energy infrastructure.",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
}, {
  name: "Mr. Asit Chaterjee",
  role: "Group President",
  bio: "Veteran leader driving organizational excellence and strategic partnerships.",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
}, {
  name: "Mr. Anil Dhussa",
  role: "Chief Advisor",
  bio: "Industry pioneer with expertise in biogas technology and sustainable solutions.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
}, {
  name: "Mr. Rajesh Gupta",
  role: "EVP - Engineering",
  bio: "Engineering excellence leader ensuring highest quality standards.",
  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
}, {
  name: "Ajmal Singh Kathat",
  role: "EVP - Projects",
  bio: "Project management expert overseeing multi-state operations.",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
}, {
  name: "Mr. Sanjay Nandre",
  role: "EVP - Design",
  bio: "Innovative design leader creating cutting-edge Bio-CNG architectures.",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
}];
interface LeaderCardProps {
  leader: typeof leadership[0];
  index: number;
  isInView: boolean;
}
const LeaderCard = ({
  leader,
  index,
  isInView
}: LeaderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div initial={{
    opacity: 0,
    y: 25
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.5,
    delay: 0.05 + index * 0.08
  }} className="group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative bg-white rounded-xl overflow-hidden shadow-md shadow-foreground/5 border border-foreground/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        {/* Image container - Compact aspect ratio */}
        <div className="relative aspect-[1/1] overflow-hidden">
          <motion.img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" animate={{
          scale: isHovered ? 1.05 : 1
        }} transition={{
          duration: 0.5
        }} />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          
          {/* Hover overlay with bio */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: isHovered ? 1 : 0
        }} transition={{
          duration: 0.25
        }} className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/50 flex items-end">
            <motion.div initial={{
            y: 15,
            opacity: 0
          }} animate={{
            y: isHovered ? 0 : 15,
            opacity: isHovered ? 1 : 0
          }} transition={{
            duration: 0.3,
            delay: 0.05
          }} className="p-4 rounded">
              <p className="text-white/90 text-xs leading-relaxed font-body mb-3">
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
          </motion.div>

          {/* Default info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <motion.div animate={{
            opacity: isHovered ? 0 : 1,
            y: isHovered ? 8 : 0
          }} transition={{
            duration: 0.25
          }}>
              <h3 className="text-sm font-heading font-semibold text-white mb-0.5 leading-tight">
                {leader.name}
              </h3>
              <p className="text-white/80 text-xs font-body">{leader.role}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>;
};
const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <section id="leadership" ref={ref} className="relative overflow-hidden py-16 md:py-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,25%,12%)] via-[hsl(190,20%,15%)] to-[hsl(180,25%,10%)]" />
      
      {/* Accent orbs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-[100px]" />

      <div className="container-wide relative z-10">
        {/* Compact header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-left mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-white/10 border border-white/20 mb-4">
            <Users className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs tracking-[0.12em] uppercase text-white/90 font-medium font-body">
              Meet The Team
            </span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
            Our <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-white/60 max-w-xl font-body text-sm">
            Seasoned industry veterans guiding Gruner Renewable with deep expertise.
          </p>
        </motion.div>

        {/* Compact leadership grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {leadership.map((leader, index) => <LeaderCard key={leader.name} leader={leader} index={index} isInView={isInView} />)}
        </div>

        {/* Compact CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="text-left mt-10">
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <a href="/careers" className="group inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white hover:border-accent hover:text-accent transition-all duration-300 font-body text-sm rounded-md">
              Join Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact" className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg shadow-primary/30 transition-all duration-300 font-body text-sm rounded-md">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default LeadershipSection;