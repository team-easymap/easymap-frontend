// src/components/ExtendedButton.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '../ui/button';

// 새로운 버튼 변형 정의
const commonButtonVariants = cva(
  'inline-flex items-center whitespace-nowrap text-14M font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2',
  {
    variants: {
      color: {
        gray: 'bg-gray-1 text-black',
        purple: 'bg-[#A65CF5] text-white',
        white: 'bg-white text-black border border-gray-3',
        black: 'bg-black text-white',
        red: 'bg-red-7 text-white'
      },
      radius: {
        small: 'rounded',
        large: 'rounded-[100px]'
      },
      use: {
        icon: 'px-2 justify-center',
        text: 'px-4 justify-center',
        category: 'px-4 justify-start w-full'
      }
    },
    defaultVariants: {
      color: 'gray',
      radius: 'small',
      use: 'text'
    }
  }
);

export interface CommonButtonProps
  extends Omit<ButtonProps, 'color' | 'radius'>, // 기존 ButtonProps에서 color와 radius 제외
    VariantProps<typeof commonButtonVariants> {
  asChild?: boolean;
  color?: 'gray' | 'purple' | 'white' | 'black' | 'red'; // 특정 문자열 리터럴로 타입 정의
  radius?: 'small' | 'large'; // 특정 문자열 리터럴로 타입 정의
  use?: 'icon' | 'text' | 'category'; // 특정 문자열 리터럴로 타입 정의
}

const CommonButton = React.forwardRef<HTMLButtonElement, CommonButtonProps>(
  (
    { className, variant, size, color, radius, use, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          commonButtonVariants({ size, color, radius, use }),
          className // Explicitly include className here
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CommonButton.displayName = 'CommonButton';

export { CommonButton, commonButtonVariants };
