"use client";

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
    className?: string;
    children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', hoverEffect = true, children, ...props }, ref) => {

        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { scale: 1.02, y: -4 } : {}}
                whileTap={hoverEffect ? { scale: 0.98 } : {}}
                className={`bg-white rounded-2xl border border-black/[0.04] p-5 md:p-6 shadow-card transition-all duration-300 relative overflow-hidden group hover:shadow-card-hover ${className}`}
                {...props}
            >
                {hoverEffect && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none transition-opacity duration-300" />
                )}
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        );
    }
);
Card.displayName = "Card";
