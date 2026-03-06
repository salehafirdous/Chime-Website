"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, MessageSquare, Zap, Target, Search, Heart, Share2, Award, ArrowUpRight, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] -z-10 -translate-y-1/2" />

            <main className="relative z-10 pb-32">

                {/* Header */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl pt-12 md:pt-20 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-electric-blue/10 border border-electric-blue/30 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                    >
                        <Users className="w-10 h-10 text-electric-blue" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Welcome to the <span className="text-electric-blue">Chime Community</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto mb-10"
                    >
                        Connect with fellow administrators, share best practices for workforce management, and help shape the future of employee monitoring.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <button className="bg-electric-blue text-navy font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:-translate-y-0.5 transition-all">
                            Join the Discussion
                        </button>
                        <button className="bg-white/5 border border-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
                            Read Guidelines
                        </button>
                    </motion.div>
                </section>

                {/* Search & Stats */}
                <section className="container mx-auto px-4 max-w-5xl mb-24">
                    <div className="bg-[#110f29]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search forums, topics, and authors..."
                                className="w-full bg-[#161332] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-electric-blue/50"
                            />
                        </div>
                        <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-start px-4 md:px-0">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-electric-blue">12.5k</p>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Members</p>
                            </div>
                            <div className="w-px h-10 bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">48.2k</p>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Posts</p>
                            </div>
                            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                            <div className="text-center hidden sm:block">
                                <p className="text-2xl font-bold text-emerald-400">312</p>
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Online</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Forum Categories */}
                <section className="container mx-auto px-4 max-w-7xl mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white">Discussion Categories</h2>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {[
                            {
                                icon: <Target className="w-8 h-8 text-emerald-400" />,
                                bg: "bg-emerald-400/10",
                                border: "border-emerald-400/20",
                                title: "Best Practices & Strategies",
                                desc: "Share your methods for maintaining high productivity without micromanaging.",
                                topics: 1240,
                                active: "2 hours ago"
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-electric-blue" />,
                                bg: "bg-electric-blue/10",
                                border: "border-electric-blue/20",
                                title: "Feature Requests & Ideas",
                                desc: "Suggest new features and vote on improvements to the Chime platform.",
                                topics: 856,
                                active: "15 mins ago"
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
                                bg: "bg-purple-400/10",
                                border: "border-purple-400/20",
                                title: "General Discussion",
                                desc: "Talk about remote work trends, HR policies, and general industry news.",
                                topics: 3412,
                                active: "Just now"
                            },
                            {
                                icon: <Award className="w-8 h-8 text-orange-400" />,
                                bg: "bg-orange-400/10",
                                border: "border-orange-400/20",
                                title: "Showcase & Success Stories",
                                desc: "Share how Chime has positively impacted your organization's workflow.",
                                topics: 420,
                                active: "1 day ago"
                            }
                        ].map((cat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-[#1a173d]/60 backdrop-blur-md border border-white/5 hover:border-white/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 group transition-colors cursor-pointer"
                            >
                                <div className={`w-16 h-16 ${cat.bg} ${cat.border} border rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                                    {cat.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{cat.title}</h3>
                                    <p className="text-sm text-slate-400 mb-4">{cat.desc}</p>
                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                        <span>{cat.topics} Topics</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        <span>Latest: {cat.active}</span>
                                    </div>
                                </div>
                                <div className="hidden sm:flex w-10 h-10 rounded-full bg-white/5 items-center justify-center group-hover:bg-electric-blue group-hover:text-navy transition-colors flex-shrink-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Trending Topics */}
                <section className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Trending Topics</h2>
                    <div className="bg-[#110f29] border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5">
                        {[
                            { title: "How to handle employee pushback when introducing monitoring software?", author: "HR_Director_Jenny", replies: 84, views: "1.2k" },
                            { title: "API Documentation: Rate limits issue when exporting call logs", author: "DevOps_Dan", replies: 12, views: "340" },
                            { title: "Best configuration for stealth mode on Windows 11 Enterprise", author: "SysAdmin_Paul", replies: 45, views: "890" },
                            { title: "[Feature Request] Integration with Slack for idle time alerts", author: "StartupFounder99", replies: 156, views: "2.4k" }
                        ].map((topic, i) => (
                            <div key={i} className="p-5 hover:bg-white/5 transition-colors group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h4 className="text-base font-bold text-slate-200 group-hover:text-electric-blue transition-colors mb-2">{topic.title}</h4>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[8px] font-bold text-white">
                                            {topic.author.charAt(0)}
                                        </div>
                                        <span>Posted by <span className="text-slate-400">{topic.author}</span></span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 text-xs font-medium text-slate-400 sm:w-48 justify-end">
                                    <div className="flex items-center gap-1.5">
                                        <MessageSquare className="w-4 h-4" /> {topic.replies}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Eye className="w-4 h-4" /> {topic.views}
                                    </div>
                                    <div className="flex items-center gap-1.5 hover:text-rose-400 transition-colors">
                                        <Heart className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
