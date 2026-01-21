import { FadeIn } from '@/components/ui/FadeIn';
import { Card } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';
import { BrandPalette } from './types';

interface AppealImpactProps {
    title: string;
    subtitle: string;
    images: Array<{
        src: string;
        alt: string;
    }>;
}

export function AppealImpact({ title, subtitle, images }: AppealImpactProps) {
    return (
        <section className={`py-16 lg:py-24 bg-${BrandPalette.background.slate}`}>
            <div className="mx-auto max-w-7xl px-8 lg:px-12 mb-10">
                <FadeIn>
                    <h2 className={`text-3xl sm:text-4xl font-bold text-${BrandPalette.text.main} leading-tight`}>
                        {title}
                    </h2>
                    <p className={`mt-4 text-lg text-${BrandPalette.text.muted} max-w-2xl`}>
                        {subtitle}
                    </p>
                </FadeIn>
            </div>

            <div className="px-12 max-w-[1400px] mx-auto">
                <FadeIn delay={0.2} direction="up" fullWidth>
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                        <CarouselContent className="-ml-4">
                            {images.map((img, i) => (
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
    );
}
