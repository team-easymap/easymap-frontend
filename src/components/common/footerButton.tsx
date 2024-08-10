import IconComponent from '@/components/ui/icon';
import { Button, type ButtonProps } from '../ui/button';
import { cn } from '@/lib/utils';
type FooterButtonProps = {
  icon: string;
  title: string;
  color?: string;
} & ButtonProps;

const FooterButtonComponent: React.FC<FooterButtonProps> = ({
  icon,
  title,
  color,
  className,
  ...buttonProps
}) => {
  const iconColors = color === 'purple' ? '#A65CF5' : 'black';
  const textColorClass = color === 'purple' ? 'text-[#A65CF5]' : 'text-black';

  return (
    <Button
      className={cn(
        'flex h-full w-1/3 flex-col items-center justify-center gap-1 bg-transparent',
        textColorClass,
        className
      )}
      {...buttonProps}>
      <IconComponent name={icon} color={iconColors} />
      <span>{title}</span>
    </Button>
  );
};

export default FooterButtonComponent;
