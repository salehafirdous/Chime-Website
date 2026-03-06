"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cloud, FileAudio, Users, Fingerprint } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const securityFeatures = [
    {
        icon: Fingerprint,
        title: "End-to-End Data Protection",
        description: "Every call log and metadata entry is encrypted with military-grade standards before it leaves the source device."
    },
    {
        icon: Cloud,
        title: "Secure Cloud Storage",
        description: "Multi-region redundant cloud servers guarantee your data is safe, backed up, and strictly accessible only by you."
    },
    {
        icon: FileAudio,
        title: "Encrypted Recordings",
        description: "Audio files are obfuscated and stored securely, preventing unauthorized listening or data leaks."
    },
    {
        icon: Users,
        title: "Role-Based Access Control",
        description: "Assign specific viewing or administrative rights to different team members, maintaining full control."
    }
];

export default function SecuritySection() {
    return (
        <section id="security" className="py-24 relative overflow-hidden bg-[#13112b]">
            {/* Dark background glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Active Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="absolute inset-0 bg-electric-blue/10 blur-[100px] rounded-full" />

                        <div className="relative aspect-square max-w-md mx-auto h-[400px] sm:h-[500px] glass-card bg-navy/80 border border-electric-blue/20 rounded-full flex items-center justify-center p-8 shadow-[0_0_50px_rgba(0,240,255,0.1)]">
                            {/* Spinning/pulsing rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-dashed border-white/10"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                                className="absolute inset-12 rounded-full border border-white/5"
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                className="absolute inset-24 rounded-full border border-electric-blue/20 flex items-center justify-center"
                            >
                                {/* Random nodes on ring */}
                                <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-electric-blue rounded-full shadow-[0_0_10px_#00f0ff]" />
                                <div className="absolute -bottom-1.5 left-1/4 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]" />
                            </motion.div>

                            {/* Central Shield */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="relative z-10 w-40 h-40 bg-navy border flex items-center justify-center border-electric-blue/50 rounded-full shadow-[0_0_40px_rgba(0,240,255,0.3)]"
                            >
                                <ShieldCheck className="w-20 h-20 text-electric-blue" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="order-1 lg:order-2"
                    >
                        <motion.div variants={fadeInUp} className="mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Uncompromising <span className="text-gradient">Security & Privacy</span>
                            </h2>
                            <p className="text-lg text-slate-400">
                                Your data is your business. We engineered Chime from the ground up with a privacy-first, zero-trust architecture.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {securityFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div key={index} variants={fadeInUp} className="flex gap-4 group">
                                        <div className="mt-1 bg-slate-800/50 p-3 rounded-xl border border-white/5 group-hover:border-electric-blue/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all h-fit">
                                            <Icon className="w-6 h-6 text-electric-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
