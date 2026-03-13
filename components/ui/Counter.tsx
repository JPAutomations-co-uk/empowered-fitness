"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CounterProps {
    value: number;
    direction?: 'up' | 'down';
    className?: string;
    suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({
    value,
    direction = 'up',
    className = '',
    suffix = ''
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const motionValue = useMotionValue(direction === 'down' ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === 'down' ? 0 : value);
        }
    }, [motionValue, isInView, direction, value]);

    const display = useTransform(springValue, (current) =>
        Math.round(current).toLocaleString()
    );

    return (
        <span ref={ref} className={`font-space-grotesk ${className}`}>
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
};
