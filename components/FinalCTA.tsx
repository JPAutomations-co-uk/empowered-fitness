"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { FloatingOrbs } from '@/components/ui/FloatingOrbs';

export const FinalCTA = () => {
    return (
        <section className="relative w-full h-[100dvh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-background-secondary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,96,126,0.08)_0%,rgba(253,248,245,1)_60%)] z-0 pointer-events-none" />

            <FloatingOrbs />

            <div className="relative z-10 px-5 max-w-3xl mx-auto flex flex-col items-center text-center w-full">
                <SectionReveal>
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold leading-[1.1] mb-6 tracking-tight text-text-primary"
                    >
                        Ready to stop <br className="hidden md:block" /> putting it off?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Whether it&apos;s your first session or your hundredth, I&apos;ll meet you where you are.
                    </motion.p>

                    <motion.div variants={itemVariants} className="w-full flex flex-col items-center">
                        <Button size="lg" fullWidth className="md:w-auto group mb-8">
                            Book Your Free Consultation
                            <motion.div className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                                <FiArrowRight />
                            </motion.div>
                        </Button>

                        <a href="mailto:info@empoweredfitnessuk.com" className="text-text-secondary hover:text-accent transition-colors font-medium mb-6">
                            or email me at <span className="underline decoration-accent/20 underline-offset-4">info@empoweredfitnessuk.com</span>
                        </a>

                        <div className="text-xs text-text-tertiary tracking-wide font-medium">
                            No pressure. No hard sell. Just a conversation.
                        </div>
                    </motion.div>
                </SectionReveal>
            </div>
        </section>
    );
};
