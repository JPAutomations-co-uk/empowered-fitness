"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { FloatingOrbs } from '@/components/ui/FloatingOrbs';

export const FinalCTA = () => {
    return (
        <section className="relative w-full min-h-[85dvh] md:h-[100dvh] md:min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-background-secondary py-14 md:py-0">
            {/* Background image with heavy overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80"
                    alt=""
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F5]/[0.92] via-[#FAF0EC]/[0.88] to-[#FDF8F5]/[0.95]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,96,126,0.06)_0%,transparent_60%)]" />
            </div>

            <FloatingOrbs />

            <div className="relative z-10 px-5 max-w-3xl mx-auto flex flex-col items-center text-center w-full">
                <SectionReveal>
                    <motion.h2
                        variants={itemVariants}
                        className="text-[28px] md:text-6xl lg:text-7xl font-space-grotesk font-bold leading-[1.1] mb-4 md:mb-6 tracking-tight text-text-primary"
                    >
                        Ready to stop <br /> putting it off?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-[15px] md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
                    >
                        Whether it&apos;s your first session or your hundredth, I&apos;ll meet you where you are.
                    </motion.p>

                    <motion.div variants={itemVariants} className="w-full flex flex-col items-center">
                        <Button size="lg" fullWidth className="md:w-auto group mb-6 md:mb-8">
                            Book Your Free Consultation
                            <motion.div className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                                <FiArrowRight />
                            </motion.div>
                        </Button>

                        <a href="mailto:info@empoweredfitnessuk.com" className="text-[13px] md:text-base text-text-secondary hover:text-accent active:text-accent transition-colors font-medium mb-4 md:mb-6">
                            or email me at <span className="underline decoration-accent/20 underline-offset-4">info@empoweredfitnessuk.com</span>
                        </a>

                        <div className="text-[11px] md:text-xs text-text-tertiary tracking-wide font-medium">
                            No pressure. No hard sell. Just a conversation.
                        </div>
                    </motion.div>
                </SectionReveal>
            </div>
        </section>
    );
};
