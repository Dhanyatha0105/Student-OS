// ============================================================
// Student OS — UI Component Library
// Shared React components and design tokens
// ============================================================

// ── Design Tokens ────────────────────────────────────────────
// Following the SKILL.md design guide: bold, distinctive, no AI slop

export const tokens = {
    colors: {
        // Primary — Deep ocean teal (knowledge, depth, clarity)
        primary: {
            50: '#e6faf8',
            100: '#b3f0ea',
            200: '#80e6dc',
            300: '#4ddcce',
            400: '#26d4c3',
            500: '#0fb8a8', // Main
            600: '#0d9e91',
            700: '#0a7a70',
            800: '#075750',
            900: '#043430',
        },
        // Accent — Warm amber (ambition, energy, action)
        accent: {
            50: '#fff8e6',
            100: '#ffebb3',
            200: '#ffdd80',
            300: '#ffd04d',
            400: '#ffc626',
            500: '#ffb800', // Main
            600: '#cc9300',
            700: '#996e00',
            800: '#664a00',
            900: '#332500',
        },
        // Semantic
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // Surface (dark theme first)
        surface: {
            bg: '#0a0e17',
            card: '#111827',
            elevated: '#1a2236',
            border: '#1e293b',
            subtle: '#0f172a',
        },
        // Text
        text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
            muted: '#64748b',
            inverse: '#0a0e17',
        },
    },
    fonts: {
        display: "'Sora', sans-serif", // Bold, geometric, modern
        body: "'DM Sans', sans-serif", // Clean, readable
        mono: "'JetBrains Mono', monospace", // Code blocks
    },
    radii: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
    },
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
    },
} as const;

// ── Component Exports (stubs — to be built out) ──────────────

export { tokens as designTokens };

// Future exports:
// export { Button } from './components/Button';
// export { Card } from './components/Card';
// export { Input } from './components/Input';
// export { Modal } from './components/Modal';
// export { Badge } from './components/Badge';
// export { Avatar } from './components/Avatar';
// export { Sidebar } from './components/Sidebar';
