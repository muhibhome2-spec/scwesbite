export const BrandPalette = {
    primary: {
        DEFAULT: 'emerald-600',
        hover: 'emerald-700',
        light: 'emerald-50',
        accent: 'emerald-400',
    },
    text: {
        main: 'slate-900',
        muted: 'slate-700',
        light: 'zinc-200', // For dark backgrounds
        white: 'white',
    },
    background: {
        white: 'white',
        slate: 'slate-100', // The primary alternating rhythm color
        card: 'slate-50',
        dark: 'slate-900', // For cinematic overlays
    }
} as const;

export type BrandTheme = 'brand'; // Strict single theme for now
