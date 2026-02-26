"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const words = [
    "Hello",         // English
    "Vanakkam",      // Tamil (South India)
    "Namaskaram",    // Telugu/Malayalam (South India)
    "Bonjour",       // French (Global Touch)
    "Hola",          // Spanish (Global Touch)
    "Hallå",         // Swedish (Global Touch)
    "안녕하세요",     // Korean (Holistic connection)
    "Namaste",       // Hindi (North/Central India)
    "Swagatham",     // Sanskrit/Formal Indian Welcome
    "Namaskara"      // Kannada (South India)
]

const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
}

const slideUp = {
    initial: { top: 0 },
    exit: { top: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 } },
}

interface PreloaderProps {
    onComplete?: () => void;
    onExitStart?: () => void;
}

export default function Preloader({ onComplete, onExitStart }: PreloaderProps) {
    const [index, setIndex] = useState(0)
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        // Only set dimension on client to avoid hydration mismatch
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(() => {
                setIsExiting(true)
                onExitStart?.() // Tell parent layout to begin its own intro animations
                setTimeout(() => {
                    onComplete?.()
                }, 1000)
            }, 1000)
            return
        }

        const timeoutId = setTimeout(
            () => {
                setIndex(index + 1)
            },
            index === 0 ? 1000 : 150,
        )
        return () => clearTimeout(timeoutId);
    }, [index, onComplete, onExitStart])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 },
        },
    }

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            animate={isExiting ? "exit" : "initial"}
            className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-[#060912] z-[9999]"
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                        className="flex items-center text-primary text-4xl md:text-5xl lg:text-6xl absolute z-10 font-medium tracking-wide drop-shadow-md"
                    >
                        <span className="block w-3 h-3 bg-secondary rounded-full mr-4 shadow-lg shadow-secondary/50"></span>
                        {words[index]}
                    </motion.p>
                    <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none">
                        <motion.path variants={curve} initial="initial" animate={isExiting ? "exit" : "initial"} fill="#060912" />
                    </svg>
                </>
            )}
        </motion.div>
    );
}
