import { ToolUploader } from "@/components/ToolUploader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedTools } from "@/components/RelatedTools";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FileDown, Zap, ShieldCheck, Monitor } from "lucide-react";

const faqs = [
  {
    question: "What Word file formats can I convert to PDF?",
    answer: "Our tool supports .doc, .docx, and .odt formats. Most Microsoft Word documents created in any version of Word from 2003 onwards are supported.",
  },
  {
    question: "Will my Word formatting be preserved in the PDF?",
    answer: "Yes. Our converter preserves fonts, headings, images, tables, lists, and page layout. The PDF output closely mirrors what you see in your Word document.",
  },
  {
    question: "Can I convert Word to PDF on mobile?",
    answer: "Absolutely. Smart PDF Tools works on all devices including smartphones and tablets. Open the page in any modern mobile browser and convert your files on the go.",
  },
  {
    question: "Is there a file size limit for Word to PDF conversion?",
    answer: "For free users, the recommended maximum file size is 50MB. Files larger than this may take longer to process. Very large documents with many images may take a few extra seconds.",
  },
  {
    question: "Will the PDF be editable after conversion?",
    answer: "The PDF will retain its content and layout, but will be a standard PDF — not a fillable form unless your Word document contained form fields. If you need editable PDFs, consider using PDF form tools.",
  },
];

const benefits = [
  { icon: FileDown, title: "Universal Compatibility", description: "PDF files open on any device, operating system, and browser without formatting issues." },
  { icon: Zap, title: "Fast Processing", description: "Your Word document is converted to PDF in seconds — no waiting, no delays." },
  { icon: ShieldCheck, title: "Secure Conversion", description: "Files are processed securely and deleted immediately after download." },
  { icon: Monitor, title: "No Software Needed", description: "Convert directly in your browser — no Microsoft Word or Adobe Acrobat required." },
];

export default function WordToPdfPage() {
  return (
    <>
      <SEOHead
        title="Word to PDF Converter – Free Online | Smart PDF Tools"
        description="Convert Word documents to PDF online for free. Create professional, high-quality PDFs from DOC and DOCX files instantly."
        canonicalPath="/word-to-pdf"
        faqSchema={faqs}
        breadcrumbs={[{ name: "Word to PDF", path: "/word-to-pdf" }]}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BreadcrumbNav items={[{ label: "Word to PDF" }]} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Word to PDF Converter</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert Word documents to professional PDF files online — free, fast, and with perfect formatting.
        </p>

        <ToolUploader
          acceptedTypes=".doc,.docx,.odt"
          acceptLabel="DOC, DOCX, ODT files"
          actionLabel="Convert to PDF"
          toolName="Word to PDF"
          outputFormat=".pdf"
        />

        <section className="mt-16 prose prose-slate dark:prose-invert max-w-none">
          <h2>Convert Word to PDF Online for Free</h2>
          <p>
            Microsoft Word documents are great for editing and collaboration, but when it comes to sharing finished work, PDF is the gold standard. PDFs preserve your formatting exactly — fonts, images, layouts, and spacing look identical regardless of the device or software the recipient uses.
          </p>
          <p>
            Our free Word to PDF converter makes it easy to turn any .doc or .docx file into a professional-grade PDF in just seconds. Upload your Word document, click convert, and download a pixel-perfect PDF that's ready to email, print, or publish.
          </p>
          <p>
            This tool is particularly useful for students submitting assignments, professionals sharing reports and proposals, and anyone who needs a reliably formatted document. Unlike printing to PDF through Word (which requires having Word installed), our online tool works on any device, including Chromebooks, Linux machines, and mobile devices where Microsoft Office isn't available.
          </p>
          <p>
            The conversion engine handles complex formatting including multi-column layouts, embedded images, tables, headers and footers, footnotes, and custom fonts. The resulting PDF is optimized for both screen viewing and printing.
          </p>
          <h2>How to Convert Word to PDF</h2>
        </section>

        <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Upload Word File", description: "Select or drag your .doc or .docx file into the upload zone above." },
            { step: "2", title: "Convert to PDF", description: "Click the convert button and your file will be processed in seconds." },
            { step: "3", title: "Download PDF", description: "Download your high-quality PDF file, ready to share or print." },
          ].map((s) => (
            <div key={s.step} className="p-5 rounded-xl border border-border bg-card text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-3">{s.step}</div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl font-bold text-foreground mb-6">Benefits of Converting Word to PDF</h2>
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

        <RelatedTools currentPath="/word-to-pdf" />
      </main>
    </>
  );
}
