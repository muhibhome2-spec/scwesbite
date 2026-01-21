import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Validated ImageKit URLs provided by User
const LEADERSHIP_TEAM = [
    {
        name: "Uthman Hanif",
        role: "Founder",
        bio: "Visionary leader dedicated to bridging the gap between donors and communities in need through direct, transparent action.",
        image: "https://ik.imagekit.io/dzmabcda0/WhatsApp%20Image%202026-01-20%20at%202.47.57%20PM.jpeg",
        imagePosition: "object-top", // User: "Perfect lock it"
    },
    {
        name: "Yahya Jeilan",
        role: "Operations Manager",
        bio: "Ensuring efficient delivery of aid and smooth coordination of all ground programs and volunteer initiatives.",
        image: "https://ik.imagekit.io/dzmabcda0/WhatsApp%20Image%202026-01-20%20at%202.48.19%20PM.jpeg",
        imagePosition: "object-[center_25%]", // User: "Lift up... just a bit" (Cropping top 25% headroom)
    }
];

export function Leadership() {
    return (
        <section className="min-h-screen bg-white pt-24 lg:pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Back Navigation */}
                <div className="mb-12">
                    <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-teal-700 text-gray-500">
                        <Link to="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                {/* Editorial Header */}
                <div className="max-w-3xl mb-20">
                    <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Leadership</span>
                    <h1 className="text-4xl lg:text-6xl font-serif font-medium text-gray-900 mb-6">
                        Meet the team driving <br />
                        <span className="italic text-teal-700">real change.</span>
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                        Dedicated to transparency, efficiency, and direct impact.
                    </p>
                </div>

                {/* Team Grid - 2 Columns, Editorial Style */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
                    {LEADERSHIP_TEAM.map((member, index) => (
                        <motion.div
                            key={member.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Image - Strict 4:3 Aspect Ratio, Sharp Corners */}
                            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-8 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.imagePosition}`}
                                />
                                {/* Overlay Gradient for text readability if needed, but keeping clean for now */}
                            </div>

                            {/* Content - Minimalist Editorial */}
                            <div className="pr-4">
                                <span className="block text-teal-600 font-bold uppercase tracking-wider text-xs mb-2">
                                    {member.role}
                                </span>
                                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                                    {member.name}
                                </h3>
                                <div className="w-12 h-px bg-gray-200 mb-6" />
                                <p className="text-gray-500 leading-relaxed text-[15px]">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
