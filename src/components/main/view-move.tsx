import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

type MapMoveProps = {
  setMoveFlag: (flag: boolean) => void;
};
const MapMoveHandler = (props: MapMoveProps) => {
  const { setMoveFlag } = props;
  const map = useMap();

  useEffect(() => {
    const mapMove = () => {
      setMoveFlag(true);
    };
    map.addEventListener('moveend', mapMove);
    return () => {
      map.removeEventListener('moveend', mapMove);
    };
  }, []);

  return null;
};

export default MapMoveHandler;
