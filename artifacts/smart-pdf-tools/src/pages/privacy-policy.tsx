import { SEOHead } from "@/components/SEOHead";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Smart PDF Tools"
        description="Read Smart PDF Tools' privacy policy. We are committed to protecting your data and privacy when you use our free PDF tools."
        canonicalPath="/privacy-policy"
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-foreground mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            At Smart PDF Tools ("we," "our," or "us"), your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services located at smartpdftools.com.
          </p>
          <p>
            By using Smart PDF Tools, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Files You Upload</h3>
          <p>
            When you use our PDF conversion tools, you upload files to our service. These files are processed entirely in-memory and are permanently deleted immediately after your conversion is complete. We do not store, read, retain, or analyze the content of any files you upload. Your documents are never written to persistent storage.
          </p>
          <h3>Usage Data</h3>
          <p>
            We collect anonymized usage data to improve our service. This may include the type of tool used, general geographic region (country-level only), browser type, and device type. This data is aggregated and cannot be used to identify individual users.
          </p>
          <h3>Contact Form Submissions</h3>
          <p>
            If you contact us through our contact form, we collect your name, email address, and message content solely for the purpose of responding to your inquiry. We do not use this information for marketing purposes.
          </p>

          <h2>2. Cookies and Tracking</h2>
          <p>
            We use essential cookies to maintain basic website functionality, including theme preferences (dark/light mode). We may also use third-party analytics services (such as Google Analytics) that use cookies to collect anonymized data about site usage. You can disable cookies in your browser settings at any time.
          </p>
          <p>
            We do not use tracking cookies for advertising purposes, and we do not sell user data to third parties under any circumstances.
          </p>

          <h2>3. Google AdSense</h2>
          <p>
            Smart PDF Tools may display advertisements served by Google AdSense. Google may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings. For more information, please review Google's Privacy Policy.
          </p>

          <h2>4. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve our PDF conversion tools</li>
            <li>Respond to support inquiries submitted via our contact form</li>
            <li>Analyze aggregate usage trends to improve the user experience</li>
            <li>Ensure the security and integrity of our services</li>
            <li>Comply with legal obligations where applicable</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information. All data transmitted between your browser and our servers is encrypted using SSL/TLS. Files are processed in isolated, temporary environments and deleted immediately after processing. We do not maintain databases of user-uploaded content.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            Our service may use third-party services including content delivery networks (CDNs), analytics providers, and advertising networks. These services have their own privacy policies, and we encourage you to review them. We do not share personally identifiable information with these third parties beyond what is necessary for service operation.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Smart PDF Tools is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete data we hold about you. Since we do not store user files or personally identifiable information (beyond contact form submissions), most requests can be fulfilled immediately. To exercise your rights, contact us at privacy@smartpdftools.com.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:<br />
            Email: privacy@smartpdftools.com
          </p>
        </div>
      </main>
    </>
  );
}
