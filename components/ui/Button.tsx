"use client";

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background-primary";

        const variants = {
            primary: "bg-accent text-white shadow-accent-glow hover:bg-accent-hover hover:shadow-lg",
            secondary: "bg-background-tertiary text-text-primary hover:bg-background-secondary border border-black/5",
            outline: "border border-accent/30 text-accent hover:border-accent hover:bg-accent/5",
        };

        const sizes = {
            sm: "h-10 px-5 text-sm",
            md: "h-12 px-7 text-base",
            lg: "h-14 px-9 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
