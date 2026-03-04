'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'Environment', 'Equipment', 'Process', 'Therapy', 'Team'];

const galleryItems = [
    { id: 1, title: 'Serene Treatment Rooms', category: 'Environment', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop', size: 'tall' },
    { id: 2, title: 'Precision Acupuncture Tools', category: 'Equipment', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop', size: 'wide' },
    { id: 3, title: 'Detailed Diagnosis Session', category: 'Process', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop', size: 'normal' },
    { id: 4, title: 'Energy Mapping Ritual', category: 'Therapy', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop', size: 'tall' },
    { id: 5, title: 'Healing Stone Arrangement', category: 'Therapy', img: 'https://images.unsplash.com/photo-1604349124022-8bb3b2ebe3e8?q=80&w=1200&auto=format&fit=crop', size: 'normal' },
    { id: 6, title: 'Expert Consultation', category: 'Process', img: 'https://images.unsplash.com/photo-1630959304803-1d01164c1cde?q=80&w=1200&auto=format&fit=crop', size: 'wide' },
    { id: 7, title: 'Botanical Therapy Garden', category: 'Environment', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop', size: 'normal' },
    { id: 8, title: 'Miniature Needle Therapy', category: 'Equipment', img: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=1200&auto=format&fit=crop', size: 'normal' },
    { id: 9, title: 'Meditation & Recovery', category: 'Therapy', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop', size: 'tall' },
    { id: 10, title: 'Clinic Reception', category: 'Environment', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop', size: 'wide' },
    { id: 11, title: 'Seed Therapy Preparation', category: 'Process', img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop', size: 'normal' },
    { id: 12, title: 'Specialist at Work', category: 'Team', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop', size: 'normal' },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightbox, setLightbox] = useState<typeof galleryItems[0] | null>(null);

    const filtered = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#EDE8DC]">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-40 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-start"
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors mb-10 text-sm font-medium group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold tracking-widest uppercase mb-6">
                            Our Gallery
                        </div>
                        <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-[#2A3320] leading-[0.95] mb-6">
                            Visual<br />
                            <span className="italic text-primary/80">Sanctuary</span>
                        </h1>
                        <p className="text-lg md:text-xl font-light text-[#5D6B4A] max-w-xl leading-relaxed">
                            A curated window into our world — where ancient healing meets modern design, precision meets tranquility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-20 z-30 bg-[#EDE8DC]/80 backdrop-blur-xl border-y border-[#C4C0AC]/60 py-4 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-primary text-primary-foreground border-primary shadow-[0_4px_20px_rgba(75,191,90,0.3)]'
                                : 'bg-transparent text-[#5D6B4A] border-[#C4C0AC] hover:border-primary/40 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Masonry Gallery Grid */}
            <section className="max-w-7xl mx-auto px-4 py-12 pb-24">
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.03 }}
                                className="break-inside-avoid mb-4"
                            >
                                <div
                                    onClick={() => setLightbox(item)}
                                    className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-[0_4px_20px_rgba(42,51,32,0.08)] hover:shadow-[0_12px_40px_rgba(42,51,32,0.18)] transition-shadow duration-500"
                                    style={{ aspectRatio: item.size === 'tall' ? '3/4' : item.size === 'wide' ? '4/3' : '1/1' }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                                        style={{ willChange: 'transform' }}
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1D2418]/80 via-[#252D1C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="self-end">
                                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                                                <ZoomIn className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#B8D4B0] bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur-sm mb-2">
                                                {item.category}
                                            </span>
                                            <h3 className="text-[#F8F5F1] text-base font-medium leading-tight">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 20 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightbox.img}
                                alt={lightbox.title}
                                className="w-full h-full object-cover max-h-[80vh]"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-8">
                                <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#B8D4B0] bg-white/10 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm mb-3">
                                    {lightbox.category}
                                </span>
                                <h3 className="text-white text-2xl md:text-3xl font-medium">{lightbox.title}</h3>
                            </div>
                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
