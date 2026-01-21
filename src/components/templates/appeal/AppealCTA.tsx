import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/FadeIn';

interface AppealCTAProps {
    title: string; // Removed Icon prop
    text: string;
    ctaLink: string;
    ctaText?: string;
}

export function AppealCTA({
    title,
    text,
    ctaLink,
    ctaText = "Donate Now"
}: AppealCTAProps) {
    return (
        <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
            <div className="mx-auto max-w-4xl px-8 lg:px-12 text-center">
                <FadeIn>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-gray-900 mb-6">
                        {title}
                    </h2>

                    {/* Signature Divider */}
                    <div className="w-12 h-px bg-teal-200 mx-auto mb-8" />

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {text}
                    </p>

                    <Button
                        asChild
                        size="lg"
                        className="rounded-none bg-teal-800 hover:bg-teal-700 text-white h-14 px-10 text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                        <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="gap-3">
                            {ctaText}
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
