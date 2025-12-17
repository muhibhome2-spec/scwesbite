'use client';

import { motion } from 'framer-motion';
import { SectionHeading, SubHeading, BodyText } from '../components/ui/Typography';
import { Plane, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const ITINERARY = [
    {
        day: 'Day 1-2',
        title: 'Arrival & Orientation',
        desc: 'Land in Nairobi, transfer to hotel. Orientation dinner with local team and cultural briefing.'
    },
    {
        day: 'Day 3-5',
        title: 'Field Projects',
        desc: 'Travel to Garissa. Hands-on participation in water well commissioning and school supply distribution.'
    },
    {
        day: 'Day 6',
        title: 'Community Feast',
        desc: 'Grand celebration with the adopted village. Traditional meal sharing and community dialogue.'
    },
    {
        day: 'Day 7-8',
        title: 'Safari & Reflection',
        desc: 'Masai Mara Safari experience followed by a reflection circle on the impact of the journey.'
    },
    {
        day: 'Day 9',
        title: 'Departure',
        desc: 'Souvenir shopping and transfer to airport.'
    }
];

export function SoulCaravanFeature() {
    return (
        <div className="pt-24 lg:pt-32 pb-20 bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive-100 text-olive-800 text-xs font-bold uppercase tracking-widest mb-6 border border-olive-200">
                        <Plane className="w-4 h-4" />
                        Next Trip: August 2026
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-geist font-bold text-brand-primary-dark mb-8">
                        Journey with <br className="hidden sm:block" />
                        <span className="text-olive-600">Soul Caravan</span>
                    </h1>

                    <BodyText className="text-xl text-gray-600 max-w-2xl mx-auto">
                        More than a trip—it's a transformative experience. Witness the impact of your charity first-hand, connect with beneficiaries, and explore the beauty of Kenya.
                    </BodyText>
                </motion.div>
            </div>

            {/* Itinerary Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <SectionHeading className="mb-12 text-center text-brand-primary-dark">The Itinerary</SectionHeading>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ITINERARY.map((item, i) => (
                        <motion.div
                            key={item.day}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <span className="block text-olive-600 font-bold text-sm uppercase tracking-widest mb-2">{item.day}</span>
                            <SubHeading className="text-2xl font-bold mb-4 text-brand-primary-dark">{item.title}</SubHeading>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-primary rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
                    {/* Background noise texture */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover" />

                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-4xl font-bold font-geist mb-6">Ready to join the caravan?</h2>
                        <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
                            Spots are limited to 20 participants per cohort to ensure an intimate and impactful experience.
                        </p>

                        {/* External Link for Join Now */}
                        <a
                            href="https://forms.google.com/example-form-id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-brand-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-olive-50 transition-colors shadow-xl"
                        >
                            Apply for 2026 Cohort
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
