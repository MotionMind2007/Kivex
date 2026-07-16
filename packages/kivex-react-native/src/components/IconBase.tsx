import { ReactNode } from 'react';
import { forwardRef } from 'react';
import type { IconProps } from '../types/IconProps';

interface IconBaseProps extends IconProps {
    children: ReactNode;
}

export const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
    (
        { 
            size = 24, 
            color = 'currentColor', 
            strokeWidth = 2, 
            children,
            ...props
        }, 
        ref
    ) => {
    return (
        <svg 
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            {children}
        </svg>
    )});

IconBase.displayName = 'IconBase';