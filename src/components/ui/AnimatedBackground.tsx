"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base Dark Gradient */}
            <div className="absolute inset-0 bg-background" />

            {/* Aurora / Light Beams */}
            <motion.div
                animate={{
                    x: ["-20%", "20%", "-20%"],
                    y: ["-20%", "20%", "-20%"],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-30%] left-[-20%] w-[140%] h-[140%] opacity-[0.15]"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(200,168,86,0.4) 0%, transparent 60%)",
                    filter: "blur(100px)",
                }}
            />

            <motion.div
                animate={{
                    x: ["20%", "-20%", "20%"],
                    y: ["20%", "-20%", "20%"],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-30%] right-[-20%] w-[140%] h-[140%] opacity-[0.1]"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(16,39,76,0.8) 0%, transparent 60%)",
                    filter: "blur(120px)",
                }}
            />

            {/* Diagonal Beam */}
            <motion.div
                animate={{
                    x: ["-50%", "150%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-0 bottom-0 w-[200px] opacity-[0.05] pointer-events-none"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(200,168,86,1), transparent)",
                    transform: "skewX(-45deg)",
                    filter: "blur(30px)",
                }}
            />
        </div>
    );
}
