"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-[#161332] flex flex-col relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[150px] -z-0 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2E2A5D]/40 rounded-full blur-[120px] -z-0 translate-y-1/4" />

            {/* Header */}
            <header className="w-full relative z-10 px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2 group">
                    <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-electric-blue transition-colors" />
                    <span className="text-sm font-medium text-slate-400 group-hover:text-electric-blue transition-colors">Home</span>
                </Link>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Chime Logo" width={36} height={36} />
                    <span className="text-2xl font-bold tracking-tight text-white">Chime</span>
                </Link>
                <div className="w-[100px]"></div> {/* Spacer to center logo */}
            </header>

            {/* Form Container */}
            <div className="flex-1 flex items-center justify-center p-4 relative z-10 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="w-full max-w-3xl bg-navy/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Create your Account</h1>
                        <p className="text-slate-400 text-base">Join thousands of teams securing their communication with Chime.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-300 flex border-slate-700">Name <span className="text-electric-blue ml-1">*</span></label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#110f29] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                                />
                            </div>

                            {/* Company Name */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-300 flex">Company Name <span className="text-electric-blue ml-1">*</span></label>
                                <input
                                    type="text"
                                    placeholder="TechNova Solutions"
                                    className="w-full bg-[#110f29] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-300 flex">Email Address <span className="text-electric-blue ml-1">*</span></label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-[#110f29] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                                />
                            </div>

                            {/* Contact Number */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-300 flex">Contact Number <span className="text-electric-blue ml-1">*</span></label>
                                <div className="flex">
                                    <select className="bg-[#2E2A5D] border border-r-0 border-white/10 rounded-l-xl px-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-electric-blue/50 appearance-none cursor-pointer">
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+91">🇮🇳 +91</option>
                                        <option value="+61">🇦🇺 +61</option>
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="(555) 000-0000"
                                        className="w-full bg-[#110f29] border border-white/10 rounded-r-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Team Size */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-300 flex">Team Size <span className="text-electric-blue ml-1">*</span></label>
                                <select
                                    className="w-full bg-[#110f29] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all appearance-none"
                                >
                                    <option value="" disabled selected>No of Employees</option>
                                    <option value="1-10">1-10 Employees</option>
                                    <option value="11-50">11-50 Employees</option>
                                    <option value="51-200">51-200 Employees</option>
                                    <option value="200+">200+ Employees</option>
                                </select>
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-slate-300 flex">Password <span className="text-electric-blue ml-1">*</span></label>
                                <input
                                    type="password"
                                    placeholder="Create a strong password"
                                    className="w-full bg-[#110f29] border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 pt-4">
                            <div className="mt-1">
                                <input type="checkbox" id="terms" className="w-4 h-4 rounded border-white/20 bg-[#110f29] text-electric-blue focus:ring-electric-blue focus:ring-offset-[#161332]" />
                            </div>
                            <label htmlFor="terms" className="text-sm text-slate-400">
                                Yes, I understand and agree to the <Link href="#" className="text-electric-blue hover:underline">Terms of Service</Link> and <Link href="#" className="text-electric-blue hover:underline">Privacy Policy</Link>.
                            </label>
                        </div>

                        {/* Additional features row (socials + submit) */}
                        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/10 gap-6">
                            <div className="flex flex-col w-full md:w-auto gap-2">
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Or Sign up with</p>
                                <div className="flex gap-3">
                                    <button type="button" className="flex-1 md:flex-none justify-center flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-2.5 px-6 rounded-xl transition-colors">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        Google
                                    </button>
                                    <button type="button" className="flex-1 md:flex-none justify-center flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-2.5 px-6 rounded-xl transition-colors">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 1.46-.07 2.7.62 3.55 1.7-3.02 1.73-2.52 5.86.35 7.04-.68 1.73-1.6 3.43-2.56 4.23zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                        Apple
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto md:min-w-[200px] bg-electric-blue hover:bg-electric-blue/90 text-navy font-bold py-3 px-8 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
                            >
                                Submit Registration
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-slate-400 mt-8 text-sm pt-4 border-t border-white/10">
                        Already have an Account? <Link href="/login" className="text-electric-blue font-semibold hover:underline">Log In</Link>
                    </p>
                </motion.div>
            </div>

        </div>
    );
}
