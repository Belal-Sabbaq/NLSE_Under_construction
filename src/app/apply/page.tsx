"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { dictionary } from "@/lib/i18n";
import { useState } from "react";

export default function ApplyPage() {
    const { language, dir } = useLanguage();
    const t = dictionary[language];

    const [form, setForm] = useState({
        name: "",
        nationalId: "",
        jobTitle: "",
        company: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await fetch("/api/apply", {
            method: "POST",
            body: JSON.stringify(form),
        });

        alert(language === "ar" ? "تم الإرسال" : "Submitted successfully");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                dir={dir}
                className="w-full max-w-xl space-y-4"
            >
                <input
                    placeholder={language === "ar" ? "الاسم بالكامل" : "Full Name"}
                    className="input"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    placeholder={language === "ar" ? "الرقم القومي" : "National ID"}
                    className="input"
                    onChange={(e) =>
                        setForm({ ...form, nationalId: e.target.value })
                    }
                />

                <input
                    placeholder={language === "ar" ? "المسمى الوظيفي" : "Job Title"}
                    className="input"
                    onChange={(e) =>
                        setForm({ ...form, jobTitle: e.target.value })
                    }
                />

                <input
                    placeholder={language === "ar" ? "الشركة الحالية" : "Current Company"}
                    className="input"
                    onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                    }
                />

                <button className="btn-primary">
                    {language === "ar" ? "إرسال" : "Submit"}
                </button>
            </form>
        </div>
    );
}