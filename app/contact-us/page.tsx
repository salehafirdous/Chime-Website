"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "technical",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
        type: null,
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: "" });

        try {
            await emailjs.send(
                "service_rf48yad",
                "template_pijyeu3",
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "D8Jgb2Gh9naZf6mJx"
            );

            setStatus({
                type: 'success',
                message: "Message sent successfully"
            });
            setFormData({
                name: "",
                email: "",
                subject: "technical",
                message: ""
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                type: 'error',
                message: "Failed to send message. Please try again."
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background Graphics */}
            <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-40 right-1/4 w-[800px] h-[800px] bg-[#2E2A5D]/30 rounded-full blur-[150px]" />
            </div>

            <main className="relative z-10 pb-32">
                <section className="py-24 relative overflow-hidden" id="contact">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-xs font-bold uppercase tracking-widest mb-4"
                            >
                                <Globe className="w-3 h-3" /> Get in Touch
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-6"
                            >
                                Let's Build the <span className="text-electric-blue">Future Together</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-400 max-w-2xl mx-auto text-lg"
                            >
                                Chime is developed with passion by the expert team at RightBrain Infotech. Have a project in mind or need support? We're here to help.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Contact Info Cards */}
                            <div className="lg:col-span-5 space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-6 shadow-xl"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-lg font-semibold text-white">info@rightbraininfotech.in</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-6 shadow-xl"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-lg font-semibold text-white">+91 97665 48692</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-6 shadow-xl"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Visit Us</p>
                                        <p className="text-sm font-semibold text-white leading-relaxed">
                                            Office No. 1 & 2, 2nd Floor, East Street Galleria, MG Road, Camp, Pune, MH - 411001
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="p-8 bg-[#1a173d] border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl" />
                                    <div className="flex items-center gap-3 mb-6">
                                        <Clock className="w-5 h-5 text-electric-blue" />
                                        <h3 className="text-white font-bold text-lg">Business Hours</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                            <span className="text-slate-400">Monday - Friday</span>
                                            <span className="text-white font-semibold">9:30 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                                            <span className="text-slate-400">Saturday</span>
                                            <span className="text-amber-500 font-bold uppercase text-[10px] tracking-widest">Closed</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">Sunday</span>
                                            <span className="text-amber-500 font-bold uppercase text-[10px] tracking-widest">Closed</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:col-span-7 bg-[#1a173d]/50 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-2 h-8 bg-electric-blue rounded-full" />
                                    <h3 className="text-2xl font-bold text-white">Send us a <span className="text-electric-blue">Message</span></h3>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                className="w-full bg-[#110f29] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-electric-blue transition-all placeholder:text-slate-600"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="example@company.com"
                                                className="w-full bg-[#110f29] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-electric-blue transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                                        <div className="relative">
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full bg-[#110f29] border border-white/10 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-electric-blue transition-all cursor-pointer"
                                            >
                                                <option value="technical">Technical Support</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="custom">Custom Solution</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 flex-grow flex flex-col">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Tell us about your requirements..."
                                            className="w-full bg-[#110f29] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-electric-blue transition-all placeholder:text-slate-600 resize-none flex-grow"
                                        />
                                    </div>

                                    {status.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-xl flex items-center gap-3 ${status.type === 'success'
                                                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                                                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                                }`}
                                        >
                                            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                            <p className="text-sm font-medium">{status.message}</p>
                                        </motion.div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-electric-blue hover:bg-[#00d0e0] disabled:opacity-50 disabled:cursor-not-allowed text-navy font-bold py-5 rounded-full transition-all shadow-xl shadow-electric-blue/20 flex items-center justify-center gap-3 group"
                                    >
                                        {isLoading ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        )}
                                        {isLoading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function ChevronDown(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
