import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { useLocationStore } from '@/store/location';

const MapMoveHandler = () => {
  const map = useMap();

  const setViewMove = useLocationStore((state) => state.setViewMove);

  useEffect(() => {
    const mapMove = () => {
      setViewMove(true);
    };
    map.addEventListener('moveend', mapMove);
    return () => {
      map.removeEventListener('moveend', mapMove);
    };
  }, []);

  return null;
};

export default MapMoveHandler;
