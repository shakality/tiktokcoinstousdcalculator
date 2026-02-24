import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Helmet>
        <title>TikTok.Lab // Support_Channel</title>
        <meta name="description" content="Direct communication channel for TikTok.Lab support and inquiries." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-ink/5 border border-ink/10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-5 p-12 bg-white border-r border-ink/10"
        >
          <h1 className="text-5xl font-extrabold text-ink mb-8 tracking-tighter uppercase italic">Contact_Hub</h1>
          <p className="font-mono text-sm text-ink/50 mb-16 leading-relaxed">
            [01] Suggest features<br/>
            [02] Report anomalies<br/>
            [03] General ping
          </p>

          <div className="space-y-12">
            <div className="flex items-start gap-6 group">
              <div className="bg-ink p-4 rounded-sm text-neon group-hover:bg-neon group-hover:text-ink transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="label-micro mb-2">Email_Address</h3>
                <p className="font-mono text-xs font-bold">support@tiktok-calc.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="bg-ink p-4 rounded-sm text-neon group-hover:bg-neon group-hover:text-ink transition-all duration-300">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="label-micro mb-2">Live_Comms</h3>
                <p className="font-mono text-xs font-bold">MON-FRI // 09:00-17:00 EST</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-7 p-12 bg-ghost"
        >
          <div className="bg-white p-10 razor-card border border-ink/10">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label htmlFor="name" className="label-micro mb-4 block">User_Identity</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-ghost border-b border-ink/20 py-4 px-0 focus:outline-none focus:border-neon transition-all font-mono text-sm"
                    placeholder="NAME_HERE"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="label-micro mb-4 block">Return_Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-ghost border-b border-ink/20 py-4 px-0 focus:outline-none focus:border-neon transition-all font-mono text-sm"
                    placeholder="EMAIL@HOST.COM"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="label-micro mb-4 block">Inquiry_Type</label>
                <select
                  id="subject"
                  className="w-full bg-ghost border-b border-ink/20 py-4 px-0 focus:outline-none focus:border-neon transition-all font-mono text-sm appearance-none"
                >
                  <option>GENERAL_INQUIRY</option>
                  <option>BUG_REPORT</option>
                  <option>FEATURE_REQUEST</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="label-micro mb-4 block">Message_Payload</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-ghost border-b border-ink/20 py-4 px-0 focus:outline-none focus:border-neon transition-all font-mono text-sm"
                  placeholder="INPUT_MESSAGE_DATA..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-ink text-neon font-extrabold py-5 uppercase tracking-widest text-xs hover:bg-neon hover:text-ink transition-all active:scale-[0.98]"
              >
                Transmit_Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default Contact;
