'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, Check, ChevronLeft, ChevronRight, Droplets, BookOpen, Utensils, Home, GraduationCap } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { DisplayHeading, BodyText } from '../ui/Typography';
import { StatusIndicator } from '../ui/StatusIndicator';
import { useDonationForm } from '../../hooks/useDonationForm';

// --- TYPES ---
type DonationType = 'one-time' | 'monthly';

interface DonationAmount {
  amount: number;
  description: string;
}

interface Campaign {
  id: string;
  slide_index: number;
  headline: React.ReactNode;
  description: string;
  image: string;
  icon: React.ElementType;
  accent: string;
  colorClass: string;
}

// --- CONSTANTS ---
const DONATION_AMOUNTS: DonationAmount[] = [
  { amount: 25, description: 'School supplies for one child' },
  { amount: 50, description: 'Clean water access for a family' },
  { amount: 100, description: 'Medical supplies for a village' },
  { amount: 250, description: 'Full education sponsorship' },
];

const CAMPAIGNS: Campaign[] = [
  {
    slide_index: 0,
    id: "kenya_children_future",
    headline: <>Help children in Kenya <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-olive-700 to-teal-700">build the future.</span></>,
    description: "Every contribution goes toward providing children with the support they need to thrive, building the foundation for lasting change.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop",
    icon: Users,
    accent: "bg-teal-600",
    colorClass: "from-teal-700 to-teal-900"
  },
  {
    slide_index: 1,
    id: "water_well_construction",
    headline: <>Build a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Water Well.</span></>,
    description: "Together, we're giving communities access to clean water, improving daily lives and creating a healthier tomorrow.",
    image: "https://images.unsplash.com/photo-1541919329513-35f7af297129?q=80&w=2000&auto=format&fit=crop",
    icon: Droplets,
    accent: "bg-cyan-600",
    colorClass: "from-cyan-700 to-blue-900"
  },
  {
    slide_index: 2,
    id: "food_relief_program",
    headline: <>Provide <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Food Relief.</span></>,
    description: "Your support delivers nourishing food to vulnerable communities, turning hunger into hope.",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2000&auto=format&fit=crop",
    icon: Utensils,
    accent: "bg-orange-600",
    colorClass: "from-orange-700 to-amber-900"
  },
  {
    slide_index: 3,
    id: "orphan_care_support",
    headline: <>Support <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Orphan Care.</span></>,
    description: "Help provide vulnerable children with care, stability, and essential resources, creating an environment where they can flourish.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2000&auto=format&fit=crop",
    icon: Home,
    accent: "bg-rose-600",
    colorClass: "from-rose-700 to-pink-900"
  },
  {
    slide_index: 4,
    id: "education_investment",
    headline: <>Invest in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Education.</span></>,
    description: "Provide learning opportunities to children who need it most, opening doors to a brighter future.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    icon: GraduationCap,
    accent: "bg-indigo-600",
    colorClass: "from-indigo-700 to-violet-900"
  }
];

const AUTO_ADVANCE_INTERVAL = 7000; // 7 seconds

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const {
    donationType,
    setDonationType,
    selectedAmount,
    customAmount,
    handleAmountSelect,
    handleCustomAmountChange
  } = useDonationForm({ defaultAmount: 50 });

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % CAMPAIGNS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + CAMPAIGNS.length) % CAMPAIGNS.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeCampaign = CAMPAIGNS[currentSlide];
  const Icon = activeCampaign.icon;

  return (
    <section
      className="relative w-full min-h-[100dvh] bg-gray-50 overflow-hidden flex flex-col justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* --- CAROUSEL BACKGROUND --- */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, zIndex: -1 }} // Ensure exiting slide is below
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={activeCampaign.image}
            alt={activeCampaign.id}
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay Textures */}
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Gradient Overlay for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80 sm:hidden" />
        </motion.div>
      </AnimatePresence>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-0 pb-20 lg:pb-0 h-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center justify-center min-h-[80vh]">

          {/* --- LEFT COLUMN: Slide Content --- */}
          <div className="lg:col-span-7 space-y-10 relative">

            {/* Animated Content Wrapper */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Campaign Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 text-[11px] font-geist font-bold tracking-widest uppercase mb-6 shadow-sm">
                  <Icon size={14} className={activeCampaign.accent.replace("bg-", "text-")} />
                  <span>Campaign {currentSlide + 1} of {CAMPAIGNS.length}</span>
                </div>

                {/* HEADING */}
                <DisplayHeading className="font-geist text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-brand-primary-darker tracking-tighter drop-shadow-sm min-h-[2.2em]">
                  {activeCampaign.headline}
                </DisplayHeading>

                {/* Description */}
                <div className="max-w-xl min-h-[5em]">
                  <BodyText className="font-sans text-xl leading-relaxed text-brand-primary-dark/90 font-medium">
                    {activeCampaign.description}
                  </BodyText>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6 pt-8">
              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white/50 hover:bg-white border border-gray-200 text-brand-primary-dark transition-all hover:scale-110 active:scale-95 shadow-sm backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-white/50 hover:bg-white border border-gray-200 text-brand-primary-dark transition-all hover:scale-110 active:scale-95 shadow-sm backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-3">
                {CAMPAIGNS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide
                        ? 'w-8 bg-brand-primary-dark'
                        : 'w-2 bg-brand-primary-dark/20 hover:bg-brand-primary-dark/40'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-brand-primary-dark/5">
              <div className="flex items-center gap-3 group">
                <Shield className="w-5 h-5 text-olive-600" />
                <div className="text-sm font-geist">
                  <p className="font-bold text-brand-primary-darker">100% Secure</p>
                  <p className="text-brand-primary-dark/70 font-sans">Verified Charity</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Users className="w-5 h-5 text-olive-600" />
                <div className="text-sm font-geist">
                  <p className="font-bold text-brand-primary-darker">Community Led</p>
                  <p className="text-brand-primary-dark/70 font-sans">Direct Impact</p>
                </div>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: Persistent Donation Widget --- */}
          <div className="lg:col-span-5 relative">
            <motion.div
              layout
              className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-brand-primary-darker/10 border border-white/60 p-6 sm:p-8 relative overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-8 text-center space-y-1">
                <h3 className="text-2xl font-geist font-bold text-brand-primary-darker tracking-tight">Make a Difference</h3>
                <p className="text-brand-primary/80 text-sm font-sans flex items-center justify-center gap-1">
                  Supporting <span className="font-bold text-brand-primary-dark">{activeCampaign.id.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}</span>
                </p>
              </div>

              {/* Toggle */}
              <div className="flex p-1 bg-brand-primary-lightest/80 rounded-lg mb-6 border border-brand-primary-light/50">
                {(['one-time', 'monthly'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type)}
                    className={`
                      flex-1 py-2 text-sm font-geist font-semibold rounded-md transition-all duration-300 capitalize
                      ${donationType === type
                        ? 'bg-white text-brand-primary-dark shadow-sm ring-1 ring-black/5'
                        : 'text-brand-primary/70 hover:text-brand-primary-dark'}
                    `}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Amount Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {DONATION_AMOUNTS.map((item) => {
                  const isSelected = selectedAmount === item.amount;
                  return (
                    <button
                      key={item.amount}
                      onClick={() => handleAmountSelect(item.amount)}
                      className={`
                        relative py-4 px-4 rounded-xl border text-center transition-all duration-200
                        ${isSelected
                          ? 'border-olive-500 bg-olive-50/50 text-brand-primary-dark ring-1 ring-olive-500/20'
                          : 'border-brand-primary-light bg-white hover:border-olive-300 hover:bg-olive-50/30 text-brand-primary-dark'}
                      `}
                    >
                      <span className="font-geist font-bold text-xl tracking-tight">${item.amount}</span>
                      {isSelected && (
                        <motion.div layoutId="check" className="absolute top-2 right-2 text-olive-600">
                          <Check className="w-3 h-3" />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Custom Input */}
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary font-geist font-bold text-lg">$</span>
                <input
                  type="number"
                  placeholder="Other amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="w-full bg-white border border-brand-primary-light rounded-xl py-3.5 pl-8 pr-4 text-brand-primary-dark placeholder:text-brand-primary/70 focus:outline-none focus:border-olive-500 focus:ring-4 focus:ring-olive-500/10 transition-all font-geist font-medium"
                />
              </div>

              {/* Impact Message */}
              <div className="min-h-[28px] mb-6">
                <AnimatePresence mode="wait">
                  {selectedAmount && !customAmount && (
                    <motion.div
                      key="impact"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-center"
                    >
                      <span className="text-xs font-bold text-olive-700 bg-olive-100/50 py-1.5 px-3 rounded-md border border-olive-200/50 font-geist text-center">
                        <span className="block sm:inline">Your ${selectedAmount} provides: </span>
                        <span className="font-normal font-sans text-olive-800">{DONATION_AMOUNTS.find(d => d.amount === selectedAmount)?.description}</span>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Main Button */}
              <button className="w-full bg-brand-primary-darker hover:bg-brand-primary-dark text-white font-geist font-bold py-4 rounded-xl shadow-lg shadow-brand-primary-darker/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group">
                <Heart className="w-4 h-4 text-olive-300 fill-olive-300 group-hover:scale-110 transition-transform" />
                <span>Donate {donationType === 'monthly' ? 'Monthly' : 'Now'}</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-4 text-center">
                <p className="text-[10px] text-brand-primary/80 uppercase tracking-widest flex items-center justify-center gap-2 font-geist font-semibold">
                  <Shield className="w-3 h-3" /> Secure Payment
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}