"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';

const cardStagger: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const cardSlideUp: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
};

interface PricingCard {
    title: string;
    price: string;
    priceStyle: 'accent' | 'default';
    badge?: string;
    badgeStyle?: 'accent' | 'subtle';
    features: string[];
    featureStyle: 'primary' | 'secondary';
    cta: string;
    ctaVariant: 'primary' | 'secondary' | 'outline';
    tagline: string;
    highlight?: boolean;
}

const cards: PricingCard[] = [
    {
        title: "30-Day Meal Plan",
        price: "£4.99",
        priceStyle: "accent",
        badge: "Most Popular",
        badgeStyle: "accent",
        features: ["Personalised 30-day plan", "Delivered to your inbox", "Built around your goals & preferences", "Supports fat loss, energy & performance"],
        featureStyle: "primary",
        cta: "Get Your Plan",
        ctaVariant: "primary",
        tagline: "Start today. No more putting it off.",
        highlight: true,
    },
    {
        title: "Nutrition Consultation",
        price: "£50",
        priceStyle: "default",
        features: ["Fully written personalised plan", "Shopping lists for your goals", "Food diary analysis & feedback", "Supplementation recommendations", "Delivered within 3 days"],
        featureStyle: "secondary",
        cta: "Book Consultation",
        ctaVariant: "secondary",
        tagline: "The plan works — if you do.",
    },
    {
        title: "PT Packages",
        price: "From enquiry",
        priceStyle: "default",
        badge: "Transform",
        badgeStyle: "subtle",
        features: ["Personalised training plan", "Expert nutrition guidance", "Ongoing support (Skype/phone/email)", "In-person or online sessions", "PAR-Q assessment included"],
        featureStyle: "primary",
        cta: "Get in Touch",
        ctaVariant: "outline",
        tagline: "Your first step is a conversation.",
    },
];

export const Pricing = () => {
    return (
        <section className="py-14 md:py-[120px] px-5 w-full relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/[0.04] rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

            <SectionReveal className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 md:mb-16">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[24px] md:text-5xl font-space-grotesk font-bold text-text-primary mb-2 md:mb-6"
                    >
                        Invest in Yourself
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-[14px] md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
                    >
                        Clear pricing. No hidden fees. No contracts you can&apos;t get out of.
                    </motion.p>
                </div>

                {/* Mobile: vertical stack with stagger | Desktop: 3-col grid */}
                <motion.div
                    variants={cardStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:items-start"
                >
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardSlideUp}
                            className={`w-full ${idx === 1 ? 'md:mt-4' : ''}`}
                        >
                            <div className={`bg-white rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col h-full relative shadow-card transition-colors ${
                                card.highlight
                                    ? 'border-t-[3px] border-t-accent border-r border-b border-l border-black/[0.04]'
                                    : card.badge === 'Transform'
                                        ? 'border border-accent/20 hover:border-accent/40'
                                        : 'border border-black/[0.04] hover:border-accent/20'
                            }`}>
                                {card.badge && (
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                                        card.badgeStyle === 'accent'
                                            ? 'bg-accent text-white shadow-accent-glow'
                                            : 'bg-background-tertiary text-accent border border-accent/15'
                                    }`}>
                                        {card.badge}
                                    </div>
                                )}

                                {/* Mobile: horizontal layout for title + price | Desktop: stacked */}
                                <div className="flex items-baseline justify-between md:flex-col md:items-start gap-2 mb-4 md:mb-6">
                                    <h3 className="text-base md:text-2xl font-space-grotesk font-semibold text-text-primary">
                                        {card.title}
                                    </h3>
                                    <div className={`text-xl md:text-4xl font-space-grotesk font-black whitespace-nowrap ${
                                        card.priceStyle === 'accent' ? 'text-accent' : 'text-text-primary'
                                    }`}>
                                        {card.price}
                                    </div>
                                </div>

                                <ul className="flex flex-col gap-2 md:gap-4 mb-4 md:mb-8 flex-grow">
                                    {card.features.map((feat, i) => (
                                        <li key={i} className={`flex items-start gap-2 md:gap-3 text-[13px] md:text-sm ${
                                            card.featureStyle === 'primary' ? 'text-text-primary' : 'text-text-secondary'
                                        }`}>
                                            <FiCheck className={`mt-0.5 flex-shrink-0 ${
                                                card.featureStyle === 'primary' ? 'text-accent' : 'text-text-secondary'
                                            }`} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={card.ctaVariant as 'primary' | 'secondary' | 'outline'}
                                    fullWidth
                                    className={`mb-2 md:mb-4 ${card.ctaVariant === 'outline' ? 'group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all' : ''}`}
                                >
                                    {card.cta}
                                </Button>
                                <p className="text-center text-[11px] md:text-xs text-text-tertiary">{card.tagline}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </SectionReveal>
        </section>
    );
};
