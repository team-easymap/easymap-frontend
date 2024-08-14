import IconComponent from '@/components/ui/icon';
import { Button, type ButtonProps } from '../ui/button';
import { cn } from '@/lib/utils';
type FooterButtonProps = {
  title: string;
  color?: string;
  children: React.ReactNode;
} & ButtonProps;

const FooterButtonComponent: React.FC<FooterButtonProps> = ({
  title,
  color,
  className,
  children
}) => {
  const textColorClass = color === 'purple' ? 'text-[#A65CF5]' : 'text-black';

  return (
    <Button
      className={cn(
        'flex h-full w-1/3 flex-col items-center justify-center gap-1 bg-transparent',
        textColorClass,
        className
      )}>
      {children}
      <span>{title}</span>
    </Button>
  );
};

export default FooterButtonComponent;
