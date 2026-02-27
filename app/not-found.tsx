'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-[#EAE2D8] p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans overflow-hidden">
            <div className="relative w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] bg-[#DCCCB4] rounded-[2rem] md:rounded-[3rem] flex flex-col shadow-2xl overflow-hidden border border-[#e1d5c7]">

                {/* Background Watermark Text - Extra Large and Faint */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.25]">
                    <div className="flex flex-col gap-12 rotate-[-5deg] scale-150 transform-gpu w-[200vw]">
                        <div className="flex w-max animate-marquee text-[25vw] font-bold leading-none tracking-tighter text-[#E97451]" style={{ WebkitTextStroke: '3px #343B2A' }}>
                            <span>sujokusujokusujokusujokusujokusujoku</span>
                        </div>
                        <div className="flex w-max animate-marquee-reverse text-[25vw] font-bold leading-none tracking-tighter text-[#5C8C62] -ml-[10vw]" style={{ WebkitTextStroke: '3px #343B2A' }}>
                            <span>sujokusujokusujokusujokusujokusujoku</span>
                        </div>
                        <div className="flex w-max animate-marquee text-[25vw] font-bold leading-none tracking-tighter text-[#8299B5]" style={{ WebkitTextStroke: '3px #343B2A' }}>
                            <span>sujokusujokusujokusujokusujokusujoku</span>
                        </div>
                    </div>
                </div>

                {/* Dot pattern */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(#4a3a34 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                {/* Floating Grain Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')]" />

                {/* Top Right Logo Area */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 text-[#4a3a34] z-20">
                    <div className="w-5 h-5 bg-[#5ECA61] rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-sm" />
                    </div>
                    <span className="font-semibold text-lg md:text-xl tracking-tight">sujoku</span>
                </div>

                {/* Hanging Ropes & Numbers Container */}
                <div className="absolute top-0 inset-x-0 flex justify-center gap-6 md:gap-12 lg:gap-20 -mt-2">

                    {/* Number 4 (Left) */}
                    <motion.div
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", damping: 12, stiffness: 45, duration: 1.5, delay: 0.1 }}
                        className="relative origin-top"
                    >
                        <motion.div
                            animate={{ rotate: [-2, 2, -2] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                            style={{ transformOrigin: "top center" }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-[3px] h-[35vh] md:h-[30vh] lg:h-[35vh] bg-[#a89988]" />
                            <div className="text-[28vw] md:text-[200px] lg:text-[280px] font-black leading-[0.8] text-[#5C8C62] drop-shadow-md -mt-4" style={{ WebkitTextStroke: '2px rgba(107, 90, 81, 0.2)' }}>
                                4
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Number 0 (Center) */}
                    <motion.div
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", damping: 10, stiffness: 40, duration: 1.5, delay: 0.3 }}
                        className="relative origin-top"
                    >
                        <motion.div
                            animate={{ rotate: [3, -3, 3] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            style={{ transformOrigin: "top center" }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-[3px] h-[45vh] md:h-[45vh] lg:h-[50vh] bg-[#a89988]" />
                            <div className="text-[28vw] md:text-[200px] lg:text-[280px] font-black leading-[0.8] text-[#E97451] drop-shadow-md -mt-4 z-10" style={{ WebkitTextStroke: '2px rgba(107, 90, 81, 0.2)' }}>
                                0
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Number 4 (Right) */}
                    <motion.div
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", damping: 14, stiffness: 50, duration: 1.5, delay: 0.5 }}
                        className="relative origin-top"
                    >
                        <motion.div
                            animate={{ rotate: [-2.5, 2.5, -2.5] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            style={{ transformOrigin: "top center" }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-[3px] h-[40vh] md:h-[38vh] lg:h-[42vh] bg-[#a89988]" />
                            <div className="text-[28vw] md:text-[200px] lg:text-[280px] font-black leading-[0.8] text-[#8299B5] drop-shadow-md -mt-4" style={{ WebkitTextStroke: '2px rgba(107, 90, 81, 0.2)' }}>
                                4
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-[8vh] md:bottom-[12vh] w-full flex flex-col items-center text-center px-4 z-40">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-sm md:text-base lg:text-lg text-[#343B2A] font-bold tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-10 uppercase">
                            Oops! Page Not Found
                        </h2>

                        <Link
                            href="/"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#5ECA61] px-8 py-3.5 md:px-10 md:py-4 font-semibold text-[#1A2E1A] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_-8px_rgba(94,202,97,0.6)] active:scale-95 border border-[#5ECA61]/50"
                        >
                            <span className="relative z-10 text-[10px] md:text-xs lg:text-sm tracking-widest uppercase">Back To Home</span>
                            <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
