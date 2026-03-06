"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Terminal, Key, Database, Globe, ChevronRight, Copy, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ApiDocsPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#161332] text-slate-200 pt-24 overflow-hidden">
            <Navbar />

            {/* Background elements */}
            <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl pb-32 flex flex-col lg:flex-row gap-12 mt-8">

                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <div className="sticky top-32 bg-[#110f29]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">API Reference</h3>
                        <nav className="space-y-1">
                            <a href="#introduction" className="block px-3 py-2 text-sm font-medium text-electric-blue bg-electric-blue/10 rounded-lg">Introduction</a>
                            <a href="#authentication" className="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Authentication</a>
                            <a href="#endpoints" className="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Endpoints</a>
                            <div className="pl-4 space-y-1 mt-1 border-l border-white/10 ml-3">
                                <a href="#get-calls" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-slate-300">List Calls</a>
                                <a href="#get-employees" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-slate-300">List Employees</a>
                                <a href="#post-webhook" className="block px-3 py-1.5 text-sm text-slate-500 hover:text-slate-300">Webhooks</a>
                            </div>
                            <a href="#errors" className="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors mt-2">Errors</a>
                            <a href="#rate-limits" className="block px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Rate Limits</a>
                        </nav>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="flex-1 max-w-4xl space-y-16">

                    {/* Introduction */}
                    <section id="introduction" className="space-y-6">
                        <div className="flex items-center gap-3 text-electric-blue mb-2">
                            <Code2 className="w-8 h-8" />
                            <h1 className="text-4xl font-bold text-white">Chime REST API</h1>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            The Chime API allows you to programmatically manage your workspace, retrieve call logs,
                            monitor employee activity, and integrate our data seamlessly into your existing CRM or ERP systems.
                        </p>
                        <div className="bg-[#1a173d]/50 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                            <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-bold font-mono">BASE URL</div>
                            <code className="text-sm text-slate-300 font-mono">https://api.chime.app/v1</code>
                        </div>
                    </section>

                    <hr className="border-white/10" />

                    {/* Authentication */}
                    <section id="authentication" className="space-y-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Key className="w-5 h-5 text-electric-blue" />
                            Authentication
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            The Chime API uses API keys to authenticate requests. You can view and manage your API keys
                            in your Chime Dashboard under Settings &gt; Developer.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Authentication to the API is performed via HTTP Bearer Auth. Provide your API key as the bearer token value.
                        </p>

                        <div className="bg-[#0b0a1a] border border-white/10 rounded-xl overflow-hidden mt-6">
                            <div className="flex items-center justify-between px-4 py-2 bg-[#1a173d] border-b border-white/10">
                                <span className="text-xs font-mono text-slate-400">cURL</span>
                                <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
                                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <pre className="text-sm font-mono text-slate-300">
                                    <code>
                                        curl -X GET https://api.chime.app/v1/workspaces \<br />
                                        &nbsp;&nbsp;-H "Authorization: Bearer <span className="text-emerald-400">sk_live_123456789</span>"
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    <hr className="border-white/10" />

                    {/* Endpoints Examples */}
                    <section id="endpoints" className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Database className="w-5 h-5 text-electric-blue" />
                                Core Endpoints
                            </h2>

                            <div id="get-calls" className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-md text-sm font-bold font-mono">GET</span>
                                    <code className="text-white font-mono text-lg">/v1/calls</code>
                                </div>
                                <p className="text-slate-400">Returns a paginated list of all synced call logs for the authenticated workspace.</p>

                                <div className="bg-[#0b0a1a] border border-white/10 rounded-xl overflow-hidden mt-4">
                                    <div className="px-4 py-2 bg-[#1a173d] border-b border-white/10">
                                        <span className="text-xs font-mono text-slate-400">Response (200 OK)</span>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <pre className="text-sm font-mono text-slate-300">
                                            <code>
                                                {`{
  "object": "list",
  "data": [
    {
      "id": "call_987654",
      "type": "incoming",
      "contact_name": "John Doe",
      "phone_number": "+15551234567",
      "duration_seconds": 345,
      "timestamp": "2026-03-03T10:30:00Z",
      "recording_url": "https://api.chime.app/v1/calls/audio/..."
    }
  ],
  "has_more": false
}`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>

            <Footer />
        </div>
    );
}
