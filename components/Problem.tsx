"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';

export const Problem = () => {
    return (
        <section className="py-[80px] px-5 max-w-7xl mx-auto relative">
            <SectionReveal className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

                <motion.div
                    variants={itemVariants}
                    className="hidden md:block w-px h-full min-h-[200px] bg-black/5 relative"
                >
                    <div className="absolute top-0 left-0 w-1 h-10 bg-gradient-accent -translate-x-1/2 rounded-full" />
                </motion.div>

                <div className="flex flex-col flex-1">
                    <motion.div variants={itemVariants} className="w-1 h-10 bg-gradient-accent mb-6 md:hidden rounded-full" />

                    <motion.h2
                        variants={itemVariants}
                        className="text-[28px] md:text-4xl font-space-grotesk font-bold mb-6 text-text-primary leading-[1.2]"
                    >
                        Sound familiar?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-3xl"
                    >
                        You&apos;ve tried the apps. You&apos;ve done the January gym membership. You&apos;ve Googled &apos;how to lose belly fat&apos; more times than you&apos;d admit. What you haven&apos;t had is someone in your corner who actually knows what they&apos;re doing — and gives a damn.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="w-full overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 md:mx-0 md:px-0"
                    >
                        <div className="flex gap-4 w-max">
                            {[
                                "Struggling with motivation",
                                "Don't know where to start",
                                "Tried everything"
                            ].map((pill, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-accent/10 rounded-full px-5 py-3 text-sm font-medium text-text-primary whitespace-nowrap snap-start shadow-card"
                                >
                                    {pill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </SectionReveal>
        </section>
    );
};
