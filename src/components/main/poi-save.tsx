import { useMap } from 'react-leaflet';
import IconComponent from '../ui/icon';

const PoiSave = () => {
  const map = useMap();
  const onClick = () => {
    const bounds = map.getBounds();

    console.log(bounds.getCenter());

    //백엔드에 호출 후 좌표로 주소를 받아와야 한다.
    //그 후 등록 과정을 실행한다.
  };
  return (
    <div
      className='absolute left-2/4 top-2/4 z-[1000] h-fit w-fit'
      onClick={() => {
        onClick();
      }}>
      <IconComponent name='mapPin' size='md' />
    </div>
  );
};
export default PoiSave;
