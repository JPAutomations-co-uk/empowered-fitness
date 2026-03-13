"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';

const blogPosts = [
    {
        id: 1,
        title: "Embracing the F*ck It Button",
        excerpt: "You\u2019ve set your goals, planned your meals... yet week after week you find yourself hitting the f*ck it button.",
        tag: "Motivation",
        date: "Mar 2026",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80"
    },
    {
        id: 2,
        title: "What I Learned from Training 100s of Clients",
        excerpt: "If you\u2019ve ever stepped on a scale and felt like it was playing a cruel joke, you\u2019re not alone.",
        tag: "Training",
        date: "Feb 2026",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"
    },
    {
        id: 3,
        title: "Sustainable Weight Loss Without Injections",
        excerpt: "Weight loss often feels like a maze filled with quick fixes. But lasting results come from consistent effort and smart choices.",
        tag: "Nutrition",
        date: "Mar 2026",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80"
    }
];

export const BlogPreview = () => {
    return (
        <section className="py-14 md:py-[100px] w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 w-full">
                <SectionReveal>

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                        <div className="flex flex-col max-w-2xl">
                            <motion.h2
                                variants={itemVariants}
                                className="text-[26px] md:text-4xl font-space-grotesk font-bold text-text-primary mb-2 md:mb-4"
                            >
                                From the Blog
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="text-[15px] md:text-lg text-text-secondary"
                            >
                                Real talk about fitness, nutrition, and not trusting the scales.
                            </motion.p>
                        </div>
                    </div>

                    <motion.div variants={itemVariants} className="w-full overflow-x-auto no-scrollbar pb-4 md:pb-8 -mx-5 px-5 md:mx-0 md:px-0">
                        <div className="flex gap-3 md:gap-6 w-max md:w-full snap-x snap-mandatory">

                            {blogPosts.map((post) => (
                                <div key={post.id} className="w-[80vw] md:w-full flex-shrink-0 md:flex-[1_1_0%] snap-start group hover:cursor-pointer">
                                    <div className="bg-white rounded-xl md:rounded-2xl border border-black/[0.04] h-full flex flex-col shadow-card group-hover:shadow-card-hover transition-all duration-300 overflow-hidden">

                                        {/* Cover image */}
                                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                        </div>

                                        <div className="p-5 md:p-8 flex flex-col flex-grow">

                                        <div className="flex items-center justify-between mb-4 md:mb-6">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent bg-accent/[0.06] px-3 py-1 rounded-full">
                                                {post.tag}
                                            </span>
                                            <span className="text-[11px] md:text-xs text-text-tertiary font-medium">
                                                {post.date}
                                            </span>
                                        </div>

                                        <h3 className="text-lg md:text-2xl font-space-grotesk font-bold text-text-primary mb-3 md:mb-4 group-hover:text-accent transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        <p className="text-[15px] md:text-base text-text-secondary leading-relaxed mb-5 md:mb-8 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {/* Always visible on mobile (no hover), hover-reveal on desktop */}
                                        <div className="mt-auto flex justify-between items-center text-accent text-sm font-semibold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                            <span>Read article</span>
                                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </div>

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </motion.div>

                </SectionReveal>
            </div>
        </section>
    );
};
