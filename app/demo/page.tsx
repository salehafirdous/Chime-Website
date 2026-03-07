"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Calendar, Clock, MapPin, ChevronLeft, ChevronRight, CheckCircle2,
    Smartphone, RefreshCw, LayoutDashboard, Bell, Clock3, Users, MessageSquare,
    PhoneCall, Image as ImageIcon, Video, Box, Wifi, Camera, Map, ArrowLeft, X, ChevronDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dummy data for Calendar
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const dates = Array.from({ length: 31 }, (_, i) => i + 1);
const timeSlots = ["11:45 am", "12:00 pm", "12:15 pm", "12:30 pm", "12:45 pm", "2:15 pm"];

export default function DemoPage() {
    const [activeTab, setActiveTab] = useState<"book" | "dashboard">("dashboard");
    const [selectedDate, setSelectedDate] = useState<number>(15);

    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 flex flex-col pt-24">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-8 max-w-7xl py-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Experience <span className="text-electric-blue">Chime Live</span>
                    </motion.h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Explore our interactive dashboard preview or schedule a personalized walkthrough with our product experts.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-navy/40 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex gap-2">
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === "dashboard"
                                ? "bg-electric-blue text-navy shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            Interactive Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab("book")}
                            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${activeTab === "book"
                                ? "bg-electric-blue text-navy shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    {activeTab === "dashboard" ? (
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full bg-[#110f29] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[850px] md:h-[750px]"
                        >
                            {/* Dashboard Sidebar */}
                            <div className="w-full md:w-64 bg-[#1a173d] border-r border-white/10 flex flex-col flex-shrink-0">
                                {/* Device Picker */}
                                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                                    <div className="p-2 bg-electric-blue/10 rounded-lg text-electric-blue">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-400">Galaxy S10</p>
                                        <p className="text-sm font-semibold text-white truncate">Maria's Phone</p>
                                    </div>
                                    <button className="text-slate-400 hover:text-electric-blue transition-colors">
                                        <RefreshCw className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Sidebar Nav */}
                                <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
                                    <div className="px-4 mb-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Switch To Web</span>
                                            <div className="w-8 h-4 bg-white/10 rounded-full relative cursor-pointer">
                                                <div className="absolute left-1 top-0.5 w-3 h-3 bg-slate-400 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="bg-electric-blue/10 border-l-2 border-electric-blue text-electric-blue px-4 py-3 flex items-center gap-3 font-medium text-sm">
                                            <LayoutDashboard className="w-4 h-4" /> Dashboard
                                        </div>
                                        <div className="text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer px-4 py-3 flex items-center gap-3 font-medium text-sm">
                                            <Bell className="w-4 h-4" /> Mobile Alerts
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">General Features</p>
                                        <div className="space-y-1">
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <Clock3 className="w-4 h-4 text-slate-500" /> Mobile Usage Time
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <Users className="w-4 h-4 text-slate-500" /> Contacts List
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <MessageSquare className="w-4 h-4 text-slate-500" /> Text Messages
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <PhoneCall className="w-4 h-4 text-slate-500" /> Call History
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <ImageIcon className="w-4 h-4 text-slate-500" /> Photos Library
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <Video className="w-4 h-4 text-slate-500" /> Videos Library
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <Box className="w-4 h-4 text-slate-500" /> Installed Apps
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <Wifi className="w-4 h-4 text-slate-500" /> Wifi Networks
                                            </div>
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <Camera className="w-4 h-4 text-slate-500" /> Screenshots
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Location Features</p>
                                        <div className="space-y-1 pb-4">
                                            <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm">
                                                <Map className="w-4 h-4 text-slate-500" /> View Map
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Main Content */}
                            <div className="flex-1 flex flex-col bg-[#110f29] overflow-hidden relative">
                                {/* Sample Data Banner */}
                                <div className="bg-electric-blue/10 border-b border-electric-blue/20 px-6 py-2.5 flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-slate-200 font-medium">
                                        <InfoIcon className="w-4 h-4 text-electric-blue" />
                                        You are currently previewing sample data. If everything looks good, please
                                        <Link href="/signup" className="ml-2 bg-electric-blue text-navy px-3 py-1 rounded-md font-bold text-xs hover:bg-electric-blue/90">Sign Up</Link>
                                    </div>
                                    <X className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" />
                                </div>

                                {/* Topbar */}
                                <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#161332]">
                                    <div className="flex-1"></div>
                                    <Link href="/" className="flex items-center gap-2">
                                        <Image src="/logo1.png" alt="Chime Logo" width={28} height={28} />
                                        <span className="text-xl font-bold tracking-tight text-white">Chime</span>
                                    </Link>
                                    <div className="flex-1 flex justify-end">
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-white leading-tight">Lucas</p>
                                            <p className="text-xs text-slate-400">lucas@chime.dev</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Content Area */}
                                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-blue/5 via-navy to-[#110f29] relative">
                                    {/* App Screenshots Grid placeholder */}
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                        {[
                                            { name: "YouTube", bg: "bg-red-900/40", icon: "📺" },
                                            { name: "Netflix", bg: "bg-black/60", icon: "🎬" },
                                            { name: "Home Screen", bg: "bg-emerald-900/40", icon: "📱" },
                                            { name: "Settings", bg: "bg-slate-800/60", icon: "⚙️" }
                                        ].map((app, i) => (
                                            <div key={i} className={`aspect-[9/16] rounded-xl border border-white/10 ${app.bg} flex flex-col items-center justify-center p-4 shadow-lg relative overflow-hidden group hover:border-electric-blue/30 transition-colors`}>
                                                <div className="text-4xl mb-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">{app.icon}</div>
                                                <p className="text-xs text-white/70 font-medium">{app.name}</p>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                                <div className="absolute bottom-4 left-0 right-0 text-center z-10 text-[10px] text-white/40">Preview Active</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {/* Contacts Card */}
                                        <div className="bg-[#1a173d] border border-white/10 rounded-xl p-5 shadow-lg">
                                            <h3 className="text-sm font-bold text-white mb-6">Most Messaging Contacts</h3>
                                            <div className="space-y-5">
                                                {[
                                                    { num: "9866579646", name: "Henry", count: 14, width: "100%", color: "bg-electric-blue" },
                                                    { num: "3444678487", name: "Dad", count: 8, width: "65%", color: "bg-indigo-400" },
                                                    { num: "3487694712", name: "Mom", count: 4, width: "35%", color: "bg-purple-400" },
                                                ].map((c, i) => (
                                                    <div key={i}>
                                                        <div className="flex justify-between items-end mb-2">
                                                            <div>
                                                                <p className="text-sm font-semibold text-white leading-tight">{c.num}</p>
                                                                <p className="text-xs text-slate-400">{c.name}</p>
                                                            </div>
                                                            <span className="text-xs font-medium text-slate-300">{c.count} times</span>
                                                        </div>
                                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <div className={`h-full ${c.color} rounded-full`} style={{ width: c.width }}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Calls Card */}
                                        <div className="bg-[#1a173d] border border-white/10 rounded-xl p-5 shadow-lg">
                                            <h3 className="text-sm font-bold text-white mb-6">Most Calling Contacts</h3>
                                            <div className="space-y-5">
                                                {[
                                                    { num: "9866579646", name: "Henry", count: 12, width: "90%", color: "bg-emerald-400" },
                                                    { num: "3444678487", name: "Dad", count: 5, width: "45%", color: "bg-emerald-500" },
                                                    { num: "3487694712", name: "Mom", count: 2, width: "20%", color: "bg-emerald-600" },
                                                ].map((c, i) => (
                                                    <div key={i}>
                                                        <div className="flex justify-between items-end mb-2">
                                                            <div>
                                                                <p className="text-sm font-semibold text-white leading-tight">{c.num}</p>
                                                                <p className="text-xs text-slate-400">{c.name}</p>
                                                            </div>
                                                            <span className="text-xs font-medium text-slate-300">{c.count} times</span>
                                                        </div>
                                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <div className={`h-full ${c.color} rounded-full`} style={{ width: c.width }}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Websites Card */}
                                        <div className="bg-[#1a173d] border border-white/10 rounded-xl p-5 shadow-lg">
                                            <h3 className="text-sm font-bold text-white mb-6">Most Visited Websites</h3>
                                            <div className="space-y-5">
                                                {[
                                                    { title: "Your music, your way.", url: "apple.com/music", count: 9, width: "80%", color: "bg-pink-400" },
                                                    { title: "Social Media", url: "facebook.com", count: 6, width: "60%", color: "bg-blue-400" },
                                                    { title: "Learning Platform", url: "coursera.org", count: 4, width: "40%", color: "bg-orange-400" },
                                                ].map((c, i) => (
                                                    <div key={i}>
                                                        <div className="flex justify-between items-end mb-2">
                                                            <div className="truncate pr-4">
                                                                <p className="text-sm font-semibold text-white leading-tight truncate">{c.title}</p>
                                                                <p className="text-xs text-slate-400 truncate">{c.url}</p>
                                                            </div>
                                                            <span className="text-xs font-medium text-slate-300 flex-shrink-0">{c.count} times</span>
                                                        </div>
                                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <div className={`h-full ${c.color} rounded-full`} style={{ width: c.width }}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="book"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full max-w-5xl mx-auto bg-[#1a173d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Calendar Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 border-r border-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2E2A5D] to-[#161332] -z-10"></div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px] -z-10"></div>

                                <div className="flex flex-col items-center mb-10">
                                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center border-2 border-electric-blue mb-4 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                                        <Image src="/logo1.png" alt="Logo" width={32} height={32} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-1">Chime Demo</h2>
                                    <div className="flex items-center gap-4 text-sm font-medium text-electric-blue">
                                        <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> March 2026</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-y-4 text-center mb-4">
                                    {days.map(d => (
                                        <div key={d} className="text-xs font-bold text-slate-400">{d}</div>
                                    ))}
                                    {/* Offset for starting day (example) */}
                                    <div className="col-span-2"></div>

                                    {dates.map(date => (
                                        <button
                                            key={date}
                                            onClick={() => setSelectedDate(date)}
                                            className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-medium transition-all ${selectedDate === date
                                                ? "bg-electric-blue text-navy shadow-lg"
                                                : "text-slate-300 hover:bg-white/10"
                                                }`}
                                        >
                                            {date}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Details Side */}
                            <div className="w-full md:w-1/2 bg-[#110f29] p-8 md:p-12 flex flex-col">
                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Meeting details</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                                            <MapPin className="w-5 h-5 text-electric-blue mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-white">Google Meet</p>
                                                <p className="text-xs text-slate-400 mt-1">Web conferencing details provided upon confirmation.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                                            <Clock className="w-5 h-5 text-electric-blue mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-white">30 minutes</p>
                                                <p className="text-xs text-slate-400 mt-1">Comprehensive platform walkthrough.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8 border-t border-white/10 pt-8">
                                    <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Your Details</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Full Name</label>
                                                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors" />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Email Address</label>
                                                <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Contact Number</label>
                                                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors" />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Company Name</label>
                                                <input type="text" placeholder="Acme Inc" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-sm font-bold text-white">What time works best?</h3>
                                            <p className="text-xs text-slate-400">Showing times for March {selectedDate}, 2026</p>
                                        </div>
                                        <div className="text-xs text-electric-blue flex items-center gap-1 cursor-pointer hover:underline">
                                            UTC +05:30 <ChevronDown className="w-3 h-3" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3 mb-8">
                                        {timeSlots.map((time, i) => (
                                            <button
                                                key={i}
                                                className="py-3 border border-white/10 rounded-xl text-[11px] font-medium text-slate-300 hover:border-electric-blue/50 hover:bg-electric-blue/5 hover:text-white transition-all focus:ring-2 focus:ring-electric-blue focus:bg-electric-blue focus:text-navy focus:border-transparent outline-none"
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>

                                    <button className="w-full bg-slate-100 hover:bg-white text-[#161332] font-bold py-4 rounded-xl shadow-lg transition-all hover:shadow-xl">
                                        Confirm Booking
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Background elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#2E2A5D]/20 rounded-full blur-[150px]" />
            </div>

            <Footer />
        </div>
    );
}

// Simple Info Icon
function InfoIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}
