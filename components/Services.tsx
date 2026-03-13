"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { CgGym } from "react-icons/cg";
import { RiLeafLine, RiHeartPulseLine } from "react-icons/ri";

import { SectionReveal, itemVariants } from '@/components/ui/SectionReveal';
import { Card } from '@/components/ui/Card';

const services = [
    {
        id: 1,
        title: "Personal Training",
        description: "In-person sessions in Sutton Coldfield or online from anywhere. Your plan, your pace, your goals.",
        icon: <CgGym className="w-7 h-7 md:w-8 md:h-8 text-accent" />
    },
    {
        id: 2,
        title: "Nutrition Plans",
        description: "Bespoke plans from a qualified Nutrition & Metabolism Specialist. No fad diets — just food that works for your body.",
        icon: <RiLeafLine className="w-7 h-7 md:w-8 md:h-8 text-accent" />
    },
    {
        id: 3,
        title: "Rehab & Specialist Training",
        description: "Lower back pain, knee rehab, menopause health. I've lived it and I've trained hundreds through it.",
        icon: <RiHeartPulseLine className="w-7 h-7 md:w-8 md:h-8 text-accent" />
    }
];

export const Services = () => {
    return (
        <section className="py-14 md:py-[80px] px-5 max-w-7xl mx-auto">
            <SectionReveal>

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                    <div className="flex flex-col max-w-2xl">
                        <motion.h2
                            variants={itemVariants}
                            className="text-[26px] md:text-4xl font-space-grotesk font-bold text-text-primary mb-2 md:mb-4"
                        >
                            What I Do
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-[15px] md:text-lg text-text-secondary"
                        >
                            Everything tailored to you. Nothing off the shelf.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                    {services.map((service) => (
                        <motion.div key={service.id} variants={itemVariants} className="h-full">
                            <Card className="h-full flex flex-col items-start hover:cursor-pointer group">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/[0.08] flex items-center justify-center mb-4 md:mb-6 border border-accent/10 group-hover:bg-accent/[0.12] transition-colors">
                                    {service.icon}
                                </div>

                                <h3 className="text-lg md:text-[20px] font-space-grotesk font-semibold text-text-primary mb-2 md:mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-[15px] md:text-base text-text-secondary leading-relaxed mb-5 md:mb-8 flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-accent font-semibold text-sm group-hover:text-accent-hover mt-auto">
                                    Learn more <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </SectionReveal>
        </section>
    );
};
