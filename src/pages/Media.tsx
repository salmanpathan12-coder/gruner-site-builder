import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";
// External image URLs from grunerrenewable.com
const mediaHeroImage = "https://www.grunerrenewable.com/assets/images/media-hero.webp";
const mediaArticle1 = "https://www.grunerrenewable.com/assets/images/news-1.webp";
const mediaArticle2 = "https://www.grunerrenewable.com/assets/images/news-2.webp";
const mediaArticle3 = "https://www.grunerrenewable.com/assets/images/news-3.webp";

/* ---------------- CONSTANTS ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

/* ---------------- DATA ---------------- */

// Helper to cycle through article images
const getArticleImage = (index: number) => {
  const images = [mediaArticle1, mediaArticle2, mediaArticle3];
  return images[index % images.length];
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
      <section className="relative bg-white pt-28 pb-24 overflow-hidden">
        <div className="container-wide grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT} rounded-md`}>Media Coverage</span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              Gruner Renewable Energy in the <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">News</span>
            </h1>

            <p className="text-gray-700 text-lg max-w-xl">
              Read about our latest milestones, investments, growth journey and industry impact across leading
              publications.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#coverage"
                className={`inline-flex items-center gap-2 px-7 py-3 text-white font-semibold ${GRADIENT} rounded-md shadow-lg hover:shadow-xl transition-all`}
              >
                Explore Coverage
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@grunerrenewable.com"
                className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-black border border-black/15 rounded-md hover:border-black/30 transition-all"
              >
                Press Contact
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl">
              {pressHighlights.map((item) => (
                <div key={item.label} className="border-l-2 border-[#1f8f7a] pl-4">
                  <div className={`text-xl font-bold ${GRADIENT_TEXT}`}>
                    <AnimatedCounter value={item.stat} />
                    {item.suffix}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white border border-black/5 shadow-2xl overflow-hidden">
              <img
                src={mediaHeroImage}
                alt="Media Coverage"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-5 border border-black/5 shadow-lg">
              <div className="text-sm font-bold text-black">Global Media</div>
              <div className="text-xs text-gray-600">National & international coverage</div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white p-5 border border-black/5 shadow-lg">
              <div className="text-sm font-bold text-black">Investor Trust</div>
              <div className="text-xs text-gray-600">Institutional recognition</div>
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
                <p className="text-muted-foreground mb-6">
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
            <p className="text-muted-foreground mb-8">
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
