/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#6D3FEF",
          hover: "#592BD9",
          light: "#EEE8FF",
          lighter: "#F5F3FF",
          dark: "#4B24B3",
        },
        dark: {
          900: "#0D0C13",
          800: "#13111C",
          700: "#1A1726",
          600: "#272338",
        },
        text: {
          main: "#111111",
          muted: "#666666",
          subtle: "#8E8E93",
        },
        border: {
          subtle: "#EAEAEA",
          accent: "#E2D9FD",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(109, 63, 239, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft': '0 12px 32px -4px rgba(109, 63, 239, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 24px 48px -12px rgba(109, 63, 239, 0.12), 0 8px 24px -4px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 40px -10px rgba(109, 63, 239, 0.35)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-medium': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
