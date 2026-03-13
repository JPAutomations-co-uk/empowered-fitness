"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

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
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.04] shadow-soft' : 'bg-transparent'
                    }`}
            >
                <div className="h-14 md:h-16 px-5 flex items-center justify-between max-w-7xl mx-auto">
                    <div className="font-space-grotesk font-bold text-lg md:text-xl tracking-tight flex items-baseline text-text-primary">
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
                        className="md:hidden p-2 -mr-2 text-text-primary focus:outline-none z-50"
                        aria-label="Toggle Menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiX size={22} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiMenu size={22} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-background-primary md:hidden flex flex-col pt-20 px-6 pb-6 safe-bottom"
                    >
                        <div className="flex flex-col flex-grow">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                                    },
                                }}
                                className="flex flex-col gap-1"
                            >
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        variants={{
                                            hidden: { opacity: 0, x: 16 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                                        }}
                                        className="flex items-center justify-between text-[22px] font-space-grotesk font-bold py-4 border-b border-black/[0.04] text-text-primary active:text-accent transition-colors"
                                    >
                                        {link.name}
                                        <FiArrowRight className="text-accent/40" size={18} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-auto pt-4"
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
