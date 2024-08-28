import { createInstantPOI } from '@/api/poi';
import { SearchRoutesValueType } from '@/pages/search-routes';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { LatLngLiteral } from 'leaflet';
import { useEffect, useState } from 'react';

export const useInstantPOI = (latlng: LatLngLiteral) => {
  const { data } = useSuspenseQuery<{ poi_id: number }, AxiosError>({
    queryKey: ['poi', 'instant', latlng.lat, latlng.lng],
    queryFn:
      latlng.lat && latlng.lng
        ? () => createInstantPOI(latlng)
        : () => ({ poi_id: 0 })
  });

  return data.poi_id;
};

export const useSearchRoutes = () => {
  const init = { lat: 0, lng: 0, type: '' };
  const [route, setRoute] = useState({ start: init, end: init });
  const startPOIId = useInstantPOI(route.start);
  const endPOIId = useInstantPOI(route.end);
  const [POIIds, setPOIIds] = useState({ start: 0, end: 0 });

  const getPOIId = (
    routes: SearchRoutesValueType['start'] | SearchRoutesValueType['end'],
    type: 'start' | 'end'
  ) => {
    if (routes?.lat && routes.lng) {
      setRoute((prev) => ({ ...prev, [type]: routes }));
    } else {
      setPOIIds((prev) => ({ ...prev, [type]: routes?.id }));
    }
  };

  useEffect(() => {
    if (POIIds.start && POIIds.end) {
      console.log('submit');
    }
  }, [POIIds]);

  useEffect(() => {
    setPOIIds((prev) => ({ ...prev, start: startPOIId, end: endPOIId }));
  }, [startPOIId, endPOIId]);

  return { getPOIId };
};
