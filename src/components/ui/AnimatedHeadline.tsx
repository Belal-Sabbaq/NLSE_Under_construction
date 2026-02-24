"use client";

import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
    boldText: string;
    dimText: string;
}

export function AnimatedHeadline({ boldText, dimText }: AnimatedHeadlineProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="relative mb-8 max-w-5xl mx-auto"
        >
            <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] md:leading-tight text-balance flex flex-col md:inline-block items-center justify-center gap-2"
                style={{ letterSpacing: "-0.02em" }}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/70 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] inline-block relative">
                    {boldText}
                    {/* Subtle slow shimmer effect passing over the bold text */}
                    <span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-clip-text text-transparent opacity-0 animate-[sweep_3s_ease-in-out_infinite]"
                        style={{ backgroundSize: "200% auto" }}
                    >
                        {boldText}
                    </span>
                </span>
                <span className="inline-block md:ml-4 text-transparent bg-clip-text bg-gradient-to-b from-white/70 to-white/40 font-medium tracking-normal mt-2 md:mt-0">
                    {dimText}
                </span>
            </h1>
        </motion.div>
    );
}
