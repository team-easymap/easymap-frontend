// src/components/ExtendedButton.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {  ButtonProps, buttonVariants } from "../ui/button";

// 새로운 버튼 변형 정의
const commonButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-14M font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2",
  {
    variants: {
      ...buttonVariants.variants, // 기존 변형 포함
      color: {
        gray: "bg-gray-1 text-black",
        purple: "bg-[#A65CF5] text-white",
        white: "bg-white text-black borer border-gray-3",
        black: "bg-black text-white",
        red: "bg-red-7 text-white",
      },
      radius: {
        small: "rounded",
        large: "rounded-[100px]",
      },
      use : {
        icon : "px-2",
        text : "px-4",
      }
    },
    defaultVariants: {
      ...buttonVariants.defaultVariants,
      color: "gray",
      radius: "small",
      use:"text"
    },
  }
);

export interface commonButtonProps
  extends Omit<ButtonProps, 'color' | 'radius'>, // 기존 ButtonProps에서 color와 radius 제외
    VariantProps<typeof commonButtonVariants> {
  asChild?: boolean;
  color ?: string;
  radius ?: string;
  use ?: string;
}

const CommonButton = React.forwardRef<HTMLButtonElement, commonButtonProps>(
  ({ className, variant, size, color, radius, use,asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(commonButtonVariants({ variant, size, color, radius, use,className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

CommonButton.displayName = "ExtendedButton";

export { CommonButton, commonButtonVariants };
