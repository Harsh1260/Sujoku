'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { FadeIn } from '../Animations';
import CountUp from '../CountUp';

export function AboutSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // We need to calculate the exact width of the carousel and viewport 
    // to know how far to move it horizontally.
    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                setCarouselWidth(carouselRef.current.scrollWidth);
                setViewportWidth(window.innerWidth);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const moveDistance = carouselWidth > viewportWidth ? -(carouselWidth - viewportWidth + 64) : 0;

    // 1. Horizontal Scroll (0 to 0.6) - Smoother, longer
    const x = useTransform(scrollYProgress, [0, 0.6], [0, moveDistance]);

    // 2. Zoom Last Card (0.6 to 0.85) - Less aggressive zoom, smoother transition
    const scaleLast = useTransform(scrollYProgress, [0.6, 0.85], [1, 25]);

    // 3. Crossfade Card out, About in (0.75 to 0.9)
    const opacityGalleryContainer = useTransform(scrollYProgress, [0.75, 0.8], [1, 0]);
    const opacityAbout = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
    const yAbout = useTransform(scrollYProgress, [0.8, 0.9], [50, 0]);

    // Track scroll progress to conditionally enable pointer events for About text
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.75 && !isAboutVisible) {
            setIsAboutVisible(true);
        } else if (latest <= 0.75 && isAboutVisible) {
            setIsAboutVisible(false);
        }
    });

    const images = [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <div id="about" ref={targetRef} className="h-[400vh] w-full bg-background relative border-t border-border mt-8">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                {/* Gallery Layer */}
                <motion.div style={{ opacity: opacityGalleryContainer }} className="absolute inset-0 flex flex-col justify-center pointer-events-none">
                    <div className="w-full max-w-7xl mx-auto px-8 mb-8 mt-12 md:mt-0">
                        <FadeIn>
                            <h3 className="text-3xl md:text-4xl font-light text-foreground">
                                Our Healing <span className="text-primary font-medium">Environment</span>
                            </h3>
                            <p className="text-muted-foreground mt-2 font-light max-w-md">
                                Experience a tranquil sanctuary meticulously designed to promote deep relaxation and holistic wellbeing.
                            </p>
                        </FadeIn>
                    </div>

                    <motion.div ref={carouselRef} style={{ x }} className="flex gap-8 px-8 md:px-16 w-max pb-16">
                        {images.map((src, index) => {
                            const isLast = index === images.length - 1;

                            return (
                                <motion.div
                                    key={index}
                                    style={isLast ? { scale: scaleLast } : {}}
                                    className={`
                                        relative h-[40vh] md:h-[50vh] w-[70vw] md:w-180 aspect-4/3 shrink-0 
                                        rounded-4xl overflow-hidden group shadow-2xl bg-muted/20
                                        ${isLast ? 'origin-center pointer-events-none' : ''}
                                    `}
                                >
                                    <img
                                        src={src}
                                        alt={`Clinic environment ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/60 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* About Content Layer (Fades in over the zoomed card) */}
                <motion.div
                    style={{ opacity: opacityAbout, y: yAbout }}
                    className={`absolute inset-0 z-10 flex items-center justify-center p-8 bg-background/5 backdrop-blur-[2px] 
                        overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                        ${isAboutVisible ? 'pointer-events-auto' : 'pointer-events-none'}
                    `}
                >
                    <div className="max-w-4xl w-full mx-auto my-auto pt-20 pb-32">
                        <FadeIn delay={0.2}>
                            <h2 className="text-5xl md:text-6xl font-light mb-8 text-foreground">
                                About <span className="text-primary font-medium">Krishna Health Center</span>
                            </h2>
                            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                <p>
                                    Welcome to Krishna Health Center, a sanctuary of holistic healing and ancient wisdom
                                    nestled in the heart of the city. We blend traditional therapies with modern understanding
                                    to provide unparalleled care.
                                </p>
                                <p>
                                    Our philosophy is rooted in the belief that true health is a harmonious balance of mind,
                                    body, and spirit. Through specialized treatments like Sujok therapy, acupuncture, and
                                    personalized healing regimens, we aim to awaken your body's innate healing potential.
                                </p>
                                <p>
                                    Our founder and lead practitioner brings decades of experience from across the globe,
                                    ensuring every step of your healing journey is guided by mastery and compassion.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 border-t border-border/50 pt-8 md:pt-12">
                                <div className="text-center md:text-left">
                                    <h4 className="text-2xl sm:text-3xl font-medium mb-1 md:mb-2 text-primary">
                                        <CountUp to={15} />+
                                    </h4>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Years of Experience</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-2xl sm:text-3xl font-medium mb-1 md:mb-2 text-primary">
                                        <CountUp to={10} />k+
                                    </h4>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Patients Healed</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-2xl sm:text-3xl font-medium mb-1 md:mb-2 text-primary">
                                        <CountUp to={5} />+
                                    </h4>
                                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Specialized Therapies</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
