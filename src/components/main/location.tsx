import { useMap } from 'react-leaflet';
import { CommonButton } from '../common/commonButton';
import IconComponent from '../ui/icon';
import { useLocationStore } from '@/store/location';
import { useCallback } from 'react';

const MyLocationComponent: React.FC = () => {
  const map = useMap();
  const myLocation = useLocationStore((state) => state.myLocation);

  //현재 내 위치로
  const onClick = useCallback(() => {
    if (myLocation) map.setView(myLocation, map.getZoom(), { animate: false });
  }, [myLocation]);

  return (
    <>
      <CommonButton
        color='white'
        use='icon'
        radius='large'
        className='absolute bottom-0 z-[1000] mb-5 ml-4'
        onClick={onClick}>
        <IconComponent name='locate' />
      </CommonButton>
    </>
  );
};
export default MyLocationComponent;
