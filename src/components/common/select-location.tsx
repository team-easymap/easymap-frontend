import { useMap } from 'react-leaflet';
import IconComponent from '../ui/icon';
import { CommonButton } from './commonButton';
import { LeafletMouseEvent } from 'leaflet';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type SelectLocationProps = {
  handleMapClick: (evt: LeafletMouseEvent) => void;
};

const SelectLocation = (props: SelectLocationProps) => {
  const { state } = useLocation();
  const [isSelectMode, setIsSelectMode] = useState(!!state);
  const { handleMapClick } = props;
  const map = useMap();

  useEffect(() => {
    if (isSelectMode) {
      map.on('click', (evt) => {
        const target = evt.originalEvent.target as HTMLElement;
        if (target.classList.contains('leaflet-container')) {
          handleMapClick(evt);
        }
      });
    } else {
      map.off('click');
    }
  }, [handleMapClick, isSelectMode, map]);

  return (
    <CommonButton
      className='pointer-events-auto absolute right-4 top-28 z-[90000] mt-1'
      color='white'
      radius='large'
      use='icon'
      onClick={(e) => {
        e.stopPropagation();
        setIsSelectMode((prev) => !prev);
      }}>
      <IconComponent
        name='mapPin'
        color={isSelectMode ? 'text-primary' : 'text-black'}
      />
    </CommonButton>
  );
};

export default SelectLocation;
