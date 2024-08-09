import SmileIcon from '@/assets/icons/smile.svg';
import MapPinIcon from '@/assets/icons/map-pin.svg';

import { Marker } from 'react-leaflet';
import { useMemo } from 'react';
import * as L from 'leaflet';

type Markertype = {
  name: keyof typeof icons;
  location: L.LatLng;
};

const icons = {
  smile: SmileIcon,
  mappin: MapPinIcon
} as const;
//추후 추가

const MapMarker = (props: Markertype) => {
  const { name, location } = props;
  const Icon = icons[name];

  const DefaultIcon = useMemo(
    () =>
      L.icon({
        iconUrl: Icon,
        iconSize: [30, 30]
      }),
    []
  );

  return <Marker position={location} icon={DefaultIcon} />;
};

export default MapMarker;
