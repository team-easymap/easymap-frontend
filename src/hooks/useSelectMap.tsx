import { LeafletMouseEvent } from 'leaflet';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type POIMarker = {
  poi_id: number;
  lat: number;
  lng: number;
};

export const useSelectMap = () => {
  const navigate = useNavigate();

  const handleMarkerClick = useCallback(
    (marker: POIMarker) => {
      const { poi_id } = marker;
      navigate(`/search/poi/${poi_id}`, { state: { selected: true } });
    },
    [navigate]
  );

  const handleMapClick = useCallback(
    (evt: LeafletMouseEvent) => {
      const { lat, lng } = evt.latlng;
      const id = `lat?${lat}&${lng}?${lng}`;
      navigate(`/search/poi/${id}`, {
        state: {
          poi: { lat, lng, id, name: '선택한 좌표 주소' },
          selected: true
        }
      });
    },
    [navigate]
  );

  return { handleMapClick, handleMarkerClick };
};
