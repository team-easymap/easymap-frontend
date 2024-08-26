import { useMap } from 'react-leaflet';
import { CommonButton } from '../common/commonButton';
import { useEffect } from 'react';
import { useLocationStore } from '@/store/location';

// 좌상단, 우하단 좌표를 관리하는 컴포넌트
const MapCornerHandler = () => {
  const map = useMap();
  const { setLt, setRb, view_move, setViewMove } = useLocationStore(
    (state) => state
  );

  const updateBounds = () => {
    const bounds = map.getBounds();
    console.log(bounds.getNorthWest(), bounds.getSouthEast());
    setLt(bounds.getNorthWest());
    setRb(bounds.getSouthEast());
    setViewMove(false);
  };

  useEffect(() => {
    updateBounds();
  }, []);

  return (
    <>
      {view_move && (
        <CommonButton
          color='purple'
          use='text'
          radius='large'
          className='absolute left-[110px] top-[120px] z-[1000]'
          onClick={updateBounds}>
          내 위치에서 검색{' '}
        </CommonButton>
      )}
    </>
  );
};

export default MapCornerHandler;
