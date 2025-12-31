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
import { Mail, Phone, Linkedin, Github } from "lucide-react";

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
            "radial-gradient(900px at 20% 30%, rgba(41,189,255,0.18), transparent 52%), radial-gradient(960px at 80% 10%, rgba(143,96,255,0.18), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10">
        <div className="section-heading">
          <p className="section-label">Mission control</p>
          <h2 className="section-title">Ready to launch the next release.</h2>
          <p className="section-description">Choose your channel—email, call, LinkedIn, or GitHub—and we&apos;ll map the flight plan together.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            className="rounded-[28px] border border-white/10 bg-white/5 px-7 py-8 md:px-9 md:py-10 space-y-8 shadow-[0_32px_120px_-90px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                    Full-Stack Java Developer
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground mt-2">
                    Enterprise modernization · Spring Boot · Oracle SQL
                  </h3>
                  <p className="text-muted-foreground mt-3">
                    Secure, STIG-compliant delivery for federal programs—pairing Spring Boot services, Oracle-backed data flows, and React experiences with clear documentation and observability.
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

            </div>
          </motion.aside>

          <motion.article
            className="rounded-[28px] border border-white/10 bg-white/5 px-7 py-8 md:px-9 md:py-10 shadow-[0_32px_120px_-90px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.1, ease: "easeOut" }}
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
                        <FormLabel>Project Overview</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            className="form-input resize-none"
                            placeholder="Share the project details or questions."
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

        <div className="glass-panel grid gap-4 md:grid-cols-4">
          {[
            { label: "Response time", value: "< 24h", detail: "Weekdays" },
            { label: "Engagements", value: "Design · Build · Optimize", detail: "Flexible scopes" },
            { label: "Location", value: "Remote / Hybrid", detail: "ET-friendly hours" },
            { label: "Focus", value: "Modern web apps", detail: "Data & security first" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 space-y-2">
              <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">{item.label}</p>
              <p className="text-lg font-semibold text-foreground">{item.value}</p>
              <p className="text-muted-foreground text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
