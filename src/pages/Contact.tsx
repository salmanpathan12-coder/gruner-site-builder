import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import contactHeroImage from "@/assets/contact-hero.jpg";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  contactMethod: z.enum(["all", "phone", "email"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    toast.success("Thank you! We'll be in touch within 3-5 business days.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <PageLayout>
      <PageHero
        title="Get in Touch"
        subtitle="Ready to start your Bio-CNG project? Contact us for a customized quote and consultation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        image={contactHeroImage}
      />

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container-wide">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Let's Start a <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Conversation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partner with us to transform organic waste into clean energy. Our team is ready to discuss your project needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl border border-border shadow-lg shadow-primary/5 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-semibold text-foreground">Request a Quote</h2>
                    <p className="text-muted-foreground text-sm">
                      Receive an accurate quote within 3-5 days when you fill out this form.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input
                        {...register("fullName")}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Your name"
                      />
                      {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <input
                        {...register("companyName")}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="+91 12345 67890"
                      />
                      {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Preferred Contact Method</label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: "all", label: "Any" },
                        { value: "phone", label: "Phone" },
                        { value: "email", label: "Email" },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            {...register("contactMethod")}
                            type="radio"
                            value={option.value}
                            className="w-4 h-4 text-primary border-border focus:ring-primary"
                          />
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Quick Response Promise */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Quick Response Promise</h4>
                      <p className="text-muted-foreground text-sm">
                        Our team responds to all inquiries within 24-48 business hours.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="p-6 bg-card rounded-xl border border-border shadow-sm"
                >
                  <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {[
                      { name: "Facebook", url: "https://www.facebook.com/GrunerRenewables/" },
                      { name: "Instagram", url: "https://www.instagram.com/gruner_renewable/" },
                      { name: "LinkedIn", url: "https://www.linkedin.com/company/gruner-renewable-energy/" },
                      { name: "Twitter", url: "https://x.com/Gruner_energy" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-muted hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label={social.name}
                      >
                        <span className="text-xs font-medium">{social.name[0]}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background">
        <div className="container-wide py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
              Visit Our Office
            </h3>
            <p className="text-muted-foreground">
              22nd Floor, Windsor Grand, Plot 1C, Sector 126, Noida, UP
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg shadow-primary/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4847985837387!2d77.39193!3d28.579793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0c2c9f2d5f%3A0x4e43b8e8f3f34e4b!2sWindsor%20Grand%2C%20Plot%201C%2C%20Sector%20126%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gruner Renewable Energy Office Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
