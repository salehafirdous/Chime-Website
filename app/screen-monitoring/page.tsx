"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Monitor, ShieldAlert, BarChart, Clock, Eye, Briefcase, MousePointerClick, ShieldCheck, MapPin, Search, Users, Camera, Play, StopCircle, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ScreenMonitoringPage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px]" />
                <div className="absolute top-80 right-1/4 w-[700px] h-[700px] bg-[#2e2a5d]/40 rounded-full blur-[160px]" />
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
                                Real-Time <span className="text-electric-blue">Screen Monitoring</span> & Live Capture
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                Gain complete visibility into device activity with Chime's advanced screen monitoring. Capture high-resolution screenshots, record live sessions, and track every visual interaction to ensure security and maintain high productivity standards.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-electric-blue text-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                                >
                                    Start Live Monitoring
                                </Link>
                                <span className="text-sm text-slate-400 font-medium border border-white/10 px-4 py-2 rounded-full bg-white/5">
                                    Trusted by Security Teams Globally
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
                            {/* Main Web Dashboard */}
                            <div className="absolute right-0 top-0 w-full lg:w-[110%] h-[420px] bg-[#110f29] border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card z-10">
                                {/* Browser Toolbar */}
                                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#1a173d]">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="mx-auto bg-black/20 rounded-md px-4 py-1 flex items-center gap-2 border border-white/5 w-1/2 justify-center">
                                        <Monitor className="w-3 h-3 text-electric-blue" />
                                        <span className="text-[10px] text-slate-400 font-mono">chime.security/live-view/node-829</span>
                                    </div>
                                </div>

                                {/* App UI */}
                                <div className="flex h-[calc(100%-2.5rem)]">
                                    {/* Sidebar */}
                                    <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 gap-4 bg-[#161332]">
                                        <Camera className="w-5 h-5 text-electric-blue" />
                                        <Play className="w-5 h-5 text-slate-500" />
                                        <StopCircle className="w-5 h-5 text-slate-500" />
                                        <RefreshCw className="w-5 h-5 text-slate-500" />
                                    </div>

                                    {/* Content (Screen Grid) */}
                                    <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-sm font-bold text-white">Live Monitoring Console</h3>
                                            <div className="flex gap-2">
                                                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold">LIVE</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 h-full pb-8">
                                            {[
                                                { name: "Device-01", status: "Active", time: "10s ago", bg: "bg-slate-800" },
                                                { name: "Device-02", status: "Active", time: "Now", bg: "bg-slate-700" },
                                                { name: "Device-03", status: "Away", time: "2m ago", bg: "bg-slate-800" },
                                                { name: "Device-04", status: "Active", time: "5s ago", bg: "bg-slate-700" }
                                            ].map((screen, i) => (
                                                <div key={i} className="relative rounded-lg border border-white/10 overflow-hidden group">
                                                    <div className={`w-full h-24 ${screen.bg} flex items-center justify-center`}>
                                                        <div className="w-12 h-6 bg-white/5 rounded border border-white/10"></div>
                                                    </div>
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                        <button className="bg-electric-blue p-1.5 rounded-full text-navy"><Play className="w-3 h-3 fill-current" /></button>
                                                        <button className="bg-white/20 p-1.5 rounded-full text-white"><Camera className="w-3 h-3" /></button>
                                                    </div>
                                                    <div className="p-2 bg-[#1a173d] flex justify-between items-center">
                                                        <span className="text-[10px] text-white font-medium">{screen.name}</span>
                                                        <span className={`text-[8px] ${screen.status === 'Active' ? 'text-emerald-400' : 'text-slate-500'}`}>{screen.time}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Captured" Pop-up */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-8 lg:-left-16 bottom-16 w-56 bg-[#1a173d]/90 backdrop-blur-xl border border-electric-blue/30 rounded-xl p-3 shadow-2xl z-20"
                            >
                                <div className="flex gap-3">
                                    <div className="w-14 h-14 bg-white/5 rounded-lg border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        <div className="w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center">
                                            <Camera className="w-4 h-4 text-electric-blue" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold text-white mb-1">New Screen Capture</p>
                                        <p className="text-[8px] text-slate-400 leading-tight">Screen shot saved for Device-02 @ 17:45:02</p>
                                        <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-electric-blue w-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* What is Screen Monitoring Block */}
                <section className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl glass-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            What is <span className="text-electric-blue">Live Screen Monitoring?</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                            Screen monitoring software provides a high-definition window into the digital activities of any managed device. It allows administrators to view live desktop streams, set up automatic screenshot intervals, and record screen sessions for later review. Whether used for remote support, training audits, or security compliance, Chime's screen monitoring ensures you never miss a critical visual detail, providing an indisputable trail of activity and intent.
                        </p>
                    </motion.div>
                </section>

                {/* Benefits / Who is it for */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight"
                        >
                            Professional-Grade <span className="text-electric-blue">Visual Oversight</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Benefit 1 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-400/20 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">Security Compliance</h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Log all visual activity for regulatory audits",
                                    "Prevent unauthorized data viewing",
                                    "Detect accidental screen-sharing of sensitive info",
                                    "Capture visual proof of policy violations"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefit 2 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-electric-blue/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group flex flex-col transform md:-translate-y-4"
                        >
                            <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-6 border border-electric-blue/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                                <Monitor className="w-8 h-8 text-electric-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">Performance Audits</h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Review workflows for optimization",
                                    "Identify common UI/Software struggles",
                                    "Analyze user interaction patterns",
                                    "Provide visual feedback for training"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefit 3 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                                <Search className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">Incident Investigation</h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Visual playback of system errors",
                                    "Trace exact user steps before a crash",
                                    "Indisputable record for HR inquiries",
                                    "Audit trail for local file modifications"
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

                {/* Feature Grid */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {[
                            {
                                icon: <Play className="w-6 h-6 text-blue-400" />,
                                title: "Live Streaming",
                                desc: "Observe active screens in real-time with sub-second latency across any high-speed connection."
                            },
                            {
                                icon: <Camera className="w-6 h-6 text-emerald-400" />,
                                title: "Scheduled Snapshots",
                                desc: "Automate screenshots at specific intervals (e.g., every 60 seconds) or during specific app usage."
                            },
                            {
                                icon: <StopCircle className="w-6 h-6 text-rose-400" />,
                                title: "Session Recording",
                                desc: "Save complete desktop sessions as high-efficiency video files for compliance or training review."
                            },
                            {
                                icon: <Monitor className="w-6 h-6 text-yellow-400" />,
                                title: "Multi-Monitor Support",
                                desc: "Simultaneously view and record all displays attached to a single workstation."
                            },
                            {
                                icon: <Briefcase className="w-6 h-6 text-purple-400" />,
                                title: "Admin Viewport",
                                desc: "A unified dashboard designed to monitor hundreds of screens from a single interface."
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
                                title: "Encrypted Storage",
                                desc: "All visual data is encrypted at rest and in transit, ensuring privacy and regulatory compliance."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-[#1a173d]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all group"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
