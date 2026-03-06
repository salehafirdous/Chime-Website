"use client";

import { motion } from "framer-motion";
import { Users, HeadphonesIcon, Baby } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const useCases = [
    {
        title: "Manage Your Team",
        description: "Monitor employee productivity, track business phone usage, and ensure company resources are used appropriately.",
        icon: Users,
        color: "from-blue-600/20 to-indigo-600/20",
        borderColor: "border-blue-500/30",
    },
    {
        title: "Improve Customer Service",
        description: "Analyze call handling, monitor agent performance, and drastically improve follow-up times and customer satisfaction.",
        icon: HeadphonesIcon,
        color: "from-electric-blue/20 to-teal-600/20",
        borderColor: "border-electric-blue/30",
    },
    {
        title: "Parental Monitoring",
        description: "Ensure the safety of your loved ones with responsible, secure call supervision and activity tracking.",
        icon: Baby,
        color: "from-indigo-500/20 to-purple-600/20",
        borderColor: "border-indigo-500/30",
    },
];

export default function UseCases() {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-16 md:w-1/2"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Real-Life <span className="text-gradient">Use Cases</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Chime is built to serve businesses, managers, and families who prioritize security, transparency, and accountability.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className={cn(
                                    "relative rounded-3xl p-8 overflow-hidden border backdrop-blur-md group",
                                    useCase.borderColor,
                                    "bg-navy/60"
                                )}
                            >
                                {/* Gradient background overlay */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-500",
                                    useCase.color
                                )} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                                    <p className="text-slate-300 leading-relaxed font-medium">
                                        {useCase.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
