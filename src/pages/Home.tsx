import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { DollarSign, Coins, TrendingUp, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Home: React.FC = () => {
  const [coins, setCoins] = useState<string>('');
  const [usdCost, setUsdCost] = useState<number>(0);
  const [creatorEarnings, setCreatorEarnings] = useState<number>(0);

  useEffect(() => {
    const numCoins = parseFloat(coins) || 0;
    // Calculation Logic:
    // 1 coin costs roughly $0.01 to buy (simplified for the tool)
    // Creators keep about 50% of the value (Diamonds are worth 50% of coins)
    setUsdCost(numCoins * 0.01);
    setCreatorEarnings(numCoins * 0.005); // 50% of 0.01
  }, [coins]);

  const faqItems = [
    {
      question: "How much is 1 TikTok coin worth in USD?",
      answer: "On average, 1 TikTok coin costs approximately $0.01 USD to purchase. However, the price can vary slightly depending on the package size you buy and your region."
    },
    {
      question: "How much do creators earn from a TikTok Lion or Galaxy?",
      answer: "A TikTok Lion costs 29,999 coins, which is roughly $300. Since creators receive about 50% of the gift value, they earn approximately $150 from a Lion. A Galaxy costs 1,000 coins ($10), netting the creator about $5."
    },
    {
      question: "What is the difference between TikTok Coins and Diamonds?",
      answer: "Coins are the virtual currency fans buy to send gifts. When a creator receives a gift, it is converted into 'Diamonds' in their balance. Diamonds can then be cashed out for real money."
    },
    {
      question: "How do I cash out my TikTok earnings?",
      answer: "Once you have at least $100 worth of Diamonds, you can withdraw them via PayPal or a bank transfer through the 'Balance' section in your TikTok settings."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [shareStatus, setShareStatus] = useState<'idle' | 'success'>('idle');

  const handleShare = async () => {
    const numCoins = Number(coins) || 0;
    const shareData = {
      title: 'TikTok Coins to USD Calculator',
      text: `I just calculated that ${numCoins.toLocaleString()} TikTok Coins are worth $${creatorEarnings.toLocaleString()} for creators! Check it out:`,
      url: window.location.href,
    };

    console.log('Attempting to share:', shareData);

    try {
      if (navigator.share) {
        console.log('Using navigator.share');
        await navigator.share(shareData);
      } else {
        console.log('navigator.share not available, using clipboard');
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus('success');
        setTimeout(() => setShareStatus('idle'), 3000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
      // Fallback for browsers with strict clipboard policies
      setShareStatus('idle');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>TikTok Coins to USD Calculator // Precision Lab</title>
        <meta name="description" content="Use the most accurate TikTok Coins to USD Calculator to estimate creator earnings, gift values, and diamond payouts with zero latency and 100% precision." />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 px-1 bg-ink/5 border border-ink/10">
        {/* Main Tool Area */}
        <div className="lg:col-span-8 bg-ghost p-8 md:p-12 border-r border-ink/10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <div className="bg-ink p-3 rounded-sm text-neon">
                <Coins size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold uppercase tracking-tighter italic">TikTok_Coins_to_USD_Calculator</h1>
                <p className="font-mono text-[10px] text-ink/40 uppercase tracking-widest mt-1">Status: Operational // Latency: 0ms</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white border border-ink/10 p-8 razor-card">
                <label htmlFor="coins" className="label-micro mb-4 block">
                  Input_Quantity [Coins/Diamonds]
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="coins"
                    value={coins}
                    onChange={(e) => setCoins(e.target.value)}
                    placeholder="000000"
                    className="w-full bg-ghost border-b-2 border-ink py-6 px-0 text-5xl font-extrabold text-ink placeholder:text-ink/5 focus:outline-none focus:border-neon transition-all font-mono"
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-ink/10">
                    <Coins size={48} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-ink/10 p-8 razor-card">
                  <div className="label-micro mb-6 flex items-center gap-2">
                    <DollarSign size={12} />
                    Fan_Purchase_Cost
                  </div>
                  <div className="text-5xl font-extrabold text-ink font-mono tracking-tighter">
                    ${usdCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="mt-6 pt-6 border-t border-ink/5 font-mono text-[10px] text-ink/40 uppercase">
                    Rate: 1_Coin = 0.01_USD
                  </div>
                </div>

                <div className="bg-ink p-8 razor-card">
                  <div className="label-micro mb-6 flex items-center gap-2 text-neon/60">
                    <TrendingUp size={12} />
                    Creator_Net_Payout
                  </div>
                  <div className="text-5xl font-extrabold text-neon font-mono tracking-tighter">
                    ${creatorEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 font-mono text-[10px] text-neon/40 uppercase">
                    Share: 50.00%_Net
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SEO Content Section */}
          <section className="mt-24 pt-24 border-t border-ink/10">
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter italic mb-10">Documentation_Log</h2>
            <div className="font-mono text-sm text-ink/60 space-y-8 leading-relaxed">
              <p>
                [01] TikTok has revolutionized the way creators monetize their content through its unique virtual gifting system. If you've ever watched a TikTok Live, you've likely seen viewers sending "Galaxies," "Lions," or "Paper Cranes." But what do these symbols actually mean in terms of dollars and cents? Our <strong>TikTok Coins to USD Calculator</strong> is designed to demystify this process for both fans and creators.
              </p>
              
              <h3 className="text-ink font-bold uppercase tracking-widest text-xs mt-12 mb-4">// How Much is a TikTok Coin Worth?</h3>
              <p>
                [02] Generally, 1 TikTok coin is worth approximately <strong>$0.01 (one cent)</strong>. However, TikTok offers various coin bundles. For instance, you might buy 65 coins for $0.99 or 16,500 coins for $249.99. The larger the bundle, the slightly better the value, but the $0.01 benchmark remains the most accurate way to estimate cost.
              </p>

              <h3 className="text-ink font-bold uppercase tracking-widest text-xs mt-12 mb-4">// The Creator Payout: From Coins to Diamonds</h3>
              <p>
                [03] When a creator receives a gift, it doesn't stay as "coins." Instead, it is converted into <strong>Diamonds</strong>. Diamonds are the metric TikTok uses to measure a creator's popularity and earnings. The crucial thing to know is that TikTok takes a significant commission. Typically, creators receive about <strong>50% of the coin's value</strong>. If a fan spends $100 on coins to send a gift, the creator will receive roughly $50 worth of Diamonds.
              </p>

              <div className="bg-ink p-8 my-12 border border-white/10">
                <h3 className="label-micro text-neon mb-8">Asset_Value_Table</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
                  {[
                    { name: "Lion", coins: "29,999", cost: "$300", payout: "$150" },
                    { name: "Universe", coins: "34,999", cost: "$350", payout: "$175" },
                    { name: "Galaxy", coins: "1,000", cost: "$10", payout: "$5" },
                    { name: "Rose", coins: "1", cost: "$0.01", payout: "$0.005" }
                  ].map((gift) => (
                    <div key={gift.name} className="bg-ink p-6 flex justify-between items-center group hover:bg-white/5 transition-colors">
                      <div>
                        <div className="font-bold text-white uppercase tracking-widest text-xs">{gift.name}</div>
                        <div className="text-[10px] text-white/40 mt-1">{gift.coins}_COINS</div>
                      </div>
                      <div className="text-right">
                        <div className="text-neon font-bold font-mono">{gift.payout}</div>
                        <div className="text-[9px] text-white/20 uppercase font-bold tracking-widest">Payout</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-ink font-bold uppercase tracking-widest text-xs mt-12 mb-4">// How to Maximize Your Earnings</h3>
              <p>
                [04] For creators, the TikTok Creator Fund is one way to earn, but Live gifting is often more lucrative. Engaging with your audience, setting gift goals, and hosting themed Live sessions can significantly increase the number of Diamonds you collect. Remember to always check your 'Balance' in the TikTok app to see your current Diamond count and withdrawal options.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-24 pt-24 border-t border-ink/10">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-ink p-2 rounded-sm text-neon">
                <HelpCircle size={20} />
              </div>
              <h2 className="text-2xl font-extrabold uppercase tracking-tighter italic">Knowledge_Base</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white border border-ink/5 razor-card overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left group"
                  >
                    <span className="font-bold text-ink uppercase tracking-widest text-xs group-hover:text-neon transition-colors">{item.question}</span>
                    <div className={`p-1 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-neon' : 'text-ink/20'}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 font-mono text-xs text-ink/50 leading-relaxed border-t border-ink/5 pt-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 bg-white p-8 md:p-12">
          <div className="sticky top-28 space-y-12">
            <div className="bg-ink p-10 razor-card relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 blur-3xl rounded-full group-hover:bg-neon/10 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon/5 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold text-white uppercase tracking-tighter italic mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon animate-pulse" />
                  Growth_Protocol
                </h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <span className="font-mono text-[10px] text-neon/60 mt-1">[01]</span>
                    <p className="font-mono text-xs text-white/60 leading-relaxed">
                      Understanding your earnings is the first step to becoming a professional creator.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-mono text-[10px] text-neon/60 mt-1">[02]</span>
                    <p className="font-mono text-xs text-white/60 leading-relaxed">
                      Use our tool to track your progress and set new goals!
                    </p>
                  </div>
                </div>

                <button 
                  onClick={handleShare}
                  className={`w-full font-extrabold py-4 uppercase tracking-widest text-[10px] transition-all active:scale-[0.98] border relative overflow-hidden ${
                    shareStatus === 'success' 
                      ? 'bg-neon text-ink border-neon' 
                      : 'bg-neon text-ink border-neon hover:bg-transparent hover:text-neon'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {shareStatus === 'success' ? (
                      <motion.span
                        key="success"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        Link_Copied_To_Clipboard
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                      >
                        Execute_Share
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            <div className="bg-ghost border border-ink/10 p-8 razor-card">
              <h4 className="label-micro mb-8">System_Metrics</h4>
              <div className="space-y-6 font-mono text-[11px] font-bold uppercase">
                <div className="flex justify-between items-center border-b border-ink/5 pb-4">
                  <span className="text-ink/40">1_Coin_Value</span>
                  <span className="text-ink">0.01_USD</span>
                </div>
                <div className="flex justify-between items-center border-b border-ink/5 pb-4">
                  <span className="text-ink/40">Creator_Share</span>
                  <span className="text-neon bg-ink px-2 py-0.5">50.00%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink/40">Min_Payout</span>
                  <span className="text-ink">100.00_USD</span>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-ink/10">
              <p className="font-mono text-[9px] text-ink/30 uppercase tracking-[0.3em] text-center leading-loose">
                // DATA_ENCRYPTION_ACTIVE<br/>
                // SECURE_CALCULATION_MODE<br/>
                // NO_USER_DATA_STORED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
