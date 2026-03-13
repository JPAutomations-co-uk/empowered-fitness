"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';

export const Pricing = () => {
    return (
        <section className="py-[120px] px-5 w-full relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <SectionReveal className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[28px] md:text-5xl font-space-grotesk font-bold text-text-primary mb-6"
                    >
                        Invest in Yourself
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto"
                    >
                        Clear pricing. No hidden fees. No contracts you can&apos;t get out of.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">

                    <motion.div variants={itemVariants} className="h-full">
                        <div className="bg-white rounded-2xl border-t-[3px] border-t-accent border-r border-b border-l border-black/[0.04] p-8 flex flex-col h-full relative shadow-card">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-accent-glow">
                                Most Popular
                            </div>
                            <h3 className="text-2xl font-space-grotesk font-semibold text-text-primary mb-2">30-Day Meal Plan</h3>
                            <div className="text-4xl font-space-grotesk font-black text-accent mb-8">£4.99</div>
                            <ul className="flex flex-col gap-4 mb-8 flex-grow">
                                {["Personalised 30-day plan", "Delivered to your inbox", "Built around your goals & preferences", "Supports fat loss, energy & performance"].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-text-primary">
                                        <FiCheck className="text-accent mt-0.5 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button fullWidth className="mb-4">Get Your Plan</Button>
                            <p className="text-center text-xs text-text-tertiary">Start today. No more putting it off.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="h-full md:mt-4">
                        <div className="bg-white rounded-2xl border border-black/[0.04] p-8 flex flex-col h-full hover:border-accent/20 transition-colors shadow-card">
                            <h3 className="text-2xl font-space-grotesk font-semibold text-text-primary mb-2">Bespoke Nutrition Consultation</h3>
                            <div className="text-4xl font-space-grotesk font-black text-text-primary mb-8">£50</div>
                            <ul className="flex flex-col gap-4 mb-8 flex-grow">
                                {["Fully written personalised plan", "Shopping lists for your goals", "Food diary analysis & feedback", "Supplementation recommendations", "Delivered within 3 days"].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                                        <FiCheck className="text-text-secondary mt-0.5 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant="secondary" fullWidth className="mb-4">Book Consultation</Button>
                            <p className="text-center text-xs text-text-tertiary">The plan works — if you do.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="h-full">
                        <div className="bg-white rounded-2xl border border-accent/20 shadow-card-hover p-8 flex flex-col h-full relative group hover:border-accent/40 transition-colors">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background-tertiary text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-accent/15">
                                Transform
                            </div>
                            <h3 className="text-2xl font-space-grotesk font-semibold text-text-primary mb-2">PT Packages</h3>
                            <div className="text-2xl font-space-grotesk font-bold text-text-primary mb-8 mt-2">From enquiry</div>
                            <ul className="flex flex-col gap-4 mb-8 flex-grow">
                                {["Personalised training plan", "Expert nutrition guidance", "Ongoing support (Skype/phone/email)", "In-person or online sessions", "PAR-Q assessment included"].map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-text-primary">
                                        <FiCheck className="text-accent mt-0.5 flex-shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" fullWidth className="mb-4 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">Get in Touch</Button>
                            <p className="text-center text-xs text-text-tertiary">Your first step is a conversation.</p>
                        </div>
                    </motion.div>

                </div>
            </SectionReveal>
        </section>
    );
};
