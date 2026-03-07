"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Calendar, ChevronLeft, ChevronRight,
    Smartphone, RefreshCw, LayoutDashboard, Bell, Clock3, Users, MessageSquare,
    PhoneCall, Image as ImageIcon, Video, Box, Wifi, Camera, Map, X,
    PlayCircle, Download, ChevronDown, Info as InfoIcon, Search, Menu
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const callData = [
    { name: "Aron", number: "1357665", type: "Incoming", startTime: "2022-01-09 15:10", duration: "05:10", sentiment: "Positive" },
    { name: "Aron", number: "1357665", type: "Incoming", startTime: "2022-01-09 15:00", duration: "00:40", sentiment: "Neutral" },
    { name: "Jane", number: "1357662", type: "Outgoing", startTime: "2022-01-01 12:45", duration: "01:31", sentiment: "Positive" },
    { name: "John", number: "1357644", type: "Missed", startTime: "2022-02-05 09:20", duration: "00:00", sentiment: "Neutral" },
    { name: "Lucy", number: "1357633", type: "Incoming", startTime: "2022-02-07 14:30", duration: "03:20", sentiment: "Negative" },
    { name: "Paul", number: "1357611", type: "Outgoing", startTime: "2022-02-08 10:00", duration: "01:10", sentiment: "Neutral" },
    { name: "Rita", number: "1357622", type: "Incoming", startTime: "2022-02-09 11:30", duration: "02:45", sentiment: "Positive" },
    { name: "Tom", number: "1357605", type: "Missed", startTime: "2022-02-10 08:30", duration: "00:00", sentiment: "Neutral" },
    { name: "Sophie", number: "1357655", type: "Incoming", startTime: "2022-03-05 14:15", duration: "01:15", sentiment: "Negative" },
    { name: "Alex", number: "1357688", type: "Outgoing", startTime: "2022-03-06 17:45", duration: "04:30", sentiment: "Positive" },
    { name: "Nina", number: "1357641", type: "Incoming", startTime: "2022-03-07 16:00", duration: "02:00", sentiment: "Neutral" },
    { name: "Mark", number: "1357699", type: "Outgoing", startTime: "2022-03-10 12:25", duration: "01:25", sentiment: "Negative" },
];

export default function CallRecordingPage() {
    const [activeFeature, setActiveFeature] = useState("Call Recording");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 flex flex-col pt-24">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-8 max-w-7xl py-12 relative z-10">
                <div className="w-full bg-[#110f29] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex h-[850px] md:h-[800px] relative">

                    {/* Mobile Sidebar Overlay */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    {/* Dashboard Sidebar */}
                    <div className={`
                        absolute md:relative inset-y-0 left-0 z-40 w-64 bg-[#1a173d] border-r border-white/10 flex flex-col flex-shrink-0 
                        transition-transform duration-300 ease-in-out
                        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                    `}>
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
                                <div className="text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer px-4 py-3 flex items-center gap-3 font-medium text-sm">
                                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                                </div>
                                <div className="text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer px-4 py-3 flex items-center gap-3 font-medium text-sm">
                                    <Bell className="w-4 h-4" /> Mobile Alerts
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">General Features</p>
                                <div className="space-y-1">
                                    {[
                                        { name: "Mobile Usage Time", icon: <Clock3 className="w-4 h-4" /> },
                                        { name: "Contacts List", icon: <Users className="w-4 h-4" /> },
                                        { name: "Text Messages", icon: <MessageSquare className="w-4 h-4" /> },
                                        { name: "Call History", icon: <PhoneCall className="w-4 h-4" /> },
                                        { name: "Call Recording", icon: <PhoneCall className="w-4 h-4" />, active: true },
                                        { name: "Photos Library", icon: <ImageIcon className="w-4 h-4" /> },
                                        { name: "Videos Library", icon: <Video className="w-4 h-4" /> },
                                        { name: "Installed Apps", icon: <Box className="w-4 h-4" /> },
                                        { name: "Wifi Networks", icon: <Wifi className="w-4 h-4" /> },
                                        { name: "Screenshots", icon: <Camera className="w-4 h-4" /> },
                                    ].map((item) => (
                                        <div
                                            key={item.name}
                                            className={`${item.active ? "bg-electric-blue/10 border-l-2 border-electric-blue text-electric-blue" : "text-slate-400 hover:text-white hover:bg-white/5"} transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm font-medium`}
                                            onClick={() => {
                                                if (window.innerWidth < 768) setIsSidebarOpen(false);
                                            }}
                                        >
                                            <span className={item.active ? "text-electric-blue" : "text-slate-500"}>{item.icon}</span>
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Location Features</p>
                                <div className="space-y-1 pb-4">
                                    <div className="text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm font-medium">
                                        <Map className="w-4 h-4 text-slate-500" /> View Map
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col bg-[#110f29] overflow-hidden w-full">

                        {/* Status Bar */}
                        <div className="bg-electric-blue/10 border-b border-electric-blue/20 px-6 py-2.5 flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-200 font-medium">
                                <InfoIcon className="w-4 h-4 text-electric-blue" />
                                <span className="hidden sm:inline">You are currently previewing sample data. If everything looks good, please</span>
                                <span className="sm:hidden">Sample Data Mode</span>
                                <Link href="/signup" className="ml-2 bg-electric-blue text-navy px-3 py-1 rounded-md font-bold text-xs hover:bg-electric-blue/90 transition-colors">Sign Up</Link>
                            </div>
                            <X className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" />
                        </div>

                        {/* Topbar */}
                        <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#161332]">
                            <div className="flex-1">
                                <button
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-300 md:hidden"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/logo1.png" alt="Chime Logo" width={28} height={28} />
                                <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Chime</span>
                            </Link>
                            <div className="flex-1 flex justify-end">
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-white leading-tight">Lucas</p>
                                    <p className="text-xs text-slate-400 hidden sm:block">lucas@chime.dev</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions Bar */}
                        <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#1a173d]/30">
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 bg-electric-blue hover:bg-cyan-400 text-navy font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-electric-blue/10">
                                    <RefreshCw className="w-4 h-4" /> Sync
                                </button>
                                <span className="text-xs text-slate-400">Updated: 05 March, 2026 17:07</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="relative group">
                                    <button className="flex items-center gap-4 bg-[#1a173d] border border-white/10 px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-white transition-all">
                                        <ChevronLeft className="w-4 h-4" />
                                        <span className="flex items-center gap-2">
                                            05 March 2026
                                            <Calendar className="w-4 h-4" />
                                        </span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Table Content */}
                        <div className="flex-1 overflow-x-auto overflow-y-auto custom-scrollbar p-6">
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="bg-[#1a173d] text-slate-400 text-xs font-bold uppercase tracking-wider">
                                        <th className="px-6 py-4 rounded-tl-xl border border-white/5">Name</th>
                                        <th className="px-6 py-4 border border-white/5">Phone Number</th>
                                        <th className="px-6 py-4 border border-white/5">Type</th>
                                        <th className="px-6 py-4 border border-white/5">Start Time</th>
                                        <th className="px-6 py-4 border border-white/5">Duration</th>
                                        <th className="px-6 py-4 border border-white/5">Sentiment</th>
                                        <th className="px-6 py-4 border border-white/5">Audio</th>
                                        <th className="px-6 py-4 rounded-tr-xl border border-white/5 text-center">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {callData.map((call, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                                        >
                                            <td className="px-6 py-4 text-sm font-semibold text-white">{call.name}</td>
                                            <td className="px-6 py-4 text-sm text-slate-300">{call.number}</td>
                                            <td className="px-6 py-4">
                                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${call.type === "Incoming" ? "bg-emerald-500/10 text-emerald-400" :
                                                    call.type === "Outgoing" ? "bg-blue-500/10 text-blue-400" :
                                                        "bg-red-500/10 text-red-400"
                                                    }`}>
                                                    {call.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-400">{call.startTime}</td>
                                            <td className="px-6 py-4 text-sm text-slate-400">{call.duration}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-2 h-2 rounded-full ${call.sentiment === "Positive" ? "bg-emerald-400" :
                                                        call.sentiment === "Negative" ? "bg-red-400" :
                                                            "bg-amber-400"
                                                        }`}></span>
                                                    <span className="text-[11px] font-medium text-slate-300 italic">
                                                        {call.sentiment}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="text-electric-blue hover:text-cyan-300 transition-colors">
                                                    <PlayCircle className="w-5 h-5" />
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="text-slate-400 hover:text-white transition-colors">
                                                    <Download className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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
