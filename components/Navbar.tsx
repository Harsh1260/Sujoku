'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const navItems = [
    { href: '#about', label: 'About us' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#team', label: 'Team' },
    { href: '#price-list', label: 'Price list' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacts', label: 'Contacts' }
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    // Natively track and smooth progress without re-rendering the whole Navbar component
    const rawProgress = useMotionValue(0);
    const smoothProgress = useSpring(rawProgress, {
        stiffness: 70,
        damping: 20,
        restDelta: 0.001
    });

    // Map the smoothed 0-100 number to a percentage string for CSS width
    const progressWidth = useTransform(smoothProgress, (val) => `${val}%`);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);

            // Calculate overall page progress bounded strictly by #about and #contacts
            const aboutSection = document.querySelector('#about') as HTMLElement;
            const contactsSection = document.querySelector('#contacts') as HTMLElement;

            if (aboutSection && contactsSection) {
                // Determine absolute scroll offsets of the headers
                const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
                const contactsTop = contactsSection.getBoundingClientRect().top + window.scrollY;

                // Sync start/end exactly with the active navigation link logic
                const offset = window.innerHeight / 2;
                const startScrollY = aboutTop - offset;
                const endScrollY = contactsTop - offset;

                if (endScrollY > startScrollY) {
                    const progress = ((scrollTop - startScrollY) / (endScrollY - startScrollY)) * 100;
                    rawProgress.set(Math.min(Math.max(progress, 0), 100)); // Native update, no React re-render
                } else {
                    rawProgress.set(0);
                }
            } else {
                rawProgress.set(0);
            }

            let currentActive = '';

            // Find the active section based on scroll position
            navItems.forEach((item) => {
                const section = document.querySelector(item.href) as HTMLElement;
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top + scrollTop;
                    const sectionHeight = section.offsetHeight;

                    const viewportHeight = window.innerHeight;
                    const offset = viewportHeight / 2;

                    // Activate when the top crosses the middle, stay active until the bottom crosses the middle
                    if (scrollTop >= sectionTop - offset && scrollTop < sectionTop + sectionHeight - offset) {
                        currentActive = item.href;
                    }
                }
            });

            setActiveSection(currentActive);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Run immediately to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [rawProgress]);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <nav
                className={`
                    relative flex items-center justify-between px-8 py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden
                    ${isScrolled
                        ? 'w-full max-w-5xl bg-background/70 backdrop-blur-xl border border-border/50 shadow-2xl rounded-full text-foreground'
                        : 'w-full max-w-full bg-transparent text-foreground py-6 rounded-none'
                    }
                `}
            >
                {/* Left: Logo - Peacock Feather SVG */}
                <div className="flex items-center w-1/3">
                    <div className={`w-12 h-12 relative flex items-center justify-start mix-blend-difference hover:mix-blend-normal transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 ${!isScrolled ? '-rotate-90' : 'rotate-0'}`}>
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg scale-150">
                            <defs>
                                <radialGradient id="featherGradient" cx="0.5" cy="0.4" r="0.5" fx="0.5" fy="0.4">
                                    <stop offset="0%" stopColor="#2a9d8f" />
                                    <stop offset="50%" stopColor="#264653" />
                                    <stop offset="100%" stopColor="#1b4332" />
                                </radialGradient>
                            </defs>
                            {/* Stem */}
                            <path d="M50 90 C 45 60, 55 30, 50 10" stroke="#a3b18a" strokeWidth="2" strokeLinecap="round" />
                            {/* Outer Plumage Form (Teal / Emerald) */}
                            <path d="M50 10 C 20 20, 10 50, 50 65 C 90 50, 80 20, 50 10 Z" fill="url(#featherGradient)" opacity="0.9" />
                            {/* Inner Eye (Deep Blue) */}
                            <path d="M50 25 C 35 30, 35 45, 50 55 C 65 45, 65 30, 50 25 Z" fill="#003566" />
                            {/* Inner Core (Vibrant Turquoise/Cyan) */}
                            <ellipse cx="50" cy="40" rx="8" ry="10" fill="#00b4d8" />
                            {/* Eye detail (Gold/Yellow) */}
                            <circle cx="50" cy="42" r="3" fill="#ffb703" />
                        </svg>
                    </div>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex items-center justify-center w-1/3">
                    <div className="flex items-center space-x-8 text-sm font-medium tracking-wide relative pb-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition-colors relative z-10 whitespace-nowrap 
                                    ${activeSection === item.href ? 'text-primary' : 'hover:text-primary'}
                                `}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Common Page Scroll Progress Bar - Scoped to Link Text */}
                        <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary/20 rounded-full overflow-hidden transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                            <motion.div
                                className="h-full bg-linear-to-r from-primary to-secondary rounded-full"
                                style={{ width: progressWidth }}
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Empty space to balance flex distribution */}
                <div className="flex items-center justify-end w-1/3">
                    {/* Empty for visual balance */}
                </div>
            </nav>
        </div>
    );
}
