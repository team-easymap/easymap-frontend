import { getPOI } from '@/api/poi';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetPOI = (id: number) => {
  const { data } = useSuspenseQuery({
    queryKey: ['poi', id],
    queryFn: () => getPOI(id)
  });

  console.log(data);
};
