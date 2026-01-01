import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";
import { trackInteraction } from "@/lib/analytics";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, Linkedin, Github, MapPin, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("Contact");
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactForm) => {
    trackInteraction("ContactForm", "submit", "Email Contact");
    const subject = `Portfolio Contact from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    form.reset();
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-shell scroll-mt-24"
    >
      <div className="page-shell relative z-10">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Available for enterprise modernization projects, security audits, and full-stack development engagements.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl">
          {/* Contact Info */}
          <motion.aside
            className="glass-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mt-2">
                  Remote-friendly with active security clearance. Response within 24 hours.
                </p>
              </div>

              <address className="not-italic space-y-4 text-muted-foreground">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="contact-link"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {SOCIAL_LINKS.email}
                </a>
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="contact-link">
                  <Phone className="h-5 w-5 text-primary" />
                  {SOCIAL_LINKS.phone}
                </a>
                <div className="contact-link">
                  <MapPin className="h-5 w-5 text-primary" />
                  Greenwood, IN 46142
                </div>
              </address>

              <div className="divider" />

              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-ghost px-4 py-2.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-ghost px-4 py-2.5"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="stat-card">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                    Timezone
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    EST (UTC-5)
                  </p>
                </div>
                <div className="stat-card">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                    Availability
                  </p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    Remote / Hybrid
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Contact Form */}
          <motion.article
            className="surface-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Send a Message
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="form-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            className="form-input"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            className="form-input resize-none"
                            placeholder="Tell me about your project..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full pill-solid justify-center"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
