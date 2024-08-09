import SmileIcon from '@/assets/icons/smile.svg';
import { useLocationStore } from '@/store/location';
import { Marker } from 'react-leaflet';
import { useMemo } from 'react';
import * as L from 'leaflet';
const MyMarker = () => {
  const DefaultIcon = useMemo(
    () =>
      L.icon({
        iconUrl: SmileIcon,
        iconSize: [30, 30],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
      }),
    []
  );

  const myLoaction = useLocationStore((state) => state.myLocation);

  if (myLoaction) {
    return <Marker position={myLoaction} icon={DefaultIcon} />;
  } else {
    return null;
  }
};

export default MyMarker;
