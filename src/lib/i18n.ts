export const dictionary = {
    en: {
        hero: {
            headline: {
                bold: "FORGING THE FUTURE",
                dim: "OF DIGITAL ECONOMY",
            },
            subheadline: "Leadership (NLES) • Technology (Sabbaq) • Investment (Horus)",
            body: {
                part1: "An ",
                bold1: "integrated ecosystem",
                part2: " is being built to empower the ",
                bold2: "next generation of leaders.",
            },
            hook: "Do you have what it takes to lead the Digital Future?",
        },
        cta: {
            button: "Apply for the Founding Cohort",
        },
        toggle: "العربية",
    },
    ar: {
        hero: {
            headline: {
                bold: "نصيغ مستقبل",
                dim: "الاقتصاد الرقمي",
            },
            subheadline: "القيادة • التكنولوجيا • الاستثمار",
            body: {
                part1: "يتم الآن بناء ",
                bold1: "منظومة متكاملة",
                part2: " لتمكين ",
                bold2: "الجيل القادم من قادة المستقبل.",
            },
            hook: "هل ترى في نفسك قائداً للمستقبل الرقمي؟",
        },
        cta: {
            button: "تقدم بطلب الترشح للدفعة التأسيسية",
        },
        toggle: "English",
    },
} as const;

export type Language = keyof typeof dictionary;
