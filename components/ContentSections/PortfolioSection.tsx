import { useState } from 'react';
import { FadeIn } from '../Animations';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function PortfolioSection() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    // Array of premium, themed images for the portfolio
    const portfolioItems = [
        { id: 1, title: 'Serene Treatment Rooms', category: 'Environment', desc: 'Tranquil spaces designed for profound relaxation and healing.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop' },
        { id: 2, title: 'Precision Tools', category: 'Equipment', desc: 'State-of-the-art tools for accurate meridian stimulation.', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop' },
        { id: 3, title: 'Detailed Diagnosis', category: 'Process', desc: 'Comprehensive energy mapping before every holistic treatment.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop' },
        { id: 4, title: 'Energy Mapping', category: 'Therapy', desc: 'Rebalancing your vital flow through focused acupressure points.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop' },
    ];

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

                {/* Expanding Accordion Gallery */}
                <div
                    className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px] lg:h-[600px] gap-2 md:gap-4 select-none"
                    onMouseLeave={() => setHoveredIdx(null)}
                >
                    {portfolioItems.map((item, idx) => {
                        const isHovered = hoveredIdx === idx;
                        const isAnyHovered = hoveredIdx !== null;

                        return (
                            <motion.div
                                key={item.id}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                // Desktop logic: hover expands flex-grow, others shrink. Mobile logic: height expands.
                                animate={{
                                    flex: isHovered ? 4 : (isAnyHovered ? 1 : 1),
                                }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                className="relative rounded-4xl overflow-hidden cursor-pointer bg-card shadow-[0_8px_30px_rgba(74,58,52,0.08)] group basis-1/4"
                            >
                                {/* Background Image */}
                                <motion.img
                                    src={item.img}
                                    alt={item.title}
                                    animate={{
                                        scale: isHovered ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'mix-blend-normal opacity-100' : 'mix-blend-multiply opacity-50 sepia-30'
                                        }`}
                                />

                                {/* Always-on subtle vignette */}
                                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(74,58,52,0.1)] pointer-events-none" />

                                {/* Gradient Overlay - Thickens when hovered to read text */}
                                <motion.div
                                    animate={{
                                        opacity: isHovered ? 0.85 : 0.4
                                    }}
                                    className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[#251E1C] via-[#251E1C]/50 to-transparent transition-opacity duration-500 pointer-events-none"
                                />

                                {/* Text Content */}
                                <AnimatePresence>
                                    <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                                        <div className="flex flex-col overflow-hidden">

                                            {/* Category Tag - Always visible, but styled differently */}
                                            <motion.div
                                                layout="position"
                                                className={`transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0 mb-3' : 'opacity-80 translate-y-4'}`}
                                            >
                                                <span className={`inline-block whitespace-nowrap text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase ${isHovered ? 'text-[#C4B2A8] bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm' : 'text-[#F8F5F1] origin-bottom-left -rotate-90 md:rotate-0 absolute md:relative bottom-12 md:bottom-0 left-6 md:left-0'}`}>
                                                    {item.category}
                                                </span>
                                            </motion.div>

                                            {/* Title and Description - Only full opacity on hover */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{
                                                    opacity: isHovered ? 1 : 0,
                                                    y: isHovered ? 0 : 20,
                                                    height: isHovered ? 'auto' : 0
                                                }}
                                                className="flex flex-col gap-2 overflow-hidden"
                                            >
                                                <h3 className="text-[#F8F5F1] text-2xl md:text-3xl font-medium tracking-tight whitespace-nowrap">
                                                    {item.title}
                                                </h3>
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: isHovered ? 0.8 : 0 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="text-[#EBE5DF] text-sm md:text-base font-light line-clamp-2 md:line-clamp-none whitespace-normal md:whitespace-nowrap md:w-[400px]"
                                                >
                                                    {item.desc}
                                                </motion.p>
                                            </motion.div>

                                        </div>
                                    </div>
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                <FadeIn delay={0.4} className="mt-20">
                    <button className="group flex items-center gap-2 bg-primary/5 border border-primary/20 text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-sm hover:shadow-[0_8px_30px_rgba(117,85,75,0.25)]">
                        Explore Full Gallery
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </FadeIn>

            </div>
        </section>
    );
}
