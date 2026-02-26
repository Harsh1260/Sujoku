'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, CalendarDays, ArrowRight } from 'lucide-react';

interface Hero3DProps {
    startAnimation?: boolean;
}

export function Hero3D({ startAnimation = true }: Hero3DProps) {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollY } = useScroll();

    // Trigger animations only when preloader finishes
    useEffect(() => {
        if (startAnimation) {
            const timer = setTimeout(() => setIsMounted(true), 100);
            return () => clearTimeout(timer);
        }
    }, [startAnimation]);

    // Premium Scroll Parallax Effects
    const yOrbs = useTransform(scrollY, [0, 1000], [0, 300]);
    const yContent = useTransform(scrollY, [0, 1000], [0, 150]);
    const opacityContent = useTransform(scrollY, [0, 500], [1, 0]);

    // Animation Variants for orchestrated entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } // Buttery smooth easing
        }
    };

    return (
        <section className="sticky top-0 w-full h-screen bg-background flex items-center justify-center overflow-hidden">

            {/* 1. BACKGROUND: Aurora Glowing Orbs */}
            <motion.div style={{ y: yOrbs }} className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
                {/* Deep Teal Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[800px] h-[800px] bg-primary rounded-full blur-[120px] opacity-20 mix-blend-multiply translate-x-1/4 -translate-y-1/4"
                />
                {/* Radiant Purple Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -60, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute w-[600px] h-[600px] bg-secondary rounded-full blur-[150px] opacity-40 mix-blend-multiply -translate-x-1/3 translate-y-1/4"
                />
                {/* Bright Cyan Core (Aurora bridge) */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[400px] h-[400px] bg-[#8B7B6A] rounded-full blur-[100px] opacity-30 mix-blend-multiply"
                />

                {/* Noise Texture Overlay for Premium Grain */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
            </motion.div>

            {/* 2. FOREGROUND: Mystical Glassmorphism Content */}
            <motion.div
                style={{ y: yContent, opacity: opacityContent }}
                variants={containerVariants}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center text-center mt-[-10vh]"
            >
                {/* Top Badge */}
                <motion.div variants={itemVariants} className="mb-8 relative group cursor-default">
                    <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-secondary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative flex items-center gap-3 px-6 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-xl shadow-2xl">
                        <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                        <span className="text-foreground/80 tracking-[0.25em] text-xs font-semibold uppercase">Advanced Sujoku Therapy</span>
                    </div>
                </motion.div>

                {/* Massive Typography */}
                <motion.h1 variants={itemVariants} className="text-6xl sm:text-8xl lg:text-[10rem] font-extralight tracking-tighter leading-[0.9] text-foreground">
                    <span className="block italic text-foreground/90">Awaken</span>
                    <span className="block mt-2 font-medium bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-primary/60 drop-shadow-[0_4px_10px_rgba(122,91,77,0.15)]">
                        Your Energy.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p variants={itemVariants} className="mt-10 max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-foreground/60">
                    Experience the pinnacle of holistic healing. We seamlessly blend ancient Korean acupressure wisdom with modern therapeutic mastery.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div variants={itemVariants} className="mt-14 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                    {/* Primary Button */}
                    <button className="relative group overflow-hidden rounded-full font-medium text-lg text-primary-foreground shadow-[0_8px_30px_rgba(122,91,77,0.2)] hover:shadow-[0_8px_40px_rgba(122,91,77,0.3)] transition-all duration-500 hover:scale-105">
                        {/* Glass Background */}
                        <div className="absolute inset-0 bg-primary/90 backdrop-blur-md rounded-full" />
                        {/* Hover Gradient Sweep */}
                        <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                        <span className="relative z-10 px-10 py-5 flex items-center justify-center gap-3">
                            <CalendarDays className="w-5 h-5 text-primary-foreground/80" />
                            Book a Session
                        </span>
                    </button>

                    {/* Secondary Button */}
                    <button className="group relative px-10 py-5 rounded-full font-medium text-lg text-foreground/80 border border-foreground/10 bg-transparent hover:bg-foreground/5 backdrop-blur-sm transition-all duration-500 flex items-center justify-center gap-2">
                        Explore Methods
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

            </motion.div>

            {/* 3. SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isMounted ? 1 : 0 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
            >
                <div className="w-px h-20 bg-linear-to-b from-foreground/0 via-foreground/20 to-foreground/0 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [-20, 80] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
                    />
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40">Scroll to Explore</span>
            </motion.div>

        </section>
    );
}
