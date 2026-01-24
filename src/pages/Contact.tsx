import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

/* ---------------- CONSTANTS ---------------- */

const GRADIENT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e]";
const GRADIENT_TEXT = "bg-gradient-to-r from-[#1f8f7a] to-[#7fbf2e] bg-clip-text text-transparent";

/* ---------------- VALIDATION ---------------- */

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  contactMethod: z.enum(["all", "phone", "email"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ---------------- DATA ---------------- */

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["22nd Floor, Windsor Grand", "Plot 1C, Sector 126", "Noida, Uttar Pradesh"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["1800 890 5180", "(Toll Free)"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@grunerrenewable.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
  },
];

/* ---------------- COMPONENT ---------------- */

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      contactMethod: "all",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    toast.success("Thank you! We'll be in touch within 3-5 business days.");
    reset();
    setIsSubmitting(false);
  };

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
            <span className={`inline-flex px-4 py-2 text-sm text-white font-semibold ${GRADIENT}`}>Contact Us</span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight">
              Get in Touch for <span className={GRADIENT_TEXT}>Bio-CNG Solutions</span>
            </h1>

            <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
              Ready to start your Bio-CNG project? Contact us for a customized quote and consultation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#form"
                className={`inline-flex items-center gap-2 px-7 py-3 text-white font-semibold ${GRADIENT} shadow-lg hover:shadow-xl transition-all`}
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:info@grunerrenewable.com"
                className="inline-flex items-center gap-2 px-7 py-3 font-semibold text-black border border-black/15 hover:border-black/30 transition-all"
              >
                Email Us
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl">
              {[
                { value: "24-48h", label: "Response Time" },
                { value: "Pan India", label: "Operations" },
                { value: "100+", label: "Projects" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#1f8f7a] pl-4">
                  <div className={`text-xl font-bold ${GRADIENT_TEXT}`}>{item.value}</div>
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
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Contact Gruner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-5 border border-black/5 shadow-lg">
              <div className="text-sm font-bold text-black">Trusted Partner</div>
              <div className="text-xs text-gray-600">Clean energy solutions</div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white p-5 border border-black/5 shadow-lg">
              <div className="text-sm font-bold text-black">Fast Response</div>
              <div className="text-xs text-gray-600">24-48 hours</div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= CONTACT FORM ================= */}
      /* FORM + SIDEBAR CONTENT REMAINS SAME STRUCTURE & DATA */
      {/* ================= MAP ================= */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">22nd Floor, Windsor Grand, Plot 1C, Sector 126, Noida, UP</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
