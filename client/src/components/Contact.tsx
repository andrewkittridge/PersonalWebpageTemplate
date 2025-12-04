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
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

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
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px at 20% 30%, rgba(90,121,255,0.18), transparent 52%), radial-gradient(960px at 80% 10%, rgba(224,180,120,0.22), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10">
        <div className="section-heading">
          <p className="section-label">Collaborate</p>
          <h2 className="section-title">Let&apos;s build your next release.</h2>
          <p className="section-description">
            Remote-friendly, clearance-ready, and comfortable pairing with your leads,
            designers, and operators to move from idea to shipped.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            className="glass-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                  Response within 24h
                </p>
                <h3 className="text-2xl font-semibold text-foreground mt-2">
                  Ready when your roadmap is.
                </h3>
                <p className="text-muted-foreground mt-3">
                  Reach out for enterprise modernizations, audits, or leadership support on
                  Java, Spring Boot, and React deliveries.
                </p>
              </div>

              <address className="not-italic space-y-4 text-sm text-muted-foreground">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="contact-link"
                >
                  <Mail className="h-5 w-5" />
                  {SOCIAL_LINKS.email}
                </a>
                <a href={`tel:${SOCIAL_LINKS.phone}`} className="contact-link">
                  <Phone className="h-5 w-5" />
                  {SOCIAL_LINKS.phone}
                </a>
                <div className="contact-link cursor-default">
                  <MapPin className="h-5 w-5" />
                  Indianapolis, IN · Remote friendly
                </div>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </address>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Timezone", value: "EST (UTC-5)" },
                  { label: "Clearance", value: "Active Secret" },
                  { label: "Focus", value: "Java · Spring · React" },
                  { label: "Engagements", value: "Hybrid or Remote" },
                ].map((item) => (
                  <div key={item.label} className="stat-card text-left">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-foreground mt-1">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.article
            className="surface-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Send a message
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Andrew, product lead at..."
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
                        <FormLabel>Project Overview</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            className="form-input resize-none"
                            placeholder="Tell me about the goal, stack, and key deliverables..."
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
                    variant="ghost"
                    className="w-full pill-solid justify-center"
                  >
                    Send email
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
