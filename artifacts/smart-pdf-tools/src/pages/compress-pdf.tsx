import { ToolUploader } from "@/components/ToolUploader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedTools } from "@/components/RelatedTools";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Minimize2, HardDrive, Mail, Upload, Zap } from "lucide-react";

const faqs = [
  {
    question: "How much can I reduce the size of my PDF?",
    answer: "Compression results vary depending on the content of your PDF. Files with many high-resolution images can often be reduced by 50–80%. Text-only PDFs may see a 10–30% reduction.",
  },
  {
    question: "Will compression affect the visual quality of my PDF?",
    answer: "Our default compression setting balances file size reduction with visual quality. For most documents, the difference is imperceptible. You can also choose higher compression if size is the priority.",
  },
  {
    question: "Can I compress password-protected PDFs?",
    answer: "Password-protected PDFs cannot be compressed without first removing the password protection. If you have the password, remove protection first and then compress.",
  },
  {
    question: "Is there a maximum file size for PDF compression?",
    answer: "The maximum supported file size for our free compressor is 100MB. Files larger than this should be split or compressed using desktop software for best results.",
  },
  {
    question: "Does compressing a PDF affect the text content or searchability?",
    answer: "No. Our compressor targets image data and metadata — it does not affect the text layer. Your compressed PDF remains fully searchable and selectable.",
  },
];

const benefits = [
  { icon: HardDrive, title: "Reduce Storage", description: "Free up disk space and reduce the size of your PDF library significantly." },
  { icon: Mail, title: "Easy Email Sharing", description: "Compressed PDFs fit within email attachment size limits with room to spare." },
  { icon: Upload, title: "Faster Uploads", description: "Smaller files upload and download faster on any connection speed." },
  { icon: Zap, title: "No Quality Loss", description: "Smart compression targets metadata and images while keeping text crisp." },
];

export default function CompressPdfPage() {
  return (
    <>
      <SEOHead
        title="Compress PDF Online Free – Reduce File Size | Smart PDF Tools"
        description="Reduce PDF file size online for free without losing quality. Our PDF compressor makes sharing and uploading documents fast and easy."
        canonicalPath="/compress-pdf"
        faqSchema={faqs}
        breadcrumbs={[{ name: "Compress PDF", path: "/compress-pdf" }]}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BreadcrumbNav items={[{ label: "Compress PDF" }]} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Compress PDF Online</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Reduce your PDF file size online for free — fast compression without sacrificing quality.
        </p>

        <ToolUploader
          acceptedTypes=".pdf"
          acceptLabel="PDF files only"
          actionLabel="Compress PDF"
          toolName="Compress PDF"
          outputFormat="Compressed PDF"
        />

        <section className="mt-16 prose prose-slate dark:prose-invert max-w-none">
          <h2>Compress PDF Files Online — Reduce Size Without Losing Quality</h2>
          <p>
            Large PDF files create real problems. They exceed email attachment limits, take too long to upload to cloud storage, and consume excessive disk space on your device. Our free online PDF compressor solves all of these issues by dramatically reducing file size — without visibly affecting the document's appearance.
          </p>
          <p>
            Our compression algorithm analyzes your PDF and applies targeted optimization across multiple layers: image resolution is intelligently reduced to screen-appropriate levels, redundant metadata is removed, embedded fonts are streamlined, and content streams are re-encoded using efficient compression techniques.
          </p>
          <p>
            The result is a PDF that looks virtually identical to the original on screen and in print, but can be 50–80% smaller in file size — depending on the content. Documents that contain many high-resolution photographs or graphics benefit most from compression, while text-heavy documents also see meaningful reductions.
          </p>
          <p>
            Our compressor is ideal for professionals who share reports, presentations, and proposals via email; students submitting coursework with file size limits; and businesses archiving large volumes of scanned documents. The tool works with any standard PDF file and requires no account creation or software installation.
          </p>
          <h2>How to Compress a PDF</h2>
        </section>

        <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Upload PDF", description: "Upload the PDF file you want to compress using the drag-and-drop zone above." },
            { step: "2", title: "Compress", description: "Click \"Compress PDF\" and the tool will optimize your file immediately." },
            { step: "3", title: "Download", description: "Download your compressed PDF — significantly smaller, same great quality." },
          ].map((s) => (
            <div key={s.step} className="p-5 rounded-xl border border-border bg-card text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-3">{s.step}</div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl font-bold text-foreground mb-6">Why Compress Your PDF?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0"><Icon className="h-4 w-4" /></div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{b.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2" data-testid="faq-accordion">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <RelatedTools currentPath="/compress-pdf" />
      </main>
    </>
  );
}
