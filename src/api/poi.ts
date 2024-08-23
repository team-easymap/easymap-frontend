import { type LatLngLiteral } from 'leaflet';
import { axiosInstance } from './axiosInstance';

const poiPath = {
  list: 'api/v1/poi/list',
  category: 'api/v1/poi/categorys',
  instant: 'api/v1/poi/instantpoi',
  add: 'api/v1/poi'
} as const;

type InstantPOI = { poi_id: number };

export const createInstantPOI = async (latlng: LatLngLiteral) => {
  const { data } = await axiosInstance.post<InstantPOI>(poiPath.instant, {
    place: latlng
  });

  return data;
};
