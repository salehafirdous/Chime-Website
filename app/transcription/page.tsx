"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    Calendar, ChevronLeft, ChevronRight,
    Smartphone, RefreshCw, LayoutDashboard, Bell, Clock3, Users, MessageSquare,
    PhoneCall, Image as ImageIcon, Video, Box, Wifi, Camera, Map, X,
    PlayCircle, Download, ChevronDown, Info as InfoIcon, Search, Menu, FileText, Languages, History, BrainCircuit
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const transcriptionData = [
    {
        id: 1,
        name: "Aron",
        number: "1357665",
        startTime: "2022-01-09 15:10",
        duration: "05:10",
        sentiment: "Positive",
        preview: "Hello, I'm calling to confirm the order details for the new batch...",
        summary: "Order confirmation and logistics coordination."
    },
    {
        id: 2,
        name: "Jane",
        number: "1357662",
        startTime: "2022-01-01 12:45",
        duration: "01:31",
        sentiment: "Positive",
        preview: "Thank you for the update. We are very happy with the progress.",
        summary: "Client satisfaction update."
    },
    {
        id: 3,
        name: "Lucy",
        number: "1357633",
        startTime: "2022-02-07 14:30",
        duration: "03:20",
        sentiment: "Negative",
        preview: "I've been waiting for over an hour and no one has responded yet...",
        summary: "Customer complaint regarding response time."
    },
    {
        id: 4,
        name: "Rita",
        number: "1357622",
        startTime: "2022-02-09 11:30",
        duration: "02:45",
        sentiment: "Positive",
        preview: "The feedback from the team was excellent. We are moving forward.",
        summary: "Project approval confirmation."
    },
    {
        id: 5,
        name: "Sophie",
        number: "1357655",
        startTime: "2022-03-05 14:15",
        duration: "01:15",
        sentiment: "Negative",
        preview: "This is not what we agreed upon. I need to speak with a manager.",
        summary: "Dispute over agreement terms."
    }
];

export default function TranscriptionPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedTranscript, setSelectedTranscript] = useState<any>(null);

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
                                <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Transcription Tools</p>
                                <div className="space-y-1">
                                    {[
                                        { name: "Live Transcription", icon: <FileText className="w-4 h-4" />, active: true },
                                        { name: "Transcript History", icon: <History className="w-4 h-4" /> },
                                        { name: "AI Summaries", icon: <BrainCircuit className="w-4 h-4" /> },
                                        { name: "Multi-Language", icon: <Languages className="w-4 h-4" /> },
                                    ].map((item) => (
                                        <div
                                            key={item.name}
                                            className={`${item.active ? "bg-electric-blue/10 border-l-2 border-electric-blue text-electric-blue" : "text-slate-400 hover:text-white hover:bg-white/5"} transition-colors cursor-pointer px-4 py-2.5 flex items-center gap-3 text-sm font-medium`}
                                        >
                                            <span className={item.active ? "text-electric-blue" : "text-slate-500"}>{item.icon}</span>
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col bg-[#110f29] overflow-hidden w-full">

                        {/* Topbar */}
                        <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#161332]">
                            <div className="flex-1 flex gap-4 items-center">
                                <button
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-300 md:hidden"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                                <h1 className="text-white font-bold hidden sm:block">Call Transcription</h1>
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

                        {/* Dashboard Stats */}
                        <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-white/10 bg-[#1a173d]/30">
                            {[
                                { label: "Total Transcribed", value: "1,284", icon: <FileText className="w-4 h-4 text-emerald-400" /> },
                                { label: "AI Summaries", value: "482", icon: <BrainCircuit className="w-4 h-4 text-electric-blue" /> },
                                { label: "Hours Processed", value: "84.5h", icon: <Clock3 className="w-4 h-4 text-purple-400" /> },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                    <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">{stat.label}</p>
                                        <p className="text-lg font-bold text-white">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* List & Viewer */}
                        <div className="flex-1 flex overflow-hidden">
                            {/* List Container */}
                            <div className={`flex-1 overflow-y-auto custom-scrollbar p-6 ${selectedTranscript ? 'hidden lg:block' : 'block'}`}>
                                <div className="space-y-4">
                                    {transcriptionData.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={() => setSelectedTranscript(item)}
                                            className="group p-6 bg-[#1a173d]/40 border border-white/10 rounded-2xl hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <div>
                                                    <h3 className="text-white font-bold text-lg">{item.name}</h3>
                                                    <p className="text-xs text-slate-400">{item.number} • {item.startTime}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${item.sentiment === "Positive" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                                                        {item.sentiment}
                                                    </span>
                                                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-300 line-clamp-2 italic mb-3">"{item.preview}"</p>
                                            <div className="flex items-center gap-4">
                                                <span className="text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded">Transcript AI Summary</span>
                                                <p className="text-[11px] text-electric-blue font-medium">{item.summary}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Viewer Container (Detailed View) */}
                            {selectedTranscript && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="w-full lg:w-[450px] bg-[#1a173d] border-l border-white/10 flex flex-col"
                                >
                                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                                        <button onClick={() => setSelectedTranscript(null)} className="lg:hidden p-2 text-slate-400 hover:text-white">
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <h2 className="text-lg font-bold text-white">Transcript Details</h2>
                                        <button className="text-slate-400 hover:text-white">
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-8">
                                        <div>
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-4">Speaker Overview</p>
                                            <div className="flex gap-4">
                                                <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/5">
                                                    <p className="text-[11px] text-slate-400 mb-1">Speaker A (Target)</p>
                                                    <p className="text-sm text-white font-bold">42% talking time</p>
                                                </div>
                                                <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/5">
                                                    <p className="text-[11px] text-slate-400 mb-1">Speaker B (Other)</p>
                                                    <p className="text-sm text-white font-bold">58% talking time</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Conversation Transcript</p>

                                            <div className="space-y-4">
                                                <div className="flex gap-4 items-start">
                                                    <div className="w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center text-xs text-electric-blue flex-shrink-0">A</div>
                                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                                                        <p className="text-xs text-slate-200 leading-relaxed font-medium">Hello there, this is Aron from the marketing department. I'm calling about the sync we scheduled earlier.</p>
                                                        <span className="text-[10px] text-slate-500 mt-2 block">15:10:02</span>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 flex-row-reverse items-start">
                                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-400 flex-shrink-0">B</div>
                                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tr-none border border-white/10">
                                                        <p className="text-xs text-slate-200 leading-relaxed font-medium">Oh hi Aron! Yes, I'm ready. I have the documents open right now.</p>
                                                        <span className="text-[10px] text-slate-500 mt-2 block text-right">15:10:15</span>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 items-start">
                                                    <div className="w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center text-xs text-electric-blue flex-shrink-0">A</div>
                                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                                                        <p className="text-xs text-slate-200 leading-relaxed font-medium">Great. Let's start with the Q3 projections. I noticed some discrepancies in the regional data from last Tuesday.</p>
                                                        <span className="text-[10px] text-slate-500 mt-2 block">15:10:45</span>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 flex-row-reverse items-start">
                                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-400 flex-shrink-0">B</div>
                                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tr-none border border-white/10 font-medium">
                                                        <p className="text-xs text-slate-200 leading-relaxed italic border-l-2 border-electric-blue pl-3 py-1 bg-electric-blue/5">"I'll look into it immediately and send you a revised spreadsheet by the end of the day."</p>
                                                        <span className="text-[10px] text-slate-500 mt-2 block text-right">15:11:10</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-electric-blue text-navy p-4 rounded-xl font-bold text-center cursor-pointer hover:bg-cyan-400 transition-colors">
                                            Export to PDF / DOCX
                                        </div>
                                    </div>
                                </motion.div>
                            )}
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
