"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, CheckCircle2, ChevronRight, Headphones, Users, User, ArrowRight, BarChart3, Cloud, LayoutDashboard, PhoneCall, Link as LinkIcon, Smartphone, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp, hoverGlow } from "@/lib/animations";

export default function CallManagementPage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-40 right-1/4 w-[800px] h-[800px] bg-[#2E2A5D]/30 rounded-full blur-[150px]" />
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
                                Get The #1 <span className="text-electric-blue">Call Management App</span> With Built-In Call Recording, Call History, and Smart Call Control Features.
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                Want to grow your business 5X faster just by managing your calls better? Try the most trusted #1 call management app for small businesses. Get unlimited call recordings, cloud saving, full call history, and helpful support, all at a low cost.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-electric-blue text-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                                >
                                    Try For Free Now
                                </Link>
                                <span className="text-sm text-slate-400 font-medium">No Credit Card Required</span>
                            </div>
                        </motion.div>

                        {/* Interactive UI Graphic */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full lg:w-1/2 relative h-[500px]"
                        >
                            {/* Dashboard Window */}
                            <div className="absolute right-0 top-10 w-[95%] h-[400px] bg-[#110f29]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card">
                                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-[#1a173d]">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    <div className="ml-4 text-xs text-slate-300 font-medium flex items-center gap-2"><Image src="/logo.png" alt="logo" width={16} height={16} /> Chime Dashboard</div>
                                </div>
                                <div className="p-6 flex flex-col gap-6 h-full">
                                    <h3 className="text-lg font-bold text-white">Calls Dashboard</h3>
                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                                            <p className="text-xs text-slate-400 mb-1">Total Calls</p>
                                            <p className="text-2xl font-bold text-emerald-400">30</p>
                                        </div>
                                        <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                                            <p className="text-xs text-slate-400 mb-1">Incoming</p>
                                            <p className="text-2xl font-bold text-blue-400">12</p>
                                        </div>
                                        <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                                            <p className="text-xs text-slate-400 mb-1">Outgoing</p>
                                            <p className="text-2xl font-bold text-orange-400">19</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex gap-4">
                                        {/* Bar Chart Mockup */}
                                        <div className="flex-1 flex items-end gap-3 px-4 h-full border-b border-l border-white/10 pb-2">
                                            {[40, 70, 45, 90, 65, 80, 50, 65, 45].map((h, i) => (
                                                <div key={i} className="w-full relative group cursor-pointer h-full flex flex-col justify-end">
                                                    <div className="w-full bg-electric-blue rounded-t-sm transition-all group-hover:bg-cyan-300" style={{ height: `${h}%` }}></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-[120px] pt-4">
                                            <div className="w-20 h-20 rounded-full border-[6px] border-emerald-400 border-r-blue-500 border-b-orange-400 mx-auto flex items-center justify-center relative">
                                                <span className="text-xs font-bold text-white">50%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Phone Overlay Graphic */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-0 bottom-0 w-56 h-[420px] bg-[#1a173d] rounded-[2.5rem] border-[6px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-3 z-20"
                            >
                                <div className="h-full w-full bg-[#110f29] rounded-[2rem] overflow-hidden flex flex-col relative top-0 pb-4">
                                    <div className="pt-8 pb-4 border-b border-white/10 px-4">
                                        <p className="font-bold text-white text-sm text-center">Call History</p>
                                    </div>
                                    <div className="p-3 space-y-3 overflow-hidden flex-1">
                                        {[
                                            { n: "Andrew Adams", t: "03:02:20", c: "text-emerald-400", d: "11:24" },
                                            { n: "Smith Jen", t: "01:14:05", c: "text-red-400", d: "00:00" },
                                            { n: "Michael Owen", t: "00:45:12", c: "text-blue-400", d: "05:12" },
                                            { n: "Emma Davis", t: "00:12:30", c: "text-emerald-400", d: "02:45" },
                                            { n: "Sarah Connor", t: "Yesterday", c: "text-blue-400", d: "15:20" },
                                        ].map((row, i) => (
                                            <div key={i} className="flex items-center gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                                                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                                                    <User className="w-3 h-3 text-slate-400" />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-xs font-bold text-white truncate">{row.n}</p>
                                                    <p className="text-[9px] text-slate-400">{row.t}</p>
                                                </div>
                                                <div className="flex flex-col items-end flex-shrink-0">
                                                    <Play className={`w-3 h-3 mb-1 ${row.c}`} />
                                                    <span className="text-[9px] text-slate-500">{row.d}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-0 w-full h-12 bg-[#161332] border-t border-white/10 flex justify-around items-center px-4">
                                        <Smartphone className="w-4 h-4 text-electric-blue" />
                                        <Users className="w-4 h-4 text-slate-500" />
                                        <PhoneCall className="w-4 h-4 text-slate-500" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* What is Call Management Software Block */}
                <section className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl glass-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-transparent pointer-events-none"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            What is <span className="text-electric-blue">Call Management Software?</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                            Call management software is a simple tool that helps you track, record, and manage all your calls in one place, whether they're incoming, outgoing, international, or local calls. It keeps your call logs organized and makes everything easy to handle right from your mobile. Chime is the trusted call management app made for everyone—individuals, business owners, sales teams, customer support teams, and more. You get full control over every call, along with 24x7 customer support for all your needs.
                        </p>
                    </motion.div>
                </section>

                {/* Who Is This Useful For */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white"
                        >
                            Who Is This <span className="text-electric-blue">Call Management System</span> Useful For?
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-electric-blue/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                <Headphones className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">
                                Sales Teams and Call Centers
                            </h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Track every lead and follow-up easily",
                                    "Call transfer to team members",
                                    "Get reminders for important client calls",
                                    "Access full call history of any number",
                                    "View performance reports to improve customer service"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-orange-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(251,146,60,0.1)] group flex flex-col transform md:-translate-y-4"
                        >
                            <div className="w-16 h-16 bg-orange-400/10 rounded-2xl flex items-center justify-center mb-6 border border-orange-400/20 group-hover:scale-110 transition-transform">
                                <PhoneCall className="w-8 h-8 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">
                                Calling Professionals and BPO Teams
                            </h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Handle high call volume without missing any",
                                    "Record and replay important conversations",
                                    "Keep all client data and notes in one place",
                                    "Manage different campaigns smoothly",
                                    "Check daily call stats and improve performance"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-400/20 group-hover:scale-110 transition-transform">
                                <User className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">
                                Solo Professionals and Individuals
                            </h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Handle incoming business and personal calls",
                                    "Get alerts for missed or incoming calls instantly",
                                    "Make and receive international calls easily",
                                    "View full call history with time, number, and call duration",
                                    "Access everything from mobile or desktop without extra setup"
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

                {/* Why Chime Is the Best App Grid */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight"
                        >
                            Why Chime Is the <span className="text-electric-blue">Best Call Management App</span> for Your Business Needs
                        </motion.h2>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {[
                            {
                                icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
                                color: "border-blue-400/30",
                                iconBg: "bg-blue-400/10",
                                title: "Lead Management",
                                desc: "Keep every lead organized from the first call to the final follow-up. Assign, track, and convert leads without any confusion or delay."
                            },
                            {
                                icon: <Cloud className="w-6 h-6 text-emerald-400" />,
                                color: "border-emerald-400/30",
                                iconBg: "bg-emerald-400/10",
                                title: "Cloud-Based Call Management",
                                desc: "Make and receive business calls from anywhere using a secure cloud setup that works across devices."
                            },
                            {
                                icon: <LayoutDashboard className="w-6 h-6 text-orange-400" />,
                                color: "border-orange-400/30",
                                iconBg: "bg-orange-400/10",
                                title: "Automatic Call Distribution",
                                desc: "Automatically send direct calls to the right team members based on availability or priority."
                            },
                            {
                                icon: <PhoneCall className="w-6 h-6 text-yellow-400" />,
                                color: "border-yellow-400/30",
                                iconBg: "bg-yellow-400/10",
                                title: "Live Call Logs",
                                desc: "Track every call in real time. View live call flow updates on incoming, outgoing, missed, and ongoing calls."
                            },
                            {
                                icon: <ArrowRight className="w-6 h-6 text-purple-400" />,
                                color: "border-purple-400/30",
                                iconBg: "bg-purple-400/10",
                                title: "Multi-Agent Call Routing",
                                desc: "Route incoming calls to the right agent instantly. Whether it's sales, support, or another team, customers always reach the right person."
                            },
                            {
                                icon: <LinkIcon className="w-6 h-6 text-electric-blue" />,
                                color: "border-electric-blue/30",
                                iconBg: "bg-electric-blue/10",
                                title: "CRM Integration",
                                desc: "Connect your favorite CRM to sync contacts, call notes, and lead updates automatically for complete call management."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className={`bg-[#1a173d]/60 backdrop-blur-sm border ${feature.color} rounded-2xl p-8 hover:bg-white/5 transition-all text-center flex flex-col items-center group`}
                            >
                                <div className={`w-14 h-14 ${feature.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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
