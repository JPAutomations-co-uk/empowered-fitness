"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';

export const About = () => {
    return (
        <section className="py-[100px] w-full bg-gradient-to-b from-background-primary via-background-secondary to-background-primary overflow-hidden border-y border-black/[0.04]">
            <div className="max-w-7xl mx-auto px-5">
                <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        variants={itemVariants}
                        className="w-full relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-accent rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-background-tertiary rounded-2xl border border-accent/10 overflow-hidden flex items-center justify-center shadow-soft-lg">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/[0.06] to-transparent z-10" />
                            <div className="w-24 h-24 rounded-full bg-accent/[0.06] border border-accent/10 flex items-center justify-center">
                                <svg className="w-10 h-10 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col">
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent border border-accent/15 bg-accent/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm inline-block">
                                About Your Trainer
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-[28px] md:text-[40px] font-space-grotesk font-bold text-text-primary mb-6 leading-tight"
                        >
                            No-nonsense. Qualified. Been there.
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-lg text-text-secondary leading-relaxed mb-10"
                        >
                            I&apos;m a Level 4 Personal Trainer, Sports Rehabilitation Expert, and Nutrition & Metabolism Specialist based in Sutton Coldfield. I&apos;ve trained hundreds of clients, rehabbed my own torn meniscus, and discovered the joy of a proper Sunday roast at 46. I don&apos;t do gimmicks. I do results — with a bit of a laugh along the way.
                        </motion.p>

                        <motion.div variants={itemVariants} className="w-full overflow-x-auto no-scrollbar pb-6 -mx-5 px-5 lg:mx-0 lg:px-0">
                            <div className="flex gap-3 w-max">
                                {["Level 4 PT", "Sports Rehab", "Nutrition Specialist", "Master Trainer"].map((badge, idx) => (
                                    <div key={idx} className="bg-white border border-accent/10 rounded-full px-4 py-2 text-[13px] font-medium text-text-primary whitespace-nowrap shadow-card">
                                        {badge}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.blockquote
                            variants={itemVariants}
                            className="mt-6 border-l-2 border-accent pl-6 text-xl md:text-2xl font-space-grotesk text-accent italic font-medium leading-relaxed"
                        >
                            &quot;Getting in shape shouldn&apos;t be a punishment. It&apos;s an amazing and empowering lifestyle decision that anyone can achieve.&quot;
                        </motion.blockquote>

                    </div>

                </SectionReveal>
            </div>
        </section>
    );
};
