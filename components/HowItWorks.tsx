"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, PieChart } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const steps = [
    {
        number: "01",
        icon: Download,
        title: "Install & Setup",
        description: "Download the application and complete the quick 2-minute setup process.",
    },
    {
        number: "02",
        icon: ShieldCheck,
        title: "Monitor Calls Securely",
        description: "Chime runs silently in the background, recording and filtering incoming/outgoing logs.",
    },
    {
        number: "03",
        icon: PieChart,
        title: "Access Reports Anytime",
        description: "Log into the remote dashboard from any device to view, block, or manage records.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden bg-navy/50">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Get Started in <span className="text-gradient">3 Simple Steps</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        No technical knowledge required. We have designed Chime to be simple, fast, and completely secure.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />

                    <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    {/* Step Number Background */}
                                    <div className="absolute -top-6 -z-10 text-[100px] font-black text-white/5 opacity-50 group-hover:scale-110 group-hover:text-electric-blue/5 transition-all duration-500">
                                        {step.number}
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="w-32 h-32 rounded-full glass-card border border-electric-blue/20 bg-navy/80 flex flex-col flex-shrink-0 items-center justify-center mb-8 relative z-10 group-hover:border-electric-blue/50 transition-colors shadow-[0_0_30px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]">
                                        <Icon className="w-10 h-10 text-electric-blue mb-2" />
                                    </div>

                                    {/* Connector Line (Mobile) */}
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden w-0.5 h-16 bg-gradient-to-b from-electric-blue/50 to-transparent my-4" />
                                    )}

                                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed px-4">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
