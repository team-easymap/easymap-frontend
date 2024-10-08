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

export const convertTime = (time: string) => {
  return time.split(':').reduce((acc, cur, i) => {
    if (!+cur) return acc;
    if (i === 0) return acc + +cur + '시 ';
    if (i === 1) return acc + +cur + '분 ';
    return acc + +cur + '초';
  }, '');
};
