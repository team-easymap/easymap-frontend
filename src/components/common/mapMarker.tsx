import SmileIcon from '@/assets/icons/smile.svg';
import MapPinIcon from '@/assets/icons/map-pin.svg';
import MyPlaceIcon from '@/assets/icons/My_Place.svg';
import { Marker } from 'react-leaflet';
import { useMemo } from 'react';
import * as L from 'leaflet';

type LatLng = {
  lat: number;
  lng: number;
};

type IconName = keyof typeof icons;

type MapMarkerProps = {
  name: IconName;
  location: LatLng;
  className?: string;
  rotation?: number; // 회전 각도 (degrees)
};

const icons = {
  smile: SmileIcon,
  mappin: MapPinIcon,
  myplace: MyPlaceIcon
} as const;

const MapMarker = (props: MapMarkerProps) => {
  const { name, location, className, rotation = 0 } = props;
  const Icon = icons[name];

  const customIcon = useMemo(() => {
    return L.divIcon({
      className: `${className}`, // Tailwind CSS 클래스 적용
      html: `
        <img 
          src="${Icon}" 
          alt="${name}" 
          style="transform: rotate(${rotation}deg);" 
        />
      `, // SVG 회전 적용
      iconSize: [30, 30] // 아이콘 크기 설정
    });
  }, [Icon, className, rotation]);

  return <Marker position={location} icon={customIcon} />;
};

export default MapMarker;
