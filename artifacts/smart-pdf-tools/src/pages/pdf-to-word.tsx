import { ToolUploader } from "@/components/ToolUploader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedTools } from "@/components/RelatedTools";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FileText, Zap, ShieldCheck, RefreshCw } from "lucide-react";

const faqs = [
  {
    question: "Is the PDF to Word converter completely free?",
    answer: "Yes, our PDF to Word converter is 100% free to use. There are no hidden fees, no subscription requirements, and no limits on conversions. Simply upload your file and convert.",
  },
  {
    question: "How accurate is the PDF to Word conversion?",
    answer: "Our converter preserves the original formatting, fonts, and layout as accurately as possible. Text-based PDFs convert with very high accuracy. Scanned PDFs may require OCR processing for best results.",
  },
  {
    question: "Is my file safe when I upload it?",
    answer: "Absolutely. Your files are processed securely and deleted immediately after conversion. We never store, read, or share your documents with any third party.",
  },
  {
    question: "What types of PDF files can I convert to Word?",
    answer: "You can convert any standard PDF file — including text-based PDFs, formatted documents, reports, and articles. The tool works best with PDF files that contain selectable text.",
  },
  {
    question: "Do I need to install any software to convert PDF to Word?",
    answer: "No installation is required. Smart PDF Tools works entirely in your web browser on any device — desktop, laptop, tablet, or mobile. Simply visit the page and start converting.",
  },
];

const benefits = [
  { icon: Zap, title: "Instant Conversion", description: "Convert PDFs to Word documents in seconds, not minutes." },
  { icon: FileText, title: "Editable Output", description: "Get fully editable .docx files you can modify in Microsoft Word or Google Docs." },
  { icon: ShieldCheck, title: "100% Secure", description: "Files are never stored. Your documents stay private and confidential." },
  { icon: RefreshCw, title: "Maintains Formatting", description: "Fonts, tables, and layout are preserved in the converted Word file." },
];

export default function PdfToWordPage() {
  return (
    <>
      <SEOHead
        title="PDF to Word Converter – Free Online | Smart PDF Tools"
        description="Convert PDF to editable Word documents online for free. Fast, accurate, and secure PDF to Word conversion — no software installation needed."
        canonicalPath="/pdf-to-word"
        faqSchema={faqs}
        breadcrumbs={[{ name: "PDF to Word", path: "/pdf-to-word" }]}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BreadcrumbNav items={[{ label: "PDF to Word" }]} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">PDF to Word Converter</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert PDF files to fully editable Microsoft Word documents online — free, fast, and secure.
        </p>

        <ToolUploader
          acceptedTypes=".pdf"
          acceptLabel="PDF files only"
          actionLabel="Convert to Word"
          toolName="PDF to Word"
          outputFormat=".docx"
        />

        {/* SEO Content */}
        <section className="mt-16 prose prose-slate dark:prose-invert max-w-none">
          <h2>Convert PDF to Word Online — Free & Accurate</h2>
          <p>
            Converting a PDF to a Word document is one of the most common document tasks users face every day. Whether you've received a report in PDF format that you need to edit, or you want to extract content from a scanned document into a workable format, our free PDF to Word converter makes the process effortless.
          </p>
          <p>
            Smart PDF Tools uses advanced document analysis to extract text, tables, headers, and formatting from your PDF file and reconstruct them accurately in a Microsoft Word (.docx) format. The result is a document that closely mirrors the original layout — ready for editing in Microsoft Word, LibreOffice, or Google Docs without any manual reformatting.
          </p>
          <p>
            Unlike many online converters that compress quality or require an email address, our tool is straightforward: upload your PDF, click convert, and download your Word file. No registration, no limits, no watermarks — just clean, accurate conversion in seconds.
          </p>
          <p>
            Our PDF to Word converter is optimized for a wide range of document types including business reports, academic papers, legal contracts, invoices, and articles. Text-based PDFs — the most common type — convert with very high accuracy. Scanned image-based PDFs can also be processed, though conversion quality depends on the clarity of the original scan.
          </p>
          <p>
            Security is built into every step. Your files are processed in-memory and are never saved to disk or shared with anyone. The moment your conversion is complete, the original file is discarded. Your documents — and the information they contain — stay private and under your control.
          </p>

          <h2>How to Convert PDF to Word</h2>
        </section>

        {/* Steps */}
        <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="sr-only">How to Use</h2>
          {[
            { step: "1", title: "Upload PDF", description: "Drag and drop your PDF file into the upload area or click to browse your files." },
            { step: "2", title: "Convert", description: "Click \"Convert to Word\" and our tool will process your file immediately." },
            { step: "3", title: "Download", description: "Download your converted .docx file — ready to open and edit in any Word processor." },
          ].map((s) => (
            <div key={s.step} className="p-5 rounded-xl border border-border bg-card text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-3">{s.step}</div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
            </div>
          ))}
        </section>

        {/* Benefits */}
        <section className="mt-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl font-bold text-foreground mb-6">Why Use Our PDF to Word Converter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{b.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{b.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2" data-testid="faq-accordion">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <RelatedTools currentPath="/pdf-to-word" />
      </main>
    </>
  );
}
