"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, hoverScale } from "@/lib/animations";

const plans = [
    {
        name: "Basic",
        description: "Essential monitoring for individuals.",
        price: "$29",
        duration: "/month",
        features: [
            { name: "Call History Tracking", included: true },
            { name: "Incoming & Outgoing Logs", included: true },
            { name: "Basic Call Blocking", included: true },
            { name: "Call Recording", included: false },
            { name: "Remote Dashboard", included: false },
        ],
        highlight: false,
        cta: "Start Basic",
    },
    {
        name: "Pro",
        description: "Advanced tracking for families and small teams.",
        price: "$59",
        duration: "/month",
        features: [
            { name: "Call History Tracking", included: true },
            { name: "Incoming & Outgoing Logs", included: true },
            { name: "Advanced Call Blocking", included: true },
            { name: "Call Recording (30 days)", included: true },
            { name: "Remote Dashboard Access", included: true },
        ],
        highlight: true,
        cta: "Start Pro Free Trial",
        badge: "Most Popular",
    },
    {
        name: "Enterprise",
        description: "Full-scale solution for growing businesses.",
        price: "$199",
        duration: "/month",
        features: [
            { name: "Unlimited Call Log Tracking", included: true },
            { name: "Unlimited Cloud Recording", included: true },
            { name: "Role-Based Access Control", included: true },
            { name: "Priority 24/7 Support", included: true },
            { name: "Custom Integration Setup", included: true },
        ],
        highlight: false,
        cta: "Contact Sales",
    },
];

export default function PricingPreview() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-[#13112b]">
            {/* Background glow for the pro plan */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-electric-blue/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Transparent, <span className="text-gradient">Flexible Pricing</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Choose the plan that fits your monitoring needs. No hidden fees, cancel anytime.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            variants={fadeInUp}
                            className={cn(
                                "relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2",
                                plan.highlight
                                    ? "bg-navy border-2 border-electric-blue shadow-[0_0_30px_rgba(0,240,255,0.2)] md:-mt-8"
                                    : "bg-slate-900 border border-white/10"
                            )}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electric-blue to-[#00c0ff] text-navy font-bold px-4 py-1 text-xs uppercase tracking-widest rounded-full shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-slate-400 mb-6 h-10">{plan.description}</p>
                                <div className="flex justify-center items-end gap-1">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                    <span className="text-slate-400 mb-1">{plan.duration}</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <div className="bg-electric-blue/10 p-1 rounded-full shrink-0">
                                                <Check className="w-4 h-4 text-electric-blue" />
                                            </div>
                                        ) : (
                                            <div className="bg-white/5 p-1 rounded-full shrink-0">
                                                <X className="w-4 h-4 text-slate-600" />
                                            </div>
                                        )}
                                        <span className={cn(
                                            "text-sm font-medium",
                                            feature.included ? "text-slate-300" : "text-slate-600"
                                        )}>
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"} className="block w-full">
                                <motion.button
                                    variants={hoverScale}
                                    whileHover="whileHover"
                                    whileTap="whileTap"
                                    className={cn(
                                        "w-full py-3 px-6 rounded-xl font-bold transition-all",
                                        plan.highlight
                                            ? "bg-electric-blue text-navy hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                    )}
                                >
                                    {plan.cta}
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link href="/pricing" className="text-electric-blue font-medium hover:text-[#00c0ff] transition-colors inline-flex items-center gap-2">
                        View Full Feature Comparison <span className="text-lg">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
