import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(_data: ContactFormValues) {
    setTimeout(() => {
      form.reset();
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
    }, 800);
  }

  return (
    <>
      <SEOHead
        title="Contact Smart PDF Tools – Get Help & Support"
        description="Get in touch with the Smart PDF Tools team. We're here to help with any questions about our free online PDF conversion tools."
        canonicalPath="/contact"
      />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Have a question, suggestion, or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Email Support</h3>
              <p className="mt-1 text-sm text-muted-foreground">support@smartpdftools.com</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Response Time</h3>
              <p className="mt-1 text-sm text-muted-foreground">We typically respond within 24 business hours.</p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-3">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Availability</h3>
              <p className="mt-1 text-sm text-muted-foreground">Monday – Friday, 9am – 6pm UTC</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} data-testid="input-name" />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} data-testid="input-subject" />
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
                            placeholder="Describe your question or issue in detail..."
                            rows={5}
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting} data-testid="button-submit-contact">
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
