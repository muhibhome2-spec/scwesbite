'use client';

import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    fullWidth?: boolean;
    viewport?: UseInViewOptions;
}

export function FadeIn({
    children,
    className = '',
    delay = 0,
    duration = 0.95,
    direction = 'up',
    fullWidth = false,
    viewport = { once: true, margin: '-10%' },
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
        none: { y: 0, x: 0 },
    };

    const initial = {
        opacity: 0,
        scale: 0.95,
        ...directionOffset[direction],
    };

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : initial}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Cubic bezier for "cinematic" easeOut
            }}
            className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
}
