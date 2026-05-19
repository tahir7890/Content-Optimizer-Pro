import { Link } from "wouter";
import { FileText } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary mb-3">
              <FileText className="h-5 w-5" />
              Smart PDF Tools
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free online PDF utilities for everyone. Convert, compress, merge, and transform your documents in seconds — no signup required.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">PDF Tools</h3>
            <ul className="space-y-2">
              {[
                { label: "PDF to Word", href: "/pdf-to-word" },
                { label: "Word to PDF", href: "/word-to-pdf" },
                { label: "Merge PDF", href: "/merge-pdf" },
                { label: "Compress PDF", href: "/compress-pdf" },
                { label: "Image to PDF", href: "/image-to-pdf" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Smart PDF Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
