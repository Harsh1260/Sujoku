'use client';

import { useState, useEffect, useRef } from 'react';
import { FadeIn } from '../Animations';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function PortfolioSection() {
    const [activeIdx, setActiveIdx] = useState<number>(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isPausedRef = useRef(false);

    const portfolioItems = [
        { id: 1, title: 'Serene Treatment Rooms', category: 'Environment', desc: 'Tranquil spaces designed for profound relaxation and healing.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop' },
        { id: 2, title: 'Precision Tools', category: 'Equipment', desc: 'State-of-the-art tools for accurate meridian stimulation.', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop' },
        { id: 3, title: 'Detailed Diagnosis', category: 'Process', desc: 'Comprehensive energy mapping before every holistic treatment.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop' },
        { id: 4, title: 'Energy Mapping', category: 'Therapy', desc: 'Rebalancing your vital flow through focused acupressure points.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop' },
    ];

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (!isPausedRef.current) {
                setActiveIdx((prev) => (prev + 1) % portfolioItems.length);
            }
        }, 5000);
    };

    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleMouseEnter = (idx: number) => {
        isPausedRef.current = true;
        setActiveIdx(idx);
    };

    const handleMouseLeave = () => {
        isPausedRef.current = false;
        startTimer();
    };

    return (
        <section id="portfolio" className="bg-background text-foreground w-full py-24 px-4 sm:px-8 border-t border-border/50 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <FadeIn className="w-full text-center space-y-6 mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wide uppercase shadow-sm">
                        Our Portfolio
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">Glimpses of healing</h2>
                    <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                        A visual journey through our clinic, precision techniques, and the tranquil environments we curate for your recovery.
                    </p>
                </FadeIn>

                {/* Accordion Gallery */}
                <div
                    className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] lg:h-[600px] gap-2 md:gap-3 select-none"
                    onMouseLeave={handleMouseLeave}
                >
                    {portfolioItems.map((item, idx) => {
                        const isActive = activeIdx === idx;

                        return (
                            <div
                                key={item.id}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                style={{
                                    // Native CSS flex-grow transition — zero JS overhead, buttery smooth
                                    flexGrow: isActive ? 4 : 1,
                                    flexShrink: 1,
                                    flexBasis: 0,
                                    minWidth: 0,
                                    transition: 'flex-grow 0.7s cubic-bezier(0.76, 0, 0.24, 1)',
                                }}
                                className="relative rounded-4xl overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(74,58,52,0.1)]"
                            >
                                {/* Background Image — CSS transition for scale + opacity */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        transform: isActive ? 'scale(1.06)' : 'scale(1)',
                                        opacity: isActive ? 1 : 0.5,
                                        transition: 'transform 0.7s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.7s cubic-bezier(0.76, 0, 0.24, 1)',
                                        willChange: 'transform, opacity',
                                    }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div
                                    style={{
                                        opacity: isActive ? 1 : 0.45,
                                        transition: 'opacity 0.7s cubic-bezier(0.76, 0, 0.24, 1)',
                                    }}
                                    className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-[#1D2418] via-[#252D1C]/60 to-transparent pointer-events-none"
                                />

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end p-6 md:p-8 pointer-events-none overflow-hidden">

                                    {/* Category Tag */}
                                    <span
                                        style={{
                                            opacity: isActive ? 1 : 0.7,
                                            transform: isActive ? 'translateY(0)' : 'translateY(6px)',
                                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                                            display: 'inline-block',
                                            alignSelf: 'flex-start',
                                            marginBottom: isActive ? '12px' : '0px',
                                        }}
                                        className={`whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase
                                            ${isActive
                                                ? 'text-[#C4B2A8] bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur-sm'
                                                : 'text-[#F8F5F1] hidden md:inline-block'
                                            }`}
                                    >
                                        {item.category}
                                    </span>

                                    {/* Title + Description */}
                                    <motion.div
                                        animate={{
                                            opacity: isActive ? 1 : 0,
                                            y: isActive ? 0 : 18,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: isActive ? 0.12 : 0,
                                        }}
                                    >
                                        <h3 className="text-[#F8F5F1] text-2xl md:text-3xl font-medium tracking-tight mb-1 whitespace-nowrap">
                                            {item.title}
                                        </h3>
                                        <p
                                            style={{
                                                opacity: isActive ? 0.75 : 0,
                                                transition: `opacity 0.4s ease ${isActive ? '0.2s' : '0s'}`,
                                            }}
                                            className="text-[#EDE8DC] text-sm md:text-base font-light whitespace-normal md:whitespace-nowrap"
                                        >
                                            {item.desc}
                                        </p>
                                    </motion.div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                <FadeIn delay={0.4} className="mt-20">
                    <Link href="/gallery" className="group inline-flex items-center gap-2 bg-primary/5 border border-primary/20 text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_rgba(117,85,75,0.25)]">
                        Explore Full Gallery
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </FadeIn>

            </div>
        </section>
    );
}
