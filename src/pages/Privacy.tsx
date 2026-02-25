import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Helmet>
        <title>TikTok Coins // Privacy_Protocol</title>
        <meta name="description" content="Data handling and privacy protocols for the TikTok Coins environment." />
      </Helmet>

      <div className="bg-white p-10 md:p-16 razor-card border border-ink/10 prose prose-neutral max-w-none font-mono text-sm text-ink/60">
        <h1 className="text-4xl font-extrabold text-ink mb-8 tracking-tighter uppercase italic">Privacy_Protocol</h1>
        <p className="text-[10px] text-ink/40 mb-12 uppercase tracking-widest italic">Last_Sync: February 24, 2026</p>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 01_Introduction</h2>
          <p>
            Welcome to TikTok Coins. We respect your privacy and are committed to protecting your personal data. This protocol will inform you as to how we look after your data when you visit our environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 02_Data_Collection</h2>
          <p>
            We do not require users to create an account or provide personal information. However, we may collect non-personal data such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser_Type_Version</li>
            <li>Operating_System</li>
            <li>IP_Address [Anonymized]</li>
            <li>Session_Duration</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 03_Cookies_Protocol</h2>
          <p>
            We use essential cookies to maintain system stability. Third-party vendors may use cookies to serve ads based on prior visits. Users may opt out of personalized advertising via external settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 04_Security_Measures</h2>
          <p>
            We have put in place appropriate security measures to prevent your data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-bold uppercase tracking-widest text-xs mb-4">// 05_Contact</h2>
          <p>
            For inquiries regarding this protocol, transmit a message to support@tiktok-calc.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
