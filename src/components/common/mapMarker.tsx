import SmileIcon from '@/assets/icons/smile.svg';
import MapPinIcon from '@/assets/icons/map-pin.svg';

import { Marker } from 'react-leaflet';
import { useMemo } from 'react';
import * as L from 'leaflet';

type LatLng = {
  lat: number;
  lng: number;
};

// Restrict name to only keys of the icons object
type IconName = keyof typeof icons;

type MapMarkerProps = {
  name: IconName; // name can only be 'smile' or 'mappin'
  location: LatLng;
};

const icons = {
  smile: SmileIcon,
  mappin: MapPinIcon
} as const;

const MapMarker = (props: MapMarkerProps) => {
  const { name, location } = props;
  const Icon = icons[name];

  const DefaultIcon = useMemo(
    () =>
      L.icon({
        iconUrl: Icon,
        iconSize: [30, 30]
      }),
    [Icon] // Include Icon in the dependency array
  );

  return <Marker position={location} icon={DefaultIcon} />;
};

export default MapMarker;
