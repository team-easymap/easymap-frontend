import { forwardRef } from 'react';
import IconComponent from '../ui/icon';
import { CommonButton } from './commonButton';
import { cn } from '@/lib/utils';

type SelectLocationProps = {
  isSelectMode?: boolean;
  className?: string;
};

const SelectLocation = forwardRef<HTMLButtonElement, SelectLocationProps>(
  (props, ref) => {
    const { isSelectMode, className } = props;
    return (
      <CommonButton
        className={cn(
          `pointer-events-auto absolute right-4 top-28 z-[4900] mt-1`,
          className
        )}
        color='white'
        radius='large'
        use='icon'
        ref={ref}>
        <IconComponent
          name='mapPin'
          color={isSelectMode ? 'text-primary' : 'text-black'}
        />
      </CommonButton>
    );
  }
);

export default SelectLocation;
