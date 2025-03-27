import React from 'react';
import { cn } from '@/lib/utils';

interface BlurredTextProps {
    children: React.ReactNode;
    className?: string;
    revealOnHover?: boolean;
    intensity?: 'medium' | 'strong';
}

const BlurredText = ({
    children,
    className,
    revealOnHover = false,
    intensity = 'medium'
}: BlurredTextProps) => {
    return (
        <span
            className={cn(
                "text-transparent bg-clip-text bg-gray-500 select-none",
                intensity === 'medium' && "blur-[4px]",
                intensity === 'strong' && "blur-[8px]",
                revealOnHover && "hover:blur-none hover:text-foreground transition-all duration-300",
                className
            )}
            aria-hidden="true"
        >
            {children}
        </span>
    );
};

export { BlurredText }; 