import { forwardRef } from 'react';
import IconComponent from '../ui/icon';
import { CommonButton } from './commonButton';

type SelectLocationProps = {
  isSelectMode?: boolean;
};

const SelectLocation = forwardRef<HTMLButtonElement, SelectLocationProps>(
  (props, ref) => {
    const { isSelectMode } = props;
    return (
      <CommonButton
        className='pointer-events-auto absolute right-4 top-28 z-[4900] mt-1'
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
