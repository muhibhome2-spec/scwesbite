import { cn } from '../../lib/utils';
import { ElementType, ReactNode } from 'react';

// --- TYPES ---

type Alignment = 'left' | 'center' | 'right';

export type TypographyColor =
  | 'default' // High contrast (900)
  | 'muted'   // Medium contrast (600)
  | 'subtle'  // Low contrast (400)
  | 'inverse' // White properties
  | 'brand'   // Brand primary
  | 'accent'  // Brand accent
  | 'error';  // Destructive

export type TypographyTheme =
  | 'default' // Teal/Sage (Core Brand)
  | 'rose'    // Orphan Care
  | 'blue'    // Water Projects
  | 'amber';  // Food Relief

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type BodySize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: Alignment;
  color?: TypographyColor;
  theme?: TypographyTheme;
  as?: ElementType;
}

interface HeadingProps extends TypographyProps {
  as?: HeadingLevel;
}

interface BodyProps extends TypographyProps {
  as?: 'p' | 'span' | 'div' | 'label';
  size?: BodySize;
}

// --- STYLE MAPPINGS ---

const alignmentClasses: Record<Alignment, string> = {
  left: 'text-left mr-auto',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};

// Semantic Color Mapping System
const themeColorMap: Record<TypographyTheme, Record<TypographyColor, string>> = {
  default: {
    default: 'text-gray-900',
    muted: 'text-gray-600',
    subtle: 'text-gray-400',
    inverse: 'text-white',
    brand: 'text-brand-primary',
    accent: 'text-brand-accent',
    error: 'text-red-600',
  },
  rose: {
    default: 'text-rose-900',
    muted: 'text-gray-600', // Body text usually stays neutral
    subtle: 'text-rose-300',
    inverse: 'text-white',
    brand: 'text-rose-600',
    accent: 'text-rose-500',
    error: 'text-red-600',
  },
  blue: {
    default: 'text-blue-900',
    muted: 'text-gray-600',
    subtle: 'text-blue-300',
    inverse: 'text-white',
    brand: 'text-blue-600',
    accent: 'text-cyan-500',
    error: 'text-red-600',
  },
  amber: {
    default: 'text-amber-900',
    muted: 'text-gray-600',
    subtle: 'text-amber-300',
    inverse: 'text-white',
    brand: 'text-amber-600',
    accent: 'text-amber-500',
    error: 'text-red-600',
  },
};

const bodySizeClasses: Record<BodySize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

// --- COMPONENTS ---

export function DisplayHeading({
  children,
  className,
  align = 'center',
  color = 'default',
  theme = 'default',
  as: Component = 'h1'
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'display-heading',
        alignmentClasses[align],
        themeColorMap[theme][color],
        className
      )}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  children,
  className,
  align = 'center',
  color = 'default',
  theme = 'default',
  as: Component = 'h2'
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'section-heading',
        alignmentClasses[align],
        themeColorMap[theme][color],
        className
      )}
    >
      {children}
    </Component>
  );
}

export function SubHeading({
  children,
  className,
  align = 'center',
  color = 'default',
  theme = 'default',
  as: Component = 'h3'
}: HeadingProps) {
  return (
    <Component
      className={cn(
        'subheading',
        alignmentClasses[align],
        themeColorMap[theme][color],
        className
      )}
    >
      {children}
    </Component>
  );
}

export function BodyText({
  children,
  className,
  align = 'left',
  color = 'muted',
  theme = 'default',
  size = 'base',
  as: Component = 'p'
}: BodyProps) {
  return (
    <Component
      className={cn(
        'body-text',
        alignmentClasses[align],
        themeColorMap[theme][color],
        bodySizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}

export function CaptionText({
  children,
  className,
  align = 'left',
  color = 'subtle',
  theme = 'default',
  as: Component = 'span'
}: TypographyProps) {
  return (
    <Component
      className={cn(
        'caption-text',
        alignmentClasses[align],
        themeColorMap[theme][color],
        className
      )}
    >
      {children}
    </Component>
  );
}