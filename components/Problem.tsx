"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';

/* ── Animated SVG Icons ─────────────────────────────────────── */

const CalendarIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <motion.rect x="3" y="4" width="18" height="18" rx="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} />
        <motion.line x1="3" y1="10" x2="21" y2="10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} />
        <motion.line x1="16" y1="2" x2="16" y2="6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 }} />
        <motion.line x1="8" y1="2" x2="8" y2="6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 }} />
    </motion.svg>
);

const ShieldIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <motion.path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
    </motion.svg>
);

const UtensilsIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" animate={{ rotate: [-3, 3, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, repeatDelay: 2.4, ease: "easeInOut" }}>
        <motion.path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
        <motion.line x1="7" y1="2" x2="7" y2="22" />
        <motion.path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </motion.svg>
);

const MazeIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <motion.path d="M3 12c3-6 6 6 9 0s6 6 9 0" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} />
        <motion.path d="M3 17c3-6 6 6 9 0s6 6 9 0" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} />
    </motion.svg>
);

/* Dream state icons — white on gradient bg */

const SunIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
    </motion.svg>
);

const HeartIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </motion.svg>
);

const SparkleIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", damping: 10, stiffness: 200, delay: 0.3 }}>
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
    </motion.svg>
);

const CompassIcon = () => (
    <motion.svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <motion.polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
    </motion.svg>
);

/* ── Data ─────────────────────────────────────────────────────── */

const painPoints = [
    { text: "Starting Monday... again", subtext: "The cycle of all-or-nothing motivation that never sticks", icon: <CalendarIcon /> },
    { text: "Gym anxiety holding you back", subtext: "Feeling like everyone's watching and you don't belong", icon: <ShieldIcon /> },
    { text: "Diets that last 3 days", subtext: "Restriction, guilt, repeat — you're exhausted by it", icon: <UtensilsIcon /> },
    { text: "No idea what actually works", subtext: "Overwhelmed by contradicting advice from every direction", icon: <MazeIcon /> },
];

const dreamStates = [
    { text: "Waking up with actual energy", subtext: "Not just surviving the day — genuinely looking forward to it", icon: <SunIcon /> },
    { text: "Enjoying your workouts", subtext: "Training that fits your life, not one that takes it over", icon: <HeartIcon /> },
    { text: "Clothes fitting the way you want", subtext: "Confidence that comes from feeling strong, not starving", icon: <SparkleIcon /> },
    { text: "Knowing exactly what to do", subtext: "A clear plan from someone qualified — no more guesswork", icon: <CompassIcon /> },
];

/* ── Animation Variants ───────────────────────────────────────── */

const slideLeft: import('framer-motion').Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

const slideRight: import('framer-motion').Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerGrid: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

/* ── Component ────────────────────────────────────────────────── */

export const Problem = () => {
    return (
        <section className="relative overflow-hidden">

            {/* Mobile connecting gradient line */}
            <div className="absolute left-7 top-20 bottom-20 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-accent/20 md:hidden" />

            {/* ── Section 1: The Struggle ── */}
            <div className="py-14 md:py-[80px] px-5 max-w-7xl mx-auto relative">
                <SectionReveal>
                    <motion.h2
                        variants={itemVariants}
                        className="text-[26px] md:text-4xl font-space-grotesk font-bold text-text-primary mb-3 md:mb-4 leading-[1.15]"
                    >
                        Sound familiar?
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-[15px] md:text-lg text-text-secondary leading-relaxed mb-8 md:mb-10 max-w-xl"
                    >
                        You&apos;ve been here before. The motivation comes and goes, but the frustration stays.
                    </motion.p>

                    <motion.div
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                    >
                        {painPoints.map((point, idx) => (
                            <motion.div
                                key={idx}
                                variants={slideLeft}
                                className="flex items-start gap-4 bg-white border border-black/[0.04] rounded-xl md:rounded-2xl p-4 md:p-5 shadow-card"
                            >
                                <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/10 flex items-center justify-center shrink-0">
                                    {point.icon}
                                </div>
                                <div>
                                    <p className="font-space-grotesk font-semibold text-text-primary text-[15px] md:text-base mb-0.5">
                                        {point.text}
                                    </p>
                                    <p className="text-[13px] md:text-sm text-text-secondary leading-relaxed">
                                        {point.subtext}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionReveal>
            </div>

            {/* ── Section 2: The Dream State ── */}
            <div className="py-14 md:py-[80px] px-5 max-w-7xl mx-auto relative">
                {/* Warm gradient band */}
                <div className="absolute inset-0 -mx-[100vw] bg-gradient-to-b from-transparent via-background-secondary/50 to-transparent pointer-events-none" />

                <SectionReveal className="relative">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[26px] md:text-4xl font-space-grotesk font-bold text-text-primary mb-3 md:mb-4 leading-[1.15]"
                    >
                        Imagine instead...
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-[15px] md:text-lg text-text-secondary leading-relaxed mb-8 md:mb-10 max-w-xl"
                    >
                        This isn&apos;t wishful thinking. It&apos;s what happens when the right plan meets real commitment.
                    </motion.p>

                    <motion.div
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                    >
                        {dreamStates.map((dream, idx) => (
                            <motion.div
                                key={idx}
                                variants={slideRight}
                                className="flex items-start gap-4 bg-white/80 border border-accent/10 rounded-xl md:rounded-2xl p-4 md:p-5 shadow-soft backdrop-blur-sm"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-[#E8B4A2] flex items-center justify-center shrink-0">
                                    {dream.icon}
                                </div>
                                <div>
                                    <p className="font-space-grotesk font-semibold text-text-primary text-[15px] md:text-base mb-0.5">
                                        {dream.text}
                                    </p>
                                    <p className="text-[13px] md:text-sm text-text-secondary leading-relaxed">
                                        {dream.subtext}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionReveal>
            </div>

            {/* ── Section 3: The Bridge ── */}
            <div className="py-14 md:py-[60px] px-5 max-w-7xl mx-auto text-center">
                <SectionReveal>
                    <motion.div
                        variants={itemVariants}
                        className="w-10 h-1 bg-gradient-to-r from-accent to-[#E8B4A2] rounded-full mx-auto mb-6"
                    />

                    <motion.h2
                        variants={itemVariants}
                        className="text-[26px] md:text-4xl font-space-grotesk font-bold text-text-primary mb-4 leading-tight"
                    >
                        That&apos;s exactly what I do.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-[15px] md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8"
                    >
                        I take women from stuck, confused, and starting over — to strong, confident, and in control.
                        With a plan that actually fits your life, backed by real qualifications and zero gimmicks.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <Button size="lg" className="group shadow-accent-glow">
                            See How I Can Help
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </SectionReveal>
            </div>

        </section>
    );
};
