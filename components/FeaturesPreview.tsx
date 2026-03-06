"use client";

import { motion } from "framer-motion";
import { History, Mic, Laptop, UserSearch, ShieldAlert, EyeOff } from "lucide-react";
import { staggerContainer, fadeInUp, hoverGlow } from "@/lib/animations";

const features = [
    {
        icon: History,
        title: "Call History Tracking",
        description: "Organized records and activity tracking with full call reviews including date, time, and duration.",
    },
    {
        icon: Mic,
        title: "Call Recording & Download",
        description: "Secure automatic call recording with cloud storage. Listen and download historical calls anytime.",
    },
    {
        icon: Laptop,
        title: "Remote Monitoring Access",
        description: "Access logs, recordings, and device data remotely from any browser through your secure dashboard.",
    },
    {
        icon: UserSearch,
        title: "Contact & Call Details",
        description: "View complete caller information, synchronized contact data, and detailed logs for every interaction.",
    },
    {
        icon: ShieldAlert,
        title: "Call Blocking",
        description: "Protect your ecosystem by automatically blocking spam, unwanted numbers, and restricted contacts.",
    },
    {
        icon: EyeOff,
        title: "Stealth Mode",
        description: "Monitor confidentially. Chime operates completely hidden with no notifications on the target device.",
    },
];

export default function FeaturesPreview() {
    return (
        <section id="features" className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-sm font-bold text-electric-blue uppercase tracking-widest mb-3">
                            Powerful Features
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Full Control and Maximum Visibility
                        </h3>
                        <p className="text-lg text-slate-400">
                            Chime gives you everything you need to monitor, manage, and secure call activity effectively without technical expertise.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={hoverGlow.whileHover}
                                className="glass-card p-8 group relative overflow-hidden"
                            >
                                {/* Background Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="bg-slate-800/80 border border-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-electric-blue" />
                                </div>

                                <h4 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
