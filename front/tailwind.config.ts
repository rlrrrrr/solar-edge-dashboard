import type {Config} from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './@/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                grid: "grid 15s linear infinite",
            },
            keyframes: {
                grid: {
                    "0%": {transform: "translateY(-50%)"},
                    "100%": {transform: "translateY(0)"},
                },
                backgroundImage: {
                    'radial-white-transparent': 'radial-gradient(circle, white, transparent)',
                },
            },
        },
        plugins: [],
    } satisfies Config;