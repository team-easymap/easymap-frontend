import { getPOI } from '@/api/poi';
import { useQuery } from '@tanstack/react-query';

export const useGetPOI = (id: number, isPOI: boolean) => {
  const { data, isSuccess } = useQuery({
    enabled: isPOI,
    queryKey: ['poi', id],
    queryFn: () => getPOI(id)
  });

  if (isSuccess) {
    return data;
  }
};
