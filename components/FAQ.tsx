"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Is Chime legal to use?",
        answer: "Chime is fully legal when used for monitoring devices you own or have proper authorization to monitor, such as providing company-owned phones to employees or monitoring your underage children. Always consult local laws."
    },
    {
        question: "Is data stored securely?",
        answer: "Yes, all data is end-to-end encrypted before transmission and stored on secure cloud servers using military-grade AES-256 encryption. Only you have the keys to access your data."
    },
    {
        question: "Can I download recordings?",
        answer: "Absolutely. Depending on your plan, recordings are stored securely in the cloud and can be played back or downloaded directly to your local device at any time."
    },
    {
        question: "Does Chime drain the phone's battery?",
        answer: "No, Chime is engineered to be extremely lightweight. Our background agent uses advanced task scheduling to ensure it has less than a 1% impact on daily battery life."
    },
    {
        question: "How many devices can I monitor?",
        answer: "This depends on your chosen plan. Our 'Pro' plan allows for up to 3 devices, while 'Enterprise' plans support unlimited device scaling for large teams or families."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Everything you need to know about the product and billing.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={cn(
                                    "border rounded-2xl overflow-hidden transition-colors duration-300",
                                    isOpen
                                        ? "bg-navy/40 border-electric-blue/30 shadow-[0_0_20px_rgba(0,240,255,0.05)]"
                                        : "bg-transparent border-white/10 hover:border-white/20"
                                )}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 focus:outline-none"
                                >
                                    <span className={cn(
                                        "text-lg font-medium transition-colors",
                                        isOpen ? "text-white" : "text-slate-300"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                                        isOpen
                                            ? "bg-electric-blue text-navy border-electric-blue"
                                            : "border-white/20 text-slate-400 hover:bg-white/5 hover:text-white"
                                    )}>
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: { height: { duration: 0.3 }, opacity: { duration: 0.3, delay: 0.1 } }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                                                <p className="text-slate-400 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
