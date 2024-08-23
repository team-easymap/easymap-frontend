import { SearchResult } from '@/types/pois';
import { axiosInstance } from './axiosInstance';

const path = {
  coord: 'api/v1/search/coordinate',
  address: 'api/v1/search/address',
  autoComplete: 'api/v1/search'
} as const;

type AutoCompleteSearchParams = {
  keyword: string;
};

type AutoCompleteSearchResult = {
  ads_data: SearchResult[];
  poi_data: SearchResult[];
};

export const getSearchList = async (params: AutoCompleteSearchParams) => {
  const { data } = await axiosInstance.get<AutoCompleteSearchResult>(
    path.autoComplete,
    { params }
  );
  const { ads_data, poi_data } = data;
  return [...ads_data, ...poi_data];
};
