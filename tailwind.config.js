import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                forest: 'var(--forest)',
                jungle: 'var(--jungle)',
                leaf: 'var(--leaf)',
                moss: 'var(--moss)',
                sage: 'var(--sage)',
                mint: 'var(--mint)',
                earth: 'var(--earth)',
                bark: 'var(--bark)',
                sand: 'var(--sand)',
                cream: 'var(--cream)',
                ocean: 'var(--ocean)',
                teal: 'var(--teal)',
                sky: 'var(--sky)',
                gold: 'var(--gold)',
                dark: 'var(--dark)',
                // Shadcn overrides
                border: 'var(--sage)',
                input: 'var(--sage)',
                ring: 'var(--teal)',
                background: 'var(--cream)',
                foreground: 'var(--dark)',
                primary: {
                    DEFAULT: 'var(--forest)',
                    foreground: 'var(--white)',
                },
                secondary: {
                    DEFAULT: 'var(--sage)',
                    foreground: 'var(--dark)',
                },
                muted: {
                    DEFAULT: 'var(--mint)',
                    foreground: 'var(--jungle)',
                },
            },
            fontFamily: {
                sans: ['Outfit', ...defaultTheme.fontFamily.sans],
                serif: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
            },
        },
    },
    plugins: [forms],
};
