import { createInstantPOI } from '@/api/poi';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { LatLngLiteral } from 'leaflet';

export const useInstantPOI = (latlng: LatLngLiteral) => {
  const { data } = useSuspenseQuery<{ poi_id: number }, AxiosError>({
    queryKey: ['poi', 'instant'],
    queryFn: () => createInstantPOI(latlng)
  });

  return data.poi_id;
};
