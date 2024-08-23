import { getCoordByAddr } from '@/api/search';
import { useQuery } from '@tanstack/react-query';

export const useCoords = (address: string) => {
  const { data } = useQuery({
    enabled: !!address,
    queryKey: ['search', 'coords', address],
    queryFn: () => getCoordByAddr(address)
  });

  return data;
};
