import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

type ChipProps = VariantProps<typeof chipVariants> &
  React.AllHTMLAttributes<HTMLSpanElement>;

const chipVariants = cva('rounded-full', {
  variants: {
    variant: {
      stroke: 'border border-primary',
      fill: 'border-none bg-blue-0'
    },
    size: {
      sm: 'px-2 py-1 text-12R',
      md: 'p-2 text-12R',
      lg: 'px-3 py-2 text-14R'
    }
  },
  defaultVariants: {
    variant: 'stroke',
    size: 'md'
  }
});

const ChipComponent = (props: ChipProps) => {
  const { variant, size, className, ...res } = props;
  return (
    <span className={cn(chipVariants({ variant, size, className }))} {...res} />
  );
};

export default ChipComponent;
