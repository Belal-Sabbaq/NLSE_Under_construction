"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { dictionary } from "@/lib/i18n";
import { motion } from "framer-motion";
import { AnimatedHeadline } from "./AnimatedHeadline";

export function HeroSection() {
    const { language } = useLanguage();
    const content = dictionary[language].hero;

    return (
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto z-10 relative mt-12 md:mt-20 px-4">
            <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-accent font-semibold tracking-[0.2em] text-[10px] md:text-sm uppercase mb-8 drop-shadow-md relative"
            >
                <span className="relative z-10">{content.subheadline}</span>
                {/* Subtle glow behind subheadline */}
                <span className="absolute inset-0 bg-accent/20 blur-xl z-0" />
            </motion.p>

            <AnimatedHeadline
                boldText={content.headline.bold}
                dimText={content.headline.dim}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-base md:text-2xl text-neutral mb-12 max-w-3xl text-balance leading-relaxed"
            >
                {content.body.part1}
                <strong className="text-white/90 font-semibold">{content.body.bold1}</strong>
                {content.body.part2}
                <strong className="text-white/90 font-semibold">{content.body.bold2}</strong>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 1.6 }}
                className="text-accent/90 italic mb-4 md:mb-6 text-lg md:text-xl font-light tracking-wide drop-shadow-[0_0_10px_rgba(200,168,86,0.4)]"
            >
                &quot;{content.hook}&quot;
            </motion.p>
        </div>
    );
}
