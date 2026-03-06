"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, ShieldCheck, Lock, Smartphone, Timer, BarChart, Calendar, Bell, AlertCircle, Ban, History, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ScreenTimePage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-40 left-1/4 w-[800px] h-[800px] bg-[#2e2a5d]/30 rounded-full blur-[150px]" />
            </div>

            <main className="relative z-10 space-y-32 pb-32">

                {/* Hero Section */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl pt-12 md:pt-20">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                                Master Your Focus with <span className="text-electric-blue">Screen Time Control</span>
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                Take control of digital habits with precise scheduling, app limits, and category blocking. Chime's Screen Time Control empowers you to balance productivity and wellness by managing exactly how and when devices are used.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-electric-blue text-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                                >
                                    Set Limits Now
                                </Link>
                                <span className="text-sm text-slate-400 font-medium px-4 py-2 border border-white/10 rounded-full bg-white/5">
                                    Promoting Digital Wellness
                                </span>
                            </div>
                        </motion.div>

                        {/* Interactive UI Graphic */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-1/2 relative h-[500px]"
                        >
                            {/* Device Dashboard Preview */}
                            <div className="absolute right-0 top-10 w-[95%] h-[400px] bg-[#110f29]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card">
                                <div className="h-12 border-b border-white/10 flex items-center px-6 justify-between bg-[#1a173d]">
                                    <h3 className="text-sm font-bold text-white">Digital Wellness Dashboard</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                            <span className="text-[10px] text-slate-400">Limits Active</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                                    </div>
                                </div>

                                <div className="p-6 grid grid-cols-2 gap-6 h-full">
                                    <div className="space-y-6">
                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <p className="text-xs text-slate-400 mb-2 flex items-center gap-2"><Smartphone className="w-3 h-3" /> Daily Average</p>
                                            <p className="text-2xl font-bold text-white">4h 12m</p>
                                            <div className="mt-3 flex gap-1 h-3 items-end">
                                                {[30, 50, 40, 90, 60, 45, 20].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-electric-blue/40 rounded-t-[2px]" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-[10px] font-bold text-slate-500 uppercase">App Limits</h4>
                                            {[
                                                { n: "Instagram", t: "45m / 1h", p: 75, c: "bg-orange-400" },
                                                { n: "YouTube", t: "1h 20m / 2h", p: 60, c: "bg-red-400" },
                                                { n: "TikTok", t: "Limit Reached", p: 100, c: "bg-zinc-700" }
                                            ].map((app, i) => (
                                                <div key={i} className="bg-white/5 border border-white/5 p-2 rounded-lg">
                                                    <div className="flex justify-between text-[10px] mb-1.5">
                                                        <span className="text-white font-medium">{app.n}</span>
                                                        <span className="text-slate-400">{app.t}</span>
                                                    </div>
                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                        <div className={`h-full ${app.c}`} style={{ width: `${app.p}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-black/20 rounded-xl border border-white/10 p-4 flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-xs font-bold text-white">Active Schedule</h4>
                                            <Calendar className="w-3 h-3 text-slate-500" />
                                        </div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            {[
                                                { time: "08:00 AM", label: "Focus Mode", active: true },
                                                { time: "12:00 PM", label: "Lunch Break", active: false },
                                                { time: "02:00 PM", label: "Work Schedule", active: true },
                                                { time: "09:00 PM", label: "Downtime", active: false },
                                            ].map((slot, i) => (
                                                <div key={i} className={`flex items-center justify-between p-2 rounded-lg border ${slot.active ? 'bg-electric-blue/10 border-electric-blue/20' : 'bg-transparent border-white/5 opacity-50'}`}>
                                                    <span className="text-[10px] font-bold text-white">{slot.label}</span>
                                                    <span className="text-[9px] text-slate-400">{slot.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="w-full py-2 bg-electric-blue text-navy text-[10px] font-bold rounded-lg mt-auto">Edit All Schedules</button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Alert */}
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -left-6 bottom-20 w-48 bg-[#1a173d] border border-red-500/40 rounded-xl p-3 shadow-2xl z-20"
                            >
                                <div className="flex items-start gap-2">
                                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold text-white">Daily Limit Reached</p>
                                        <p className="text-[8px] text-slate-400 leading-tight">TikTok has been locked. 15m bonus request sent.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* What is Screen Time Control Block */}
                <section className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl glass-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 pointer-events-none"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Smart <span className="text-electric-blue">Screen Time Management</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                            Screen time control isn't just about limiting use—it's about intentional living and productivity. Our comprehensive toolset allows parents and managers to set granular boundaries for device usage. Whether you're enforcing focus hours for a team or ensuring children have a healthy balance of digital and offline time, Chime provides the precise controls needed to manage digital life without constant micromanagement.
                        </p>
                    </motion.div>
                </section>

                {/* Use Cases */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Use Case 1 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-purple-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(192,132,252,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                <Lock className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">Parental Guidance</h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Set 'Downtime' for bedtime and homework",
                                    "Block high-distraction apps automatically",
                                    "Receive weekly usage reports via email",
                                    "Approve or deny 'more time' requests remotely"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Use Case 2 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group flex flex-col transform md:-translate-y-4"
                        >
                            <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                <Timer className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">Workforce Focus</h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Enforce focus mode during peak work hours",
                                    "Limit non-essential app usage during shifts",
                                    "Track productivity-to-entertainment ratios",
                                    "Reduce burnout by encouraging breaks"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Use Case 3 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">Digital Wellness</h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Gain awareness of screen dependency",
                                    "Establish phone-free zones or times",
                                    "Improve sleep quality with blue light limits",
                                    "Establish long-term healthy digital habits"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                icon: <Ban className="w-5 h-5 text-red-400" />,
                                title: "Instant Block",
                                desc: "Remotely lock any app or the entire device with a single click from your dashboard."
                            },
                            {
                                icon: <History className="w-5 h-5 text-blue-400" />,
                                title: "Usage History",
                                desc: "Detailed breakdown of time spent on every app over the last 30 days."
                            },
                            {
                                icon: <Bell className="w-5 h-5 text-yellow-400" />,
                                title: "Smart Alerts",
                                desc: "Get notified before a limit is reached or when restricted apps are accessed."
                            },
                            {
                                icon: <ShieldAlert className="w-5 h-5 text-purple-400" />,
                                title: "Tamper Proof",
                                desc: "Prevention of limit bypass or unauthorized modification of settings."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-[#1a173d]/60 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-all text-center"
                            >
                                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                                <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
