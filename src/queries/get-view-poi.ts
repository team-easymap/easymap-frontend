import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/api/axiosInstance";
const url = "/api/v1/map/pois"


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


function getViewPoi(bbox: [number, number, number, number]): Promise<AxiosResponse<ApiResponse>> {
    return axiosInstance.get(url + `?bbox=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}`).then((response) => {
        console.log('API Response:', response);  // 응답 출력
        return response.data;
    });
}

export function useGetViewPoi(bbox: [number, number, number, number]) {
    const isBboxValid = bbox.every(coord => coord !== undefined);

    return useQuery({
        queryKey: ['api/v1/map/pois', bbox],
        queryFn: () => getViewPoi(bbox),
        enabled: isBboxValid,

    });
}