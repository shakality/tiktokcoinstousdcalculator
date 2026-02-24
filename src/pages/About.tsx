import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Info, Target, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Helmet>
        <title>TikTok.Lab // Mission_Brief</title>
        <meta name="description" content="Learn about our mission to provide transparent and accurate financial tools for the TikTok creator community." />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-24"
      >
        <h1 className="text-6xl font-extrabold text-ink mb-8 tracking-tighter uppercase italic">Mission_Brief</h1>
        <p className="font-mono text-lg text-ink/50 max-w-2xl leading-relaxed">
          [OBJECTIVE: TRANSPARENCY]<br/>
          [TARGET: CREATOR_ECONOMY]<br/>
          [METHOD: PRECISION_CALCULATION]
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-ink/10 border border-ink/10 mb-24">
        <motion.div 
          className="bg-white p-12 razor-card"
        >
          <div className="bg-ink w-12 h-12 rounded-sm flex items-center justify-center text-neon mb-10">
            <Target size={24} />
          </div>
          <h2 className="text-xl font-extrabold text-ink mb-6 uppercase tracking-tighter italic">Core_Values</h2>
          <p className="font-mono text-sm text-ink/50 leading-relaxed">
            We believe every creator and fan should understand the real-world value of the digital assets they interact with daily. No hidden fees, no complex jargon.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white p-12 razor-card"
        >
          <div className="bg-ink w-12 h-12 rounded-sm flex items-center justify-center text-neon mb-10">
            <Users size={24} />
          </div>
          <h2 className="text-xl font-extrabold text-ink mb-6 uppercase tracking-tighter italic">User_Base</h2>
          <p className="font-mono text-sm text-ink/50 leading-relaxed">
            Serving both rising stars and dedicated fans. Our tools are built for the next generation of digital entrepreneurs.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="bg-ink p-12 md:p-20 text-white relative overflow-hidden razor-card"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 blur-[120px] rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-shrink-0 bg-white/5 p-8 rounded-sm border border-white/10">
            <ShieldCheck size={48} className="text-neon" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-tighter italic">Integrity_Protocol</h2>
            <p className="font-mono text-sm text-white/40 leading-relaxed max-w-2xl">
              Calculations are derived from real-time market data and official platform policies. Algorithms are updated [DAILY] to ensure 100% accuracy in a volatile economy.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
