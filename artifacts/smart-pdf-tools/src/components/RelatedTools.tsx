import { Link } from "wouter";
import { FileText, FileDown, Merge, Minimize2, Image, ArrowRight } from "lucide-react";

const ALL_TOOLS = [
  { label: "PDF to Word", href: "/pdf-to-word", icon: FileText, description: "Convert PDF files to editable Word documents" },
  { label: "Word to PDF", href: "/word-to-pdf", icon: FileDown, description: "Convert Word documents to PDF format" },
  { label: "Merge PDF", href: "/merge-pdf", icon: Merge, description: "Combine multiple PDFs into one file" },
  { label: "Compress PDF", href: "/compress-pdf", icon: Minimize2, description: "Reduce PDF file size without quality loss" },
  { label: "Image to PDF", href: "/image-to-pdf", icon: Image, description: "Convert images to PDF documents" },
];

interface RelatedToolsProps {
  currentPath: string;
}

export function RelatedTools({ currentPath }: RelatedToolsProps) {
  const related = ALL_TOOLS.filter((t) => t.href !== currentPath);

  return (
    <section className="mt-16" aria-labelledby="related-tools-heading">
      <h2 id="related-tools-heading" className="text-2xl font-bold text-foreground mb-6">Related PDF Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {related.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200"
              data-testid={`related-tool-${tool.href.replace("/", "")}`}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{tool.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{tool.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary shrink-0 transition-colors" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
