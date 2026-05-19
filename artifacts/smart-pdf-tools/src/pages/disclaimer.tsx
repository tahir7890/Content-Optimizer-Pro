import { SEOHead } from "@/components/SEOHead";

export default function DisclaimerPage() {
  return (
    <>
      <SEOHead
        title="Disclaimer | Smart PDF Tools"
        description="Important disclaimers about Smart PDF Tools. Understand the limitations and proper use of our free online PDF conversion services."
        canonicalPath="/disclaimer"
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-foreground mb-3">Disclaimer</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            The information and tools provided by Smart PDF Tools are offered in good faith for general informational and utility purposes. By using this website, you acknowledge and agree to the following disclaimers.
          </p>

          <h2>1. No Warranties</h2>
          <p>
            Smart PDF Tools makes no representations or warranties of any kind, express or implied, regarding the operation of the website, the accuracy of conversion outputs, or the suitability of the Service for any particular purpose. All tools are provided on an "as is" basis without warranty of any kind.
          </p>
          <p>
            We do not guarantee that:
          </p>
          <ul>
            <li>Conversion results will be error-free or meet your specific formatting requirements</li>
            <li>The Service will be available at all times without interruption</li>
            <li>The output files will be compatible with all software applications</li>
            <li>File sizes will be reduced by a specific amount during compression</li>
          </ul>

          <h2>2. User Responsibility</h2>
          <p>
            You are solely responsible for the files you upload and process through Smart PDF Tools. Before uploading any document, ensure that you have the legal right to do so. Do not upload confidential, sensitive, or proprietary documents through our Service if you are uncertain about the security implications.
          </p>
          <p>
            Always verify the accuracy and completeness of converted files before using them for official, legal, medical, financial, or any other important purposes. Smart PDF Tools is not liable for errors or omissions in conversion outputs.
          </p>

          <h2>3. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. These links are provided for convenience only. Smart PDF Tools does not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
          </p>

          <h2>4. Advertising</h2>
          <p>
            Smart PDF Tools may display advertisements from Google AdSense and other advertising networks. The display of advertisements does not constitute endorsement of any product, service, or company advertised. We are not responsible for the content of advertisements or any products or services they promote.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall Smart PDF Tools, its operators, or affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of, or inability to use, the Service. This includes, but is not limited to, loss of data, business interruption, or loss of profits.
          </p>

          <h2>6. Changes to Disclaimer</h2>
          <p>
            Smart PDF Tools reserves the right to modify this Disclaimer at any time. Changes will be effective immediately upon posting on this page. Continued use of the Service after changes are made constitutes your acceptance of the updated Disclaimer.
          </p>

          <h2>7. Contact</h2>
          <p>
            If you have questions about this Disclaimer, please contact us at legal@smartpdftools.com.
          </p>
        </div>
      </main>
    </>
  );
}
