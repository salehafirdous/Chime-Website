"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Lock, Smartphone, Timer, BarChart, Calendar, Bell, AlertCircle, Ban, History, Users, Heart, EyeOff, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ParentalControlsPage() {
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
                                Advanced <span className="text-electric-blue">Parental Controls</span> for Modern Families
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                Protect your children in the digital world. Chime provides the ultimate safety net with web filtering, app blocking, and social monitoring tools that keep you informed without being intrusive.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-electric-blue text-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                                >
                                    Secure Their Device
                                </Link>
                                <span className="text-sm text-slate-400 font-medium px-4 py-2 border border-white/10 rounded-full bg-white/5 flex items-center gap-2">
                                    <Heart className="w-3 h-3 text-red-400" /> Trusted by 1M+ Parents
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
                            {/* Family Dashboard Preview */}
                            <div className="absolute right-0 top-10 w-[95%] h-[420px] bg-[#110f29] border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card z-10">
                                <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between bg-[#1a173d]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center border border-electric-blue/30">
                                            <Users className="w-6 h-6 text-electric-blue" />
                                        </div>
                                        <h3 className="text-sm font-bold text-white">Family Safety Center</h3>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                                        <div className="w-full h-full bg-slate-700"></div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        {/* Profile Card */}
                                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 font-bold text-purple-400">J</div>
                                                <div>
                                                    <p className="text-xs font-bold text-white">Jake (Son)</p>
                                                    <p className="text-[10px] text-emerald-400">Safe Online</p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-[10px]">
                                                    <span className="text-slate-400">Social Media</span>
                                                    <span className="text-white font-bold">Blocked</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-red-400 w-full"></div>
                                                </div>
                                                <div className="flex justify-between text-[10px]">
                                                    <span className="text-slate-400">Learning Apps</span>
                                                    <span className="text-white font-bold">No Limit</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-400 w-1/4"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Security Alerts */}
                                        <div className="space-y-3">
                                            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Safety Alerts</h4>
                                            {[
                                                { msg: "Blocked: Adult Content Site", time: "10m ago", color: "text-red-400" },
                                                { msg: "Device Connected: Library Wi-Fi", time: "2h ago", color: "text-blue-400" },
                                                { msg: "New App Installed: Discord", time: "4h ago", color: "text-yellow-400" },
                                            ].map((alert, i) => (
                                                <div key={i} className="bg-black/20 p-2.5 rounded-xl border border-white/5 flex flex-col">
                                                    <span className={`text-[9px] font-bold ${alert.color}`}>{alert.msg}</span>
                                                    <span className="text-[8px] text-slate-500 mt-0.5">{alert.time}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action row */}
                                    <div className="mt-6 flex gap-3">
                                        <button className="flex-1 py-2.5 bg-electric-blue text-navy font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.3)]">Pause Internet</button>
                                        <button className="flex-1 py-2.5 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl">Locate Child</button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Shield" Element */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -left-8 bottom-16 w-32 h-32 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-full flex flex-col items-center justify-center z-20 shadow-2xl shadow-emerald-500/10"
                            >
                                <ShieldCheck className="w-10 h-10 text-emerald-400 mb-1" />
                                <span className="text-[9px] font-bold text-white uppercase tracking-tighter">Safe Mode</span>
                                <span className="text-[8px] text-emerald-400">Active</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* What is Parental Controls Block */}
                <section className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl glass-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Protecting the <span className="text-electric-blue">Next Generation</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                            The internet is an infinite playground, but it's one with many dark corners. Chime's parental controls are designed to provide parents with a versatile toolkit to guide their children's digital journey. Instead of simply blocking, we focus on providing context, awareness, and safe boundaries. From filtering age-inappropriate search results to monitoring social media interactions for signs of cyberbullying, we give you the tools to foster a healthy, secure relationship with technology for your entire family.
                        </p>
                    </motion.div>
                </section>

                {/* Key Benefits */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <EyeOff className="w-8 h-8 text-red-400" />,
                                title: "Web Filtering",
                                desc: "Block over 100+ categories of inappropriate content and set up custom blacklists for specific domains."
                            },
                            {
                                icon: <ShieldAlert className="w-8 h-8 text-yellow-400" />,
                                title: "Cyberbullying Detection",
                                desc: "Smart algorithms scan chat logs for harmful language, aggressive behavior, or predatory patterns."
                            },
                            {
                                icon: <Smartphone className="w-8 h-8 text-blue-400" />,
                                title: "Remote Lock",
                                desc: "Instantly lock your child's device for dinner time, family outings, or if they've exceeded their usage limits."
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#1a173d]/40 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/5 transition-all group"
                            >
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
