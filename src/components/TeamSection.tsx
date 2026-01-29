import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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

        {/* Carousel Layout */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all disabled:opacity-50"
            disabled={!canScrollPrev}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all disabled:opacity-50"
            disabled={!canScrollNext}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8" ref={emblaRef}>
            <div className="flex -ml-6">
              {/* Founder Slide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_66.666%]"
              >
                <div className="relative bg-gradient-to-br from-foreground to-foreground/95 rounded-xl overflow-hidden border border-white/10 shadow-xl h-full">
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

              {/* Other Leaders Slides */}
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_33.333%]"
                >
                  <div className="group bg-white rounded-xl shadow-md border border-border/50 overflow-hidden h-full">
                    {/* Larger Image */}
                    <div className="relative w-full aspect-square overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {leader.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2 font-body">{leader.role}</p>
                      <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-3">{leader.description}</p>
                      {/* LinkedIn Link */}
                      <a 
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#0077b5] hover:underline font-medium"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                        View Profile
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
