"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Monitor, ShieldAlert, BarChart, Clock, Eye, Briefcase, MousePointerClick, ShieldCheck, MapPin, Search, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function EmployeeMonitoringPage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px]" />
                <div className="absolute top-80 right-1/4 w-[700px] h-[700px] bg-[#2E2A5D]/40 rounded-full blur-[160px]" />
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
                                Advanced <span className="text-electric-blue">Employee Monitoring</span> & Productivity Tracking
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                Boost team performance and secure company data with Chime's comprehensive employee monitoring software. Track screen time, app usage, and exact active hours to build a high-performing, accountable remote or in-office workforce.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-electric-blue text-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                                >
                                    Start Monitoring Teams
                                </Link>
                                <span className="text-sm text-slate-400 font-medium border border-white/10 px-4 py-2 rounded-full bg-white/5">
                                    Trusted by 5,000+ Enterprises
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
                                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                                        <span className="text-[10px] text-slate-400 font-mono">secure.chime.app/workforce</span>
                                    </div>
                                </div>

                                {/* App UI */}
                                <div className="flex h-[calc(100%-2.5rem)]">
                                    {/* Sidebar */}
                                    <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 gap-4 bg-[#161332]">
                                        <div className="w-8 h-8 rounded-lg bg-electric-blue/20 flex items-center justify-center mb-4 border border-electric-blue/30"><Image src="/logo.png" alt="logo" width={20} height={20} /></div>
                                        <BarChart className="w-5 h-5 text-electric-blue" />
                                        <Monitor className="w-5 h-5 text-slate-500" />
                                        <Clock className="w-5 h-5 text-slate-500" />
                                        <Eye className="w-5 h-5 text-slate-500" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-sm font-bold text-white">Engineering Team</h3>
                                                <p className="text-[10px] text-slate-400">Live Workspace Activity</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                                    9 Active
                                                </div>
                                                <div className="bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-1 rounded text-[10px] font-bold">
                                                    2 Idle
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats Row */}
                                        <div className="flex gap-3">
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3">
                                                <p className="text-[10px] text-slate-400 mb-1">Avg. Productivity</p>
                                                <div className="flex items-end gap-2">
                                                    <span className="text-xl font-bold text-emerald-400">87%</span>
                                                    <span className="text-[9px] text-emerald-500 mb-1">+2.4%</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3">
                                                <p className="text-[10px] text-slate-400 mb-1">Total Hours (Today)</p>
                                                <span className="text-xl font-bold text-blue-400">64h 20m</span>
                                            </div>
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3">
                                                <p className="text-[10px] text-slate-400 mb-1">Top Application</p>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                                                    <span className="text-sm font-bold text-white">VS Code</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Live Employee Table Mockup */}
                                        <div className="flex-1 bg-black/20 rounded-lg border border-white/5 p-3 flex flex-col gap-2">
                                            {[
                                                { name: "Alex Mercer", role: "Frontend Dev", active: true, app: "GitHub", prod: 92, pClr: "bg-emerald-400" },
                                                { name: "Sarah Chen", role: "Product Manager", active: true, app: "Jira", prod: 85, pClr: "bg-emerald-400" },
                                                { name: "David Kim", role: "Backend Dev", active: false, app: "Idle (15m)", prod: 64, pClr: "bg-yellow-400" },
                                                { name: "Emma Wright", role: "Designer", active: true, app: "Figma", prod: 96, pClr: "bg-emerald-400" }
                                            ].map((emp, i) => (
                                                <div key={i} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-md border border-transparent hover:border-white/10 transition-colors cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        <div className="relative">
                                                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">
                                                                {emp.name.charAt(0)}
                                                            </div>
                                                            <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-[#110f29] ${emp.active ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>
                                                        </div>
                                                        <div>
                                                            <p className="text-[11px] font-bold text-white leading-none">{emp.name}</p>
                                                            <p className="text-[9px] text-slate-500">{emp.role}</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right w-20">
                                                        <p className="text-[10px] text-slate-400">{emp.app}</p>
                                                    </div>
                                                    <div className="w-24">
                                                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                            <div className={`h-full ${emp.pClr}`} style={{ width: `${emp.prod}%` }}></div>
                                                        </div>
                                                        <p className="text-[9px] text-slate-400 mt-0.5 text-right">{emp.prod}% Prod.</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Alert / Screenshot Snippet */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-6 lg:-left-12 bottom-12 w-64 bg-[#1a173d]/90 backdrop-blur-xl border border-electric-blue/30 rounded-xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.5)] z-20"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-500/30 flex-shrink-0">
                                        <ShieldAlert className="w-4 h-4 text-rose-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-white mb-0.5">Policy Violation Detected</h4>
                                        <p className="text-[10px] text-slate-400 leading-tight">David Kim accessed restricted site (Social Media) during active work hours.</p>
                                        <div className="mt-2 flex gap-2">
                                            <button className="text-[9px] bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded">View Screenshot</button>
                                            <button className="text-[9px] text-slate-400 hover:text-white px-2 py-1">Dismiss</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* What is Employee Monitoring Software Block */}
                <section className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl glass-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            What is <span className="text-electric-blue">Employee Monitoring Software?</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                            Employee monitoring software is an intelligent platform designed to track and analyze team productivity, whether they work in the office or remotely. It discreetly runs in the background to log hours worked, capture screen activity, evaluate application usage, and ensure company policies are followed. With Chime's monitoring tools, management gains unbiased insights to reward top performers, identify workflow bottlenecks, and secure sensitive corporate data from insider threats.
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
                            className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight"
                        >
                            Who Relies On Our <span className="text-electric-blue">Workforce Analytics System?</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-[#110f29]/80 backdrop-blur-md border border-purple-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(192,132,252,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                                <Briefcase className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">
                                Enterprise Corporations
                            </h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Prevent corporate data leaks and theft",
                                    "Ensure strict compliance with industry regulations",
                                    "Monitor departmental productivity trends",
                                    "Analyze workflow efficiency across branches",
                                    "Identify shadow IT and unauthorized software"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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
                            className="bg-[#110f29]/80 backdrop-blur-md border border-electric-blue/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group flex flex-col transform md:-translate-y-4"
                        >
                            <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-6 border border-electric-blue/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                                <Search className="w-8 h-8 text-electric-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">
                                Remote & Hybrid Teams
                            </h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Verify actual hours worked accurately",
                                    'Eliminate time theft and "buddy punching"',
                                    "Track mouse clicks and keyboard activity",
                                    "Capture periodic random screen snapshots",
                                    "Maintain accountability across time zones"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
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
                            className="bg-[#110f29]/80 backdrop-blur-md border border-rose-400/30 rounded-3xl p-8 hover:bg-[#110f29] transition-all hover:shadow-[0_0_30px_rgba(244,63,94,0.1)] group flex flex-col"
                        >
                            <div className="w-16 h-16 bg-rose-400/10 rounded-2xl flex items-center justify-center mb-6 border border-rose-400/20 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-rose-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">
                                Small Business Owners
                            </h3>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "Ensure resources are utilized effectively",
                                    "Minimize distractive browsing during work hours",
                                    "Generate automated accurate timesheets",
                                    "Evaluate and reward top-performing staff",
                                    "Reduce micromanagement with automated logs"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Why Chime Grid */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight"
                        >
                            Powerful Capabilities for <span className="text-electric-blue">Unmatched Visibility</span>
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
                                icon: <Monitor className="w-6 h-6 text-blue-400" />,
                                color: "border-blue-400/30",
                                iconBg: "bg-blue-400/10",
                                title: "Live Screen Capture",
                                desc: "View real-time or historical screenshots of employee terminals, allowing supervisors to verify exact on-screen activity at any timestamp."
                            },
                            {
                                icon: <Clock className="w-6 h-6 text-emerald-400" />,
                                color: "border-emerald-400/30",
                                iconBg: "bg-emerald-400/10",
                                title: "Automated Time Tracking",
                                desc: "Ditch manual timesheets. Chime automatically begins tracking billable hours the moment work begins and pauses during idle periods."
                            },
                            {
                                icon: <MousePointerClick className="w-6 h-6 text-orange-400" />,
                                color: "border-orange-400/30",
                                iconBg: "bg-orange-400/10",
                                title: "App & Website Logging",
                                desc: "Categorize applications and websites as productive or unproductive, generating precise reports on how daily work hours are actually spent."
                            },
                            {
                                icon: <MapPin className="w-6 h-6 text-yellow-400" />,
                                color: "border-yellow-400/30",
                                iconBg: "bg-yellow-400/10",
                                title: "Geofencing & Location",
                                desc: "Track GPS locations of mobile devices and field agents, triggering alerts if devices leave authorized work zones."
                            },
                            {
                                icon: <Eye className="w-6 h-6 text-purple-400" />,
                                color: "border-purple-400/30",
                                iconBg: "bg-purple-400/10",
                                title: "Stealth Mode Operation",
                                desc: "Run the agent completely silently on company-owned hardware without desktop icons or task manager visibility to prevent tampering."
                            },
                            {
                                icon: <BarChart className="w-6 h-6 text-electric-blue" />,
                                color: "border-electric-blue/30",
                                iconBg: "bg-electric-blue/10",
                                title: "Productivity Reporting",
                                desc: "Receive automated daily or weekly breakdown reports via email, highlighting top performers and flagging unusual drops in activity."
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
