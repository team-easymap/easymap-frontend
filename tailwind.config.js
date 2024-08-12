/** @type {import('tailwindcss').Config} */

function createFontSize(size, weight) {
  return [
    size,
    {
      lineHeight: 'auto',
      fontFamily: 'Noto Sans KR, sans-serif',
      fontWeight: weight
    }
  ];
}

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontSize: {
        '12R': createFontSize('12px', '400'), // Regular weight
        '12M': createFontSize('12px', '500'), // Medium weight
        '14R': createFontSize('14px', '400'), // Regular weight
        '14M': createFontSize('14px', '500'), // Medium weight
        '14B': createFontSize('14px', '700'), // Bold weight
        '16R': createFontSize('16px', '400'), // Regular weight
        '16M': createFontSize('16px', '500'), // Medium weight
        '18R': createFontSize('18px', '400'), // Regular weight
        '18M': createFontSize('18px', '500'), // Medium weight
        '20B': createFontSize('20px', '700'), // Bold weight
        '24B': createFontSize('24px', '700'), // Bold weight
        '28B': createFontSize('28px', '700') // Bold weight
      },
      colors: {
        // 사용법 예시 className='text-gray-0'
        black: '#1b1b1b',
        gray: {
          0: '#F8F9FA',
          1: '#F1F3F5',
          2: '#E9ECEF',
          3: '#DEE2E6',
          4: '#CED4DA',
          5: '#ADB5BD',
          6: '#868E96',
          7: '#495057',
          8: '#343A40',
          9: '#212529'
        },
        red: {
          0: '#FFF5F5',
          1: '#FFE3E3',
          2: '#FFC9C9',
          3: '#FFA8A8',
          4: '#FF8787',
          5: '#FF6B6B',
          6: '#FA5252',
          7: '#F03E3E',
          8: '#E03131',
          9: '#C92A2A'
        },
        blue: {
          0: '#E7F5FF',
          1: '#D0EBFF',
          2: '#A5D8FF',
          3: '#74C0FC',
          4: '#4DABF7',
          5: '#339AF0',
          6: '#228BE6',
          7: '#1C7ED6',
          8: '#1971C2',
          9: '#1864AB'
        },
        green: {
          0: '#EBFBEE',
          1: '#D3F9D8',
          2: '#B2F2BB',
          3: '#8CE99A',
          4: '#69DB7C',
          5: '#51CF66',
          6: '#40C057',
          7: '#37B24D',
          8: '#2F9E44',
          9: '#2B8A3E'
        },
        yellow: {
          0: '#FFF9DB',
          1: '#FFF3BF',
          2: '#FFEC99',
          3: '#FFE066',
          4: '#FFD43B',
          5: '#FCC419',
          6: '#FAB005',
          7: '#F59F00',
          8: '#F08C00',
          9: '#E67700'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xs: '3px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
