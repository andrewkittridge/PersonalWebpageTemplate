import { motion, useMotionValue, useTransform } from "framer-motion";
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
import { GlowCard } from "@/components/ui/glow-card";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";
import { trackInteraction } from "@/lib/analytics";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { useRef } from "react";
import { depthCardVariants, staggerContainer } from "@/lib/motion-variants";

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

  // Magnetic button effect
  const btnRef = useRef<HTMLButtonElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useTransform(btnX, (v) => v * 0.15);
  const springY = useTransform(btnY, (v) => v * 0.15);

  const handleBtnMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    btnX.set(e.clientX - rect.left - rect.width / 2);
    btnY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleBtnMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

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

        <motion.div
          className="grid gap-8 lg:grid-cols-2 max-w-5xl"
          style={{ perspective: "1000px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div variants={depthCardVariants}>
            <GlowCard className="p-6 md:p-8 h-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground font-display">
                    Contact Information
                  </h3>
                  <p className="mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Remote-friendly with active security clearance. Response within 24 hours.
                  </p>
                </div>

                <address className="not-italic space-y-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="contact-link"
                  >
                    <Mail className="h-5 w-5 text-amber-400" />
                    {SOCIAL_LINKS.email}
                  </a>
                  <a href={`tel:${SOCIAL_LINKS.phone}`} className="contact-link">
                    <Phone className="h-5 w-5 text-amber-400" />
                    {SOCIAL_LINKS.phone}
                  </a>
                  <div className="contact-link">
                    <MapPin className="h-5 w-5 text-teal-400" />
                    Greenwood, IN 46142
                  </div>
                </address>

                <div className="divider-gradient-accent" />

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
                    <p className="text-xs uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                      Timezone
                    </p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      EST (UTC-5)
                    </p>
                  </div>
                  <div className="stat-card">
                    <p className="text-xs uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                      Availability
                    </p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      Remote / Hybrid
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Contact Form — depth layered */}
          <motion.div variants={depthCardVariants}>
            <GlowCard alwaysGlow className="p-6 md:p-8 h-full">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground font-display">
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
                    <motion.div
                      style={{ x: springX, y: springY }}
                      onMouseMove={handleBtnMouseMove}
                      onMouseLeave={handleBtnMouseLeave}
                    >
                      <Button
                        ref={btnRef}
                        type="submit"
                        size="lg"
                        className="w-full text-white justify-center"
                        style={{
                          background: "linear-gradient(135deg, #f0a830, #e09520)",
                          color: "#0a0e1a",
                          fontWeight: 600,
                        }}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
