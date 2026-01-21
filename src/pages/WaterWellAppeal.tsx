import { Droplets, ArrowLeft, Heart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

import { WATER_WELL_IMAGES, IMAGES } from '../data/imageAssets';
import { FadeIn } from '@/components/ui/FadeIn';

// Shadcn Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const SQUARE_LINK = 'https://square.link/u/d5fSYpG9';

// ============================================================
// DATA
// ============================================================

const GALLERY_IMAGES = [
  { src: IMAGES.WATER.CHILD_TAP_1, alt: 'Child using water tap' },
  { src: IMAGES.WATER.CHILD_DRINKING, alt: 'Child drinking clean water' },
  { src: IMAGES.WATER.TANK_VILLAGE_1, alt: 'Water tank in village' },
  { src: IMAGES.WATER.SIGNAGE_INSTALL_1, alt: 'Well installation with signage' },
  { src: IMAGES.WATER.TANK_LANDSCAPE, alt: 'Water infrastructure' },
];

const FAQ_ITEMS = [
  { question: 'How long does it take to build a well?', answer: 'A typical water well takes 4-8 weeks to complete, depending on the location and ground conditions. We provide regular updates throughout the construction process.' },
  { question: 'Can I dedicate the well to someone?', answer: 'Yes! You can dedicate the well in memory of a loved one, to celebrate a milestone, or in honor of someone special. A permanent plaque will be installed at the well site.' },
  { question: 'How do I receive updates on my well?', answer: 'You will receive photos and GPS coordinates once construction is complete. We also send annual impact reports showing how many people your well is serving.' },
  { question: 'Is my donation tax-deductible?', answer: 'Yes. Soul Caravan Foundation is a registered charity. You will receive a tax receipt via email after your donation is processed.' },
];

// ============================================================
// MAIN PAGE
// ============================================================

export function WaterWellAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ========================================
          HERO SECTION - Split Layout
      ======================================== */}
      <section className="relative min-h-[85vh] lg:min-h-screen grid lg:grid-cols-2">
        {/* Left Panel - Content */}
        <div className="bg-slate-100 flex items-center py-24 lg:py-32 px-8 lg:px-16 order-2 lg:order-1">
          <div className="max-w-xl">
            <FadeIn delay={0.1} direction="down">
              {/* Back Link */}
              <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-slate-900 text-slate-600 gap-2" asChild>
                <Link to="/">
                  <ArrowLeft size={16} />
                  Back to Home
                </Link>
              </Button>
            </FadeIn>

            <FadeIn delay={0.2} direction="down">
              {/* Badge */}
              <div className="mb-6">
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 gap-2 px-4 py-1.5 text-sm font-medium border-none shadow-sm">
                  <Droplets size={14} />
                  Sadaqah Jariyah
                </Badge>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Build a Water Well
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              {/* Body text */}
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Provide clean, safe drinking water for an entire village. A single well can serve up to 200 people for over 10 years.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} direction="up">
              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={SQUARE_LINK} target="_blank" rel="noopener noreferrer" className="gap-3">
                  <Heart className="h-5 w-5" />
                  Donate Now
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="relative h-64 lg:h-auto order-1 lg:order-2">
          <FadeIn className="h-full w-full" duration={1} direction="none">
            <img
              src={IMAGES.WATER.GIRL_COLLECTING}
              alt="Child collecting water from well"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          PROBLEM STATEMENT
      ======================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Problem */}
            <div>
              <FadeIn>
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">What we're solving</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  When Communities Can't Access Clean Water
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Millions of families in rural Kenya walk miles each day to collect water from contaminated sources. Children miss school. Women spend hours fetching water instead of pursuing opportunities.
                  </p>
                  <p>
                    Water-borne diseases claim lives that could be saved with simple access to clean water. Your support provides life-saving infrastructure for communities in desperate need.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-xl font-bold text-slate-900 mt-10 mb-5">
                  How Our Water Wells Make a Difference
                </h3>
              </FadeIn>

              <ul className="space-y-4 text-slate-700">
                <FadeIn delay={0.4} direction="right">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                    Wells are built with durable materials for 10+ year lifespan
                  </li>
                </FadeIn>
                <FadeIn delay={0.5} direction="right">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                    Each well serves 200+ community members daily
                  </li>
                </FadeIn>
                <FadeIn delay={0.6} direction="right">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                    Local teams maintain the infrastructure for sustainability
                  </li>
                </FadeIn>
              </ul>
            </div>

            {/* Right - Video/Image */}
            <div className="relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={WATER_WELL_IMAGES[1]}
                    alt="Child using water tap"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-slate-900/20 hover:bg-slate-900/30 transition-colors group">
                    <div className="min-w-11 min-h-11 w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-slate-800 ml-1" />
                    </div>
                  </button>
                </div>
                <p className="mt-5 text-center text-slate-600">
                  Your Support Helps Communities Access Clean Water
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          IMPACT GALLERY (Carousel)
      ======================================== */}
      <section className="py-16 lg:py-24 bg-slate-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 mb-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              The Impact You've Delivered
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Your generosity builds water infrastructure for communities across rural Kenya.
            </p>
          </FadeIn>
        </div>

        <div className="px-12 max-w-[1400px] mx-auto">
          <FadeIn delay={0.2} direction="up" fullWidth>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {GALLERY_IMAGES.map((img, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="rounded-2xl overflow-hidden shadow-xl border-none">
                        <div className="aspect-[4/3]">
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 w-12 h-12 border-none shadow-lg" />
              <CarouselNext className="right-4 w-12 h-12 border-none shadow-lg" />
            </Carousel>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          BENEFICIARY STORY
      ======================================== */}
      {/* ========================================
          BENEFICIARY STORY (Cinematic Card)
      ======================================== */}
      <section className="relative py-32 overflow-hidden">
        {/* Immersive Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${IMAGES.WATER.TANK_LANDSCAPE})` }}
        />
        <div className="absolute inset-0 bg-slate-900/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left - Story Text */}
            <div className="order-1">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-emerald-500/50"></span>
                  <span className="text-emerald-400 font-medium tracking-widest uppercase text-sm">Real Impact</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                  Amina's Story
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-6 text-lg text-zinc-200/90 leading-relaxed">
                  <p>
                    Amina Mwende, a mother of six from Kilifi County, used to walk three hours each day to collect water from a distant river. Her children often fell sick from waterborne diseases, and she had no time to earn income for her family.
                  </p>
                  <p>
                    When a water well was built in her village, everything changed. Her children are now healthy and attending school. Amina has started a small vegetable garden using the clean water, generating income for her family.
                  </p>

                  <blockquote className="mt-8 border-l-4 border-emerald-500 pl-6 py-2">
                    <p className="text-emerald-400 font-serif italic text-2xl leading-relaxed">
                      "This well didn't just give us water — it gave us our lives back."
                    </p>
                  </blockquote>
                </div>
              </FadeIn>
            </div>

            {/* Right - Floating Card Image */}
            <div className="order-2 perspective-1000">
              <FadeIn direction="left" delay={0.3} duration={1.2}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[2.6rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700 ease-out border-4 border-white/10">
                    <img
                      src={IMAGES.WATER.CHILD_TAP_2}
                      alt="Amina and her family"
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />

                    {/* Subtle inner gloss */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none" />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          VOLUNTEER QUOTE
      ======================================== */}
      <section className="py-20 lg:py-28 bg-slate-100">
        <div className="mx-auto max-w-7xl px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="right" delay={0.2}>
              <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.WATER.SIGNAGE_INSTALL_2}
                  alt="Field team installing well"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <FadeIn>
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-5">
                  From the Field
                </p>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                  <span className="text-emerald-600">"As a volunteer</span>— I see the relief a family feels when clean water flows for the first time. It's not just infrastructure; it's hope, health, and a future they never thought possible."
                </blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-slate-900">Hassan Ochieng</p>
                  <p className="text-slate-600">Field Operations Lead, Kilifi Region</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FAQ SECTION (Accordion)
      ======================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-8 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <Card className="bg-slate-50 border-none shadow-xl p-8 lg:p-10">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b-slate-200">
                    <AccordionTrigger className="text-base font-medium text-slate-800 hover:text-emerald-700 hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}
      <section className="py-24 lg:py-32 bg-slate-100">
        <div className="mx-auto max-w-4xl px-8 lg:px-12 text-center">
          <FadeIn>
            <Droplets className="w-16 h-16 mx-auto mb-8 text-emerald-600" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Transform a Community Today
            </h2>

            <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your contribution helps us build water wells that serve over 200 people for more than a decade. Give the gift of clean water.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-10 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a href={SQUARE_LINK} target="_blank" rel="noopener noreferrer" className="gap-3">
                <Heart className="h-5 w-5" />
                Donate Now
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
