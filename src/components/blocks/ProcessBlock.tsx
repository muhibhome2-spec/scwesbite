import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { SectionHeading, BodyText, TypographyTheme } from '../ui/Typography';
import { LucideIcon } from 'lucide-react';

interface Step {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface ProcessBlockProps {
    title?: string;
    subtitle?: string;
    steps: Step[];
    theme?: TypographyTheme;
    className?: string;
}

const themeStyles: Record<TypographyTheme, { iconBg: string; iconColor: string; connector: string; number: string }> = {
    default: {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        connector: 'bg-teal-200',
        number: 'text-teal-600',
    },
    blue: {
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600',
        connector: 'bg-teal-200',
        number: 'text-teal-600',
    },
    rose: {
        iconBg: 'bg-rose-100',
        iconColor: 'text-rose-600',
        connector: 'bg-rose-200',
        number: 'text-rose-600',
    },
    amber: {
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        connector: 'bg-amber-200',
        number: 'text-amber-600',
    },
};

export function ProcessBlock({
    title = 'How It Works',
    subtitle,
    steps,
    theme = 'default',
    className
}: ProcessBlockProps) {
    const styles = themeStyles[theme];

    return (
        <section className={cn('py-16 lg:py-24 bg-white', className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <SectionHeading theme={theme} className="mb-4">
                        {title}
                    </SectionHeading>
                    {subtitle && (
                        <BodyText size="lg" align="center" className="max-w-2xl mx-auto">
                            {subtitle}
                        </BodyText>
                    )}
                </div>

                {/* Steps - Desktop Horizontal */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Connector Line */}
                        <div className={cn(
                            'absolute top-12 left-[10%] right-[10%] h-0.5',
                            styles.connector
                        )} />

                        {/* Steps */}
                        <div className="grid grid-cols-4 gap-8">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        className="relative text-center"
                                    >
                                        {/* Icon Circle */}
                                        <div className={cn(
                                            'relative z-10 mx-auto w-24 h-24 rounded-full flex items-center justify-center',
                                            styles.iconBg
                                        )}>
                                            <Icon className={cn('w-10 h-10', styles.iconColor)} />
                                        </div>

                                        {/* Step Number */}
                                        <div className={cn('mt-4 text-sm font-bold uppercase tracking-wider', styles.number)}>
                                            Step {index + 1}
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-2 text-lg font-semibold text-gray-900">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Steps - Mobile Vertical */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                {/* Icon */}
                                <div className={cn(
                                    'flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center',
                                    styles.iconBg
                                )}>
                                    <Icon className={cn('w-6 h-6', styles.iconColor)} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className={cn('text-xs font-bold uppercase tracking-wider mb-1', styles.number)}>
                                        Step {index + 1}
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
