'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    duration?: number;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '', duration = 1.2 }: FadeInProps) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 }
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // Premium smooth easing curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ParallaxImage({ src, alt, className = '' }: { src: string, alt: string, className?: string }) {
    return (
        <div className={`overflow-hidden relative ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                initial={{ scale: 1.2, y: -20 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                    duration: 2.0, // Slower, more deliberate parallax reveal
                    ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
}
