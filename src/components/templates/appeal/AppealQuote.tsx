import { FadeIn } from '@/components/ui/FadeIn';
import { BrandPalette } from './types';

interface AppealQuoteProps {
    image: string;
    imageAlt: string;
    label?: string;
    quote: React.ReactNode;
    author: string;
    role: string;
}

export function AppealQuote({
    image,
    imageAlt,
    label = "From the Field",
    quote,
    author,
    role
}: AppealQuoteProps) {
    return (
        <section className={`py-20 lg:py-28 bg-${BrandPalette.background.slate}`}>
            <div className="mx-auto max-w-7xl px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <FadeIn direction="right" delay={0.2}>
                        <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </FadeIn>
                    <div>
                        <FadeIn>
                            <p className={`text-sm font-semibold text-${BrandPalette.primary.DEFAULT} uppercase tracking-wider mb-5`}>
                                {label}
                            </p>
                            <blockquote className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-${BrandPalette.text.main} leading-snug`}>
                                {quote}
                            </blockquote>
                            <div className="mt-8">
                                <p className={`font-semibold text-${BrandPalette.text.main}`}>{author}</p>
                                <p className={`text-${BrandPalette.text.muted}`}>{role}</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
