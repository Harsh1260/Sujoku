'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen w-full bg-[#EAE2D8] flex items-center justify-center p-4 font-sans selection:bg-[#5ECA61]/30">
            {/* Inner App Card */}
            <div className="relative w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] bg-[#DCCCB4] rounded-3xl md:rounded-4xl overflow-hidden flex flex-col items-center justify-center border border-[#e1d5c7] shadow-2xl">

                {/* Background Watermark Text */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none mix-blend-overlay opacity-[0.15]">
                    <div className="flex flex-col gap-12 rotate-[-5deg] scale-150 transform-gpu w-[200vw]">
                        <div className="flex w-max animate-marquee text-[25vw] font-bold leading-none tracking-tighter text-[#6b5a51]">
                            <span>sujokusujokusujokusujokusujokusujoku</span>
                        </div>
                        <div className="flex w-max animate-marquee-reverse text-[25vw] font-bold leading-none tracking-tighter text-[#6b5a51] -ml-[10vw]">
                            <span>sujokusujokusujokusujokusujokusujoku</span>
                        </div>
                        <div className="flex w-max animate-marquee text-[25vw] font-bold leading-none tracking-tighter text-[#6b5a51]">
                            <span>sujokusujokusujokusujokusujokusujoku</span>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')]" />

                {/* Top Right Logo Area */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 text-[#4a3a34] z-20">
                    <div className="w-5 h-5 bg-[#5ECA61] rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-sm" />
                    </div>
                    <span className="font-semibold text-lg md:text-xl tracking-tight">sujoku</span>
                </div>

                {/* Bottom Right Widget/Icon */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#EBE1D5] rounded-xl flex items-center justify-center shadow-sm cursor-pointer hover:scale-105 transition-transform border border-white/20 animate-dice" onClick={() => reset()}>
                        <div className="grid grid-cols-2 gap-1 md:gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4a3a34]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4a3a34]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4a3a34]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4a3a34]" />
                        </div>
                    </div>
                </div>

                {/* Main Center Content */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full mt-[-5vh]">
                    {/* Numbers Row */}
                    <div className="flex items-center justify-center relative w-full max-w-5xl px-4">

                        {/* Left Number */}
                        <div className="text-[35vw] md:text-[320px] leading-none text-[#EBE1D5] font-medium tracking-tighter select-none z-0">
                            5
                        </div>

                        {/* Right Number */}
                        <div className="text-[35vw] md:text-[320px] leading-none text-[#EBE1D5] font-medium tracking-tighter select-none z-0">
                            0
                        </div>

                        {/* Right Number */}
                        <div className="text-[35vw] md:text-[320px] leading-none text-[#EBE1D5] font-medium tracking-tighter select-none z-0">
                            0
                        </div>
                    </div>

                    {/* Text and Button Section */}
                    <div className="flex flex-col items-center text-center mt-[-6vh] md:mt-[-80px] relative z-20">
                        <h2 className="text-xl md:text-2xl text-[#343B2A] font-medium mb-6 max-w-[280px] md:max-w-sm leading-snug">
                            Looks like our server ran into an issue :(
                        </h2>

                        <button
                            onClick={() => reset()}
                            className="group flex items-center gap-2 md:gap-3 bg-[#5ECA61] text-[#1A2E1A] px-6 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#5ECA61]/20 hover:bg-[#68d76b] border border-[#5ECA61]/50 text-sm md:text-base cursor-pointer"
                        >
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1A2E1A] group-hover:scale-125 transition-transform" />
                            Try Again
                        </button>
                        <Link href="/" className="mt-4 text-[#4a3a34]/60 hover:text-[#4a3a34] text-sm underline underline-offset-4 transition-colors">
                            Return home instead
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
