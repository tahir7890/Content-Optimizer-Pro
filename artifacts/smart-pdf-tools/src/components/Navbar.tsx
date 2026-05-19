import { useState } from "react";
import { Link, useLocation } from "wouter";
import { FileText, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme";

const tools = [
  { label: "PDF to Word", href: "/pdf-to-word" },
  { label: "Word to PDF", href: "/word-to-pdf" },
  { label: "Merge PDF", href: "/merge-pdf" },
  { label: "Compress PDF", href: "/compress-pdf" },
  { label: "Image to PDF", href: "/image-to-pdf" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary" data-testid="nav-logo">
            <FileText className="h-6 w-6" />
            Smart PDF Tools
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive(tool.href) ? "bg-primary/10 text-primary" : "text-foreground/70"
                }`}
                data-testid={`nav-link-${tool.href.replace("/", "")}`}
              >
                {tool.label}
              </Link>
            ))}
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent ${
                isActive("/about") ? "bg-primary/10 text-primary" : "text-foreground/70"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent ${
                isActive("/contact") ? "bg-primary/10 text-primary" : "text-foreground/70"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-testid="button-menu-toggle"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-3 space-y-1">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent ${
                  isActive(tool.href) ? "bg-primary/10 text-primary" : "text-foreground/70"
                }`}
              >
                {tool.label}
              </Link>
            ))}
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:bg-accent">About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:bg-accent">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
