"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export function LogoStrip() {
    const logos = [
        { name: "NLES", src: "/NLESBDC.png", role: "Leadership" },
        { name: "Sabbaq", src: "/SabbaqBDC.png", role: "Technology" },
        { name: "Horus", src: "/HORUSBDC.png", role: "Investment" },
    ];

    // Animation variants setup for staggering parent -> child
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-8 relative z-20"
        >
            {logos.map((logo, idx) => (
                <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group relative flex flex-col items-center justify-center p-4 cursor-pointer"
                >
                    <div className="absolute inset-0 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:bg-white/10 group-hover:border-accent/50 transition-all duration-300 shadow-lg group-hover:shadow-[0_10px_40px_rgba(200,168,86,0.2)]" />

                    {/* Logo Visual */}
                    <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-3">
                        <Image
                            src={logo.src}
                            alt={`${logo.name} Logo`}
                            fill
                            className="object-contain group-hover:drop-shadow-[0_0_12px_rgba(200,168,86,0.6)] transition-all duration-300 z-10 p-2"
                        />
                    </div>

                    {/* Role Label - Hidden initially, slides up on hover */}
                    <div className="h-4 overflow-hidden relative w-full flex justify-center">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            className="text-[10px] md:text-xs text-neutral tracking-widest uppercase group-hover:text-white/90 group-hover:drop-shadow-sm transition-colors"
                        >
                            {logo.role}
                        </motion.span>
                        <div className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300 text-[10px] md:text-xs text-accent tracking-widest uppercase font-semibold">
                            {logo.role}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
