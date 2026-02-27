'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedNumberProps {
    value: number;
    duration?: number;
    delay?: number;
    className?: string;
    suffix?: string;
}

export function AnimatedNumber({
    value,
    duration = 2, // framer-motion useSpring duration is in seconds or different config. Let's use standard framer-motion config
    delay = 0,
    className = "",
    suffix = ""
}: AnimatedNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration * 1000, // spring duration in ms usually but we use stiffness/damping mostly
        bounce: 0,
    });
    // The margin might be causing issues depending on container overflow
    const isInView = useInView(ref, { once: true, amount: "some" });

    useEffect(() => {
        if (isInView) {
            const timeoutId = setTimeout(() => {
                motionValue.set(value);
            }, delay * 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [motionValue, isInView, value, delay]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // Determine formatting based on the magnitude of the value
                let formattedValue;
                if (value >= 1000) {
                    // For things like 10k+, value passed might be 10000 -> 10k
                    formattedValue = Intl.NumberFormat('en-US', {
                        notation: "compact",
                        maximumFractionDigits: 1
                    }).format(latest);
                } else {
                    formattedValue = Math.round(latest).toString();
                }

                ref.current.textContent = `${formattedValue}${suffix}`;
            }
        });
    }, [springValue, value, suffix]);

    return <span ref={ref} className={className}>0{suffix}</span>;
}
