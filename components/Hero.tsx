"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { FloatingOrbs } from '@/components/ui/FloatingOrbs';
import { useIsMobile } from '@/components/ui/useMobile';

export const Hero = () => {
    const { scrollY } = useScroll();
    const isMobile = useIsMobile();

    const y = useTransform(scrollY, [0, 1000], isMobile ? [0, 0] : [0, 500]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    const blockStagger: import('framer-motion').Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };
    const blockItem: import('framer-motion').Variants = {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    const wordContainer: import('framer-motion').Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.3 }
        }
    };
    const wordAnim: import('framer-motion').Variants = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    const title = "Change Your Focus. Change Your Body.";
    const words = title.split(" ");

    return (
        <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">

            {/* === MOBILE HERO === */}
            {isMobile ? (
                <>
                    {/* Background image with gradient overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                            alt="Fitness lifestyle"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Rich multi-layer gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F5]/95 via-[#FDF8F5]/70 to-[#C9607E]/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FDF8F5]/90 via-transparent to-transparent" />
                    </div>

                    <motion.div
                        style={{ opacity }}
                        variants={blockStagger}
                        initial="hidden"
                        animate="show"
                        className="relative z-20 px-6 w-full flex flex-col items-start justify-center h-full"
                    >
                        {/* Audience-targeting eyebrow */}
                        <motion.div
                            variants={blockItem}
                            className="bg-white/70 border border-accent/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-md shadow-soft"
                        >
                            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                                For Women Ready to Feel Strong Again
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={blockItem}
                            className="text-[2.75rem] leading-[1.05] font-space-grotesk font-bold tracking-tight text-text-primary mb-5"
                        >
                            Change Your{' '}
                            <span className="gradient-text">Focus.</span>
                            <br />
                            Change Your{' '}
                            <span className="gradient-text">Body.</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={blockItem}
                            className="text-[15px] text-text-secondary leading-relaxed mb-8 max-w-[320px]"
                        >
                            Level 4 Personal Trainer specialising in rehab, functional fitness & nutrition. No fads. Just results.
                        </motion.p>

                        {/* CTA */}
                        <motion.div variants={blockItem} className="w-full">
                            <Button size="lg" fullWidth className="group shadow-accent-glow">
                                Book a Free Consultation
                                <motion.div className="ml-2 inline-block">
                                    <FiArrowRight />
                                </motion.div>
                            </Button>
                        </motion.div>

                        {/* Location pill */}
                        <motion.div variants={blockItem} className="flex items-center gap-2 mt-5 w-full justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                            <span className="text-[11px] text-text-tertiary font-medium tracking-wide">Sutton Coldfield & Online</span>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            variants={blockItem}
                            className="flex flex-col items-center w-full mt-8"
                        >
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="flex flex-col items-center opacity-30"
                            >
                                <FiChevronDown className="text-text-tertiary" size={18} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </>
            ) : (
                /* === DESKTOP HERO === */
                <>
                    <motion.div
                        style={{ y }}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80"
                            alt="Fitness lifestyle"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F5]/90 via-[#FDF8F5]/75 to-[#FDF8F5]/95" />
                    </motion.div>

                    <FloatingOrbs />

                    <motion.div style={{ opacity }} className="relative z-20 px-5 max-w-4xl mx-auto flex flex-col items-center text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/60 border border-accent/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md inline-block shadow-soft"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                                For Women Ready to Feel Strong Again
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={wordContainer}
                            initial="hidden"
                            animate="show"
                            className="text-6xl lg:text-7xl font-space-grotesk font-bold leading-[1.1] mb-6 tracking-tight text-text-primary flex flex-wrap justify-center"
                        >
                            {words.map((word, idx) => (
                                <motion.span key={idx} variants={wordAnim} className="mr-4">
                                    {word === "Body." || word === "Focus." ? <span className="gradient-text">{word}</span> : word}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
                        >
                            Level 4 Personal Trainer specialising in rehab, functional fitness & nutrition. No fads. No gimmicks. Just what actually works.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex flex-col items-center"
                        >
                            <Button size="lg" className="group shadow-accent-glow">
                                Book a Free Consultation
                                <motion.div className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                                    <FiArrowRight />
                                </motion.div>
                            </Button>

                            <div className="flex items-center gap-2 mt-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                <span className="text-sm text-text-tertiary font-medium tracking-wide">Sutton Coldfield & Online</span>
                            </div>

                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="flex flex-col items-center mt-10 opacity-40"
                            >
                                <span className="text-xs text-text-tertiary mb-2 uppercase tracking-widest font-semibold">scroll to learn more</span>
                                <FiChevronDown className="text-text-tertiary" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </section>
    );
};
