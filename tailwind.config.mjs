/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palet final LY Kosmetik: kertas hangat + hijau tua, satu accent.
        paper: '#F6F5F0',
        ink: '#242620',
        sage: '#CBD8C9',
        accent: '#27483B',
        rust: '#A94C2B', // hanya marker mikro (underline label / bullet kecil)
      },
      fontFamily: {
        sans: ['Switzer', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
