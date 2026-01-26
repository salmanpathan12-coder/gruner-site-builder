import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const founder = {
  name: "Mr. Utkarsh Gupta",
  role: "Founder and CEO",
  description: "Visionary leader driving India's clean energy revolution through innovative Bio-CNG solutions and sustainable infrastructure development.",
  image: "https://s3.us-west-1.amazonaws.com/appsinvo-staging-ys/Gruner/1b7dd6b268d.jpeg",
};

const leaders = [
  {
    name: "Mr. Anil Dhussa",
    role: "Chief Advisor",
    description: "Industry pioneer with expertise in biogas technology and sustainable solutions.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/60737fd0ffe.png",
  },
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    description: "Strategic advisor with decades of experience in renewable energy infrastructure.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/9c778952225.png",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding-sm bg-off-white" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="divider-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Experienced team driving India's bioenergy transformation with expertise in finance, technology, and operations.
          </p>
        </motion.div>

        {/* Founder Featured Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-foreground to-foreground/95 rounded-xl overflow-hidden border border-white/10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
              {/* Founder Image */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-xl overflow-hidden border-2 border-accent/30 shadow-lg">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
              
              {/* Founder Info */}
              <div className="text-center md:text-left flex-1">
                <span className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent text-xs font-medium font-body mb-3">
                  Founder & Visionary
                </span>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-accent font-medium font-body mb-3">{founder.role}</p>
                <p className="text-white/70 text-sm font-body max-w-lg leading-relaxed">
                  {founder.description}
                </p>
                <div className="flex gap-2 mt-4 justify-center md:justify-start">
                  <button className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Leaders Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold">
                {leader.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-2 font-body">{leader.role}</p>
              <p className="text-sm text-muted-foreground font-body">{leader.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
