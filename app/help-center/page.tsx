"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Book, MessageCircle, FileText, Phone, Settings, ShieldCheck, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp, hoverGlow } from "@/lib/animations";

export default function HelpCenterPage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px] -z-10" />

            <main className="relative z-10 pb-32">
                {/* Search Header */}
                <section className="container mx-auto px-4 md:px-8 max-w-4xl pt-12 md:pt-20 text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        How can we <span className="text-electric-blue">help you?</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search for articles, guides, or troubleshooting steps..."
                            className="w-full bg-[#110f29]/80 backdrop-blur-md border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                        />
                    </motion.div>
                </section>

                {/* Categories */}
                <section className="container mx-auto px-4 max-w-7xl mb-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: <Book className="w-6 h-6" />, title: "Getting Started", desc: "Basic setup and installation guides for new Chime users." },
                            { icon: <Settings className="w-6 h-6" />, title: "Account & Settings", desc: "Manage your profile, team members, and notification preferences." },
                            { icon: <ShieldCheck className="w-6 h-6" />, title: "Privacy & Security", desc: "Learn about stealth mode, data encryption, and compliance." },
                            { icon: <CreditCard className="w-6 h-6" />, title: "Billing & Plans", desc: "Understand your subscription, invoices, and payment methods." }
                        ].map((category, i) => (
                            <motion.div key={i} variants={fadeInUp}>
                                <Link href="#" className="block bg-[#1a173d]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-electric-blue/30 transition-all group h-full">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-electric-blue group-hover:scale-110 group-hover:bg-electric-blue/10 transition-all">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                                    <p className="text-sm text-slate-400">{category.desc}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Popular Articles */}
                <section className="container mx-auto px-4 max-w-5xl mb-24">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Popular Articles</h2>
                    <div className="bg-[#110f29]/60 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden">
                        {[
                            "How to remotely install the monitoring agent on a corporate device",
                            "Understanding the difference between active and idle time tracking",
                            "Configuring geofencing boundaries for field sales teams",
                            "Exporting call logs and history to a CSV format",
                            "Troubleshooting: Stealth mode is visible in Task Manager"
                        ].map((article, i) => (
                            <Link href="#" key={i} className="flex items-center gap-4 p-5 border-b border-white/5 hover:bg-white/5 transition-colors group last:border-0">
                                <FileText className="w-5 h-5 text-slate-500 group-hover:text-electric-blue transition-colors" />
                                <span className="text-slate-300 group-hover:text-white transition-colors">{article}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Contact Support */}
                <section className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/60 backdrop-blur-md border border-electric-blue/20 rounded-3xl p-10 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/10 to-transparent pointer-events-none" />
                        <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Can't find what you're looking for?</h2>
                        <p className="text-slate-400 mb-8 relative z-10">Our enterprise support team is available 24/7 to help you resolve any issues.</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <button className="flex items-center gap-2 bg-electric-blue text-navy font-bold py-3 px-6 rounded-xl hover:bg-cyan-300 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                Live Chat
                            </button>
                            <button className="flex items-center gap-2 bg-white/5 text-white border border-white/10 font-bold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors">
                                <Phone className="w-5 h-5" />
                                +1 (800) 555-0199
                            </button>
                        </div>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
