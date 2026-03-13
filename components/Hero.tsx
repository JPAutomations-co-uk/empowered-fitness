"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { FloatingOrbs } from '@/components/ui/FloatingOrbs';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 500]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);

    const title = "Change Your Focus. Change Your Body.";
    const words = title.split(" ");
    const container: import('framer-motion').Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 }
        }
    };
    const wordAnim: import('framer-motion').Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
            <motion.div
                style={{ y }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-gradient-to-b from-[#FDF8F5] via-[#FAF0EC] to-[#FDF8F5]"
            />

            <FloatingOrbs />

            <motion.div style={{ opacity }} className="relative z-20 px-5 max-w-4xl mx-auto flex flex-col items-start md:items-center text-left md:text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-accent/[0.06] border border-accent/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md inline-block"
                >
                    <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Sutton Coldfield & Online
                    </span>
                </motion.div>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold leading-[1.1] mb-6 tracking-tight text-text-primary flex flex-wrap md:justify-center"
                >
                    {words.map((word, idx) => (
                        <motion.span key={idx} variants={wordAnim} className="mr-3 md:mr-4">
                            {word === "Body." || word === "Focus." ? <span className="gradient-text">{word}</span> : word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-base md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
                >
                    Level 4 Personal Trainer specialising in rehab, functional fitness & nutrition. No fads. No gimmicks. Just what actually works.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="w-full md:w-auto flex flex-col items-center"
                >
                    <Button size="lg" fullWidth className="md:w-auto group">
                        Book a Free Consultation
                        <motion.div className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                            <FiArrowRight />
                        </motion.div>
                    </Button>

                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex flex-col items-center mt-12 opacity-40"
                    >
                        <span className="text-xs text-text-tertiary mb-2 uppercase tracking-widest font-semibold">or scroll to learn more</span>
                        <FiChevronDown className="text-text-tertiary" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};
