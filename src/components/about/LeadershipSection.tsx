import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Linkedin, Mail, Users, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const founder = {
  name: "Mr. Utkarsh Gupta",
  role: "Founder and CEO",
  bio: "Visionary leader driving India's clean energy revolution through innovative Bio-CNG solutions and sustainable infrastructure development.",
  image: "https://s3.us-west-1.amazonaws.com/appsinvo-staging-ys/Gruner/1b7dd6b268d.jpeg",
  linkedin: "https://www.linkedin.com/in/utkarsh-gupta-gruner/",
  email: "utkarsh@grunerrenewable.com",
};

const leadership = [{
  name: "Mr. Anil Kumar Tyagi",
  role: "Chief Consultant",
  bio: "Strategic advisor with decades of experience in renewable energy infrastructure.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/9c778952225.png",
  linkedin: "https://www.linkedin.com/",
  email: "anil.tyagi@grunerrenewable.com",
}, {
  name: "Mr. Asit Chaterjee",
  role: "Group President",
  bio: "Veteran leader driving organizational excellence and strategic partnerships.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/21eff9bca03.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "asit.chaterjee@grunerrenewable.com",
}, {
  name: "Mr. Anil Dhussa",
  role: "Chief Advisor",
  bio: "Industry pioneer with expertise in biogas technology and sustainable solutions.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/60737fd0ffe.png",
  linkedin: "https://www.linkedin.com/",
  email: "anil.dhussa@grunerrenewable.com",
}, {
  name: "Mr. Rajesh Gupta",
  role: "EVP - Engineering",
  bio: "Engineering excellence leader ensuring highest quality standards.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/457decaf8d4.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "rajesh.gupta@grunerrenewable.com",
}, {
  name: "Ajmal Singh Kathat",
  role: "EVP - Projects",
  bio: "Project management expert overseeing multi-state operations.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/36a83cac955.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "ajmal.kathat@grunerrenewable.com",
}, {
  name: "Mr. Sanjay Nandre",
  role: "EVP - Design",
  bio: "Innovative design leader creating cutting-edge Bio-CNG architectures.",
  image: "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/c6b23a5abd9.jpeg",
  linkedin: "https://www.linkedin.com/",
  email: "sanjay.nandre@grunerrenewable.com",
}];

interface LeaderCardProps {
  leader: typeof leadership[0];
  index: number;
  isInView: boolean;
}

const LeaderCard = ({
  leader,
  index,
  isInView,
}: LeaderCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5, delay: 0.05 + index * 0.08 }} 
      className="group h-full" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
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
              
              {/* Social icons */}
              <div className="flex gap-2">
                <a 
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-white/20 hover:bg-[#0077b5] flex items-center justify-center transition-colors"
                  aria-label={`${leader.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a 
                  href={`mailto:${leader.email}`}
                  className="w-8 h-8 rounded-md bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label={`Email ${leader.name}`}
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
              </div>
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
              <p className="text-white/80 text-sm font-body mb-2">{leader.role}</p>
              {/* LinkedIn icon below name */}
              <a 
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0077b5] hover:bg-[#005fa3] transition-colors shadow-md"
                aria-label={`${leader.name} LinkedIn`}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
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

        {/* Founder Featured Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <div className="relative bg-white/10 rounded-xl overflow-hidden border border-white/10 shadow-xl">
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
                {/* Social icons */}
                <div className="flex gap-3 mt-4 justify-center md:justify-start items-center">
                  <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#0077b5] flex items-center justify-center transition-colors"
                    aria-label={`${founder.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={`mailto:${founder.email}`}
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

        {/* Team Carousel */}
        <div className="relative">
          {/* Left Arrow - Positioned outside carousel */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!canScrollPrev}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Right Arrow - Positioned outside carousel */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!canScrollNext}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden px-6 md:px-10" ref={emblaRef}>
            <div className="flex -ml-4">
              {leadership.map((leader, index) => (
                <div
                  key={leader.name}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 pl-4"
                >
                  <LeaderCard
                    leader={leader}
                    index={index}
                    isInView={isInView}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
