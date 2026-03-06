"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Zap, Globe, Users, Headphones, BarChart3, Lock, Star, Award, TrendingUp, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function WhyChimePage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 right-1/4 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-40 left-1/4 w-[900px] h-[900px] bg-[#2e2a5d]/30 rounded-full blur-[180px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-electric-blue/5 rounded-full blur-[200px]" />
            </div>

            <main className="relative z-10 space-y-32 pb-32">

                {/* Hero Section */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl pt-12 md:pt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                            Beyond Just Monitoring
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                            Why Thousands of Pros <br /> Choose <span className="text-electric-blue">Chime</span> Every Day
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Chime isn't just another monitoring tool. It's a comprehensive security ecosystem designed for those who demand ultimate reliability, absolute privacy, and seamless performance.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/signup"
                                className="bg-electric-blue text-navy font-bold py-5 px-10 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:-translate-y-1 w-full sm:w-auto text-lg"
                            >
                                Start Your Experience
                            </Link>
                            <Link
                                href="/demo"
                                className="bg-white/5 border border-white/10 text-white font-bold py-5 px-10 rounded-full hover:bg-white/10 transition-all w-full sm:w-auto text-lg"
                            >
                                Watch Live Demo
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* The "Even More Reasons" Grid */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Unmatched Advantages</h2>
                        <p className="text-slate-400">What sets us apart from the competition.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                                title: "Zero Latency Syncing",
                                desc: "Our global edge network ensures that data from the target device reaches your dashboard in milliseconds, not hours."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
                                title: "Bank-Grade Encryption",
                                desc: "We use AES-256 bit encryption at rest and TLS 1.3 in transit. Your data is for your eyes only—period."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-blue-400" />,
                                title: "Multi-User Access",
                                desc: "Collaborate with your team or family. Assign different permission levels to different administrators."
                            },
                            {
                                icon: <Headphones className="w-8 h-8 text-purple-400" />,
                                title: "24/7 Human Support",
                                desc: "No bots here. Our expert support team is available via live chat and email around the clock."
                            },
                            {
                                icon: <Globe className="w-8 h-8 text-cyan-400" />,
                                title: "Global Coverage",
                                desc: "Monitor devices anywhere in the world. Our platform works seamlessly across all networks and carriers."
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
                                title: "Advanced Analytics",
                                desc: "Don't just see data—understand it. Get AI-driven insights into behavioral patterns and activity trends."
                            }
                        ].map((reason, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-[#1a173d]/40 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/5 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    {reason.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{reason.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm relative z-10">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Additional Content: Our Performance Stats */}
                <section className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-gradient-to-br from-electric-blue/10 to-[#1a173d] border border-electric-blue/20 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                    Engineered for <br /><span className="text-electric-blue">Maximum Performance</span>
                                </h2>
                                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                                    We've spent years optimizing our background agent to ensure it has virtually zero impact on device battery life or CPU performance.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        { t: "99.9% Uptime Guarantee", d: "Our distributed cloud infrastructure never sleeps." },
                                        { t: "Invisible Operation", d: "No icons, no alerts, and no task manager presence." },
                                        { t: "Adaptive Data Usage", d: "Intelligent compression to minimize data plan impact." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold">{item.t}</h4>
                                                <p className="text-slate-400 text-sm">{item.d}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="bg-[#110f29] border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <h4 className="text-white font-bold">System Health</h4>
                                        <span className="text-emerald-400 text-xs font-bold px-2 py-1 bg-emerald-400/10 rounded uppercase">Optimal</span>
                                    </div>
                                    <div className="space-y-6">
                                        {[
                                            { label: "Battery Impact", val: "0.2%", color: "bg-emerald-400", w: "20%" },
                                            { label: "CPU Usage", val: "0.1%", color: "bg-emerald-400", w: "15%" },
                                            { label: "Network Bandwidth", val: "Minimal", color: "bg-blue-400", w: "30%" }
                                        ].map((stat, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-xs mb-2">
                                                    <span className="text-slate-400">{stat.label}</span>
                                                    <span className="text-white font-bold">{stat.val}</span>
                                                </div>
                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className={`h-full ${stat.color}`} style={{ width: stat.w }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Verified Performance Metrics</p>
                                        <div className="flex justify-center gap-4">
                                            <Award className="w-6 h-6 text-slate-400" />
                                            <ShieldCheck className="w-6 h-6 text-slate-400" />
                                            <Zap className="w-6 h-6 text-slate-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric-blue/20 rounded-full blur-[80px] -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial / Trust Section */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "The reliability of Chime's WhatsApp monitoring is outstanding. I've tried other apps, but this is the only one that stays connected.",
                                author: "Mark J.",
                                role: "IT Consultant",
                                icon: <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            },
                            {
                                text: "Easy setup, crystal clear recordings, and the support team actually knows what they're doing. Best investment for our sales team.",
                                author: "Sarah L.",
                                role: "Head of Sales",
                                icon: <TrendingUp className="w-5 h-5 text-electric-blue" />
                            },
                            {
                                text: "I finally feel at peace knowing where my kids are. The geofencing alerts are a life saver for busy parents.",
                                author: "David K.",
                                role: "Father of 3",
                                icon: <HeartHandshake className="w-5 h-5 text-red-400" />
                            }
                        ].map((test, i) => (
                            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center text-center">
                                <div className="mb-6">{test.icon}</div>
                                <p className="text-slate-300 italic mb-8 leading-relaxed">"{test.text}"</p>
                                <div>
                                    <h4 className="text-white font-bold">{test.author}</h4>
                                    <p className="text-slate-500 text-xs">{test.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-[#1a173d] border border-white/10 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to see the difference?</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Join over 10,000 active users who trust Chime for their security and monitoring needs.</p>
                        <Link
                            href="/signup"
                            className="bg-electric-blue text-navy font-bold py-5 px-12 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:scale-105 inline-block text-xl"
                        >
                            Get Started Free
                        </Link>
                        <p className="mt-6 text-sm text-slate-500">No credit card required • 7-day full access • Instant activation</p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
