import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const url = "/api/v1/map/pois"

type LTProps = {
    lt_lat: number;
    lt_lon: number
}
type RBProps = {
    rb_lat: number;
    rb_lon: number;
}
type QueryParmas = {
    BBOX: [LTProps, RBProps];
}

type PoiData = {
    poi_id: number;      // POI ID
    poi_name: string;    // POI 이름
    type: string;       // POI 타입 (obstacle 또는 place)
    lat: number;         // 위도
    lng: number;         // 경도
};

type ApiResponse = {
    code: string;        // 응답 코드 (예: "SU")
    message: string;     // 응답 메시지 (예: "Success")
    data: PoiData[];     // POI 데이터 배열
};
function getViewPoi(bbox: QueryParmas): Promise<AxiosResponse<ApiResponse>> {
    return axios.get(url, {
        params: {
            bbox: bbox
        }
    }).then((response) => response.data)
}

export function useGetViewPoi(bbox: QueryParmas) {
    return useQuery({
        queryKey: ['v1/map/pois', bbox],
        queryFn: () => getViewPoi(bbox)
    })
}