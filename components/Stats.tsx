"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';
import { Counter } from '@/components/ui/Counter';

export const Stats = () => {
    return (
        <section className="py-10 md:py-[60px] px-5 w-full">
            <SectionReveal className="max-w-6xl mx-auto">
                <motion.div
                    variants={itemVariants}
                    className="w-full bg-white border border-accent/10 rounded-2xl md:rounded-3xl p-6 md:p-14 relative overflow-hidden shadow-soft-lg"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] via-transparent to-accent/[0.03] pointer-events-none" />

                    {/* 3-column on all screens */}
                    <div className="grid grid-cols-3 gap-2 md:gap-6 divide-x divide-accent/10 relative z-10">

                        <div className="flex flex-col items-center justify-center text-center px-1">
                            <div className="text-2xl md:text-5xl font-space-grotesk font-black text-text-primary mb-1 md:mb-2 tracking-tight flex items-center">
                                <Counter value={100} suffix="s" className="text-text-primary" />
                            </div>
                            <p className="text-[9px] md:text-sm font-semibold uppercase tracking-[0.08em] md:tracking-[0.1em] text-accent">Clients Trained</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center px-1">
                            <div className="text-2xl md:text-5xl font-space-grotesk font-black text-text-primary mb-1 md:mb-2 tracking-tight flex items-center">
                                <Counter value={8} suffix="+" className="text-text-primary" />
                            </div>
                            <p className="text-[9px] md:text-sm font-semibold uppercase tracking-[0.08em] md:tracking-[0.1em] text-accent">Years Exp.</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center px-1">
                            <div className="text-2xl md:text-5xl font-space-grotesk font-black text-text-primary mb-1 md:mb-2 tracking-tight">
                                Top 100
                            </div>
                            <p className="text-[9px] md:text-sm font-semibold uppercase tracking-[0.08em] md:tracking-[0.1em] text-accent">UK Blog</p>
                        </div>

                    </div>

                    <motion.p
                        variants={itemVariants}
                        className="text-center text-text-tertiary mt-6 md:mt-12 text-[11px] md:text-sm font-medium tracking-wide"
                    >
                        Trusted across the Midlands & online
                    </motion.p>

                </motion.div>
            </SectionReveal>
        </section>
    );
};
