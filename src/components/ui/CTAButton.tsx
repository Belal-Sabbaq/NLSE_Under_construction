"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { dictionary } from "@/lib/i18n";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
export function CTAButton() {
    const { language, dir } = useLanguage();
    const text = dictionary[language].cta.button;
    const ArrowIcon = dir === "ltr" ? ArrowRight : ArrowLeft;
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
            className="relative z-30 mt-8"
        >
            {/* Background Pulse Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 bg-accent/40 blur-2xl rounded-full"
            />

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 font-bold text-white transition-all bg-primary/60 backdrop-blur-xl border border-accent/60 rounded-full overflow-hidden shadow-[0_0_20px_rgba(200,168,86,0.3)] hover:shadow-[0_0_40px_rgba(200,168,86,0.6)] hover:border-accent"
                onClick={() => router.push("/apply")}
            >
                {/* Hover Light Sweep */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />


                <ArrowIcon className={cn(
                    "w-5 h-5 relative z-10 text-accent transition-transform duration-300",
                    dir === "ltr" ? "group-hover:translate-x-2" : "group-hover:-translate-x-2"
                )} />
            </motion.button>
        </motion.div>
    );
}
