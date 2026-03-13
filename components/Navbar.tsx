"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Nutrition', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.04] shadow-soft' : 'bg-transparent'
                    }`}
            >
                <div className="h-16 px-5 flex items-center justify-between max-w-7xl mx-auto">
                    <div className="font-space-grotesk font-bold text-xl tracking-tight flex items-baseline text-text-primary">
                        EMPOWERED
                        <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1" />
                    </div>

                    <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ scale: 1.05, color: 'var(--accent)' }}
                                className="text-text-secondary hover:text-accent transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <Button size="sm" className="ml-4">Book Now</Button>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-text-primary focus:outline-none z-50"
                        aria-label="Toggle Menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    layoutId="menu-icon"
                                >
                                    <FiX size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    layoutId="menu-icon"
                                >
                                    <FiMenu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-background-primary/98 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6"
                    >
                        <div className="flex flex-col gap-6 flex-grow">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                                    },
                                }}
                                className="flex flex-col gap-4"
                            >
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        variants={{
                                            hidden: { opacity: 0, x: 20 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        className="flex items-center justify-between text-2xl font-space-grotesk font-bold border-b border-black/5 pb-4 text-text-primary"
                                    >
                                        {link.name}
                                        <FiArrowRight className="text-accent opacity-50" size={20} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto"
                        >
                            <Button fullWidth size="lg" onClick={() => setIsOpen(false)}>
                                Book Now
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
