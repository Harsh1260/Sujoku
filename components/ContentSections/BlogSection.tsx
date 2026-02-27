'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "The Sujoku Philosophy: Earthy Aesthetics in Digital Spaces",
        category: "Design Trends",
        date: "Oct 12, 2023",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
        excerpt: "Exploring how the Sujoku team utilizes natural color palettes and organic peacock-inspired motifs to reshape the digital landscape into calming, premium user experiences.",
    },
    {
        id: 2,
        title: "Behind the Scenes: Crafting the Sujoku Engine",
        category: "Development",
        date: "Nov 05, 2023",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
        excerpt: "A deep dive into how our development team leverages Next.js, advanced caching, and 3D rendering to make the Sujoku platform blazing fast and visually stunning.",
    },
    {
        id: 3,
        title: "Mastering Fluid Animations with Sujoku",
        category: "UI/UX",
        date: "Dec 18, 2023",
        image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop",
        excerpt: "Learn how we build the physics-based, fluid micro-interactions that elevate the Sujoku interface from good to a truly exceptional interactive journey.",
    }
];

export function BlogSection() {
    return (
        <section id="blog" className="relative w-full py-24 md:py-32 bg-[#EAE2D8] overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#4a3a34 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-[12vw] md:text-7xl lg:text-8xl font-black text-[#343B2A] tracking-tighter leading-[0.9] mb-4">
                            OUR <br className="hidden md:block" /> JOURNAL.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col items-start md:items-end"
                    >
                        <p className="text-[#343B2A]/70 text-lg md:text-xl max-w-sm mb-8 md:text-right font-medium">
                            Dive into our latest thinking regarding the Sujoku ecosystem, earthy aesthetics, and creative digital experiences.
                        </p>
                        <Link href="/blog" className="group flex items-center gap-4 bg-[#343B2A] text-[#EAE2D8] px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-[#5ECA61] hover:text-[#1A2E1A] transition-colors duration-500 shadow-xl hover:shadow-[0_8px_30px_-10px_rgba(94,202,97,0.5)]">
                            Explore All
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>

                {/* Animated Bento Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">

                    {/* Featured Post (Left massively tall post) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8 h-[450px] sm:h-[550px] lg:h-full relative group rounded-[2.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl"
                    >
                        <Link href={`/blog/${blogPosts[0].id}`}>
                            <Image
                                src={blogPosts[0].image}
                                alt={blogPosts[0].title}
                                fill
                                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                sizes="(max-w-768px) 100vw, 66vw"
                            />
                            {/* Darken overlay for text legibility, gets darker on hover */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Hover Reveal Content */}
                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end h-full text-[#EAE2D8]">
                                <div className="mb-auto mt-4 self-end">
                                    {/* Glassmorphism float button */}
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl border border-white/30">
                                        <ArrowUpRight className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                <div className="flex flex-col transform translate-y-12 md:translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                    <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-[#5ECA61] mb-4">
                                        <span>{blogPosts[0].date}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#5ECA61]" />
                                        <span>{blogPosts[0].category}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-4">
                                        {blogPosts[0].title}
                                    </h3>
                                    <p className="text-[#EAE2D8]/80 text-lg md:text-xl max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {blogPosts[0].excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Secondary Posts (Right Column, stacked vertically on desktop) */}
                    <div className="lg:col-span-4 flex flex-col gap-6 h-[800px] lg:h-full">
                        {blogPosts.slice(1).map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2), ease: [0.16, 1, 0.3, 1] }}
                                className="flex-1 relative group rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl"
                            >
                                <Link href={`/blog/${post.id}`}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                                        sizes="(max-w-768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end h-full text-[#EAE2D8]">
                                        <div className="flex flex-col transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#5ECA61] mb-3">
                                                <span>{post.date}</span>
                                                <span className="w-1 h-1 rounded-full bg-[#5ECA61]" />
                                                <span>{post.category}</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-medium leading-tight mb-3">
                                                {post.title}
                                            </h3>
                                            <p className="text-[#EAE2D8]/70 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow Top Right (Secondary posts) */}
                                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/30">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
