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
      {/* ================= HERO (ELITE SPLIT) ================= */}
      <section className="relative bg-white pt-28 pb-16 overflow-hidden">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT} rounded-md mb-4`}>Media Coverage</span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight mb-4">
              Gruner Renewable Energy in the <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
              Read about our latest milestones, investments, growth journey and industry impact across leading publications.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          >
            {pressHighlights.map((item) => (
              <div key={item.label} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className={`text-2xl md:text-3xl font-bold ${GRADIENT_TEXT}`}>
                  <AnimatedCounter value={item.stat} />
                  {item.suffix}
                </div>
                <div className="text-xs text-gray-600 font-medium mt-1">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Gallery Section */}
          <motion.div
            id="gallery"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-semibold text-black">Gallery</h2>
              <span className="text-sm text-gray-500">{mediaImages.length} Photos</span>
            </div>
            
            {/* Structured Gallery Grid - 2 rows */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {mediaImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-lg shadow-md group cursor-pointer ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`Media Coverage ${index + 1}`}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? 'h-full min-h-[280px]' : 'h-32 md:h-40'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-20 bg-foreground">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {pressHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-xl bg-white/5 border border-white/10"
              >
                <div className={`text-4xl md:text-5xl font-heading font-bold ${GRADIENT_TEXT} mb-2`}>
                  <AnimatedCounter value={item.stat} />
                  {item.suffix}
                </div>
                <div className="text-white font-medium mb-1">{item.label}</div>
                <div className="text-white/50 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section id="coverage" className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Latest News</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-3">Featured Coverage</h2>
          </motion.div>

          {/* Featured Card */}
          <motion.a
            href={mediaArticles[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={mediaArticles[0].image}
                  alt={mediaArticles[0].title}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              </div>
              <div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{mediaArticles[0].date}</span>
                  <span className="text-primary">•</span>
                  <span>{mediaArticles[0].source}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                  {mediaArticles[0].title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg mb-6">
                  Gruner Renewable Energy has secured $60 million in funding to expand its compressed biogas (CBG)
                  projects across India, marking a significant milestone in the company's growth trajectory.
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read full article
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.a>

          {/* All Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold">All Coverage</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaArticles.slice(1).map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-foreground text-xs font-medium rounded-full">
                      {article.source}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-4">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRESS CONTACT ================= */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">Press Inquiries</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              For media inquiries, interviews, or press releases, please contact our communications team.
            </p>
            <a
              href="mailto:info@grunerrenewable.com"
              className={`inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-md ${GRADIENT} hover:shadow-lg transition-all duration-300`}
            >
              Contact Press Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Media;
