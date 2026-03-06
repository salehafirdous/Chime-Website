"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown, ShieldCheck, PhoneCall, Database } from "lucide-react";
import Link from "next/link";
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-electric-blue/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-6 text-center lg:text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 w-fit mx-auto lg:mx-0">
                            <ShieldCheck className="w-4 h-4 text-electric-blue" />
                            <span className="text-sm font-medium text-electric-blue">The Ultimate Call Log Monitor</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                        >
                            Track Every Call. <br />
                            <span className="text-gradient">Anytime. Anywhere.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-slate-300 font-medium"
                        >
                            Monitor, record, and manage call activity remotely.
                        </motion.p>

                        <motion.p
                            variants={fadeInUp}
                            className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Record, Block, Download, and Monitor calls with secure cloud storage and real-time access. Elevate your team's productivity and guarantee compliance.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start"
                        >
                            <Link href="/pricing" className="w-full sm:w-auto">
                                <motion.button
                                    variants={hoverScale}
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-electric-blue hover:bg-[#00d0e0] text-navy font-bold text-base px-8 py-4 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                                >
                                    Buy Now
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>
                            <Link href="/demo" className="w-full sm:w-auto">
                                <motion.button
                                    variants={hoverScale}
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white font-semibold text-base px-8 py-4 rounded-full transition-all"
                                >
                                    <Play className="w-5 h-5 outline outline-2 outline-offset-2 rounded-full p-1" />
                                    Book Demo
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex items-center gap-6 mt-6 justify-center lg:justify-start text-sm text-slate-400">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-400" />
                                <span>100% Secure</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Database className="w-4 h-4 text-blue-400" />
                                <span>Cloud Storage</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Floating UI Mockup Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                        className="relative lg:ml-auto w-full max-w-lg mx-auto"
                    >
                        {/* Soft Glow Behind Mockup */}
                        <div className="absolute inset-0 bg-electric-blue/20 blur-[80px] rounded-full" />

                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative glass-card border-t border-l border-white/20 p-6 flex flex-col gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-navy/60 backdrop-blur-xl rounded-3xl"
                        >
                            {/* Mockup Header */}
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-slate-800 p-2 rounded-lg">
                                        <PhoneCall className="w-5 h-5 text-electric-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-sm">Call Logs - Live</h3>
                                        <p className="text-xs text-slate-400">Monitoring 24 Active Devices</p>
                                    </div>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                            </div>

                            {/* Mockup List */}
                            <div className="space-y-3">
                                {[
                                    { name: "John Doe", time: "2m ago", duration: "05:23", type: "Incoming", status: "Recorded" },
                                    { name: "Jane Smith", time: "15m ago", duration: "12:04", type: "Outgoing", status: "Secure" },
                                    { name: "Unknown Number", time: "1h ago", duration: "01:45", type: "Blocked", status: "Flagged" },
                                ].map((log, i) => (
                                    <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3 flex justify-between items-center hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-medium text-xs border border-white/5">
                                                {log.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{log.name}</p>
                                                <p className="text-xs text-slate-400">{log.type} • {log.time}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-slate-300">{log.duration}</p>
                                            <p className={cn(
                                                "text-xs font-medium",
                                                log.status === "Recorded" ? "text-green-400" :
                                                    log.status === "Secure" ? "text-blue-400" : "text-red-400"
                                            )}>{log.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest hidden md:block">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
