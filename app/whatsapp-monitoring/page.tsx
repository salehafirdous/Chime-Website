"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageSquare, ShieldCheck, Search, Users, PhoneCall, Image as ImageIcon, Video, Download, Play, MessageCircle, Lock, ShieldAlert, Eye, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function WhatsAppMonitoringPage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-40 right-1/4 w-[800px] h-[800px] bg-[#2e2a5d]/30 rounded-full blur-[150px]" />
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
                                Complete <span className="text-emerald-400">WhatsApp Monitoring</span> & Insights
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                Securely track WhatsApp chats, calls, and media with Chime. Monitor business communications, protect loved ones, and ensure compliance with our comprehensive WhatsApp auditing tools—all without root or complex setup.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-emerald-500 text-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                                >
                                    Start Monitoring
                                </Link>
                                <span className="text-sm text-slate-400 font-medium px-4 py-2 border border-white/10 rounded-full bg-white/5 flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> End-to-End Secure Access
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
                            {/* WhatsApp Clone UI */}
                            <div className="absolute right-0 top-0 w-full lg:w-[110%] h-[420px] bg-[#110f29] border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card z-10">
                                <div className="h-14 border-b border-white/10 flex items-center px-6 justify-between bg-[#1a173d]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                            <MessageCircle className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-white leading-none">WhatsApp Auditor</h3>
                                            <p className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                Syncing Live Data
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Search className="w-4 h-4 text-slate-500" />
                                        <Users className="w-4 h-4 text-slate-500" />
                                    </div>
                                </div>

                                <div className="flex h-[calc(100%-3.5rem)]">
                                    {/* Contacts List */}
                                    <div className="w-1/3 border-r border-white/5 bg-[#161332]/50 p-2 overflow-y-auto">
                                        {[
                                            { n: "Sophia Garcia", m: "See you at 5!", t: "10:15", a: true },
                                            { n: "Liam Wilson", m: "Project files sent.", t: "09:42", a: false },
                                            { n: "Emma Thompson", m: "Missed call", t: "Yesterday", a: false },
                                            { n: "Noah Roberts", m: "Voice message (0:15)", t: "Yesterday", a: false },
                                            { n: "Olivia Reed", m: "Cool, thanks!", t: "02/03", a: false }
                                        ].map((chat, i) => (
                                            <div key={i} className={`p-3 rounded-xl mb-1 flex gap-3 cursor-pointer transition-colors ${chat.a ? 'bg-emerald-500/10 border border-emerald-500/20' : 'hover:bg-white/5'}`}>
                                                <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex justify-between items-center mb-0.5">
                                                        <p className="text-[10px] font-bold text-white truncate">{chat.n}</p>
                                                        <span className="text-[8px] text-slate-500">{chat.t}</span>
                                                    </div>
                                                    <p className="text-[9px] text-slate-400 truncate">{chat.m}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chat Window */}
                                    <div className="flex-1 flex flex-col bg-black/10">
                                        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                                            <div className="flex justify-start">
                                                <div className="bg-[#1a173d] p-3 rounded-2xl rounded-tl-none max-w-[80%] border border-white/5">
                                                    <p className="text-[10px] text-slate-300">Hey, can you send over the marketing materials for the Chime project?</p>
                                                    <span className="text-[8px] text-slate-500 mt-1 block text-right">10:12 AM</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="bg-emerald-600/20 p-3 rounded-2xl rounded-tr-none max-w-[80%] border border-emerald-500/20">
                                                    <p className="text-[10px] text-emerald-50">Sure, I'll send them in a minute. Just finishing the last slide.</p>
                                                    <span className="text-[8px] text-emerald-400/60 mt-1 block text-right">10:14 AM</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="bg-emerald-600/20 p-2 rounded-2xl rounded-tr-none max-w-[80%] border border-emerald-500/20">
                                                    <div className="flex items-center gap-2 bg-black/20 p-2 rounded-lg mb-1">
                                                        <FileText className="w-4 h-4 text-emerald-400" />
                                                        <div className="min-w-0">
                                                            <p className="text-[9px] text-white truncate">Chime_Assets.zip</p>
                                                            <p className="text-[8px] text-slate-500">24.5 MB</p>
                                                        </div>
                                                        <Download className="w-3 h-3 text-slate-400 ml-auto" />
                                                    </div>
                                                    <p className="text-[10px] text-emerald-50">See you at 5!</p>
                                                    <span className="text-[8px] text-emerald-400/60 mt-1 block text-right">10:15 AM</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-12 border-t border-white/5 p-2 flex gap-2 items-center">
                                            <div className="flex-1 bg-white/5 rounded-full h-full px-4 flex items-center text-[10px] text-slate-500">Read-Only Monitoring Mode</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Live" Alert */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-6 lg:-left-12 bottom-12 w-60 bg-[#1a173d]/95 backdrop-blur-xl border border-emerald-500/30 rounded-xl p-4 shadow-2xl z-20"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                                        <PhoneCall className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-white mb-0.5">Incoming WhatsApp Call</h4>
                                        <p className="text-[10px] text-slate-400 leading-tight">Sophia Garcia is calling Maria's Device.</p>
                                        <div className="mt-3 flex gap-2">
                                            <span className="text-[9px] bg-emerald-500 text-navy font-bold px-2 py-0.5 rounded">Recording...</span>
                                            <span className="text-[9px] text-slate-500">00:15</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* What is WhatsApp Monitoring Block */}
                <section className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl glass-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Advanced <span className="text-emerald-400">WhatsApp Visibility</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                            WhatsApp is the world's most popular messaging app, but its end-to-end encryption can create blind spots for business security and parental oversight. Chime bridges this gap by providing a secure, non-intrusive monitoring layer. From tracking employee client-interactions for quality assurance to protecting children from online threats, our WhatsApp monitoring tool captures text, media, and call logs in real-time, delivering them to your private dashboard.
                        </p>
                    </motion.div>
                </section>

                {/* Core Capabilities */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Professional <span className="text-emerald-400">Auditing Features</span>
                        </motion.h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Everything you need to maintain visibility across the standard for mobile communication.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
                                title: "Chat Archive",
                                desc: "Read all incoming and outgoing text messages, including deleted chats and archived conversations."
                            },
                            {
                                icon: <PhoneCall className="w-6 h-6 text-blue-400" />,
                                title: "Call Log Tracking",
                                desc: "Monitor WhatsApp voice and video call logs with duration, timestamps, and contact info."
                            },
                            {
                                icon: <ImageIcon className="w-6 h-6 text-orange-400" />,
                                title: "Multimedia Audit",
                                desc: "View and download photos, videos, and voice notes shared through WhatsApp conversations."
                            },
                            {
                                icon: <Users className="w-6 h-6 text-purple-400" />,
                                title: "Contact Identification",
                                desc: "See the full name and number of the person interacting with the target device."
                            },
                            {
                                icon: <Eye className="w-5 h-5 text-cyan-400" />,
                                title: "Status View",
                                desc: "Monitor WhatsApp status updates and view exactly what is being shared publicly."
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
                                title: "Invisible Operation",
                                desc: "Monitoring runs silently in the background without affecting app performance or visibility."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#110f29]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all group border-b-2 hover:border-b-emerald-500/50"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Security Message */}
                <section className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                            <Lock className="w-10 h-10 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Privacy is our Priority</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Our WhatsApp monitoring tool is designed with ethics and privacy at its core. All monitored data is encrypted end-to-end and stored in your private cloud account. We ensure that only authorized users can access the dashboard, providing you with a secure environment for auditing and safety.
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
