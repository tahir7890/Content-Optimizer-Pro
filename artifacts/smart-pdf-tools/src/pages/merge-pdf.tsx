import { ToolUploader } from "@/components/ToolUploader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedTools } from "@/components/RelatedTools";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Merge, Layers, SortAsc, ShieldCheck, Zap } from "lucide-react";

const faqs = [
  {
    question: "How many PDF files can I merge at once?",
    answer: "You can merge up to 20 PDF files in a single operation. Simply upload all the files you want to combine and arrange them in the desired order before merging.",
  },
  {
    question: "Will the original PDF quality be preserved after merging?",
    answer: "Yes. Our merge tool combines PDFs without re-encoding or compressing the content. The output file maintains the same quality as the individual input files.",
  },
  {
    question: "Can I rearrange the pages before merging?",
    answer: "Yes. Before clicking Merge, you can reorder the uploaded files to control the page order in the final merged document.",
  },
  {
    question: "Is there a size limit for the PDF files I can merge?",
    answer: "Each individual PDF file should be under 100MB, and the total size of all files combined should not exceed 200MB for best performance.",
  },
  {
    question: "Does merging PDFs require any personal information?",
    answer: "No. You can merge PDFs without creating an account or providing any personal information. The tool is completely anonymous and free to use.",
  },
];

const benefits = [
  { icon: Merge, title: "Combine Multiple Files", description: "Merge 2 to 20 PDF files into a single, organized document." },
  { icon: Layers, title: "Preserve All Content", description: "Every page, image, and annotation is preserved in the merged file." },
  { icon: SortAsc, title: "Control Page Order", description: "Arrange your PDF files in any order before merging." },
  { icon: ShieldCheck, title: "Privacy Guaranteed", description: "Files are deleted immediately after processing — zero data retention." },
];

export default function MergePdfPage() {
  return (
    <>
      <SEOHead
        title="Merge PDF Files Online Free | Smart PDF Tools"
        description="Combine multiple PDF files into one document online for free. Easy drag-and-drop PDF merger — no registration required."
        canonicalPath="/merge-pdf"
        faqSchema={faqs}
        breadcrumbs={[{ name: "Merge PDF", path: "/merge-pdf" }]}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BreadcrumbNav items={[{ label: "Merge PDF" }]} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Merge PDF Files</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Combine multiple PDF files into a single document online — free, fast, and with no quality loss.
        </p>

        <ToolUploader
          acceptedTypes=".pdf"
          acceptLabel="PDF files (up to 20 files)"
          actionLabel="Merge PDFs"
          toolName="Merge PDF"
          outputFormat="Merged PDF"
        />

        <section className="mt-16 prose prose-slate dark:prose-invert max-w-none">
          <h2>Merge PDF Files Online — Free & Easy</h2>
          <p>
            Merging PDFs is a common necessity in professional and academic settings. Whether you're combining chapters of a report, assembling a portfolio, consolidating invoices, or creating a single presentation from multiple sources, our free online PDF merger handles the job quickly and cleanly.
          </p>
          <p>
            The process couldn't be simpler: upload the PDF files you want to combine, arrange them in the correct order, and click merge. In seconds, you'll have a single, seamlessly combined PDF ready to download — with all pages, images, bookmarks, and formatting intact.
          </p>
          <p>
            Our merger is particularly useful for business professionals who receive multiple PDF attachments and need to consolidate them into one shareable file, students compiling research materials, and legal teams assembling multi-document case files. The tool supports any standard PDF file, regardless of where it was created.
          </p>
          <p>
            Unlike desktop software, our online merger requires no installation, no license, and no learning curve. Open the page, upload your files, merge, and download. The entire workflow takes less than a minute, even for large multi-file documents.
          </p>
          <h2>How to Merge PDF Files</h2>
        </section>

        <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Upload PDFs", description: "Upload all the PDF files you want to combine. Reorder them as needed." },
            { step: "2", title: "Merge Files", description: "Click \"Merge PDFs\" and the tool will combine all files into one document." },
            { step: "3", title: "Download", description: "Download your merged PDF — a single, clean file with all pages combined." },
          ].map((s) => (
            <div key={s.step} className="p-5 rounded-xl border border-border bg-card text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-3">{s.step}</div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl font-bold text-foreground mb-6">Benefits of Our PDF Merger</h2>
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

        <RelatedTools currentPath="/merge-pdf" />
      </main>
    </>
  );
}
