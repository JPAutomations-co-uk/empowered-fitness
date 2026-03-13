"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from './useMobile';

export const FloatingOrbs = () => {
    const [mounted, setMounted] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Mobile: fewer, smaller orbs with reduced blur for GPU performance
    if (isMobile) {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -left-10 w-48 h-48 bg-[#C9607E] rounded-full opacity-[0.07] blur-[60px] will-change-transform"
                />
                <motion.div
                    animate={{ y: [0, 15, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 -right-16 w-56 h-56 bg-[#E8B4A2] rounded-full opacity-[0.08] blur-[70px] will-change-transform"
                />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 w-80 h-80 bg-[#C9607E] rounded-full opacity-[0.08] blur-[100px] will-change-transform"
            />
            <motion.div
                animate={{ y: [0, 25, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-[#E8B4A2] rounded-full opacity-[0.10] blur-[120px] will-change-transform"
            />
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 25, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-10 left-1/4 w-72 h-72 bg-[#C4A0D0] rounded-full opacity-[0.06] blur-[90px] will-change-transform"
            />
            <motion.div
                animate={{ y: [0, 15, 0], x: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute top-20 left-1/2 w-60 h-60 bg-[#F0C0A8] rounded-full opacity-[0.07] blur-[80px] will-change-transform"
            />
        </div>
    );
};
