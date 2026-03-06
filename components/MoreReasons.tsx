"use client";

import { motion } from "framer-motion";
import { ArrowLeftRight, Clock, Smartphone, PhoneOff, EyeOff, History, User, Mic, Phone, Plus, Video, Grid } from "lucide-react";
import { staggerContainer, fadeInUp, hoverGlow } from "@/lib/animations";

export default function MoreReasons() {
    const leftFeatures = [
        {
            icon: <ArrowLeftRight className="w-6 h-6 text-electric-blue" />,
            title: "Incoming & Outgoing Call Details",
            description: "See who called, when, and if it was incoming or outgoing all in one view."
        },
        {
            icon: <Clock className="w-6 h-6 text-electric-blue" />,
            title: "Call Duration & Timestamps",
            description: "Check how long each call lasted and exactly when it happened."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-electric-blue" />,
            title: "Remote Monitoring Access",
            description: "View call activity from anywhere using our online dashboard."
        }
    ];

    const rightFeatures = [
        {
            icon: <PhoneOff className="w-6 h-6 text-electric-blue" />,
            title: "Call Blocking",
            description: "Block unwanted numbers and stop spam calls easily."
        },
        {
            icon: <EyeOff className="w-6 h-6 text-electric-blue" />,
            title: "Stealth Mode (No Notifications)",
            description: "The app stays silent and hidden while running in the background."
        },
        {
            icon: <History className="w-6 h-6 text-electric-blue" />,
            title: "Track Previous Call History",
            description: "Find past call history with names, times, and durations without searching your phone."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#161332]">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-[#2E2A5D]/40 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Even <span className="text-electric-blue">More Reasons</span> to Choose Us
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">

                    {/* Left Column Features */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        {leftFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: i * 0.1 }}
                            >
                                <motion.div
                                    variants={hoverGlow}
                                    whileHover="hover"
                                    className="bg-[#1a173d]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-left hover:bg-white/5 transition-all"
                                >
                                    <div className="w-12 h-12 bg-navy rounded-xl border border-electric-blue/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Middle Column Mockups */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                        className="relative h-[600px] flex items-center justify-center order-1 lg:order-2"
                    >
                        {/* Connecting decorative element */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full z-30 flex items-center justify-center gap-2 shadow-2xl">
                            <Mic className="w-4 h-4 text-electric-blue" />
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 2, 4, 3, 1, 2, 1].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [`${h * 4}px`, `${h * 8}px`, `${h * 4}px`] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        className="w-1 bg-electric-blue rounded-full"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Phone 1: Contacts (Left/Behind) */}
                        <div className="absolute left-1/2 -translate-x-[60%] lg:-translate-x-[70%] -rotate-6 w-64 h-[500px] bg-white rounded-[2.5rem] p-3 shadow-2xl z-10 border-[6px] border-[#2E2A5D]">
                            <div className="w-full h-full bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col pt-8">
                                <div className="text-center pb-4 border-b border-slate-200">
                                    <h3 className="font-bold text-slate-800">Contacts</h3>
                                </div>
                                <div className="flex-1 overflow-hidden p-4 space-y-4">
                                    {[
                                        { name: "John Smith", time: "15:00", type: "Incoming", color: "text-emerald-500" },
                                        { name: "Michael Stan", time: "22:34", type: "Outgoing", color: "text-emerald-500" },
                                        { name: "Harry", time: "12:23", type: "Missed", color: "text-red-500" },
                                        { name: "Michael Stan", time: "09:00", type: "Incoming", color: "text-emerald-500" },
                                        { name: "Mom", time: "05:12", type: "Outgoing", color: "text-emerald-500" }
                                    ].map((contact, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-slate-800 truncate">{contact.name}</p>
                                                <p className={`text-xs ${contact.color}`}>{contact.time}</p>
                                            </div>
                                            <div className="text-[10px] text-slate-400 font-medium">
                                                {contact.type}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Bottom Nav */}
                                <div className="h-16 bg-[#18539D] flex items-center justify-around text-white/70">
                                    <div className="flex flex-col items-center"><Grid className="w-5 h-5 mb-1" /></div>
                                    <div className="flex flex-col items-center text-white"><Phone className="w-5 h-5 mb-1" /></div>
                                    <div className="flex flex-col items-center"><User className="w-5 h-5 mb-1" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 2: Call in progress (Right/Front) */}
                        <div className="absolute left-1/2 -translate-x-[40%] lg:-translate-x-[30%] rotate-6 mt-12 w-64 h-[500px] bg-slate-900 rounded-[2.5rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 border-[6px] border-[#1a173d]">
                            <div className="w-full h-full bg-gradient-to-b from-[#2E8BDB] to-[#18539D] rounded-[2rem] overflow-hidden flex flex-col relative">
                                <div className="pt-10 text-center pb-8">
                                    <p className="text-white/80 text-sm mb-4">Call in progress</p>
                                    <div className="w-24 h-24 mx-auto bg-white/20 rounded-full border-4 border-white flex items-center justify-center mb-4">
                                        <User className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">John Smith</h3>
                                    <p className="text-white/80 font-mono text-lg">05:59</p>
                                </div>

                                <div className="flex-1 bg-white rounded-t-3xl p-6 flex flex-col justify-end pb-8">
                                    <div className="grid grid-cols-3 gap-y-6 gap-x-4 mb-8">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-1 text-slate-600">
                                                <Mic className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-medium">Mute</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-1 text-slate-600">
                                                <Grid className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-medium">Keypad</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-1 text-slate-600">
                                                <Video className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-medium">Video</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-1 text-slate-600">
                                                <Plus className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-medium">Add call</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-1 text-slate-600">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-medium">Speaker</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-1 text-slate-600">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-medium">Contacts</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-auto">
                                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 cursor-pointer hover:bg-red-600 transition-colors">
                                            <Phone className="w-6 h-6 text-white rotate-[135deg]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column Features */}
                    <div className="flex flex-col gap-6 order-3">
                        {rightFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: (i + 3) * 0.1 }}
                            >
                                <motion.div
                                    variants={hoverGlow}
                                    whileHover="hover"
                                    className="bg-[#1a173d]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-left hover:bg-white/5 transition-all"
                                >
                                    <div className="w-12 h-12 bg-navy rounded-xl border border-electric-blue/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
