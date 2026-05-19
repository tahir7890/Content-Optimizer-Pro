import { Link } from "wouter";
import {
  FileText, FileDown, Merge, Minimize2, Image,
  ShieldCheck, Zap, Globe, Lock, CheckCircle2, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const tools = [
  {
    icon: FileText,
    label: "PDF to Word",
    href: "/pdf-to-word",
    description: "Convert PDF files to fully editable Microsoft Word documents in seconds.",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: FileDown,
    label: "Word to PDF",
    href: "/word-to-pdf",
    description: "Turn Word documents into professional, high-quality PDF files instantly.",
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    icon: Merge,
    label: "Merge PDF",
    href: "/merge-pdf",
    description: "Combine multiple PDF files into a single, organized document with ease.",
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: Minimize2,
    label: "Compress PDF",
    href: "/compress-pdf",
    description: "Reduce PDF file size dramatically without sacrificing visual quality.",
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    icon: Image,
    label: "Image to PDF",
    href: "/image-to-pdf",
    description: "Convert JPG, PNG, and other image formats into PDF documents quickly.",
    color: "text-rose-600",
    bg: "bg-rose-50 dark:bg-rose-950/30",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our tools are optimized for speed. Most conversions complete in under 10 seconds, so you never have to wait.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your files are processed securely. We never store or share your documents — your privacy is our top priority.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "No software to install. Smart PDF Tools works on any device — desktop, tablet, or mobile — right in your browser.",
  },
  {
    icon: ShieldCheck,
    title: "Always Free",
    description: "All our core PDF tools are completely free to use, with no hidden fees, no subscriptions, and no account required.",
  },
];

const steps = [
  { step: "01", title: "Upload Your File", description: "Drag and drop your file or click to browse. We support all major document and image formats." },
  { step: "02", title: "Process & Convert", description: "Click the action button and our tool will process your file instantly — usually in just a few seconds." },
  { step: "03", title: "Download the Result", description: "Once complete, download your converted file directly to your device. No signup or account required." },
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Smart PDF Tools – Free Online PDF Converter & Editor"
        description="Convert, compress, merge, and edit PDFs online for free. Smart PDF Tools offers fast, secure, and easy-to-use PDF utilities — no signup required."
        canonicalPath="/"
      />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <CheckCircle2 className="h-4 w-4" />
              100% Free — No Account Required
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Free Online PDF Tools<br />
              <span className="text-primary">for Everyone</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Convert, compress, merge, and transform your PDF files online — fast, secure, and completely free. No downloads, no signups, just results.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="/pdf-to-word" data-testid="hero-cta-primary">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about" data-testid="hero-cta-secondary">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tool Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="tools-heading">
          <div className="text-center mb-12">
            <h2 id="tools-heading" className="text-3xl font-bold text-foreground">All PDF Tools</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Everything you need to work with PDF files — all in one place, all for free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  data-testid={`tool-card-${tool.href.replace("/", "")}`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${tool.bg} mb-4`}>
                    <Icon className={`h-6 w-6 ${tool.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{tool.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Use Tool <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-muted/40 py-20 px-4" aria-labelledby="how-it-works-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="how-it-works-heading" className="text-3xl font-bold text-foreground">How It Works</h2>
              <p className="mt-3 text-muted-foreground">Three simple steps to convert any file</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="features-heading">
          <div className="text-center mb-12">
            <h2 id="features-heading" className="text-3xl font-bold text-foreground">Why Smart PDF Tools?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Millions of users trust Smart PDF Tools for fast, reliable document conversion every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 p-6 rounded-2xl border border-border bg-card">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">Start Converting PDFs for Free</h2>
            <p className="mt-3 text-primary-foreground/80 text-lg">
              No account, no fees, no limits on the tools that matter most.
            </p>
            <Button size="lg" variant="secondary" className="mt-6" asChild>
              <Link href="/pdf-to-word" data-testid="cta-banner-button">Try PDF to Word Free</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
