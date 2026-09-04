/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Coastal Casual Boutique: warm navy, sunlit gold, sandy beige
        navy: {
          DEFAULT: '#1B2E50',
          dark:    '#0E1E38',
          light:   '#243D65',
        },
        gold: {
          DEFAULT: '#D4A84B',
          light:   '#F5DFA0',
          dark:    '#B8882A',
        },
        beige: {
          DEFAULT: '#F5F0E8',
          light:   '#FDFAF5',
          dark:    '#E8DFD0',
        },
        // Coastal accent colors
        sea:   { DEFAULT: '#4AABB5', light: '#A8DBE0' },
        coral: { DEFAULT: '#E8705A', light: '#F4A897' },
        sand:  { DEFAULT: '#C8A96A', light: '#EDD9A3' },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Nunito', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.12em',
        'widest-3': '0.18em',
      },
      borderRadius: {
        'wave': '60% 40% 60% 40% / 40% 60% 40% 60%',
      },
      // Le keyframe (marquee, reviewsScroll) sono definite in global.css
    },
  },
  plugins: [],
};
