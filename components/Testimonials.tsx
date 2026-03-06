"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Employer",
        company: "TechNova Solutions",
        content: "Chime has completely transformed how we manage our remote workforce. The ability to monitor call logs securely ensures our team stays productive and compliant with our company policies.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Business Owner",
        company: "Chen Logistics",
        content: "As a small business owner, customer service is everything. Recording and reviewing calls has helped us train our agents better and significantly improved our issue resolution times.",
        rating: 5,
    },
    {
        name: "David Ross",
        role: "Team Manager",
        company: "Apex Sales Group",
        content: "The analytics and remote monitoring features are game-changers. I can review my team's performance without interrupting their workflow, and the stealth mode is highly reliable.",
        rating: 5,
    },
    // Duplicated for seamless infinite scroll
    {
        name: "Sarah Jenkins",
        role: "Employer",
        company: "TechNova Solutions",
        content: "Chime has completely transformed how we manage our remote workforce. The ability to monitor call logs securely ensures our team stays productive and compliant with our company policies.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Business Owner",
        company: "Chen Logistics",
        content: "As a small business owner, customer service is everything. Recording and reviewing calls has helped us train our agents better and significantly improved our issue resolution times.",
        rating: 5,
    },
    {
        name: "David Ross",
        role: "Team Manager",
        company: "Apex Sales Group",
        content: "The analytics and remote monitoring features are game-changers. I can review my team's performance without interrupting their workflow, and the stealth mode is highly reliable.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden z-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Trusted by <span className="text-gradient">Industry Leaders</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    See why thousands of employers, managers, and parents trust Chime for their monitoring needs.
                </p>
            </div>

            <div className="relative w-full max-w-[100vw] overflow-hidden flex">
                {/* Left Gradient Mask */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#161332] to-transparent z-10" />
                {/* Right Gradient Mask */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#161332] to-transparent z-10" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                    className="flex gap-6 w-max px-6"
                >
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="w-[350px] md:w-[450px] glass-card p-8 bg-navy/60 border border-white/10 shrink-0 relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-electric-blue/10 transition-colors duration-500" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-electric-blue text-electric-blue" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white border border-white/10">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
