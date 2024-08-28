const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta la ruta según la estructura de tu proyecto
    "./public/index.html", // Incluye el HTML de tu proyecto si es necesario
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Azul primario
        secondary: "#F97316", // Naranja secundario
        accent: "#10B981", // Verde de acento
        neutral: "#9CA3AF", // Gris neutro
        "light-background": "#F3F4F6", // Fondo claro
        'c-primary-variant-1': 'var(--c-primary-variant-1)',
        'c-primary-variant-2': 'var(--c-primary-variant-2)',
        'c-primary-variant-3': 'var(--c-primary-variant-3)',
        'c-primary-variant-4': 'var(--c-primary-variant-4)',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Fuente sans-serif
        serif: ["Georgia", "serif"], // Fuente serif
        mono: ["Menlo", "monospace"], // Fuente monoespaciada
      },
      spacing: {
        128: "32rem", // Espacio grande
        144: "36rem", // Espacio aún más grande
      },
      borderRadius: {
        "4xl": "2rem", // Radio de borde extra grande
      },
      boxShadow: {
        "outline-primary": "0 0 0 2px rgba(29, 78, 216, 0.5)",
        'shadowcard': 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
      },
      screens: {
        "2xl": "1536px", // Punto de quiebre para pantallas muy grandes
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()]
};
