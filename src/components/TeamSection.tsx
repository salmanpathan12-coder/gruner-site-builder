import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const leaders = [
  {
    name: "Founder & CEO",
    role: "Leadership",
    description: "Chartered Accountant with deep expertise in energy sector finance and infrastructure development.",
    image: team1,
  },
  {
    name: "Technical Director",
    role: "Chief Technology Officer",
    description: "Leads technology partnerships including collaboration with BioEnergy Germany.",
    image: team2,
  },
  {
    name: "Operations Head",
    role: "Chief Operations Officer",
    description: "Oversees plant operations and O&M services across all Bio-CNG facilities.",
    image: team3,
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

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
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
