import { getSearchList } from '@/api/search';
import { SearchResult } from '@/types/pois';
import { useSuspenseQuery } from '@tanstack/react-query';

import type { AxiosError } from 'axios';

export const useSearchList = (keyword: string) => {
  const data = useSuspenseQuery<SearchResult[], AxiosError>({
    queryKey: ['search', keyword],
    queryFn: () => getSearchList({ keyword })
  });

  return { data };
};
