import Link from "next/link";
import { ShieldCheck, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#110f29] pt-20 pb-10 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
                            <Image src="/logo.png" alt="Chime Logo" width={32} height={32} className="drop-shadow-lg" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                Chime
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            The ultimate Call Log Monitor. Track, record, and manage call activity securely remotely from any device.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="/call-recording" className="text-slate-400 hover:text-white transition-colors">Call Recording</Link></li>
                            <li><Link href="/screen-monitoring" className="text-slate-400 hover:text-white transition-colors">Screen Monitoring</Link></li>
                            <li><Link href="/screen-time-control" className="text-slate-400 hover:text-white transition-colors">Screen Time Control</Link></li>
                            <li><Link href="/whatsapp-monitoring" className="text-slate-400 hover:text-white transition-colors">WhatsApp Monitoring</Link></li>
                            <li><Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            <li><Link href="/employee-monitoring" className="text-slate-400 hover:text-white transition-colors">Employee Monitoring</Link></li>
                            <li><Link href="/call-management" className="text-slate-400 hover:text-white transition-colors">Call Management</Link></li>
                            <li><Link href="/location-tracking" className="text-slate-400 hover:text-white transition-colors">Location Tracking</Link></li>
                            <li><Link href="/parental-controls" className="text-slate-400 hover:text-white transition-colors">Parental Controls</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="/help-center" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="/api-documentation" className="text-slate-400 hover:text-white transition-colors">API Documentation</Link></li>
                            <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/community" className="text-slate-400 hover:text-white transition-colors">Community</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Chime Security Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors">Legal Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
