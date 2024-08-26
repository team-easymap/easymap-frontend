import { getCategories } from '@/api/poi';
import { useQuery } from '@tanstack/react-query';

export const useGetCategories = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  });

  return data;
};
