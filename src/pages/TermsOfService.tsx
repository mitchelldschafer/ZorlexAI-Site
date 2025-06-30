import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
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
            <h1 className="text-4xl font-bold text-primary-dark mb-4">Terms of Service</h1>
            <p className="text-neutral text-lg">Effective Date: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">1. Agreement to Terms</h2>
            <p className="text-neutral-dark mb-4">
              By accessing zorlexai.com (the "Site") or engaging our bespoke AI-automation consulting services ("Services"), you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree, do not use the Site or request Services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">2. Who We Are</h2>
            <p className="text-neutral-dark mb-4">
              Zorlex AI ("we," "our," or "us") is a sole-proprietor consultancy based in Lakewood, Colorado, USA. We design and implement custom AI and workflow-automation solutions for businesses.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">3. Services Overview</h2>
            <p className="text-neutral-dark mb-4">Our engagements are strictly white-glove and proposal-based:</p>
            <ol className="list-decimal pl-6 text-neutral-dark space-y-2">
              <li>You submit a lead form or email inquiry.</li>
              <li>We schedule discovery and draft a custom proposal ("Proposal") detailing scope, deliverables, timeline, and fees.</li>
              <li>The Proposal becomes a binding Statement of Work (SOW) once you sign or otherwise formally accept it (collectively the "Accepted Proposal").</li>
              <li>All work and payments are governed by that Accepted Proposal in addition to these Terms.</li>
            </ol>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">4. Proposals, Fees & Payment</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Quotes & Validity</h4>
                <p className="text-neutral-dark">Proposals are valid for 30 days unless stated otherwise.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Invoicing</h4>
                <p className="text-neutral-dark">We invoice according to the schedule in the Accepted Proposal (e.g., fixed price, milestone, or hourly).</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Due Dates</h4>
                <p className="text-neutral-dark">Invoices are due Net 15 days from issuance unless the Accepted Proposal says otherwise.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Late Payments</h4>
                <p className="text-neutral-dark">Overdue amounts accrue interest at 1.5% per month (or the maximum lawful rate) and may suspend work.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Expenses</h4>
                <p className="text-neutral-dark">Pre-approved, out-of-pocket expenses (e.g., travel, software licenses) will be billed at cost. Receipts provided on request.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">5. Client Responsibilities</h2>
            <ul className="list-disc pl-6 text-neutral-dark space-y-2">
              <li>Provide timely access to data, systems, personnel, and any third-party tools needed for the engagement.</li>
              <li>Ensure you hold all necessary rights to any materials you supply.</li>
              <li>Review deliverables promptly and give feedback within 5 business days unless the Accepted Proposal states otherwise.</li>
              <li>Use deliverables only for lawful business purposes.</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">6. Intellectual Property (IP)</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Pre-existing IP</h4>
                <p className="text-neutral-dark">Each party retains ownership of IP it owned before the engagement.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Deliverables</h4>
                <p className="text-neutral-dark">Upon full payment, you receive a perpetual, worldwide, non-transferable license to use the final deliverables for your internal business purposes.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Background Tools & Know-how</h4>
                <p className="text-neutral-dark">We retain all rights to our methodologies, templates, and generic code, even if embedded in deliverables. We may reuse and modify them for other clients.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">7. Confidentiality</h2>
            <p className="text-neutral-dark">
              Both parties agree to keep each other's non-public information confidential and to use it only for the engagement, except where disclosure is required by law or is already public.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">8. Warranty & Disclaimers</h2>
            <div className="space-y-4">
              <p className="text-neutral-dark">
                We warrant that Services will be performed in a professional and workmanlike manner.
              </p>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">No Other Warranties</h4>
                <p className="text-neutral-dark">Except as expressly stated, the Services and Site are provided "as is." We disclaim all implied warranties, including fitness for a particular purpose and non-infringement.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">No Legal or Financial Advice</h4>
                <p className="text-neutral-dark">Our deliverables may include automated insights or recommendations, but they are not a substitute for professional legal, financial, or compliance advice.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">9. Limitation of Liability</h2>
            <p className="text-neutral-dark">
              To the fullest extent permitted by law, our total liability for any claim arising out of or relating to the Site, Services, or these Terms is limited to the total fees you paid us in the 12 months preceding the claim. We are not liable for any indirect, incidental, consequential, punitive, or special damages (including lost profits).
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">10. Indemnification</h2>
            <p className="text-neutral-dark">
              You agree to indemnify and hold us harmless from any third-party claims arising out of (a) materials you provide, (b) your misuse of deliverables, or (c) your breach of these Terms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">11. Governing Law & Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Governing Law</h4>
                <p className="text-neutral-dark">These Terms are governed by the laws of the State of Colorado, USA, without regard to conflict-of-laws principles.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Informal Resolution</h4>
                <p className="text-neutral-dark">Before filing a claim, the parties will attempt in good faith to resolve disputes via negotiation within 30 days.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-dark mb-2">Arbitration</h4>
                <p className="text-neutral-dark">If unresolved, the dispute shall be finally settled by confidential, binding arbitration in Denver, Colorado, under the rules of the American Arbitration Association. Either party may seek equitable relief in a court of competent jurisdiction to protect IP or confidential information.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">12. Force Majeure</h2>
            <p className="text-neutral-dark">
              Neither party is liable for delays or failures caused by events beyond its reasonable control (e.g., natural disasters, acts of government, internet outages).
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">13. Changes to These Terms</h2>
            <p className="text-neutral-dark">
              We may update these Terms from time to time. Material changes will be posted on the Site with a new "Effective Date." Continued use of the Site or Services after changes constitutes acceptance of the revised Terms. Accepted Proposals are governed by the version in effect on their acceptance date unless both parties agree otherwise.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">14. Severability & Waiver</h2>
            <p className="text-neutral-dark">
              If any provision of these Terms is deemed unenforceable, the remaining provisions will remain in effect. Our failure to enforce any right is not a waiver of that right.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">15. Entire Agreement</h2>
            <p className="text-neutral-dark">
              These Terms, together with any Accepted Proposal, constitute the entire agreement between you and us regarding the Services and supersede all prior agreements, understandings, or representations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">16. Contact</h2>
            <div className="bg-neutral-light/20 p-4 rounded-md">
              <p className="text-neutral-dark">
                <strong>Zorlex AI</strong><br />
                Attn: Legal/Terms of Service<br />
                Lakewood, CO 80232 USA<br />
                Email: <a href="mailto:legal@zorlexai.com" className="text-secondary hover:underline">legal@zorlexai.com</a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;