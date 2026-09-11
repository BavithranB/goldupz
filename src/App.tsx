import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu, X, ChevronRight, ShieldCheck, TrendingUp, Wallet,
  Award, Clock, Lock, CheckCircle2, Star,
  Smartphone, BarChart3
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="GoldUpz Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-text-dark">
          <a href="#how-it-works" className="hover:text-emerald-800 transition-colors">How It Works</a>
          <a href="#why-goldupz" className="hover:text-emerald-800 transition-colors">Why GoldUpz</a>
          <a href="#features" className="hover:text-emerald-800 transition-colors">Features</a>
          <a href="#security" className="hover:text-emerald-800 transition-colors">Security</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="font-semibold text-emerald-900 hover:text-emerald-800 transition-colors">Login</button>
          <button className="gold-gradient text-emerald-900 font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all shadow-gold-500/20">
            Start Saving
          </button>
        </div>

        <button className="md:hidden text-emerald-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 md:hidden"
        >
          <a href="#how-it-works" className="p-2 font-medium text-text-dark" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <a href="#why-goldupz" className="p-2 font-medium text-text-dark" onClick={() => setIsMobileMenuOpen(false)}>Why GoldUpz</a>
          <a href="#features" className="p-2 font-medium text-text-dark" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#security" className="p-2 font-medium text-text-dark" onClick={() => setIsMobileMenuOpen(false)}>Security</a>
          <hr className="border-gray-100 my-2" />
          <button className="w-full text-center font-semibold text-emerald-900 p-2">Login</button>
          <button className="w-full gold-gradient text-emerald-900 font-bold px-6 py-3 rounded-xl shadow-md">
            Start Saving
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const PhoneMockup = ({ imageSrc }: { imageSrc: string }) => (
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[1/2.16] rounded-[40px] shadow-2xl shadow-emerald-900/20 overflow-hidden shrink-0 mx-auto bg-emerald-900 flex items-center justify-center border-[8px] border-emerald-900 ring-1 ring-white/10"
  >
    <img src={imageSrc} alt="App Mockup" className="w-full h-full object-cover rounded-[32px]" />
  </motion.div>
);

const Hero = () => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8 min-h-[90vh]">
    <div className="flex-1 space-y-8 text-center lg:text-left z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block bg-gold-100 text-gold-600 font-bold px-4 py-1.5 rounded-full text-sm border border-gold-200"
      >
        SMARTER WAY TO OWN GOLD
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-dark leading-tight tracking-tight"
      >
        Build Your Wealth,<br />
        <span className="text-gold-gradient">One Gram at a Time.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
      >
        Save in digital gold effortlessly, track your portfolio in real time, and redeem your gold whenever you're ready.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
      >
        <button className="w-full sm:w-auto emerald-gradient text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all text-lg shadow-emerald-900/20">
          Start Saving Now
        </button>
        <button className="w-full sm:w-auto bg-white text-emerald-900 font-bold px-8 py-4 rounded-full border border-emerald-100 hover:border-emerald-300 hover:bg-gray-50 transition-all text-lg shadow-sm flex items-center justify-center gap-2">
          Explore GoldUpz <ChevronRight size={20} />
        </button>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm font-semibold text-text-muted flex items-center justify-center lg:justify-start gap-2 pt-2"
      >
        <ShieldCheck size={16} className="text-emerald-800" /> Secure • Transparent • Easy to Start
      </motion.p>
    </div>

    <div className="flex-1 relative w-full flex justify-center perspective-[1000px]">
      <div className="absolute inset-0 bg-gold-400/20 blur-[100px] rounded-full mix-blend-multiply w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -left-4 md:-left-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3 hidden sm:flex"
      >
        <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-white font-bold">+</div>
        <div>
          <p className="text-xs text-text-muted font-medium">Daily Streak</p>
          <p className="font-bold text-text-dark">12 Days</p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [10, -10, 10] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute -right-4 md:-right-12 bottom-32 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3 hidden sm:flex"
      >
        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold"><TrendingUp size={20} /></div>
        <div>
          <p className="text-xs text-text-muted font-medium">Today's Growth</p>
          <p className="font-bold text-emerald-600">+2.4%</p>
        </div>
      </motion.div>

      <PhoneMockup imageSrc="/mockup-1.png" />
    </div>
  </section>
);


const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4">Gold Saving Made Simple</h2>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">Start building your gold portfolio in just a few taps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Decorative line for desktop */}
        <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gray-100 -z-10"></div>
        
        {[
          { step: '01', title: 'BUY', desc: 'Buy digital gold instantly at transparent live market prices.', icon: Wallet },
          { step: '02', title: 'SAVE', desc: 'Save daily automatically or invest manually whenever you want.', icon: Clock },
          { step: '03', title: 'GROW', desc: 'Build your gold holdings consistently over time and track value.', icon: TrendingUp },
          { step: '04', title: 'REDEEM', desc: 'Convert your digital gold into physical gold coins delivered home.', icon: Award },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-emerald-200 transition-all hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-emerald-900 group-hover:text-white transition-colors">
              <item.icon size={28} />
            </div>
            <span className="text-gold-500 font-extrabold text-sm mb-2 block">{item.step}</span>
            <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
            <p className="text-text-muted font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AppShowcase = () => (
  <section id="why-goldupz" className="py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 relative order-2 lg:order-1 flex justify-center">
           <div className="absolute inset-0 bg-emerald-900/5 blur-[120px] rounded-full mix-blend-multiply w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
           <PhoneMockup imageSrc="/mockup-2.png" />
        </div>
        
        <div className="flex-1 space-y-12 order-1 lg:order-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6">Your Gold.<br/>Always Within Reach.</h2>
            <p className="text-xl text-text-muted font-medium">Experience the most seamless way to accumulate, track, and manage your gold investments from anywhere.</p>
          </div>

          <div className="space-y-8">
            {[
              { title: 'Real-time Gold Prices', desc: 'Track live gold prices directly linked to international markets.' },
              { title: 'Flexible Saving', desc: 'Set up auto-saves daily, weekly or simply buy whenever you choose.' },
              { title: 'Digital Ownership', desc: 'Own 24K gold digitally without worrying about lockers or physical storage.' },
              { title: 'Easy Redemption', desc: 'Redeem your balance for physical coins or jewelry whenever you need.' },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text-dark mb-2">{feature.title}</h4>
                  <p className="text-text-muted font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-4">Everything You Need to Grow Your Gold</h2>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">Powerful features designed to make gold investment effortless.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6">
            <Clock size={28} />
          </div>
          <h3 className="text-2xl font-bold text-text-dark mb-3">Daily Gold Saving</h3>
          <p className="text-text-muted font-medium leading-relaxed">Automate your wealth creation. Set a daily amount as low as ₹10 and watch your gold portfolio grow consistently over time.</p>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-gold-50 text-gold-500 flex items-center justify-center mb-6">
            <BarChart3 size={28} />
          </div>
          <h3 className="text-2xl font-bold text-text-dark mb-3">Portfolio Tracking</h3>
          <p className="text-text-muted font-medium leading-relaxed">Get real-time valuation of your holdings. Track live market rates and monitor your investment growth instantly.</p>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-6">
            <Award size={28} />
          </div>
          <h3 className="text-2xl font-bold text-text-dark mb-3">Physical Redemption</h3>
          <p className="text-text-muted font-medium leading-relaxed">Convert your digital balance into 24K pure physical gold coins or jewelry, securely delivered to your doorstep.</p>
        </div>

        <div className="md:col-span-2 bg-emerald-900 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden flex items-center group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-800/50 border border-emerald-700 text-gold-400 flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">100% Secure Storage</h3>
            <p className="text-emerald-100 font-medium max-w-md leading-relaxed">Your digital gold is backed by real, physical 24K gold stored in world-class, fully insured vaults.</p>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-gold-50 text-gold-500 flex items-center justify-center mb-6">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-2xl font-bold text-text-dark mb-3">Transparent Pricing</h3>
          <p className="text-text-muted font-medium leading-relaxed">No hidden charges. See exact live market rates before every purchase or sale.</p>
        </div>
      </div>
    </div>
  </section>
);

const SavingsExperience = () => (
  <section className="py-24 bg-gray-50 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold text-text-dark mb-6 leading-tight">Small Savings.<br/><span className="text-emerald-800">Real Gold.</span></h2>
          <p className="text-xl text-text-muted font-medium max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Turn everyday saving into something tangible. Set your pace, stay consistent, and watch your gold portfolio grow day by day.
          </p>
          <button className="gold-gradient text-emerald-900 font-bold px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all text-lg shadow-gold-500/20">
            Start Your Streak
          </button>
        </div>

        <div className="flex-1 w-full max-w-md relative perspective-[1000px]">
          <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-gray-100 relative z-10">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg text-text-dark">Auto-Save</span>
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold">Active</span>
            </div>
            
            <div className="text-center mb-10">
              <p className="text-text-muted font-medium mb-2">Daily Amount</p>
              <h3 className="text-6xl font-extrabold text-emerald-900">₹100</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-900 text-white rounded-full flex items-center justify-center font-bold text-lg">🔥</div>
                  <div>
                    <p className="font-bold text-text-dark">Current Streak</p>
                    <p className="text-xs text-text-muted">Don't break it!</p>
                  </div>
                </div>
                <span className="text-2xl font-extrabold text-emerald-900">12 Days</span>
              </div>

              <div className="bg-gold-50 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gold-gradient text-white rounded-full flex items-center justify-center font-bold text-lg">G</div>
                  <div>
                    <p className="font-bold text-text-dark">Gold Accumulated</p>
                    <p className="text-xs text-text-muted">This month</p>
                  </div>
                </div>
                <span className="text-xl font-extrabold text-gold-600">0.18 g</span>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold-400 rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-emerald-400 rounded-full blur-3xl opacity-20 -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const Security = () => (
  <section id="security" className="py-24 bg-emerald-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Your Gold Deserves<br/><span className="text-gold-400">Serious Security.</span></h2>
      <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-16 font-medium">Bank-grade security ensures your digital investments are safe, fully backed by physical gold, and always yours.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { title: 'Secure Transactions', icon: Lock },
          { title: 'Verified Gold', icon: ShieldCheck },
          { title: 'Protected Storage', icon: Wallet },
          { title: 'Real-time Tracking', icon: BarChart3 },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-emerald-700 bg-emerald-800/50 flex items-center justify-center text-gold-400 mb-6 relative group">
              <div className="absolute inset-0 bg-gold-400 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <item.icon size={36} />
            </div>
            <h4 className="text-xl font-bold text-white">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-emerald-900 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ background: 'radial-gradient(circle at top right, var(--color-gold-400) 0%, transparent 50%)' }}></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Start Building<br/>Your Gold?</h2>
          <p className="text-lg md:text-xl text-emerald-100 font-medium mb-10 max-w-2xl mx-auto">
            Start saving in digital gold today and take the first step toward a stronger, more secure financial future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="gold-gradient text-emerald-900 font-bold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg shadow-gold-500/20">
              Start Saving in Gold
            </button>
            <button className="bg-emerald-800/50 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border border-emerald-700 hover:bg-emerald-800 transition-all text-lg flex items-center justify-center gap-2">
              <Smartphone size={20} /> Download GoldUpz
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="GoldUpz Logo" className="h-12 md:h-16 w-auto object-contain" />
          </div>
          <p className="text-text-muted font-medium mb-8 max-w-sm leading-relaxed">
            Making gold ownership simple, accessible and digital. Build your wealth securely with fractional gold.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-muted hover:text-emerald-800 hover:border-emerald-800 transition-colors cursor-pointer">
              X
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-muted hover:text-emerald-800 hover:border-emerald-800 transition-colors cursor-pointer">
              in
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-muted hover:text-emerald-800 hover:border-emerald-800 transition-colors cursor-pointer">
              IG
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-text-dark mb-6 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-4 text-text-muted font-medium">
            <li><a href="#" className="hover:text-emerald-800 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">How It Works</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-text-dark mb-6 uppercase tracking-wider text-sm">Product</h4>
          <ul className="space-y-4 text-text-muted font-medium">
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Digital Gold</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Gold Savings</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Silver Investments</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Redemption</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-text-dark mb-6 uppercase tracking-wider text-sm">Support</h4>
          <ul className="space-y-4 text-text-muted font-medium">
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-emerald-800 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8 flex flex-col gap-3 text-center md:text-left">
        <p className="text-text-dark text-sm font-bold">Swarna Thuli Private Limited</p>
        <p className="text-text-muted text-xs font-medium">158, New Military Road, Avadi, Chennai, Tamil Nadu, India</p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-2">
          <p className="text-text-muted text-sm font-medium">© 2026 GoldUpz. All rights reserved.</p>
          <p className="text-text-muted text-sm font-medium">Built for India 🇮🇳</p>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-sans antialiased text-text-dark bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AppShowcase />
      <Features />
      <SavingsExperience />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
