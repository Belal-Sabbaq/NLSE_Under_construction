"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { dictionary } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    const label = dictionary[language].toggle;

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm font-medium tracking-wide"
        >
            <Globe className="w-4 h-4 text-accent" />
            <span>{label}</span>
        </motion.button>
    );
}
