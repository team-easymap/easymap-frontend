import axios, { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query'
interface Tag {
    tag_id: number;
    tag_name: string;
}

interface Image {
    img_id: number;
    s3_url: string;
}

interface DetailedCategory {
    detailed_category_id: number;
    detailed_category_name: string;
}

interface Poi {
    poi_id: number;
    poi_name: string;
    poi_address: string;
    user_id: number;
    poi_point_avg: number;
    poi_point_count: number;
    poi_point_ally: number;
    lat: number;
    lng: number;
    category_id: number;
    category_name: string;
    detailed_category_dto: DetailedCategory;
    tags_on_poi: Tag[];
    imgs_on_poi: Image[];
}

export interface ApiResponse {
    code: string;
    message: string;
    data: Poi;
}

interface ErrorDetail {
    code: string;
    message: string;
}

export type ErrorType<T> = {
    status: number;           // HTTP 상태 코드 (예: 404, 500 등)
    statusText: string;       // HTTP 상태 텍스트 (예: "Not Found", "Internal Server Error" 등)
    data?: T;                 // 에러와 관련된 추가 데이터 (선택적)
    errors?: ErrorDetail[];   // 상세 에러 메시지 배열 (선택적)
};
export const url = "/api/v1/poi";

function getDetailPoi(poi_id: number): Promise<AxiosResponse<ApiResponse>> {
    return axios.get(url, {
        params: {
            poi_id
        }
    }).then((response) => response.data);
}

export default function useDetailPoi(poi_id: number): UseQueryResult<ApiResponse> {
    return useQuery({
        queryKey: ['v1/poi', poi_id],
        queryFn: () => getDetailPoi(poi_id)
    })
}