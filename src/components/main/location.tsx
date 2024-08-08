import { CommonButton } from '../common/commonButton';
import IconComponent from '../ui/icon';
import { useLocationStore } from '@/store/location';

import { useMap } from 'react-leaflet';
import { useCallback } from 'react';
const MyLocationComponent: React.FC = () => {
  const map = useMap();

  const myLocation = useLocationStore((state) => state.myLocation);

  const onMyLocation = useCallback(() => {
    if (myLocation) map.flyTo(myLocation, map.getZoom(), { animate: true });
  }, [map, myLocation]);

  return (
    <>
      <CommonButton
        color='white'
        use='icon'
        radius='large'
        className='absolute bottom-0 z-[1000] mb-5 ml-4'
        onClick={onMyLocation}>
        <IconComponent name='locate' />
      </CommonButton>
    </>
  );
};
export default MyLocationComponent;
