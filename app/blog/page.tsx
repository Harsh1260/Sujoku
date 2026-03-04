'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, ArrowLeft, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories = ['All', 'Wellness', 'Therapy', 'Development', 'UI/UX', 'Design Trends'];

const allPosts = [
    {
        id: 1,
        title: 'The Sujoku Philosophy: Earthy Aesthetics in Digital Spaces',
        category: 'Design Trends',
        date: 'Oct 12, 2023',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
        excerpt: 'Exploring how the Sujoku team utilizes natural color palettes and organic peacock-inspired motifs to reshape the digital landscape into calming, premium user experiences.',
        featured: true,
    },
    {
        id: 2,
        title: 'Behind the Scenes: Crafting the Sujoku Engine',
        category: 'Development',
        date: 'Nov 05, 2023',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
        excerpt: 'A deep dive into how our development team leverages Next.js, advanced caching, and 3D rendering to make the Sujoku platform blazing fast and visually stunning.',
        featured: false,
    },
    {
        id: 3,
        title: 'Mastering Fluid Animations with Sujoku',
        category: 'UI/UX',
        date: 'Dec 18, 2023',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop',
        excerpt: 'Learn how we build the physics-based, fluid micro-interactions that elevate the Sujoku interface from good to a truly exceptional interactive journey.',
        featured: false,
    },
    {
        id: 4,
        title: 'Understanding Meridian Points: A Practitioner\'s Guide',
        category: 'Therapy',
        date: 'Jan 08, 2024',
        readTime: '11 min read',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Our head practitioner walks you through the foundational meridian points that form the backbone of every Sujoku acupressure session.',
        featured: false,
    },
    {
        id: 5,
        title: 'The Science of Holistic Healing: What Research Says',
        category: 'Wellness',
        date: 'Feb 14, 2024',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'We explore the growing body of clinical research validating traditional acupressure methods and their measurable impact on pain reduction and mental clarity.',
        featured: false,
    },
    {
        id: 6,
        title: 'Seed Therapy: Ancient Practice, Modern Technique',
        category: 'Therapy',
        date: 'Mar 01, 2024',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=1200&auto=format&fit=crop',
        excerpt: 'Dive into the origins and modern adaptation of seed therapy — how natural seeds applied to palm and sole points create continuous, gentle healing energy.',
        featured: false,
    },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? allPosts
        : allPosts.filter(p => p.category === activeCategory);

    const featured = filtered.find(p => p.featured) ?? filtered[0];
    const rest = filtered.filter(p => p.id !== featured?.id);

    return (
        <div className="min-h-screen bg-[#EAE2D8]">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-40 pb-16 px-4 overflow-hidden bg-[#343B2A]">
                {/* Dot texture */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(#EAE2D8 1px, transparent 1px)', backgroundSize: '28px 28px' }}
                />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-[#EAE2D8]/60 hover:text-[#5ECA61] transition-colors mb-10 text-sm font-medium group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                        <div className="inline-block px-4 py-2 rounded-full bg-[#5ECA61]/15 text-[#5ECA61] border border-[#5ECA61]/25 text-xs font-semibold tracking-widest uppercase mb-6">
                            Journal
                        </div>
                        <h1 className="text-7xl md:text-[10rem] font-black text-[#EAE2D8] tracking-tighter leading-[0.88] mb-6">
                            OUR<br />
                            <span className="text-[#5ECA61]">JOURNAL.</span>
                        </h1>
                        <p className="text-lg text-[#EAE2D8]/60 max-w-lg font-light">
                            Insights from our practitioners and designers — on healing, aesthetics, and the art of intentional living.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <div className="bg-[#2D3424] px-4 py-5 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-[#5ECA61] text-[#1A2E1A]'
                                : 'bg-white/5 text-[#EAE2D8]/60 hover:bg-white/10 hover:text-[#EAE2D8]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 pb-28">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Featured Post */}
                        {featured && (
                            <Link href={`/blog/${featured.id}`} className="group block mb-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#343B2A]">
                                    <div className="relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
                                        <Image
                                            src={featured.image}
                                            alt={featured.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-r from-[#343B2A]/20 to-transparent" />
                                    </div>
                                    <div className="flex flex-col justify-center p-10 md:p-14">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#5ECA61]">
                                                <Tag className="w-3 h-3" />
                                                {featured.category}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-[#EAE2D8]/30" />
                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#EAE2D8]/50">
                                                <Clock className="w-3 h-3" />
                                                {featured.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#EAE2D8] leading-tight mb-6 group-hover:text-[#5ECA61] transition-colors duration-500">
                                            {featured.title}
                                        </h2>
                                        <p className="text-[#EAE2D8]/60 font-light text-base leading-relaxed mb-8">
                                            {featured.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 text-[#5ECA61] font-semibold text-sm tracking-widest uppercase">
                                            Read Article
                                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Post Grid */}
                        {rest.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {rest.map((post, idx) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link href={`/blog/${post.id}`} className="group block h-full">
                                            <div className="bg-[#343B2A] rounded-4xl overflow-hidden shadow-xl h-full flex flex-col hover:shadow-2xl transition-shadow duration-500">
                                                <div className="relative h-56 overflow-hidden">
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-[#343B2A]/60 to-transparent" />
                                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>
                                                <div className="p-7 flex flex-col flex-1">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#5ECA61]">{post.category}</span>
                                                        <span className="w-1 h-1 rounded-full bg-[#EAE2D8]/20" />
                                                        <span className="text-[10px] text-[#EAE2D8]/40 font-medium flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {post.readTime}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl md:text-2xl font-medium text-[#EAE2D8] leading-tight mb-3 group-hover:text-[#5ECA61] transition-colors duration-400 flex-1">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-[#EAE2D8]/50 text-sm font-light leading-relaxed line-clamp-2 mb-5">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="pt-4 border-t border-white/10 text-xs text-[#EAE2D8]/40 font-medium">
                                                        {post.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
}
