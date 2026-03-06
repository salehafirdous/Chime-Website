"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { fadeInUp, hoverScale } from "@/lib/animations";

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden z-20">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="relative rounded-[3rem] p-10 md:p-16 overflow-hidden glass-card bg-navy border border-electric-blue/30 text-center shadow-[0_0_80px_rgba(0,240,255,0.15)]"
                >
                    {/* Animated Background Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 8,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 via-transparent to-indigo-500/20 blur-3xl -z-10"
                    />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Start Monitoring <span className="text-gradient">Smarter Today.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Ready to take control? Join thousands of managers, businesses, and parents protecting their assets with Chime.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/pricing" className="w-full sm:w-auto">
                                <motion.button
                                    variants={hoverScale}
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-electric-blue hover:bg-[#00d0e0] text-navy font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all"
                                >
                                    Buy Now
                                    <ArrowRight className="w-6 h-6" />
                                </motion.button>
                            </Link>
                            <Link href="/demo" className="w-full sm:w-auto">
                                <motion.button
                                    variants={hoverScale}
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all"
                                >
                                    <Play className="w-5 h-5 fill-white" />
                                    Book a Demo
                                </motion.button>
                            </Link>
                        </div>

                        <p className="text-sm text-slate-400 mt-8">
                            No long-term commitments. Cancel anytime. 14-day money-back guarantee.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
