import { ToolUploader } from "@/components/ToolUploader";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { RelatedTools } from "@/components/RelatedTools";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Image, Layers, Monitor, ShieldCheck, Zap } from "lucide-react";

const faqs = [
  {
    question: "What image formats can I convert to PDF?",
    answer: "We support JPG, JPEG, PNG, BMP, GIF, TIFF, and WebP image formats. You can upload multiple images and they will all be included in the resulting PDF.",
  },
  {
    question: "Can I convert multiple images into a single PDF?",
    answer: "Yes. Upload multiple image files and our tool will combine them into a single multi-page PDF — one page per image, in the order you uploaded them.",
  },
  {
    question: "Will the image quality be preserved in the PDF?",
    answer: "Yes. We preserve the original image quality during conversion. Your images will appear in the PDF at the same resolution as the originals.",
  },
  {
    question: "What page size will the PDF be?",
    answer: "By default, the PDF page is sized to fit the image dimensions. You can also choose standard page sizes like A4 or Letter, and the images will be scaled to fit within those dimensions.",
  },
  {
    question: "Can I convert screenshots and phone photos to PDF?",
    answer: "Absolutely. Any image file from any device — including screenshots, mobile photos, and scanned images — can be converted to PDF using our tool.",
  },
];

const benefits = [
  { icon: Image, title: "Multiple Image Formats", description: "Convert JPG, PNG, BMP, TIFF, WebP, and more to PDF." },
  { icon: Layers, title: "Multi-Image PDF", description: "Combine multiple images into a single multi-page PDF document." },
  { icon: Monitor, title: "Works on Any Device", description: "Convert images to PDF on desktop, tablet, or mobile browser." },
  { icon: ShieldCheck, title: "Secure & Private", description: "Your images are processed securely and deleted immediately after conversion." },
];

export default function ImageToPdfPage() {
  return (
    <>
      <SEOHead
        title="Image to PDF Converter Online Free | Smart PDF Tools"
        description="Convert JPG, PNG, and other images to PDF online for free. Create professional PDF documents from your images instantly."
        canonicalPath="/image-to-pdf"
        faqSchema={faqs}
        breadcrumbs={[{ name: "Image to PDF", path: "/image-to-pdf" }]}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BreadcrumbNav items={[{ label: "Image to PDF" }]} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">Image to PDF Converter</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Convert JPG, PNG, and other image formats to PDF online — free, fast, and with zero quality loss.
        </p>

        <ToolUploader
          acceptedTypes=".jpg,.jpeg,.png,.bmp,.gif,.tiff,.webp"
          acceptLabel="JPG, PNG, BMP, TIFF, WebP"
          actionLabel="Convert to PDF"
          toolName="Image to PDF"
          outputFormat=".pdf"
        />

        <section className="mt-16 prose prose-slate dark:prose-invert max-w-none">
          <h2>Convert Images to PDF Online for Free</h2>
          <p>
            Converting images to PDF is one of the most frequent document tasks for both personal and professional use. Whether you're creating a photo album, submitting scanned documents, compiling product images for a catalog, or turning screenshots into a presentable document, our free Image to PDF converter does it instantly.
          </p>
          <p>
            Our tool supports all major image formats including JPG, PNG, BMP, TIFF, and WebP. You can upload a single image or multiple images at once — each image becomes a page in the resulting PDF, in the order you uploaded them. This makes it easy to create multi-page PDF documents from a series of photos or scans without any desktop software.
          </p>
          <p>
            The conversion preserves the original image resolution and color fidelity. No compression artifacts are introduced during the process. The resulting PDF is clean, professional, and suitable for printing, sharing via email, or uploading to document management systems.
          </p>
          <p>
            This tool is particularly popular with photographers building digital portfolios, students scanning handwritten notes, professionals submitting signed forms, and anyone who needs to package images into a universally compatible document format. Since PDF files are supported by every modern operating system and device, converting your images to PDF ensures maximum compatibility with recipients.
          </p>
          <h2>How to Convert Images to PDF</h2>
        </section>

        <section className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Upload Images", description: "Upload one or more images — JPG, PNG, WebP, TIFF, and more are all supported." },
            { step: "2", title: "Convert", description: "Click \"Convert to PDF\" and all your images will be combined into a single PDF." },
            { step: "3", title: "Download PDF", description: "Download your ready-to-use PDF document with all images included." },
          ].map((s) => (
            <div key={s.step} className="p-5 rounded-xl border border-border bg-card text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-3">{s.step}</div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-12" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl font-bold text-foreground mb-6">Benefits of Our Image to PDF Tool</h2>
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

        <RelatedTools currentPath="/image-to-pdf" />
      </main>
    </>
  );
}
