"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';

export const Testimonial = () => {
    return (
        <section className="py-14 md:py-[120px] px-5 w-full bg-background-secondary border-y border-accent/[0.08] relative overflow-hidden">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 text-[180px] md:text-[300px] leading-none font-black text-accent opacity-[0.06] pointer-events-none font-space-grotesk select-none">
                &quot;
            </div>

            <SectionReveal className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-3xl lg:text-4xl font-space-grotesk italic font-bold text-text-primary leading-relaxed mb-6 md:mb-8"
                >
                    &quot;No gimmicks, no fads, just proven methods that, with your commitment, consistency and hard work, will deliver results.&quot;
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-3 md:gap-4"
                >
                    <div className="w-8 md:w-12 h-1 bg-accent rounded-full" />
                    <span className="text-xs md:text-base font-semibold text-text-secondary uppercase tracking-widest">
                        Empowered Fitness UK
                    </span>
                </motion.div>
            </SectionReveal>
        </section>
    );
};
