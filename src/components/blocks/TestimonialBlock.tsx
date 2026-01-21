import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Quote } from 'lucide-react';
import { TypographyTheme } from '../ui/Typography';

interface Testimonial {
    quote: string;
    name: string;
    location: string;
    image?: string;
}

interface TestimonialBlockProps {
    testimonial: Testimonial;
    theme?: TypographyTheme;
    className?: string;
}

const themeStyles: Record<TypographyTheme, { quoteIcon: string; bg: string; accent: string }> = {
    default: {
        quoteIcon: 'text-teal-200',
        bg: 'bg-gray-50',
        accent: 'text-teal-600',
    },
    blue: {
        quoteIcon: 'text-teal-200',
        bg: 'bg-gray-50',
        accent: 'text-teal-600',
    },
    rose: {
        quoteIcon: 'text-rose-200',
        bg: 'bg-rose-50/50',
        accent: 'text-rose-600',
    },
    amber: {
        quoteIcon: 'text-amber-200',
        bg: 'bg-amber-50/50',
        accent: 'text-amber-600',
    },
};

export function TestimonialBlock({ testimonial, theme = 'default', className }: TestimonialBlockProps) {
    const styles = themeStyles[theme];

    return (
        <section className={cn('py-16 lg:py-24', styles.bg, className)}>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Quote Icon */}
                    <Quote className={cn('w-12 h-12 mx-auto mb-6', styles.quoteIcon)} />

                    {/* Quote Text */}
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed text-balance">
                        "{testimonial.quote}"
                    </blockquote>

                    {/* Attribution */}
                    <div className="mt-8 flex flex-col items-center gap-3">
                        {/* Photo */}
                        {testimonial.image && (
                            <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Name & Location */}
                        <div>
                            <div className={cn('font-semibold', styles.accent)}>
                                {testimonial.name}
                            </div>
                            <div className="text-sm text-gray-500">
                                {testimonial.location}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
