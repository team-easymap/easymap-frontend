import { getCoordByAddr } from '@/api/search';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { type LatLngLiteral } from 'leaflet';

export const useCoords = (address: string) => {
  const { data } = useSuspenseQuery<LatLngLiteral, AxiosError>({
    queryKey: ['search', 'coords'],
    queryFn: () => getCoordByAddr(address)
  });

  return data;
};
