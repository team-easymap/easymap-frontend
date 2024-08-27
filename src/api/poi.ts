import { type LatLngLiteral } from 'leaflet';
import { axiosInstance } from './axiosInstance';
import { Category, POI } from '@/types/pois';

const poiPath = {
  list: 'api/v1/poi/list',
  category: 'api/v1/poi/categorys',
  instant: 'api/v1/poi/instantpoi',
  add: 'api/v1/poi'
} as const;

// instant POI 생성
type InstantPOI = { poi_id: number };

export const createInstantPOI = async (latlng: LatLngLiteral) => {
  const { data } = await axiosInstance.post<InstantPOI>(poiPath.instant, {
    place: latlng
  });

  return data;
};

// POI 카테고리 가져오기
export const getCategories = async () => {
  const { data } = await axiosInstance.get<{
    category_response_dtolist: Category[];
  }>(poiPath.category);
  return data;
};

// POI 생성
export const createPOI = async (formData: FormData) => {
  await axiosInstance.post<{ code: string }>(poiPath.add, formData);
};

// POI 조회
export const getPOI = async (id: number) => {
  const { data } = await axiosInstance.get<POI>(`${poiPath.add}/${id}`);
  console.log(data);
  return data;
};
