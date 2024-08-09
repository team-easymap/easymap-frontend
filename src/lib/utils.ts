import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            '12R',
            '12M',
            '14R',
            '14M',
            '14B',
            '16R',
            '16M',
            '18R',
            '18M',
            '20B',
            '24B',
            '28B'
          ]
        }
      ]
    }
  }
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
