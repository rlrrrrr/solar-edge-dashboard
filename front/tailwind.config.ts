import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}','./@/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002855', // Dark Blue  // Light Blue
        },
        secondary : {
          DEFAULT: '#0073A8', 
        },
        accent: {
          DEFAULT: '#0073A8',
        },
        neutral: {
          light: '#E5E5E5',   // Light Grey
          dark: '#4A4A4A',    // Dark Grey
        },
      },
    },
  },
  plugins: [],
} satisfies Config;