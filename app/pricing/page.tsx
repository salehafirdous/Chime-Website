"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, X, Shield, Lock, CreditCard, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation Variants
const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const fadeInUp: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    const plans = [
        {
            name: "Basic",
            description: "For Basic level monitoring",
            priceMonthly: 49, // ~$9 for Standard, basic is lower
            priceAnnual: 59,
            billingAnnual: 60,
            features: [
                "Call Management Dashboard",
                "Manage Contacts",
                "Call Analytics",
                "Full Call History",
                "Media Monitoring",
                "Live Location Tracking",
                "App Usage Monitoring"
            ],
            notIncluded: [
                "Secure Call Recordings",
                "Call Activity Timeline",
                "Smart Call Blocking",
                "Performance Reports",
                "View Text Messages",
                "Call Transcripts & Summaries",
                "Cloud Data Backup",
                "Monthly & Daily Filters",
                "Restricted App Alerts",
                "Export Call Recordings"
            ],
            isPopular: false,
        },
        {
            name: "Standard",
            description: "For Standard level",
            priceMonthly: 59,
            priceAnnual: 112,
            billingAnnual: 124,
            features: [
                "Call Management Dashboard",
                "Manage Contacts",
                "Full Call History",
                "Secure Call Recordings",
                "Call Analytics",
                "Call Activity Timeline",
                "Smart Call Blocking",
                "Performance Reports",
                "Media Monitoring",
                "View Text Messages",
                "App Usage Monitoring"
            ],
            notIncluded: [
                "Call Transcripts & Summaries",
                "Cloud Data Backup",
                "Monthly & Daily Filters",
                "Live Location Tracking",
                "Geo-Fencing Alerts",
                "Restricted App Alerts",
                "Export Call Recordings"
            ],
            isPopular: true,
        },
        {
            name: "Premium",
            description: "For Premium level tracking",
            priceMonthly: 99,
            priceAnnual: 228,
            billingAnnual: 299,
            features: [
                "Call Management Dashboard",
                "Performance Reports",
                "Full Call History",
                "Secure Call Recordings",
                "Call Analytics",
                "Call Transcripts & Summaries",
                "Call Activity Timeline",
                "Cloud Data Backup",
                "Monthly & Daily Filters",
                "Smart Call Blocking",
                "App Usage Monitoring",
                "Restricted App Alerts",
                "View Text Messages",
                "Export Call Recordings"
            ],
            notIncluded: [],
            isPopular: false,
        }
    ];

    const faqs = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 7-day free trial on our Standard plan so you can experience the full power of Chime before committing to a subscription."
        },
        {
            question: "Can I switch plans later?",
            answer: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard settings. Prorated charges will automatically apply."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay/Google Pay for swift transactions."
        },
        {
            question: "Is my data secure?",
            answer: "Security is our top priority. We use military-grade 256-bit AES encryption for all data storage and transit, ensuring complete privacy."
        },
        {
            question: "How does the refund policy work?",
            answer: "If you're not satisfied within your first 7 days of a paid subscription, simply contact our support team for a full, no-questions-asked refund."
        }
    ];

    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24">
            <Navbar />

            <main className="relative z-10 overflow-hidden">
                {/* Background Graphics */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none -z-10">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px]" />
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#2E2A5D]/40 rounded-full blur-[120px]" />
                </div>

                {/* Header Section */}
                <section className="container mx-auto px-4 pt-16 pb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Transparent <span className="text-electric-blue">Pricing Plans</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                            Choose the perfect monitoring tier for your needs. Scale your security and oversight without hidden fees.
                        </p>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center gap-4 mb-16">
                            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-white" : "text-slate-400"}`}>
                                Monthly
                            </span>
                            <div
                                className="w-16 h-8 bg-navy border border-white/20 rounded-full p-1 cursor-pointer relative"
                                onClick={() => setIsAnnual(!isAnnual)}
                            >
                                <motion.div
                                    className="w-6 h-6 bg-electric-blue rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                                    layout
                                    animate={{ x: isAnnual ? 32 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </div>
                            <span className={`text-sm font-semibold transition-colors flex items-center gap-2 ${isAnnual ? "text-white" : "text-slate-400"}`}>
                                Annually
                                <span className="text-[10px] bg-electric-blue/20 text-electric-blue px-2 py-0.5 rounded-full border border-electric-blue/30">
                                    SAVE 20%
                                </span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Pricing Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-20"
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`relative bg-[#110f29]/80 backdrop-blur-xl border rounded-3xl p-8 transition-all duration-300 flex flex-col group ${plan.isPopular
                                    ? "border-electric-blue/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] md:-mt-6 md:mb-6"
                                    : "border-white/10 hover:border-white/30 hover:shadow-2xl"
                                    }`}
                            >
                                {/* Highlight banner for Popular plan */}
                                {plan.isPopular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-electric-blue to-blue-500 text-navy text-xs font-bold px-6 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                                        Best Selling
                                    </div>
                                )}

                                <div className="text-left mb-8 border-b border-white/10 pb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl lg:text-5xl font-extrabold text-white">
                                            ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                                        </span>
                                        <span className="text-slate-400 text-sm">/User/Mo</span>
                                    </div>
                                    <p className="text-xs text-electric-blue font-medium h-4">
                                        {isAnnual ? `Billed annually at $${plan.billingAnnual}` : "Billed monthly"}
                                    </p>
                                    <p className="text-[10px] text-slate-500 mt-2">
                                        Tax will include, amounts vary per pricing option.
                                    </p>
                                </div>

                                <Link
                                    href="/signup"
                                    className={`w-full py-3.5 rounded-xl font-bold text-center transition-all duration-300 mb-8 ${plan.isPopular
                                        ? "bg-electric-blue text-navy hover:bg-electric-blue/90 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                                        }`}
                                >
                                    Contact Sales
                                </Link>

                                <div className="text-left flex-1 flex flex-col">
                                    <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">What's inside:</p>
                                    <ul className="space-y-3 flex-1">
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3">
                                                <div className="mt-0.5 rounded-full bg-electric-blue/20 p-0.5">
                                                    <Check className="w-3 h-3 text-electric-blue" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-slate-300">{feature}</span>
                                            </li>
                                        ))}
                                        {plan.notIncluded.map((feature, fIndex) => (
                                            <li key={`not-${fIndex}`} className="flex items-start gap-3 opacity-40">
                                                <div className="mt-0.5 rounded-full bg-slate-800 p-0.5">
                                                    <X className="w-3 h-3 text-slate-400" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm text-slate-400 line-through decoration-slate-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Feature Comparison Table Section (Desktop Only Graphic) */}
                <section className="container mx-auto px-4 py-20 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Detailed Feature Breakdown</h2>
                        <p className="text-slate-400">A comprehensive view of what's included in every tier.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto bg-navy/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden glass-card"
                    >
                        <div className="grid grid-cols-4 bg-[#110f29] border-b border-white/10 p-6 font-bold text-white">
                            <div className="col-span-1">Feature</div>
                            <div className="text-center text-slate-300">Basic</div>
                            <div className="text-center text-electric-blue">Standard</div>
                            <div className="text-center text-slate-300">Premium</div>
                        </div>

                        {[
                            { name: "Live Dashboard", basic: true, standard: true, premium: true },
                            { name: "Global Map View", basic: true, standard: true, premium: true },
                            { name: "Historical Logs (Days)", basic: "30", standard: "90", premium: "Unlimited" },
                            { name: "Team Members", basic: "Up to 5", standard: "Up to 20", premium: "Unlimited" },
                            { name: "AI Call Transcripts", basic: false, standard: false, premium: true },
                            { name: "Smart Export (PDF/CSV)", basic: false, standard: false, premium: true },
                            { name: "Priority 24/7 Support", basic: false, standard: true, premium: true },
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-4 p-5 items-center border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'} hover:bg-white/5 transition-colors`}>
                                <div className="col-span-1 text-sm font-medium text-slate-300">{row.name}</div>
                                <div className="text-center text-sm font-semibold">{typeof row.basic === 'boolean' ? (row.basic ? <Check className="w-5 h-5 text-electric-blue mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />) : <span className="text-slate-400">{row.basic}</span>}</div>
                                <div className="text-center text-sm font-semibold">{typeof row.standard === 'boolean' ? (row.standard ? <Check className="w-5 h-5 text-electric-blue mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />) : <span className="text-electric-blue">{row.standard}</span>}</div>
                                <div className="text-center text-sm font-semibold">{typeof row.premium === 'boolean' ? (row.premium ? <Check className="w-5 h-5 text-electric-blue mx-auto" /> : <X className="w-5 h-5 text-slate-600 mx-auto" />) : <span className="text-slate-200">{row.premium}</span>}</div>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* Trust & Guarantee Block */}
                <section className="container mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-gradient-to-r from-electric-blue/10 to-navy border border-electric-blue/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_40px_rgba(0,240,255,0.1)] relative overflow-hidden"
                    >
                        <div className="absolute right-0 top-0 w-64 h-full bg-electric-blue/10 blur-[80px] -z-10 transform translate-x-1/2"></div>

                        <div className="w-20 h-20 bg-navy border-2 border-electric-blue rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] flex-shrink-0">
                            <Shield className="w-10 h-10 text-electric-blue" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">7-Day Money-Back Guarantee</h3>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                We are completely confident in the value Chime provides. Try our platform risk-free. If you aren't completely satisfied within your first 7 days, we'll refund your entire payment, no questions asked.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 text-xs font-semibold text-slate-400">
                            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-electric-blue" /> 256-bit Encryption</div>
                            <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-electric-blue" /> Secure Checkout</div>
                        </div>
                    </motion.div>
                </section>

                {/* FAQ Section */}
                <section className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-400">Everything you need to know about our pricing and billing.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#110f29] border border-white/10 rounded-2xl overflow-hidden glass-card"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="font-semibold text-white text-lg">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-electric-blue text-navy' : 'bg-white/5 text-slate-400'}`}
                                    >
                                        <ChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-white/5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="container mx-auto px-4 py-20 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto rounded-[3rem] p-12 text-center relative overflow-hidden group border border-white/10"
                    >
                        {/* Complex Gradient Background Matrix */}
                        <div className="absolute inset-0 bg-[#0a0f1c] -z-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-navy to-[#161332] opacity-80 -z-10 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-blue/30 rounded-full blur-[100px] -z-10" />
                        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10" />

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to take control?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of teams using Chime for flawless monitoring and security tracking.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/signup"
                                className="w-full sm:w-auto bg-electric-blue hover:bg-electric-blue/90 text-navy font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:-translate-y-1"
                            >
                                Start Monitoring Today
                            </Link>
                            <Link
                                href="/demo"
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/20 transition-all hover:-translate-y-1"
                            >
                                Browse Demo Features
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
