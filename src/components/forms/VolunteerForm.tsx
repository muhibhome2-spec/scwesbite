'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function VolunteerForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Volunteer Form Data:', formData);
        alert('Thank you! We will contact you shortly.');
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold font-geist text-brand-primary-dark mb-2">Submit Your Interest</h2>
            <p className="text-gray-600 mb-8">Fill out the form below and we'll guide you on how you can contribute and be part of our efforts to create positive change.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl shadow-lg hover:bg-brand-primary-hover transition-colors flex items-center justify-center gap-2"
                >
                    <Send size={18} />
                    Submit Interest
                </motion.button>
            </form>
        </div>
    );
}
