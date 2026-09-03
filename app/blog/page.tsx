"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Tag, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function BlogPage() {
    const featuredPost = {
        title: "The Future of Employee Productivity: Balancing Monitoring with Trust",
        excerpt: "As remote and hybrid work environments become the permanent standard, organizations must navigate the delicate balance between ensuring accountability and maintaining employee morale. Learn how the latest analytics tools help bridge this gap.",
        category: "Leadership",
        date: "March 1, 2026",
        author: "Sarah Jenkins",
        readTime: "8 min read",
        image: "gradient-1"
    };

    const recentPosts = [
        {
            title: "5 Hidden Risks of Unmonitored Remote Workforces",
            excerpt: "Discover the critical security and productivity vulnerabilities that can compromise your organization when remote teams operate without unified oversight.",
            category: "Security",
            date: "February 24, 2026",
            author: "Michael Chen",
            readTime: "6 min read",
            image: "gradient-2"
        },
        {
            title: "How to Spot Insider Threats Before Data Exfiltration Occurs",
            excerpt: "Learn to identify the behavioral anomalies and application usage patterns that often precede a major corporate data leak.",
            category: "Cybersecurity",
            date: "February 18, 2026",
            author: "David Wright",
            readTime: "12 min read",
            image: "gradient-3"
        },
        {
            title: "Maximizing ROI with Automated Call Logging Systems",
            excerpt: "Stop relying on manual CRM data entry. See how automated call distribution and logging can instantly boost your sales team's effective selling time.",
            category: "Sales",
            date: "February 10, 2026",
            author: "Emma Stone",
            readTime: "5 min read",
            image: "gradient-4"
        },
        {
            title: "The Legality of Screen Monitoring: A Global Compliance Guide",
            excerpt: "Navigate the complex web of international privacy laws, including GDPR and CCPA, when implementing screen capture technology across borders.",
            category: "Legal",
            date: "February 2, 2026",
            author: "James Wilson",
            readTime: "15 min read",
            image: "gradient-5"
        },
        {
            title: "Introducing Chime v2.4: Enhanced Geofencing Capabilities",
            excerpt: "Our latest release brings advanced location tracking and automated boundary alerts for your traveling field agents and mobile workforce.",
            category: "Product Updates",
            date: "January 28, 2026",
            author: "The Chime Team",
            readTime: "4 min read",
            image: "gradient-6"
        },
        {
            title: "Why 'Stealth Mode' Operations Are Crucial for Unbiased Insights",
            excerpt: "Understanding the psychological observer effect and why invisible tracking agents yield the most accurate productivity baseline data.",
            category: "Analytics",
            date: "January 15, 2026",
            author: "Sarah Jenkins",
            readTime: "7 min read",
            image: "gradient-7"
        }
    ];

    const getGradientClass = (type: string) => {
        const gradients: Record<string, string> = {
            "gradient-1": "from-blue-600 to-indigo-900",
            "gradient-2": "from-emerald-500 to-teal-900",
            "gradient-3": "from-orange-500 to-red-900",
            "gradient-4": "from-purple-500 to-fuchsia-900",
            "gradient-5": "from-cyan-500 to-blue-900",
            "gradient-6": "from-electric-blue to-navy",
            "gradient-7": "from-rose-500 to-pink-900",
        };
        return gradients[type] || gradients["gradient-1"];
    };

    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] -z-10 -translate-y-1/2" />

            <main className="relative z-10 pb-32">

                {/* Header */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl pt-12 md:pt-20 text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        The Chime <span className="text-electric-blue">Blog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto"
                    >
                        Insights, strategies, and industry news on remote workforce management, cybersecurity, and productivity analytics.
                    </motion.p>
                </section>

                {/* Featured Post */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group cursor-pointer"
                    >
                        <div className="bg-[#110f29]/80 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row hover:border-electric-blue/50 transition-colors shadow-2xl relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Featured Image Mock */}
                            <div className={`w-full lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br ${getGradientClass(featuredPost.image)} relative overflow-hidden flex items-center justify-center`}>
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                    <Image src="/logo1.png" alt="Chime" width={80} height={80} className="drop-shadow-2xl" />
                                </div>
                            </div>

                            {/* Featured Content */}
                            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-electric-blue/20 text-electric-blue border border-electric-blue/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {featuredPost.category}
                                    </span>
                                    <span className="text-sm font-medium text-slate-400 flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                            <User className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">{featuredPost.author}</p>
                                            <p className="text-xs text-slate-500">{featuredPost.date}</p>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-blue group-hover:text-navy transition-colors">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Categories Bar */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
                    <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        <button className="whitespace-nowrap bg-electric-blue text-navy px-5 py-2 rounded-full font-bold text-sm">All Articles</button>
                        <button className="whitespace-nowrap bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 px-5 py-2 rounded-full font-medium text-sm transition-colors">Product Updates</button>
                        <button className="whitespace-nowrap bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 px-5 py-2 rounded-full font-medium text-sm transition-colors">Security</button>
                        <button className="whitespace-nowrap bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 px-5 py-2 rounded-full font-medium text-sm transition-colors">Compliance</button>
                        <button className="whitespace-nowrap bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 px-5 py-2 rounded-full font-medium text-sm transition-colors">Leadership</button>
                    </div>
                </section>

                {/* Recent Posts Grid */}
                <section className="container mx-auto px-4 md:px-8 max-w-7xl mb-24">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {recentPosts.map((post, i) => (
                            <motion.article
                                key={i}
                                variants={fadeInUp}
                                className="bg-[#1a173d]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group flex flex-col cursor-pointer"
                            >
                                <div className={`w-full h-48 bg-gradient-to-br ${getGradientClass(post.image)} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    <div className="absolute top-4 left-4 bg-[#161332]/80 backdrop-blur-md px-3 py-1 rounded flex items-center gap-2">
                                        <Tag className="w-3 h-3 text-electric-blue" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">{post.category}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                                                {post.author.charAt(0)}
                                            </div>
                                            <span className="text-xs font-bold text-slate-300">{post.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    <div className="mt-16 text-center">
                        <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3 px-8 rounded-full transition-colors">
                            Load More Articles
                        </button>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-gradient-to-br from-navy to-[#110f29] border border-electric-blue/20 rounded-3xl p-10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-[80px]" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Subscribe to our Newsletter</h2>
                        <p className="text-slate-400 mb-8 relative z-10 max-w-xl mx-auto">Get the latest insights on employee productivity, cybersecurity trends, and software updates delivered straight to your inbox.</p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
                            />
                            <button type="submit" className="bg-electric-blue text-navy font-bold py-3 px-6 rounded-xl hover:bg-cyan-300 transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
