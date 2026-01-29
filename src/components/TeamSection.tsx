import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const founder = {
  name: "Mr. Utkarsh Gupta",
  role: "Founder and CEO",
  description: "Visionary leader driving India's clean energy revolution through innovative Bio-CNG solutions and sustainable infrastructure development.",
  image: "https://s3.us-west-1.amazonaws.com/appsinvo-staging-ys/Gruner/1b7dd6b268d.jpeg",
  linkedin: "#",
};

const leaders = [
  {
    name: "Mr. Anil Dhussa",
    role: "Chief Advisor",
    description: "Industry pioneer with expertise in biogas technology and sustainable solutions.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/60737fd0ffe.png",
    linkedin: "#",
  },
  {
    name: "Mr. Anil Kumar Tyagi",
    role: "Chief Consultant",
    description: "Strategic advisor with decades of experience in renewable energy infrastructure.",
    image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/9c778952225.png",
    linkedin: "#",
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

        {/* Grid Layout - No Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Founder Card - Larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="relative bg-gradient-to-br from-foreground to-foreground/95 rounded-xl overflow-hidden border border-white/10 shadow-xl h-full">
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
                  {/* LinkedIn Link */}
                  <div className="flex gap-2 mt-4 justify-center md:justify-start">
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#0077b5] flex items-center justify-center transition-colors"
                      aria-label={`${founder.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <button className="w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Leaders - Stacked */}
          <div className="space-y-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="group bg-white rounded-xl shadow-md border border-border/50 overflow-hidden">
                  <div className="flex items-center gap-4 p-4">
                    {/* Image */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base font-semibold text-foreground truncate">
                        {leader.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-1 font-body">{leader.role}</p>
                      {/* LinkedIn Link */}
                      <a 
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#0077b5] hover:underline font-medium"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <Linkedin className="w-3 h-3" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
