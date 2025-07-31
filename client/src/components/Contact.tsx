import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
  const sectionRef = useSectionAnalytics<HTMLDivElement>('Contact');
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactForm) => {
    trackInteraction('ContactForm', 'submit', 'Email Contact');
    const subject = `Portfolio Contact from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    form.reset();
  };

  return (
    <section ref={sectionRef}>
      {/* Typography-focused header */}
      <div className="text-center content-spacing">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          Contact
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get in touch for Java development opportunities, Spring Boot projects, and enterprise application consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.aside
          className="minimal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-foreground">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out via email, phone, or social media for Java development and enterprise application opportunities.
              </p>
            </div>
            
            <address className="not-italic space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Greenwood, IN 46142</span>
              </div>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                <Mail className="w-5 h-5" />
                <span>{SOCIAL_LINKS.email}</span>
              </a>
              <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                <Phone className="w-5 h-5" />
                <span>{SOCIAL_LINKS.phone}</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </address>
          </div>
        </motion.aside>

        {/* Contact Form */}
        <motion.article
          className="minimal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-foreground">Send a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" type="email" {...field} />
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
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your Message" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full minimal-button minimal-button-primary">
                  Send Email
                </Button>
              </form>
            </Form>
          </div>
        </motion.article>
      </div>
    </section>
  );
}