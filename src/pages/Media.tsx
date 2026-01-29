import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

// Provided image URLs
const mediaImages = [
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/1efe4048fa1.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/873015d8f04.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/026c6cb8455.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/18aa68569d5.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/f66104c6968.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/211cf1429b1.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/0d9246c1b72.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/12735de8b1d.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/1eef61e7e4f.jpeg",
  "https://grunerrenewable.s3.ap-south-1.amazonaws.com/Grunerrenewable/caf22855ec4.jpeg",
];

/* ---------------- CONSTANTS ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

/* ---------------- DATA ---------------- */

// Helper to cycle through article images
const getArticleImage = (index: number) => {
  return mediaImages[index % mediaImages.length];
};

const mediaArticles = [
  {
    title: "Gruner Renewable Energy secures $60 million to expand CBG projects",
    source: "The Hindu Business Line",
    date: "Jul 28, 2024",
    image: getArticleImage(0),
    link: "https://www.thehindubusinessline.com/companies/gruner-renewable-energy-secures-60-million-to-expand-cbg-projects/article68460239.ece",
  },
  {
    title: "Gruner Renewable Energy Bags $60 Mn To Expand CBG Projects In India",
    source: "BW Disrupt",
    date: "Jul 28, 2024",
    image: getArticleImage(1),
    link: "https://bwdisrupt.com/article/gruner-renewable-energy-bags-60-mn-to-expand-cbg-projects-in-india-527590",
  },
  {
    title: "Gruner Renewable Energy Raises $60M for Sustainable Biogas Solutions",
    source: "YourStory",
    date: "Jul 28, 2024",
    image: getArticleImage(2),
    link: "https://yourstory.com/2024/07/gruner-renewable-energy-raises-60m-sustainable-biogas-solutions",
  },
  {
    title: "Gruner Renewable Energy receives USD 60Mn Funding",
    source: "Economic Times Energy",
    date: "Jul 28, 2024",
    image: getArticleImage(0),
    link: "https://energy.economictimes.indiatimes.com/news/renewable/gruner-renewable-energy-receives-usd-60-mn-funding/112101344",
  },
  {
    title: "Gruner Renewable Energy to set up compressed biogas plant in Gujarat at Rs 220-cr investment",
    source: "PTI News",
    date: "Jun 16, 2024",
    image: getArticleImage(1),
    link: "https://www.ptinews.com/story/business/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/1589043",
  },
  {
    title: "Gruner to set up compressed biogas plant in Gujarat at Rs 220-cr investment",
    source: "Business Standard",
    date: "Jun 16, 2024",
    image: getArticleImage(2),
    link: "https://www.business-standard.com/companies/news/gruner-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220cr-investment-124061700378_1.html",
  },
  {
    title: "Gruner Renewable Energy to setup compressed biogas plant in Gujarat at Rs 220 cr. investment",
    source: "Economic Times",
    date: "Jun 16, 2024",
    image: getArticleImage(0),
    link: "https://economictimes.indiatimes.com/industry/renewables/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/articleshow/111056160.cms",
  },
  {
    title: "Gruner Renewable Energy to setup compressed biogas plant in Gujarat",
    source: "ET Energy World",
    date: "Jun 6, 2024",
    image: getArticleImage(1),
    link: "https://energy.economictimes.indiatimes.com/news/oil-and-gas/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/111057079",
  },
];

const pressHighlights = [
  { stat: 60, suffix: "M", label: "Funding Secured", desc: "Latest investment round" },
  { stat: 220, suffix: " Cr", label: "Gujarat Project", desc: "New plant investment" },
  { stat: 8, suffix: "+", label: "Major Publications", desc: "Featured in leading media" },
];

/* ---------------- COUNTER ---------------- */

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 1.6, ease: "easeOut" });
    }
  }, [inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

/* ---------------- COMPONENT ---------------- */

const Media = () => {
  return (
    <PageLayout>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-white pt-24 pb-12">
        <div className="container-wide">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <nav className="flex items-center gap-2 text-sm mb-4">
              <a href="/" className="text-black/60 hover:text-primary transition-colors">Home</a>
              <span className="text-black/40">/</span>
              <span className="text-primary font-medium">Media</span>
            </nav>
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT} rounded-md mb-4`}>Media Coverage</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black leading-tight mb-3">
              Gruner Renewable Energy in the <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              Read about our latest milestones, investments, growth journey and industry impact across leading publications.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {pressHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                className="p-5 bg-gray-50 rounded-lg border border-gray-100 text-center"
              >
                <div className={`text-2xl md:text-3xl font-bold ${GRADIENT_TEXT}`}>
                  <AnimatedCounter value={item.stat} />
                  {item.suffix}
                </div>
                <div className="text-sm font-medium text-gray-900 mt-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section id="gallery" className="py-12 bg-gray-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Gallery</span>
              <h2 className="text-2xl font-heading font-semibold text-black mt-1">Photo Gallery</h2>
            </div>
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">{mediaImages.length} Photos</span>
          </motion.div>
          
          {/* Clean Grid Layout - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediaImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="relative overflow-hidden rounded-lg shadow-sm group cursor-pointer aspect-[4/3]"
              >
                <img
                  src={img}
                  alt={`Media Coverage ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWS COVERAGE SECTION ================= */}
      <section id="coverage" className="py-12 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Latest News</span>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-black mt-2">Featured Coverage</h2>
          </motion.div>

          {/* Clean Article Grid - 4 columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {mediaArticles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-md overflow-hidden transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 bg-white/95 text-foreground text-xs font-medium rounded">
                      {article.source}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRESS CONTACT ================= */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3">Press Inquiries</h2>
            <p className="text-gray-600 text-base mb-6">
              For media inquiries, interviews, or press releases, please contact our communications team.
            </p>
            <a
              href="mailto:info@grunerrenewable.com"
              className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white rounded-md ${GRADIENT} hover:shadow-lg transition-all duration-300`}
            >
              Contact Press Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
