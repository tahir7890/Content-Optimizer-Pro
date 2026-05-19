import { SEOHead } from "@/components/SEOHead";

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Smart PDF Tools"
        description="Review the terms and conditions for using Smart PDF Tools. Understand your rights and responsibilities when using our free PDF services."
        canonicalPath="/terms"
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-foreground mb-3">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            These Terms and Conditions ("Terms") govern your use of the Smart PDF Tools website and services ("Service") operated by Smart PDF Tools ("we," "us," or "our"). Please read these Terms carefully before using our Service.
          </p>
          <p>
            By accessing or using Smart PDF Tools, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
          </p>

          <h2>1. Use of Service</h2>
          <p>
            Smart PDF Tools provides free online PDF conversion and processing utilities. You may use our Service for personal, educational, and commercial purposes, subject to the restrictions set forth in these Terms.
          </p>
          <p>You agree not to use our Service to:</p>
          <ul>
            <li>Upload, process, or distribute content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Attempt to gain unauthorized access to our systems or disrupt our services</li>
            <li>Use automated tools, bots, or scrapers to access our Service in bulk without prior written consent</li>
            <li>Upload malicious files, viruses, or any software designed to damage or interfere with computer systems</li>
          </ul>

          <h2>2. Intellectual Property</h2>
          <p>
            You retain full ownership of any files you upload to Smart PDF Tools. By uploading files, you grant us a temporary, limited license to process those files solely for the purpose of providing the requested conversion service. This license is non-exclusive, royalty-free, and terminates immediately upon completion of the conversion.
          </p>
          <p>
            The Smart PDF Tools website, its design, code, logos, and content (excluding user-uploaded files) are the intellectual property of Smart PDF Tools and are protected by applicable copyright and intellectual property laws.
          </p>

          <h2>3. File Processing and Storage</h2>
          <p>
            Files you upload to Smart PDF Tools are processed in-memory and are not stored on our servers beyond the duration required to complete your conversion. We do not retain copies of your uploaded files or converted outputs after you download the result. You are responsible for saving your converted files promptly.
          </p>

          <h2>4. Service Availability</h2>
          <p>
            We strive to maintain consistent service availability but cannot guarantee uninterrupted access. Smart PDF Tools may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Smart PDF Tools is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the Service will be error-free, uninterrupted, or that conversion results will meet your specific requirements. You use the Service at your own risk.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Smart PDF Tools shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, profits, or business opportunities arising from your use of or inability to use the Service.
          </p>

          <h2>7. Acceptable Use Policy</h2>
          <p>
            You are solely responsible for the files you upload and process through our Service. You represent and warrant that you have the legal right to upload, process, and convert any files submitted to our Service, and that doing so does not violate any applicable law or third-party rights.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of Smart PDF Tools is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after changes are posted constitutes your acceptance of the revised Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration or the courts of competent jurisdiction.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at legal@smartpdftools.com.
          </p>
        </div>
      </main>
    </>
  );
}
