import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			display: ['"Syne"', 'sans-serif'],
  			body: ['"Inter"', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			amber: {
  				400: '#f0a830',
  				500: '#e09520',
  			},
  			teal: {
  				400: '#38bdd2',
  				500: '#2da8bc',
  			},
  			midnight: {
  				900: '#0a0e1a',
  				800: '#0f1424',
  				700: '#161d33',
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'gradient-shift': {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' }
  			},
  			'bob': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-6px)' }
  			},
  			'spin-slow': {
  				from: { transform: 'rotate(0deg)' },
  				to: { transform: 'rotate(360deg)' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0) translateZ(0)' },
  				'50%': { transform: 'translateY(-10px) translateZ(10px)' }
  			},
  			'float-slow': {
  				'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
  				'33%': { transform: 'translateY(-8px) rotate(1deg)' },
  				'66%': { transform: 'translateY(-4px) rotate(-0.5deg)' }
  			},
  			'depth-pulse': {
  				'0%, 100%': { transform: 'translateZ(0)', boxShadow: '0 0 20px rgba(240, 168, 48, 0.05)' },
  				'50%': { transform: 'translateZ(10px)', boxShadow: '0 0 40px rgba(240, 168, 48, 0.1)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'gradient-shift': 'gradient-shift 6s ease infinite',
  			'bob': 'bob 3s ease-in-out infinite',
  			'spin-slow': 'spin-slow 8s linear infinite',
  			'float': 'float 6s ease-in-out infinite',
  			'float-slow': 'float-slow 8s ease-in-out infinite',
  			'depth-pulse': 'depth-pulse 4s ease-in-out infinite'
  		},
  		gridTemplateColumns: {
  			'bento': 'repeat(4, 1fr)',
  			'bento-sm': 'repeat(2, 1fr)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
