import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

/* ---------------- CONSTANTS ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

/* ---------------- DATA ---------------- */

const mediaArticles = [
  {
    title: "Gruner Renewable Energy secures $60 million to expand CBG projects",
    source: "The Hindu Business Line",
    date: "Jul 28, 2024",
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=2000",
    link: "https://www.thehindubusinessline.com/companies/gruner-renewable-energy-secures-60-million-to-expand-cbg-projects/article68460239.ece",
  },
  {
    title: "Gruner Renewable Energy Bags $60 Mn To Expand CBG Projects In India",
    source: "BW Disrupt",
    date: "Jul 28, 2024",
    image:
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=2000",
    link: "https://bwdisrupt.com/article/gruner-renewable-energy-bags-60-mn-to-expand-cbg-projects-in-india-527590",
  },
  {
    title: "Gruner Renewable Energy Raises $60M for Sustainable Biogas Solutions",
    source: "YourStory",
    date: "Jul 28, 2024",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=2000",
    link: "https://yourstory.com/2024/07/gruner-renewable-energy-raises-60m-sustainable-biogas-solutions",
  },
  {
    title: "Gruner Renewable Energy receives USD 60Mn Funding",
    source: "Economic Times Energy",
    date: "Jul 28, 2024",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000",
    link: "https://energy.economictimes.indiatimes.com/news/renewable/gruner-renewable-energy-receives-usd-60-mn-funding/112101344",
  },
  {
    title: "Gruner Renewable Energy to set up compressed biogas plant in Gujarat at Rs 220-cr investment",
    source: "PTI News",
    date: "Jun 16, 2024",
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=2000",
    link: "https://www.ptinews.com/story/business/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/1589043",
  },
  {
    title: "Gruner to set up compressed biogas plant in Gujarat at Rs 220-cr investment",
    source: "Business Standard",
    date: "Jun 16, 2024",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=2000",
    link: "https://www.business-standard.com/companies/news/gruner-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220cr-investment-124061700378_1.html",
  },
  {
    title: "Gruner Renewable Energy to setup compressed biogas plant in Gujarat",
    source: "ET Energy World",
    date: "Jun 6, 2024",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000",
    link: "https://energy.economictimes.indiatimes.com/news/oil-and-gas/gruner-renewable-energy-to-set-up-compressed-biogas-plant-in-gujarat-at-rs-220-cr-investment/111057079",
  },
];

const pressHighlights = [
  { stat: "$60M", label: "Funding Secured", desc: "Latest investment round" },
  { stat: "₹220 Cr", label: "Gujarat Project", desc: "New plant investment" },
  { stat: "8+", label: "Major Publications", desc: "Featured in leading media" },
];

/* ---------------- COMPONENT ---------------- */

const Media = () => {
  return (
    <PageLayout>
      {/* ================= HERO ================= */}
      <section className="relative bg-white pt-28 pb-20">
        <div className="container-wide text-center max-w-4xl mx-auto space-y-6">
          <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT}`}>Media Coverage</span>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-black">
            Gruner Renewable Energy in the <span className={GRADIENT_TEXT}>News</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Read about our latest milestones, investments, growth journey and industry impact across leading
            publications.
          </p>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {pressHighlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white border border-black/5 shadow-lg"
              >
                <div className={`text-4xl font-bold ${GRADIENT_TEXT} mb-2`}>{item.stat}</div>
                <div className="text-black font-semibold mb-1">{item.label}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="py-24 bg-gray-50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className={`inline-flex px-4 py-2 text-sm text-white font-medium ${GRADIENT}`}>Latest News</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-4">
              Featured <span className={GRADIENT_TEXT}>Coverage</span>
            </h2>
          </motion.div>

          {/* Featured Card */}
          <motion.a
            href={mediaArticles[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center p-8 bg-white border border-black/5 shadow-xl">
              <div className="relative overflow-hidden">
                <img
                  src={mediaArticles[0].image}
                  alt={mediaArticles[0].title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{mediaArticles[0].date}</span>
                  <span className="text-[#1f8f7a]">•</span>
                  <span>{mediaArticles[0].source}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{mediaArticles[0].title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Gruner Renewable Energy has secured $60 million in funding to expand its compressed biogas (CBG)
                  projects across India, marking a major milestone in sustainable energy development.
                </p>

                <span className="inline-flex items-center gap-2 font-semibold text-[#1f8f7a] group-hover:gap-3 transition-all">
                  Read full article
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.a>

          {/* ================= ALL ARTICLES ================= */}
          <div className="mb-10">
            <h2 className="text-2xl font-heading font-bold text-gray-900">All Coverage</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="group bg-white border border-black/5 shadow-lg overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-heading font-semibold text-gray-900 line-clamp-2 mb-4">{article.title}</h3>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f8f7a] group-hover:gap-3 transition-all">
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
      <section className="py-24 bg-white">
        <div className="container-narrow text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Press Inquiries</h2>

            <p className="text-gray-600 mb-8">
              For media inquiries, interviews, or press releases, please contact our communications team.
            </p>

            <a
              href="mailto:info@grunerrenewable.com"
              className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
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
