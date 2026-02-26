'use client';

import React, { useState } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, ActivityIcon } from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Therapy',
        links: [
            { title: 'Sujoku Method', href: '#about' },
            { title: 'Treatments', href: '#services' },
            { title: 'Price List', href: '#price-list' },
            { title: 'Success Stories', href: '#portfolio' },
        ],
    },
    {
        label: 'Clinic',
        links: [
            { title: 'Our Team', href: '#team' },
            { title: 'Contact Us', href: '#contacts' },
            { title: 'Privacy Policy', href: '#' },
            { title: 'Terms of Services', href: '#' },
        ],
    },
    {
        label: 'Resources',
        links: [
            { title: 'Healing Blog', href: '#' },
            { title: 'Patient FAQs', href: '#faq' },
            { title: 'Wellness Guide', href: '#' },
        ],
    },
    {
        label: 'Social Links',
        links: [
            { title: 'Facebook', href: '#', icon: FacebookIcon },
            { title: 'Instagram', href: '#', icon: InstagramIcon },
            { title: 'Youtube', href: '#', icon: YoutubeIcon },
            { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
        ],
    },
];

export function Footer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <footer
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="md:rounded-t-[3rem] relative w-full flex flex-col items-center justify-center rounded-t-3xl border-t border-border/50 bg-[radial-gradient(ellipse_at_top,var(--color-primary)_0%,transparent_70%)] opacity-95 px-6 py-16 lg:py-24 overflow-hidden mt-8"
        >
            {/* Spotlight Overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 will-change-transform"
                style={{
                    opacity: isHovering ? 0.25 : 0,
                    background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--color-secondary) 0%, transparent 50%)`
                }}
            />
            <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl -z-10" />
            <div className="bg-primary/20 absolute top-0 right-1/2 left-1/2 h-px w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md" />

            <div className="grid w-full max-w-6xl gap-12 xl:grid-cols-3 xl:gap-8 relative z-10">
                <AnimatedContainer className="space-y-6 flex flex-col items-start">
                    <div className="flex items-center gap-3 text-primary">
                        <ActivityIcon className="size-8" />
                        <span className="text-xl font-medium tracking-wide">Sujoku</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
                        Restoring your body's natural balance through ancient wisdom and modern precision.
                    </p>
                    <p className="text-muted-foreground/70 text-xs mt-8 md:mt-auto">
                        © {new Date().getFullYear()} Krishna Health Center. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-sm font-medium tracking-wider text-foreground mb-6 uppercase">{section.label}</h3>
                                <ul className="text-muted-foreground space-y-4 text-sm font-light">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                className="hover:text-secondary hover:translate-x-1 inline-flex items-center transition-all duration-300"
                                            >
                                                {link.icon && <link.icon className="me-2 size-4" />}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
