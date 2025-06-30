import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="prose prose-lg max-w-none"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-dark mb-4">Privacy Policy</h1>
            <p className="text-neutral text-lg">Effective Date: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Who We Are</h2>
            <p className="text-neutral-dark mb-4">
              Zorlex AI is a sole-proprietor consultancy that helps other businesses automate workflows with artificial-intelligence tools. Our website is located at zorlexai.com.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Scope of This Policy</h2>
            <p className="text-neutral-dark mb-4">
              This Privacy Policy explains how we collect, use, store, and disclose the personal information you provide through our web contact form or by emailing us directly.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">3. Information We Collect</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-neutral-light mb-4">
                <thead>
                  <tr className="bg-primary-light/20">
                    <th className="border border-neutral-light p-3 text-left font-semibold">Category</th>
                    <th className="border border-neutral-light p-3 text-left font-semibold">What we collect</th>
                    <th className="border border-neutral-light p-3 text-left font-semibold">Source</th>
                    <th className="border border-neutral-light p-3 text-left font-semibold">Why we collect it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-light p-3">Contact data</td>
                    <td className="border border-neutral-light p-3">Name, email address, company (if supplied)</td>
                    <td className="border border-neutral-light p-3">You, via the website contact form or direct email</td>
                    <td className="border border-neutral-light p-3">To respond to inquiries, provide proposals, and deliver our services</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-light p-3">Optional message content</td>
                    <td className="border border-neutral-light p-3">Any information you include in the message field</td>
                    <td className="border border-neutral-light p-3">You</td>
                    <td className="border border-neutral-light p-3">Same as above</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-neutral-dark">
              No cookies or other tracking technologies are set by us. Server logs generated automatically by our hosting provider may capture standard technical data (e.g., IP address, browser type) for security and troubleshooting.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-neutral-dark space-y-2">
              <li>Respond to your inquiry and provide the information or services you request.</li>
              <li>Maintain our internal CRM spreadsheet so we can follow up and track conversations.</li>
              <li>Comply with legal obligations (e.g., record-keeping or responding to lawful requests).</li>
            </ul>
            <p className="text-neutral-dark mt-4">
              We do not sell, rent, or share your personal information with third parties for their marketing purposes. If we ever rely on third-party processors (e.g., our email host or cloud-storage provider), they will be bound by contractual confidentiality and security obligations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Legal Bases for Processing (GDPR)</h2>
            <p className="text-neutral-dark mb-4">
              If you are in the European Economic Area, our processing of your personal data is lawful because it is:
            </p>
            <ul className="list-disc pl-6 text-neutral-dark space-y-2">
              <li><strong>Consent-based</strong> — you voluntarily submit the form;</li>
              <li><strong>Necessary for our legitimate interests</strong> — namely, running a small consulting business and answering prospective-client questions;</li>
              <li><strong>Necessary to comply with legal obligations</strong>, where applicable.</li>
            </ul>
            <p className="text-sm text-neutral mt-4">
              <a href="https://ico.org.uk" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Your Privacy Rights</h2>
            <p className="text-neutral-dark mb-4">
              Depending on where you live, you may have some or all of the rights below:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-neutral-light mb-4">
                <thead>
                  <tr className="bg-primary-light/20">
                    <th className="border border-neutral-light p-3 text-left font-semibold">Region</th>
                    <th className="border border-neutral-light p-3 text-left font-semibold">Key rights</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-light p-3">California (CCPA/CPRA)</td>
                    <td className="border border-neutral-light p-3">Access, delete, correct, know categories of information, and opt-out of "sale" or "sharing." Because we operate solely online, you may exercise these rights by emailing us at privacy@zorlexai.com.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-light p-3">Colorado (CPA)</td>
                    <td className="border border-neutral-light p-3">Access, delete, correct, and opt-out of processing for targeted advertising or sale; beginning 1 July 2024 consumers can use a universal opt-out mechanism such as Global Privacy Control.</td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-light p-3">EU/EEA & UK (GDPR/UK GDPR)</td>
                    <td className="border border-neutral-light p-3">Access, rectify, erase, restrict processing, data portability, and object to processing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-primary-light/10 p-4 rounded-md">
              <h4 className="font-semibold text-primary-dark mb-2">How to make a request:</h4>
              <p className="text-neutral-dark">
                Email privacy@zorlexai.com with the subject line "Privacy Request." We will verify your identity and respond within the timeframe required by applicable law.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Data Retention</h2>
            <p className="text-neutral-dark">
              We retain contact information only as long as needed to (a) respond to your inquiry, (b) maintain ongoing business relations, or (c) comply with legal and accounting obligations. If you request deletion and no longer have an active engagement with us, we will remove your data from our records within 30 days.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Data Security</h2>
            <ul className="list-disc pl-6 text-neutral-dark space-y-2">
              <li>Spreadsheets are stored in an encrypted cloud drive protected by MFA.</li>
              <li>Email accounts use TLS in transit and MFA for access.</li>
              <li>We limit access to personal information to the sole proprietor and trusted sub-processors who need it to perform their tasks.</li>
            </ul>
            <p className="text-neutral-dark mt-4">
              Despite these safeguards, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Children's Privacy</h2>
            <p className="text-neutral-dark">
              Our website and services are directed at business users and are not intended for children under 16. We do not knowingly collect information from minors. If you believe a minor has provided us personal data, please contact us for prompt deletion.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">10. International Transfers</h2>
            <p className="text-neutral-dark">
              If you reside outside the United States, your information will be processed in the U.S., where laws may differ from those in your jurisdiction. By submitting information, you consent to that transfer.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">11. Changes to This Policy</h2>
            <p className="text-neutral-dark">
              We may update this Privacy Policy from time to time. When we do, we will revise the "Effective date" above and post the updated version on this page. Material changes will be highlighted or otherwise brought to your attention.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">12. Contact Us</h2>
            <p className="text-neutral-dark mb-4">
              For any questions about this Privacy Policy or our privacy practices, please email privacy@zorlexai.com or write to:
            </p>
            <div className="bg-neutral-light/20 p-4 rounded-md">
              <p className="text-neutral-dark">
                <strong>Zorlex AI</strong><br />
                Attn: Privacy<br />
                Lakewood, CO 80232 USA
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;