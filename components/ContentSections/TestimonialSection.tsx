'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { FadeIn } from '../Animations';

const testimonials = [
    {
        name: "Sarah Jenkins", role: "Yoga Instructor", rating: 5,
        text: "Sujoku completely changed my approach to energy healing. My chronic back pain is virtually gone.",
        src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
        className: 'w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] -translate-y-4 md:-translate-y-8 object-cover shadow-lg border border-white/10'
    },
    {
        name: "David Chen", role: "Tech Executive", rating: 5,
        text: "The most relaxing, revitalizing experience I've had. It's like a reset button for my nervous system.",
        src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
        className: 'w-32 h-40 md:w-48 md:h-56 rounded-2xl md:rounded-[2.5rem] translate-y-6 md:translate-y-12 object-cover shadow-lg border border-white/10'
    },
    {
        name: "Elena Rodriguez", role: "Professional Athlete", rating: 5,
        text: "Crucial for my recovery routine. The acupressure targets exact tension points I couldn't reach.",
        src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
        className: 'w-28 h-28 md:w-40 md:h-40 rounded-2xl md:rounded-[2rem] -translate-y-2 md:-translate-y-6 object-cover shadow-lg border border-white/10'
    },
    {
        name: "Michael Chang", role: "Architect", rating: 4,
        text: "A beautiful, serene atmosphere paired with highly knowledgeable therapists. Highly recommend.",
        src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
        className: 'w-36 h-24 md:w-56 md:h-36 rounded-2xl md:rounded-[2rem] translate-y-4 md:translate-y-8 object-cover shadow-lg border border-white/10'
    },
    {
        name: "Aisha Patel", role: "Wellness Coach", rating: 5,
        text: "An absolute masterclass in holistic wellness. The Aurora atmosphere alone is healing.",
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        className: 'w-24 h-32 md:w-36 md:h-48 rounded-2xl md:rounded-[2.5rem] -translate-y-6 md:-translate-y-10 object-cover shadow-lg border border-white/10'
    },
    {
        name: "James Wilson", role: "Author", rating: 5,
        text: "I go every week. It unlocks my creative blocks and completely destresses my mind.",
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        className: 'w-32 h-32 md:w-44 md:h-44 rounded-2xl md:rounded-[2.5rem] translate-y-8 md:translate-y-16 object-cover shadow-lg border border-white/10'
    },
    {
        name: "Sophia Martinez", role: "Designer", rating: 5,
        text: "The premium design matches the premium service. A flawless, luxurious healing journey.",
        src: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop',
        className: 'w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] -translate-y-4 md:-translate-y-4 object-cover shadow-lg border border-white/10'
    },
];

export function TestimonialSection() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const allTestimonials = [...testimonials, ...testimonials];

    // Lock background scroll when popup is open
    useEffect(() => {
        if (hoveredIdx !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to ensure scroll is restored if component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [hoveredIdx]);

    return (
        <section id="testimonials" className="relative py-24 w-full overflow-hidden bg-background flex flex-col items-center justify-center border-t border-foreground/5 min-h-screen">
            <FadeIn className="w-full text-center space-y-6 mb-20">
                <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase">
                    Testimonials
                </div>
                {/* Massive Heading */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                    Trusted by leaders <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground/60 to-foreground/40 font-medium">from various industries</span>
                </h2>
            </FadeIn>
            {/* Top: Right to Left Infinite Marquee of Portraits */}
            <style>{`
                @keyframes marquee-scroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-scroll {
                    animation: marquee-scroll 40s linear infinite;
                }
                .marquee-container:hover .animate-marquee-scroll {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Top: Right to Left Infinite Marquee of Portraits */}
            <div
                className="marquee-container w-full relative py-8 md:py-16 mb-8 overflow-visible flex items-center bg-foreground/2"
                onMouseLeave={() => setHoveredIdx(null)}
            >
                {/* Horizontal Gradient Fades for a cleaner look */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-linear-to-r from-background to-transparent z-40 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-linear-to-l from-background to-transparent z-40 pointer-events-none" />

                <div
                    className="flex gap-4 md:gap-8 items-center w-max animate-marquee-scroll"
                    style={{ animationPlayState: hoveredIdx !== null ? 'paused' : 'running' }}
                >
                    {/* Render the array twice to create seamless loop */}
                    {allTestimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="shrink-0 relative cursor-pointer"
                            onMouseEnter={() => setHoveredIdx(idx)}
                        >
                            {/* Portrait Image */}
                            <img
                                src={t.src}
                                alt={`Testimonial Portrait ${idx}`}
                                className={`${t.className} transition-all duration-500 ease-out ${hoveredIdx !== null && hoveredIdx !== idx ? 'grayscale blur-md opacity-30 shadow-none' : 'grayscale-0'}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Centered Pop-up for Hovered Image (Viewport Centered) */}
                <AnimatePresence>
                    {hoveredIdx !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%", rotate: -6 }}
                            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%", rotate: 2 }}
                            exit={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%", rotate: 4 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-1/2 left-1/2 z-100 pointer-events-none w-[85vw] sm:w-[400px] md:w-[460px] aspect-3/4 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 group/modal ring-1 ring-white/5"
                        >
                            {/* Zoomed Background Image with Parallax Drift */}
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1.25 }}
                                transition={{ duration: 20, ease: "linear" }}
                                src={allTestimonials[hoveredIdx].src}
                                className="absolute inset-0 w-full h-full object-cover transform-gpu"
                            />

                            {/* Premium Complex Gradients for Readability and Mood */}
                            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#060912]/50 to-[#060912]/95" />
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[#060912] to-transparent opacity-80" />
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] mix-blend-multiply" />

                            {/* Aurora Accent Glows inside the card */}
                            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-primary/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />
                            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-secondary/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />

                            {/* Text Content inside the zoomed image */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-left z-10">
                                {/* Stars with a premium glowing drop shadow */}
                                <div className="flex gap-1.5 mb-5 md:mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] ${i < allTestimonials[hoveredIdx].rating ? 'fill-yellow-400 text-yellow-400' : 'fill-white/10 text-white/20'}`} />
                                    ))}
                                </div>

                                {/* Refined Typography for Quote */}
                                <p className="text-white text-base md:text-xl font-light leading-snug mb-6 tracking-tight drop-shadow-md">
                                    "{allTestimonials[hoveredIdx].text}"
                                </p>

                                {/* Elegant Bottom Block */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-px bg-white/30" />
                                    <div>
                                        <h4 className="text-white font-medium text-sm md:text-base tracking-wide">{allTestimonials[hoveredIdx].name}</h4>
                                        <span className="text-white/60 font-medium text-[10px] uppercase tracking-[0.2em] mt-0.5 block">{allTestimonials[hoveredIdx].role}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom: Centered Typographic Layout */}
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-20 mt-4">

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed mb-12 font-light">
                    Learn why professionals trust our highly-effective Sujoku therapies to completely revitalize their inner energy and restore balance.
                </p>
            </div>

            {/* Subtle Background Glow to blend with Aurora Theme */}
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
