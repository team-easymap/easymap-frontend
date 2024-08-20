import { useMap } from 'react-leaflet';
import IconComponent from '../ui/icon';
import { CommonButton } from './commonButton';
import { LeafletMouseEvent } from 'leaflet';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

type SelectLocationProps = {
  handleMapClick: (evt: LeafletMouseEvent) => void;
};

const SelectLocation = (props: SelectLocationProps) => {
  const { state } = useLocation();
  const [isSelectMode, setIsSelectMode] = useState(!!state);
  const { handleMapClick } = props;
  const map = useMap();
  map.on('click', (evt) => {
    if (isSelectMode) {
      handleMapClick(evt);
    }
  });

  return (
    <CommonButton
      className='pointer-events-auto absolute right-4 top-28 z-[90000] mt-1'
      color='white'
      radius='large'
      use='icon'
      onClick={() => setIsSelectMode((prev) => !prev)}>
      <IconComponent
        name='mapPin'
        color={isSelectMode ? 'text-primary' : 'text-black'}
      />
    </CommonButton>
  );
};

export default SelectLocation;
