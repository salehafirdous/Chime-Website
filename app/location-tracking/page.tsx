"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MapPin, Navigation, Locate, Map as MapIcon, ShieldCheck, Bell, History, Smartphone, Globe, Layers, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function LocationTrackingPage() {
    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-40 right-1/4 w-[800px] h-[800px] bg-[#2e2a5d]/30 rounded-full blur-[150px]" />
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
                                Real-Time <span className="text-electric-blue">Location Tracking</span> & Geofencing
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl">
                                Never lose sight of what matters. Chime's advanced GPS tracking provides precise, real-time location data, historical movement logs, and smart geofencing alerts to keep your field team and family safe.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/signup"
                                    className="bg-electric-blue text-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                                >
                                    Track Live Location
                                </Link>
                                <span className="text-sm text-slate-400 font-medium px-4 py-2 border border-white/10 rounded-full bg-white/5">
                                    99.9% GPS Accuracy
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
                            {/* Map Dashboard Preview */}
                            <div className="absolute right-0 top-10 w-[95%] h-[400px] bg-[#110f29]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card">
                                <div className="h-12 border-b border-white/10 flex items-center px-6 justify-between bg-[#1a173d]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                        <h3 className="text-sm font-bold text-white">Live Asset Tracking</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-24 h-6 bg-white/5 rounded-md border border-white/10 text-[10px] flex items-center px-2 text-slate-400">Search Device...</div>
                                    </div>
                                </div>

                                <div className="p-0 h-full relative">
                                    {/* Mock Map Background */}
                                    <div className="absolute inset-0 bg-[#161332] flex items-center justify-center opacity-40">
                                        <Globe className="w-64 h-64 text-white/5" />
                                        <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-electric-blue/20 rounded-full"></div>
                                        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-electric-blue/10 rounded-full"></div>
                                    </div>

                                    {/* Map Overlays */}
                                    <div className="relative h-[calc(100%-3rem)] p-6">
                                        {/* Tracking Pin */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                                        >
                                            <div className="bg-electric-blue text-navy px-3 py-1 rounded-full text-[10px] font-bold shadow-lg mb-1">
                                                Active: Maria's Phone
                                            </div>
                                            <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div className="w-4 h-4 bg-electric-blue/20 rounded-full animate-ping absolute -bottom-2"></div>
                                        </motion.div>

                                        {/* Sidebar Info */}
                                        <div className="absolute left-6 top-6 w-56 space-y-3">
                                            {[
                                                { name: "Office Zone", status: "Inside", color: "text-emerald-400" },
                                                { name: "Home Zone", status: "Inactive", color: "text-slate-500" },
                                            ].map((zone, i) => (
                                                <div key={i} className="bg-[#1a173d]/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[10px] font-bold text-white">{zone.name}</span>
                                                        <span className={`text-[8px] font-bold uppercase ${zone.color}`}>{zone.status}</span>
                                                    </div>
                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                        <div className="h-full bg-electric-blue w-full"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Bottom Legend */}
                                        <div className="absolute bottom-10 right-6 bg-[#1a173d]/90 p-3 rounded-xl border border-white/10 shadow-xl flex gap-4">
                                            <div className="text-center">
                                                <p className="text-[8px] text-slate-500 uppercase">Speed</p>
                                                <p className="text-xs font-bold text-white">12 km/h</p>
                                            </div>
                                            <div className="w-px h-6 bg-white/10"></div>
                                            <div className="text-center">
                                                <p className="text-[8px] text-slate-500 uppercase">Battery</p>
                                                <p className="text-xs font-bold text-emerald-400">85%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Notification */}
                            <motion.div
                                animate={{ x: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -left-10 bottom-24 w-52 bg-[#1a173d] border border-electric-blue/40 rounded-xl p-3 shadow-2xl z-20"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-electric-blue/10 flex items-center justify-center border border-electric-blue/20">
                                        <Bell className="w-4 h-4 text-electric-blue" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-white">Geofence Alert</p>
                                        <p className="text-[8px] text-slate-400 leading-tight">Device-01 has exited the 'Warehouse' restricted zone.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* What is Location Tracking Block */}
                <section className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-navy/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl glass-card relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Precision <span className="text-electric-blue">Geospatial Awareness</span>
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                            Location tracking is more than just a dot on a map—it's about understanding movement, ensuring safety, and optimizing logistics. Chime's enterprise-grade platform leverages GPS, Wi-Fi, and cellular data to provide continuous location updates even in challenging environments. Whether you're coordinating a delivery fleet or keeping an eye on your family's whereabouts, our intuitive mapping interface gives you the clarity and peace of mind you need.
                        </p>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Locate className="w-6 h-6 text-blue-400" />,
                                title: "Live GPS",
                                desc: "Track movement in real-time with sub-meter accuracy and frequent updates."
                            },
                            {
                                icon: <Navigation className="w-6 h-6 text-emerald-400" />,
                                title: "Route History",
                                desc: "Review complete travel paths taken by any device over the last 90 days."
                            },
                            {
                                icon: <Layers className="w-6 h-6 text-orange-400" />,
                                title: "Smart Geofencing",
                                desc: "Create unlimited virtual boundaries and get notified upon entry or exit."
                            },
                            {
                                icon: <Zap className="w-6 h-6 text-yellow-400" />,
                                title: "Instant Sync",
                                desc: "Data syncs across all your devices instantly, ensuring you're always informed."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#110f29]/60 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all text-center group"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Integration Section */}
                <section className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center mb-8 border border-electric-blue/30">
                            <MapIcon className="w-10 h-10 text-electric-blue" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Seamless Map Integration</h3>
                        <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">
                            Chime integrates directly with Google Maps and Apple Maps, providing you with familiar satellite views, street views, and traffic data to better understand the context of every location update.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-white">Google Maps API</div>
                            <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-white">Apple Maps Core</div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
