import { LeafletMouseEvent, Map } from 'leaflet';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type POIMarker = {
  poi_id: number;
  lat: number;
  lng: number;
};

export const useSelectMap = (isActive: boolean | undefined = false) => {
  const navigate = useNavigate();
  const [isSelectMode, setIsSelectMode] = useState(isActive);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mapRef = useRef<Map>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const handleSelectMode = (e: MouseEvent) => {
      e.stopPropagation();
      setIsSelectMode((prev) => !prev);
    };
    if (button) {
      button.addEventListener('click', handleSelectMode);

      return () => button.removeEventListener('click', handleSelectMode);
    }
  }, [buttonRef]);

  const handleMarkerClick = useCallback(
    (marker: POIMarker) => {
      const { poi_id } = marker;
      if (isSelectMode) {
        navigate(`/search/poi/${poi_id}`, { state: { selected: true } });
      }
    },
    [isSelectMode, navigate]
  );

  useEffect(() => {
    const map = mapRef.current;

    const handleMapClick = (evt: LeafletMouseEvent) => {
      const { lat, lng } = evt.latlng;
      const id = `lat?${lat}&lng?${lng}`;
      navigate(`/search/poi/${id}`, {
        state: {
          poi: { lat, lng, id, name: '선택한 좌표 주소' },
          selected: true
        }
      });
    };
    if (isSelectMode && map) {
      map.on('click', handleMapClick);
    }
    return () => {
      map?.off('click', handleMapClick);
    };
  }, [isSelectMode, navigate]);

  return { buttonRef, mapRef, handleMarkerClick, isSelectMode };
};
