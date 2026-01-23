import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Globe, Zap, Users, Factory, Target, ChevronRight } from "lucide-react";

const leadership = [
  {
    name: "Utkarsh Gupta",
    title: "Founder & CEO",
    description:
      "Chartered Accountant turned visionary greenpreneur driving Gruner's mission to revolutionize India's clean fuel landscape with innovative Bio-CNG solutions.",
    image:
      "https://www.pv-magazine-india.com/wp-content/uploads/sites/8/2024/04/Utkarsh-Gupta-Founder-CEO-Gruner-Renewable-Energy.jpeg-1200x810.jpg",
  },
  {
    name: "Michael Wallis Olausson",
    title: "Chief Operating Officer",
    description:
      "Global operations expert strengthening execution excellence across Gruner's expanding portfolio of world-class CBG plants.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=face",
  },
  {
    name: "Senior Executive",
    title: "Executive Leadership",
    description:
      "Seasoned professionals driving strategic growth, partnerships, and operational scalability in India's renewable energy sector.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Premium Left-Right Hero with Parallax Depth */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900"
      >
        {/* Layered Background Gradients & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/30 to-teal-700/20" />

        {/* High-Impact Parallax Main Background - Modern CBG Plant Aerial */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661824244216-de3ef89de37d?fm=jpg&q=80&w=3000&auto=format&fit=crop')",
          }}
        />

        {/* Secondary Depth Layer - Agricultural Overlay */}
        <motion.div
          style={{ y: ySecondary }}
          className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://www.canextechno.com/wp-content/uploads/2025/10/government-subsidies-for-cbg-plants-in-iIndia.webp')",
          }}
        />

        <div className="relative z-10 container-wide h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
            {/* Left: Brand Authority Text */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-8 text-white"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Pioneering India's{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Bio-CNG Revolution
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl leading-relaxed">
                Transforming agricultural waste into clean, sustainable fuel. Building a future-defining energy
                ecosystem that empowers rural India and accelerates net-zero ambitions.
              </p>
              <div className="flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-semibold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all flex items-center gap-3"
                >
                  Explore Our Vision <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Impact Stats with Premium Cards */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "₹1,500+ Cr", label: "Project Orders Secured" },
                { value: "$60M", label: "Funding Raised" },
                { value: "50+", label: "CBG Plants Planned" },
                { value: "8+ States", label: "Pan-India Footprint" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl"
                >
                  <div className="text-4xl font-bold text-emerald-300">{stat.value}</div>
                  <div className="text-sm text-emerald-100 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Identity & Purpose - Visually Rich Split */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-emerald-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2024/01/GAIL-and-TruAlt-Announce-72-Million-Compressed-Biogas-Joint-Venture.jpg')",
          }}
        />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold text-white">
                Our <span className="text-emerald-400">Purpose</span>
              </h2>
              <p className="text-xl text-emerald-100 leading-relaxed">
                To lead India's clean energy transformation by converting abundant agricultural residue into
                high-quality Bio-CNG, reducing fossil fuel dependency, cutting emissions, and generating rural
                prosperity.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: Target, text: "Accelerate net-zero transition through scalable waste-to-fuel technology" },
                  { icon: Leaf, text: "Empower farmers with sustainable income from crop residue" },
                  { icon: Globe, text: "Build energy independence with indigenous renewable fuel" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4 text-emerald-100"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <div className="p-3 rounded-xl bg-emerald-500/20">
                        <Icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-lg">{item.text}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-3xl"
            >
              <img
                src="https://powerline.net.in/wp-content/uploads/2025/08/23-678x381.jpg"
                alt="Gruner CBG Plant in Action"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Icon Grid with Depth */}
      <section className="py-32 bg-slate-950">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-center text-white mb-20"
          >
            Why <span className="text-emerald-400">Gruner</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Factory,
                title: "Industry Pioneer",
                desc: "Building Asia's largest CBG facility with unmatched scale and proprietary German technology.",
              },
              {
                icon: Zap,
                title: "End-to-End Mastery",
                desc: "From feedstock sourcing to fuel dispensing – complete control for superior quality and reliability.",
              },
              {
                icon: Users,
                title: "Rural Empowerment",
                desc: "Creating thousands of jobs and sustainable income streams for farming communities.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group p-10 rounded-3xl bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-700/30 backdrop-blur-sm hover:border-emerald-400 transition-all duration-500"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-emerald-100">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Impact - Stats with Visual Backdrop */}
      <section className="py-32 relative bg-gradient-to-r from-emerald-950 to-teal-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://c8.alamy.com/comp/2RCPTTG/biogas-production-biogas-plants-bioenergyaerial-panorama-landscape-view-of-bio-gas-production-facility-and-powerplant-european-energy-crisisgreen-2RCPTTG.jpg')",
          }}
        />
        <div className="container-wide relative z-10 text-center text-white">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-20"
          >
            Global-Scale <span className="text-emerald-400">Impact</span>
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { value: "1M+ TPY", label: "Feedstock Processing Capacity" },
              { value: "Massive CO₂", label: "Emissions Avoided Annually" },
              { value: "5,000+", label: "Jobs Created by 2025" },
              { value: "Net-Zero", label: "Aligned Vision" },
            ].map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-5xl font-bold text-emerald-300 mb-4">{impact.value}</div>
                <div className="text-xl">{impact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Compact Executive Cards */}
      <section className="py-32 bg-slate-950">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-center text-white mb-20"
          >
            Visionary <span className="text-emerald-400">Leadership</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {leadership.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/40 to-slate-900/60 border border-emerald-800/50 backdrop-blur-md hover:border-emerald-400 transition-all duration-700"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold">{leader.name}</h3>
                  <p className="text-emerald-300 mb-4">{leader.title}</p>
                  <p className="text-sm text-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
