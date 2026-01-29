import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Linkedin, Mail, Users, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const founder = {
  name: "Mr. Utkarsh Gupta",
  role: "Founder and CEO",
  bio: "Visionary leader driving India's clean energy revolution through innovative Bio-CNG solutions and sustainable infrastructure development.",
  fullBio: "Mr. Utkarsh Gupta is a visionary entrepreneur and the driving force behind Gruner Renewable Energy. With a deep commitment to sustainability and clean energy, he founded Gruner to transform India's approach to waste management and renewable energy production. Under his leadership, Gruner has become a pioneer in Bio-CNG technology, developing cutting-edge solutions that convert agricultural and organic waste into clean fuel. His strategic vision has positioned Gruner as a leader in India's green energy transition.",
  image: "https://s3.us-west-1.amazonaws.com/appsinvo-staging-ys/Gruner/1b7dd6b268d.jpeg",
  linkedin: "https://www.linkedin.com/in/utkarsh-gupta-gruner/",
  email: "utkarsh@grunerrenewable.com",
};

const leadership = [{
  name: "Mr. Anil Kumar Tyagi",
  role: "Chief Consultant",
  bio: "Strategic advisor with decades of experience in renewable energy infrastructure.",
  fullBio: "Mr. Anil Kumar Tyagi brings decades of experience in renewable energy infrastructure and strategic consulting. His deep expertise in project development and regulatory frameworks has been instrumental in guiding Gruner's expansion across India. He provides invaluable insights on technology partnerships and operational excellence.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/9c778952225.png",
  linkedin: "https://www.linkedin.com/",
  email: "anil.tyagi@grunerrenewable.com",
}, {
  name: "Mr. Asit Chaterjee",
  role: "Group President",
  bio: "Veteran leader driving organizational excellence and strategic partnerships.",
  fullBio: "Mr. Asit Chaterjee is a veteran corporate leader with extensive experience in organizational management and strategic partnerships. As Group President, he oversees Gruner's corporate strategy, business development, and stakeholder relationships. His leadership ensures operational excellence across all business verticals.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/21eff9bca03.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "asit.chaterjee@grunerrenewable.com",
}, {
  name: "Mr. Anil Dhussa",
  role: "Chief Advisor",
  bio: "Industry pioneer with expertise in biogas technology and sustainable solutions.",
  fullBio: "Mr. Anil Dhussa is an industry pioneer with specialized expertise in biogas technology and sustainable energy solutions. His technical knowledge and industry connections have been crucial in establishing Gruner's technological leadership. He advises on R&D initiatives and technology partnerships.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/60737fd0ffe.png",
  linkedin: "https://www.linkedin.com/",
  email: "anil.dhussa@grunerrenewable.com",
}, {
  name: "Mr. Rajesh Gupta",
  role: "EVP - Engineering",
  bio: "Engineering excellence leader ensuring highest quality standards.",
  fullBio: "Mr. Rajesh Gupta leads Gruner's engineering division with a focus on quality and innovation. His expertise ensures that all Bio-CNG plants meet the highest engineering standards. He oversees design, construction, and commissioning of projects across India.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/457decaf8d4.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "rajesh.gupta@grunerrenewable.com",
}, {
  name: "Ajmal Singh Kathat",
  role: "EVP - Projects",
  bio: "Project management expert overseeing multi-state operations.",
  fullBio: "Ajmal Singh Kathat is an experienced project management professional overseeing Gruner's multi-state operations. His expertise in project execution ensures timely delivery and operational efficiency across all Bio-CNG plant installations.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/36a83cac955.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "ajmal.kathat@grunerrenewable.com",
}, {
  name: "Mr. Sanjay Nandre",
  role: "EVP - Design",
  bio: "Innovative design leader creating cutting-edge Bio-CNG architectures.",
  fullBio: "Mr. Sanjay Nandre leads Gruner's design team, creating cutting-edge Bio-CNG plant architectures. His innovative approach to plant design optimizes efficiency, sustainability, and scalability across all projects.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/c6b23a5abd9.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "sanjay.nandre@grunerrenewable.com",
}];

type LeaderType = (typeof leadership[0]) & { fullBio?: string; email?: string };

interface LeaderModalProps {
  leader: LeaderType;
  isOpen: boolean;
  onClose: () => void;
}

const LeaderModal = ({ leader, isOpen, onClose }: LeaderModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full bg-white rounded-2xl shadow-2xl z-50 overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            {/* Content */}
            <div className="overflow-y-auto flex-1">
              {/* Header with image */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-primary to-accent overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
              </div>
              
              {/* Profile image overlapping */}
              <div className="relative -mt-20 px-6">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Info section */}
              <div className="px-6 pt-4 pb-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-primary font-semibold text-base mb-4">{leader.role}</p>
                
                {/* Full Bio */}
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {leader.fullBio || leader.bio}
                </p>

                {/* Contact Actions */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0077b5] text-white font-medium text-sm hover:bg-[#005885] transition-colors shadow-md"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                  <a
                    href={`mailto:${leader.email || ''}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface LeaderCardProps {
  leader: typeof leadership[0];
  index: number;
  isInView: boolean;
  onClick: () => void;
}

const LeaderCard = ({
  leader,
  index,
  isInView,
  onClick
}: LeaderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5, delay: 0.05 + index * 0.08 }} 
      className="group h-full cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative bg-white rounded-xl overflow-hidden shadow-md shadow-foreground/5 border border-foreground/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full">
        {/* Image container - Larger aspect ratio */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img 
            src={leader.image} 
            alt={leader.name} 
            className="w-full h-full object-cover object-top" 
            animate={{ scale: isHovered ? 1.05 : 1 }} 
            transition={{ duration: 0.5 }} 
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          
          {/* Hover overlay with bio preview */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: isHovered ? 1 : 0 }} 
            transition={{ duration: 0.25 }} 
            className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/80 to-primary/50 flex items-end"
          >
            <motion.div 
              initial={{ y: 15, opacity: 0 }} 
              animate={{ y: isHovered ? 0 : 15, opacity: isHovered ? 1 : 0 }} 
              transition={{ duration: 0.3, delay: 0.05 }} 
              className="p-5 rounded"
            >
              <p className="text-white/90 text-sm leading-relaxed font-body mb-3">
                {leader.bio}
              </p>
              
              {/* Click hint */}
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/20 text-white text-sm font-medium">
                Click for details
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </motion.div>

          {/* Default info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <motion.div 
              animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 8 : 0 }} 
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-base font-heading font-semibold text-white mb-0.5 leading-tight">
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedLeader, setSelectedLeader] = useState<LeaderType | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <section id="leadership" ref={ref} className="relative overflow-hidden py-16 md:py-20">
        {/* Solid dark background - improved readability */}
        <div className="absolute inset-0 bg-[hsl(200,25%,12%)]" />
        
        {/* Subtle accent orbs */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-tr from-accent/8 to-transparent rounded-full blur-[100px]" />

        <div className="container-wide relative z-10">
          {/* Compact header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6 }} 
            className="text-left mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-white/10 border border-white/20 mb-4">
              <Users className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs tracking-[0.12em] uppercase text-white/90 font-medium font-body">
                Meet The Team
              </span>
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-3">
              Our <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-white/60 max-w-xl font-body text-base">
              Seasoned industry veterans guiding Gruner Renewable with deep expertise.
            </p>
          </motion.div>

          {/* Founder Featured Block - Clickable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div 
              className="relative bg-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl cursor-pointer hover:bg-white/15 transition-colors"
              onClick={() => setSelectedLeader(founder)}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                {/* Founder Image - Increased size */}
                <div className="relative w-52 h-52 md:w-64 md:h-64 flex-shrink-0 rounded-xl overflow-hidden border-2 border-accent/30 shadow-lg">
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
                  <p className="text-white/70 text-base font-body max-w-lg leading-relaxed">
                    {founder.bio}
                  </p>
                  {/* Click for more + social icons */}
                  <div className="flex gap-3 mt-4 justify-center md:justify-start items-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                      View Full Profile
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#0077b5] flex items-center justify-center transition-colors"
                      aria-label={`${founder.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href={`mailto:${founder.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 rounded-md bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                      aria-label={`Email ${founder.name}`}
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all disabled:opacity-50"
              disabled={!canScrollPrev}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all disabled:opacity-50"
              disabled={!canScrollNext}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden mx-8" ref={emblaRef}>
              <div className="flex -ml-4">
                {leadership.map((leader, index) => (
                  <div 
                    key={leader.name} 
                    className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                  >
                    <LeaderCard 
                      leader={leader} 
                      index={index} 
                      isInView={isInView}
                      onClick={() => setSelectedLeader(leader)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.5 }} 
            className="text-left mt-10"
          >
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
      </section>

      {/* Leader Modal */}
      <LeaderModal
        leader={selectedLeader || founder}
        isOpen={!!selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />
    </>
  );
};

export default LeadershipSection;
