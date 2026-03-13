"use client";

import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="w-full bg-background-tertiary border-t border-accent/[0.08] pt-16 pb-8 px-5 safe-bottom">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <div className="font-space-grotesk font-bold text-2xl tracking-tight flex items-baseline mb-6 text-text-primary">
                            EMPOWERED
                            <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1" />
                        </div>
                        <p className="text-text-secondary text-base leading-relaxed max-w-sm mb-6">
                            Level 4 Personal Trainer & Nutrition Specialist. Fixing bodies, building habits, getting results.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-accent/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all shadow-card">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-accent/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all shadow-card">
                                <FaFacebookF size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-text-primary font-space-grotesk font-semibold mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-text-secondary hover:text-accent transition-colors text-sm font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 flex flex-col">
                        <h4 className="text-text-primary font-space-grotesk font-semibold mb-6">Contact</h4>
                        <p className="text-text-secondary text-sm font-medium mb-2">info@empoweredfitnessuk.com</p>
                        <p className="text-text-secondary text-sm font-medium">Sutton Coldfield, Midlands</p>
                    </div>

                </div>

                <div className="pt-8 border-t border-accent/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-secondary text-xs font-medium">&copy; 2026 Empowered Fitness UK. All rights reserved.</p>
                    <p className="text-text-tertiary text-xs font-medium">Website by JP Automations</p>
                </div>
            </div>
        </footer>
    );
};
