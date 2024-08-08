import { useMemo, useCallback } from 'react';
import SmileIcon from '@/assets/icons/smile.svg';
import { TileLayer, Marker, useMap } from 'react-leaflet';
import * as L from 'leaflet';
import { useLocationStore } from '@/store/location';
import { useEffect } from 'react';

type MainMapProps = {
  children?: React.ReactNode;
};

const MainMap = (props: MainMapProps) => {
  const key = import.meta.env.VITE_VWORLD_API_KEY;
  const url = import.meta.env.VITE_VWORLD_API_URL;

  const map = useMap();

  const myLocation = useLocationStore((state) => state.myLocation);
  const setMyLocation = useLocationStore((state) => state.setMyLocation);

  const handleLocationFound = useCallback(
    (e: L.LocationEvent) => {
      const latlng = e.latlng as L.LatLng;
      setMyLocation(latlng);

      // 컴포넌트가 처음 마운트될 때만 지도의 중심을 현재 위치로 설정
      if (myLocation === null) {
        map.setView(latlng, map.getZoom(), { animate: true });
      }
    },
    [map, setMyLocation, myLocation]
  );

  // handleLocationError 함수 메모이제이션
  const handleLocationError = useCallback((e: L.LeafletEvent) => {
    alert('Location error: ' + (e as any).message);
  }, []);

  useEffect(() => {
    map
      .locate({
        watch: true,
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 2000
      })
      .on('locationfound', handleLocationFound)
      .on('locationerror', handleLocationError);

    return () => {
      map.off('locationfound', handleLocationFound);
      map.off('locationerror', handleLocationError);
      map.stopLocate();
    };
  }, [map, handleLocationFound, handleLocationError]);

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

  //이 때 빈화면은 로딩으로 대체
  if (myLocation) {
    return (
      <>
        <TileLayer
          url={`${url}/req/wmts/1.0.0/${key}/Base/{z}/{y}/{x}.png`}
          attribution="&copy; <a href='https://vworld.kr'>VWorld</a> contributors"
          className='h-full w-full'
          maxZoom={20}
          maxNativeZoom={19}
        />
        {myLocation && <Marker icon={DefaultIcon} position={myLocation} />}
        {props.children}
      </>
    );
  } else {
    return <div>loading</div>;
  }
};

export default MainMap;
