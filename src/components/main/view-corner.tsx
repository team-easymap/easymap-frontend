import { useMap } from 'react-leaflet';
import * as L from 'leaflet';
import { CommonButton } from '../common/commonButton';
import { useEffect } from 'react';
type MapCornerType = {
  moveView: boolean;
  setMoveView: (move: boolean) => void;
  setNorthWest: (coords: L.LatLng) => void;
  setSouthEast: (coords: L.LatLng) => void;
};

// 좌상단, 우하단 좌표를 관리하는 컴포넌트
const MapCornerHandler = (props: MapCornerType) => {
  const map = useMap();
  const { moveView, setMoveView, setNorthWest, setSouthEast } = props;

  const updateBounds = () => {
    const bounds = map.getBounds();
    console.log(bounds.getNorthWest(), bounds.getSouthEast());
    setNorthWest(bounds.getNorthWest());
    setSouthEast(bounds.getSouthEast());
    setMoveView(false);
  };

  useEffect(() => {
    updateBounds();
  }, []);

  return (
    <>
      {moveView && (
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
