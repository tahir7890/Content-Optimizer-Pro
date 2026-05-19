import { ShieldCheck, Users, Globe, Heart } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const values = [
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description: "We never store, sell, or share your files. Every document you upload is processed and immediately discarded. Your data is yours — full stop.",
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description: "From students and freelancers to business professionals, Smart PDF Tools is designed to be accessible and useful for anyone who works with documents.",
  },
  {
    icon: Globe,
    title: "Globally Accessible",
    description: "Our platform serves users in over 150 countries. We support all modern browsers and devices — no software installation ever required.",
  },
  {
    icon: Heart,
    title: "Always Free",
    description: "We believe essential productivity tools should be free. Our core PDF utilities will always remain available at no cost to any user, anywhere.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Smart PDF Tools – Free Online PDF Utilities"
        description="Learn about Smart PDF Tools — our mission to make PDF conversion and editing free, fast, and accessible for everyone worldwide."
        canonicalPath="/about"
      />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground">About Smart PDF Tools</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're on a mission to make working with PDFs effortless for everyone — for free, forever.
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
          <h2>Our Story</h2>
          <p>
            Smart PDF Tools was founded with a simple idea: the most common document tasks — converting, compressing, merging, and editing PDFs — should not require expensive software subscriptions or complicated desktop applications.
          </p>
          <p>
            We built a suite of free, browser-based PDF tools that work instantly, on any device, without requiring users to create an account or install anything. Our platform serves students completing assignments, professionals preparing reports, small business owners managing contracts, and individuals handling everyday document needs.
          </p>
          <p>
            Since launch, we've helped millions of users worldwide work more efficiently with their documents. We take that trust seriously, which is why privacy, security, and simplicity remain our guiding principles in everything we build.
          </p>

          <h2>What We Believe</h2>
          <p>
            Document productivity should be universal. Too many tools put essential features behind paywalls or demand personal information in exchange for basic functionality. We reject that model. Our tools are genuinely free because we believe access to productivity software should not depend on your budget.
          </p>
          <p>
            We also believe in radical transparency. We don't use dark patterns, misleading download buttons, or fake progress indicators to deceive users. What you see is what you get: straightforward, honest, and reliable PDF tools.
          </p>

          <h2>Our Commitment to Privacy</h2>
          <p>
            Privacy is non-negotiable at Smart PDF Tools. We do not store your files, read their contents, or share them with any third party. Files are processed in memory and discarded immediately after conversion. We collect only the minimal analytics data necessary to improve our service, and we never sell user data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="p-6 rounded-2xl border border-border bg-card">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/10">
          <h2 className="text-2xl font-bold text-foreground">Join Millions of Happy Users</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Every day, people around the world rely on Smart PDF Tools to get their work done faster. We're honored to be part of their workflow.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[["10M+", "Files Processed"], ["150+", "Countries Served"], ["4.9/5", "User Rating"]].map(([stat, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-extrabold text-primary" data-testid={`stat-${label.replace(/\s/g, "-").toLowerCase()}`}>{stat}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
