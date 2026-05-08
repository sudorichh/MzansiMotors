/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Banknote, 
  Truck, 
  Search,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82s.033.019.098.056c1.472.873 3.176 1.335 4.939 1.335 5.282 0 9.58-4.298 9.582-9.583.002-5.283-4.295-9.58-9.578-9.58-5.283 0-9.58 4.297-9.582 9.581-.001 2.007.628 3.963 1.815 5.584l.112.153-.984 3.595 3.698-.971z"/>
  </svg>
);

// Product Interface
interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  type: string;
  image: string;
  gridSpan: string;
}

const VEHICLES: Vehicle[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Hilux Legend RS 4x4',
    year: 2024,
    price: 859900,
    mileage: 5000,
    type: 'Bakkie',
    image: 'https://images.unsplash.com/photo-1621944190310-2440b8ea0ce9?q=80&w=1287&auto=format&fit=crop',
    gridSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    id: '2',
    make: 'BMW',
    model: '3 Series M-Sport',
    year: 2023,
    price: 749900,
    mileage: 12000,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1470&auto=format&fit=crop',
    gridSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: '3',
    make: 'Ford',
    model: 'Ranger Wildtrak V6',
    year: 2024,
    price: 929900,
    mileage: 2500,
    type: 'Bakkie',
    image: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?q=80&w=1331&auto=format&fit=crop',
    gridSpan: 'md:col-span-2 md:row-span-1',
  },
  {
    id: '4',
    make: 'Volkswagen',
    model: 'Polo Vivo 1.4',
    year: 2022,
    price: 245000,
    mileage: 38000,
    type: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1470&auto=format&fit=crop',
    gridSpan: 'md:col-span-1 md:row-span-1',
  }
];

const WHATSAPP_LINK = "https://wa.me/27615811529?text=Hi,%20I'm%20interested%20in%20a%20vehicle%20from%20your%20demo%20website!";

const formatZAR = (amount: number) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0,
  }).format(amount).replace('ZAR', 'R');
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-brand-accent selection:text-black">
      {/* Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 px-6">
        <nav 
          className={`container mx-auto px-6 h-14 glass rounded-2xl flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'max-w-4xl' : 'max-w-7xl'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center font-display font-black text-black text-xs">
              MZ
            </div>
            <span className="font-display font-black text-xl italic tracking-tighter hidden sm:block">
              MZANSI<span className="text-brand-accent italic">MOTORS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Inventory', 'About', 'Finance', 'Trade-In'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block text-[10px] font-mono text-brand-accent uppercase tracking-tighter border-r border-white/10 pr-4 mr-2">
              Sandton • Open Now
            </div>
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-4xl font-display font-black italic uppercase">
              {['Inventory', 'About', 'Finance', 'Trade-In'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK} 
                className="bg-brand-accent text-black p-4 rounded-2xl flex items-center justify-center gap-3 text-lg"
              >
                <WhatsAppIcon className="w-5 h-5" /> Enquire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="p-6 space-y-6 pt-28">
        <div className="container mx-auto space-y-6">
          {/* Hero Bento Grid */}
          <div id="inventory" className="grid grid-cols-12 gap-6 min-h-[600px]">
            {/* Main Hero Block */}
            <div className="col-span-12 bento-card p-10 md:p-16 flex flex-col justify-end relative group">
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                <div className="text-[180px] md:text-[240px] font-black leading-none tracking-tighter select-none">01</div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
                  DRIVE YOUR <span className="text-brand-accent italic">DREAM.</span><br />
                  CRAFTED FOR <span className="italic">MZANSI.</span>
                </h1>
                <p className="text-white/50 max-w-md text-lg leading-tight mb-10">
                  Premium certified vehicles. Nationwide delivery across South Africa. 
                  Experience the ultimate bakkie culture or luxury sedan precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={WHATSAPP_LINK}
                    className="bg-brand-accent text-black font-black uppercase text-sm px-10 py-5 rounded-full w-fit flex items-center gap-3 hover:scale-105 transition-transform"
                  >
                    <span>Enquire via WhatsApp</span>
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </a>
                  <a 
                    href="#about"
                    className="glass text-white font-black uppercase text-sm px-10 py-5 rounded-full w-fit hover:bg-white/10 transition-all"
                  >
                    Our Story
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Business Description / About Us Bento */}
          <div id="about" className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 lg:col-span-8 bento-card p-10 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-brand-surface to-brand-bg">
              <div className="absolute -left-10 -bottom-10 opacity-5 pointer-events-none">
                <span className="text-[300px] font-black leading-none">M</span>
              </div>
              <div className="relative z-10">
                <span className="text-brand-accent font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Since 2012</span>
                <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase leading-[0.9] mb-6">
                  PREMIUM QUALITY.<br />UNMATCHED SERVICE.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white/50 text-sm leading-relaxed">
                  <p>
                    Mzansi Prestige Motors was born from a passion for South African road culture. We don't just sell cars; we deliver the freedom of the open road, from the streets of Sandton to the coastal routes of the Cape.
                  </p>
                  <p>
                    Our curated selection focuses on performance, reliability, and prestige. Every vehicle is vetted through elite condition reports, ensuring that when you drive away, you carry the mark of excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 lg:col-span-4 glass rounded-[2rem] overflow-hidden flex flex-col border border-white/10 group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop" 
                  alt="Mzansi Motors Branch" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h4 className="font-display font-black italic uppercase text-2xl leading-none">Nationwide<br />Reach</h4>
                  <p className="text-[8px] text-brand-accent font-bold uppercase tracking-widest mt-1">Certified Dealership Network</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {[
                    { city: 'Sandton', type: 'HQ & Showroom' },
                    { city: 'Cape Town', type: 'Exotic Branch' },
                    { city: 'Durban', type: 'Port Logistics' }
                  ].map((loc, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="font-bold text-sm tracking-tight italic">{loc.city}</span>
                      <span className="text-[10px] text-brand-accent font-black uppercase">{loc.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Showroom Grid */}
          <div id="finance" className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Quick Stats Block */}
            <div className="md:col-span-4 glass rounded-[2rem] p-8 flex items-center justify-between border border-white/10 h-32">
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest mb-1">Quick Finance</span>
                <span className="text-2xl font-black italic">1-Hour Approval</span>
              </div>
              <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-brand-accent" />
              </div>
            </div>

            {/* Secondary Vehicle */}
            <div className="md:col-span-4 bento-card group flex flex-col h-[400px] md:h-auto">
              <div className="flex-grow relative overflow-hidden bg-brand-surface">
                <img 
                  src={VEHICLES[1].image} 
                  alt={VEHICLES[1].model}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 bg-brand-surface border-t border-white/5">
                <h3 className="font-display font-black uppercase text-lg">{VEHICLES[1].model}</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-brand-accent font-black text-xl">{formatZAR(VEHICLES[1].price)}</p>
                  <span className="text-[10px] text-white/40 font-bold uppercase">{VEHICLES[1].mileage.toLocaleString()} KM</span>
                </div>
              </div>
            </div>

            {/* Dekra Block */}
            <div className="md:col-span-4 bg-brand-accent rounded-[2rem] p-8 flex flex-col justify-between text-black group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform">
                <ShieldCheck size={200} />
              </div>
              <div className="text-4xl lg:text-5xl font-black uppercase italic leading-none relative z-10">
                Dekra<br />Condition<br />Reports
              </div>
              <p className="text-xs font-bold uppercase opacity-60 mt-4 max-w-[200px] relative z-10">
                Every vehicle strictly inspected for peace of mind.
              </p>
              <div className="flex justify-between items-center mt-8 relative z-10">
                <span className="text-[10px] font-black underline uppercase tracking-widest">Our Guarantee</span>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Lower Wide Grid */}
          <div id="trade-in" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 glass rounded-[2rem] p-6 flex flex-col sm:flex-row gap-6 border border-white/10">
              {/* Product 3 */}
              <div className="flex-1 flex flex-col group">
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/50 mb-4 border border-white/5">
                  <img 
                    src={VEHICLES[2].image} 
                    alt={VEHICLES[2].model} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-black uppercase truncate mr-2 text-white/80">{VEHICLES[2].model}</span>
                  <span className="text-[10px] text-white/50 font-bold shrink-0">{formatZAR(VEHICLES[2].price)}</span>
                </div>
              </div>

              {/* Product 4 - Updated to "View more" per request */}
              <div className="flex-1 flex flex-col group">
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/50 mb-4 border border-white/5">
                  <img 
                    src={VEHICLES[3].image} 
                    alt={VEHICLES[3].model} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-black uppercase truncate mr-2 hover:text-brand-accent transition-colors cursor-pointer w-full text-center">View more</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bento-card p-10 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-accent/10 to-transparent pointer-events-none" />
               <div className="relative z-10">
                 <h2 className="font-display text-4xl font-black italic uppercase leading-none mb-4">FASTER<br />FINANCE.</h2>
                 <p className="text-white/40 text-sm mb-6 max-w-xs">Approvals through all major SA banks. ABSA, Standard Bank & WesBank partners.</p>
                 <a href={WHATSAPP_LINK} className="text-xs font-black uppercase border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors">WhatsApp Us</a>
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-brand-bg pt-20 pb-12">
        <div className="container mx-auto px-6 border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center font-display font-black text-black text-[10px]">MZ</div>
                <span className="font-display font-black text-lg italic tracking-tighter">MZANSI MOTORS</span>
              </div>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">Sandton • Cape Town • Durban</p>
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Legal</a>
              <a href="#" className="hover:text-white">Credits</a>
            </div>
            <p className="text-[10px] text-white/20 font-bold">© 2024 MZANSI PRESTIGE MOTORS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp FAB */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl animate-whatsapp cursor-pointer"
      >
        <WhatsAppIcon className="w-8 h-8 text-white fill-current" />
      </motion.a>
    </div>
  );
}
