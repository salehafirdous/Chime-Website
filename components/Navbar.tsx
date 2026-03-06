"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
    "Call Recording",
    "Call Management",
    "Screen Monitoring",
    "Screen Time Control",
    "WhatsApp Monitoring",
];

const solutions = [
    "Employee Monitoring",
    "Call Management",
    "Location Tracking",
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-navy/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,240,255,0.05)]"
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image src="/logo.png" alt="Chime Logo" width={40} height={40} className="drop-shadow-lg" />
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Chime
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {/* Features Dropdown */}
                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown("features")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white cursor-pointer py-2">
                                    Features
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                </div>
                                <AnimatePresence>
                                    {activeDropdown === "features" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-10 left-0 w-56 bg-navy border border-white/10 rounded-xl shadow-2xl overflow-hidden glass-card"
                                        >
                                            <div className="p-2 flex flex-col">
                                                {features.map((item) => {
                                                    const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                                                    return (
                                                        <Link
                                                            key={item}
                                                            href={href}
                                                            className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                        >
                                                            {item}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Solutions Dropdown */}
                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown("solutions")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white cursor-pointer py-2">
                                    Solutions
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                </div>
                                <AnimatePresence>
                                    {activeDropdown === "solutions" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-10 left-0 w-56 bg-navy border border-white/10 rounded-xl shadow-2xl overflow-hidden glass-card"
                                        >
                                            <div className="p-2 flex flex-col">
                                                {solutions.map((item) => {
                                                    const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                                                    return (
                                                        <Link
                                                            key={item}
                                                            href={href}
                                                            className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                        >
                                                            {item}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Resources Dropdown */}
                            <div
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => setActiveDropdown("resources")}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white cursor-pointer py-2">
                                    Resources
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                </div>
                                <AnimatePresence>
                                    {activeDropdown === "resources" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] bg-[#1a173d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden glass-card"
                                        >
                                            <div className="flex p-6 gap-8">
                                                {/* Card */}
                                                <div className="w-[45%] bg-[#110f29] rounded-xl border border-white/10 p-6 flex flex-col justify-center items-center text-center shadow-inner relative overflow-hidden group">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    <Image src="/logo.png" alt="Chime Logo" width={64} height={64} className="mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]" />
                                                    <h4 className="text-xl font-bold text-white mb-1">Chime</h4>
                                                    <span className="text-electric-blue font-semibold text-sm mb-4">Effortless Safety</span>
                                                    <div className="w-8 h-px bg-white/20 mb-4"></div>
                                                    <p className="text-sm text-slate-200 font-medium mb-2">Maximize Control with Chime</p>
                                                    <p className="text-xs text-slate-400">Explore a variety of features to see how Chime can help you achieve greater efficiency and security.</p>
                                                </div>

                                                {/* Links */}
                                                <div className="w-[55%] flex gap-8 py-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-xs font-bold text-slate-300 mb-4 pb-3 border-b border-white/10 uppercase tracking-widest">Learn</h3>
                                                        <div className="flex flex-col gap-4">
                                                            <Link href="/signup" className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all">Contact Us</Link>
                                                            <Link href="/blog" className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all">Blogs</Link>
                                                            <Link href="/community" className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all">Community</Link>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xs font-bold text-slate-300 mb-4 pb-3 border-b border-white/10 uppercase tracking-widest">Key Concepts</h3>
                                                        <div className="flex flex-col gap-4">
                                                            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all">Phone Calls</Link>
                                                            <Link href="/why-chime" className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all">Why Chime</Link>
                                                            <Link href="/parental-controls" className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all">Parental Control</Link>
                                                            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all">Restrictions</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <Link href="/demo" className="text-sm font-medium text-slate-300 hover:text-white relative group">
                                Demo
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full"></span>
                            </Link>
                            <Link href="/pricing" className="text-sm font-medium text-slate-300 hover:text-white relative group">
                                Pricing
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full"></span>
                            </Link>
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                href="/login"
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-electric-blue hover:bg-electric-blue/90 text-navy font-semibold text-sm px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-105"
                            >
                                Sign Up
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-slate-300 hover:text-white p-2"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#13112b] border-l border-white/10 shadow-2xl p-6 lg:hidden flex flex-col overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2 group">
                                    <Image src="/logo.png" alt="Chime Logo" width={40} height={40} className="drop-shadow-lg" />
                                    <span className="text-2xl font-bold tracking-tight text-white">
                                        Chime
                                    </span>
                                </div>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-slate-400 hover:text-white p-2 bg-white/5 rounded-full"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 flex-1">
                                <div>
                                    <h3 className="text-sm font-semibold text-electric-blue mb-3 uppercase tracking-wider">Features</h3>
                                    <div className="flex flex-col gap-3 pl-3 border-l border-white/10">
                                        {features.map((item) => {
                                            const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                                            return (
                                                <Link
                                                    key={item}
                                                    href={href}
                                                    className="text-slate-300 hover:text-white transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-electric-blue mb-3 uppercase tracking-wider">Solutions</h3>
                                    <div className="flex flex-col gap-3 pl-3 border-l border-white/10">
                                        {solutions.map((item) => {
                                            const href = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                                            return (
                                                <Link
                                                    key={item}
                                                    href={href}
                                                    className="text-slate-300 hover:text-white transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-electric-blue mb-3 uppercase tracking-wider">Resources</h3>
                                    <div className="flex flex-col gap-3 pl-3 border-l border-white/10">
                                        <Link href="/signup" className="text-slate-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                                        <Link href="/blog" className="text-slate-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
                                        <Link href="/community" className="text-slate-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Community</Link>
                                        <Link href="/why-chime" className="text-slate-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Why Chime</Link>
                                        <Link href="/parental-controls" className="text-slate-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Parental Control</Link>
                                        <Link href="#" className="text-slate-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Restrictions</Link>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 mt-2">
                                    <Link href="/demo" className="text-slate-300 hover:text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Demo</Link>
                                    <Link href="/pricing" className="text-slate-300 hover:text-white text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                                <Link
                                    href="/login"
                                    className="text-center font-medium text-slate-300 hover:text-white py-3 border border-white/10 rounded-xl transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="bg-electric-blue text-navy font-semibold text-center py-3 rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
