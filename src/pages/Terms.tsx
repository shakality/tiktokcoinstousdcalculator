import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Helmet>
        <title>TikTok.Lab // Terms_Of_Service</title>
        <meta name="description" content="Operational guidelines and terms of service for the TikTok.Lab environment." />
      </Helmet>

      <div className="bg-white p-10 md:p-16 razor-card border border-ink/10 prose prose-neutral max-w-none font-mono text-sm text-ink/60">
        <h1 className="text-4xl font-extrabold text-ink mb-8 tracking-tighter uppercase italic">Terms_Of_Service</h1>
        <p className="text-[10px] text-ink/40 mb-12 uppercase tracking-widest italic">Last_Sync: February 24, 2026</p>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 01_Acceptance</h2>
          <p>
            By accessing TikTok.Lab, you agree to be bound by these terms. System usage is subject to all posted guidelines.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 02_Service_Description</h2>
          <p>
            TikTok.Lab provides a precision calculator tool for virtual asset estimation. Service is provided "AS IS" for informational purposes.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 03_Affiliation_Disclaimer</h2>
          <p>
            TikTok.Lab is an independent environment and is not affiliated with TikTok, ByteDance, or any subsidiaries.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 04_Intellectual_Property</h2>
          <p>
            All content and functionality are the property of TikTok.Lab and are protected by international law.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 05_Liability_Limit</h2>
          <p>
            In no event shall TikTok.Lab be liable for damages arising out of the use or inability to use the materials provided.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
