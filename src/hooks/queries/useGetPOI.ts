import { getPOI } from '@/api/poi';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetPOI = (id: number, isPOI: boolean) => {
  const { data } = useSuspenseQuery({
    queryKey: ['poi', id],
    queryFn: isPOI ? () => getPOI(id) : () => ({})
  });

  return data;
};
