import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator, Info, Mail, Shield, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Calculator size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
    { name: 'Privacy', path: '/privacy-policy', icon: <Shield size={18} /> },
    { name: 'Terms', path: '/terms', icon: <FileText size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-ghost flex flex-col font-sans text-ink">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="bg-ink p-2 rounded-sm text-neon transition-transform duration-300 group-hover:rotate-90">
                  <Calculator size={20} strokeWidth={2.5} />
                </div>
                <span className="font-extrabold text-xl tracking-tighter uppercase italic">TikTok.Lab</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-ink hover:text-neon ${
                    location.pathname === link.path ? 'bg-ink text-neon' : 'text-ink/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 bg-ink text-neon"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-b border-ink/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 font-mono text-xs font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-neon transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-ink/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="bg-ink p-1.5 rounded-sm text-neon">
                  <Calculator size={18} />
                </div>
                <span className="font-extrabold text-lg tracking-tighter uppercase italic">TikTok.Lab</span>
              </Link>
              <p className="text-sm font-mono text-ink/40 leading-relaxed max-w-xs">
                [SYSTEM_STATUS: OPERATIONAL]<br/>
                [DATA_PRECISION: HIGH]<br/>
                [CREATOR_ECONOMY_SYNC: ACTIVE]
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="label-micro mb-6">Navigation</h3>
              <ul className="space-y-3 font-mono text-[11px] font-bold uppercase tracking-wider">
                <li><Link to="/" className="hover:text-neon hover:bg-ink px-1 transition-colors">Calculator</Link></li>
                <li><Link to="/about" className="hover:text-neon hover:bg-ink px-1 transition-colors">Mission</Link></li>
                <li><Link to="/contact" className="hover:text-neon hover:bg-ink px-1 transition-colors">Support</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="label-micro mb-6">Legal</h3>
              <ul className="space-y-3 font-mono text-[11px] font-bold uppercase tracking-wider">
                <li><Link to="/privacy-policy" className="hover:text-neon hover:bg-ink px-1 transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-neon hover:bg-ink px-1 transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h3 className="label-micro mb-6">Terminal</h3>
              <div className="bg-ink p-4 rounded-sm">
                <p className="font-mono text-[10px] text-neon/60 leading-tight">
                  {">"} FETCHING_LATEST_RATES...<br/>
                  {">"} 1_COIN = 0.01_USD<br/>
                  {">"} CREATOR_SHARE = 50%
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} TikTok.Lab // All rights reserved.
            </p>
            <div className="flex gap-4 font-mono text-[10px] text-ink/30 uppercase tracking-widest">
              <span>v2.0.26</span>
              <span>Build_7741</span>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Layout;
