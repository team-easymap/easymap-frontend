import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useMutation } from "@tanstack/react-query"
interface Tag {
    tag_id: number;
}

interface PoiData {
    poi_name: string;
    poi_address: string;
    detailed_catetory_id: number;
    lat: number;
    lng: number;
    poi_code: string;
    tag_list: Tag[];
    images: File[];
}


type ApiResponse = {
    code: string;
    message: string;

}
const config: AxiosRequestConfig = {
    headers: {
        'Content-type': 'multipart/form-data'
    }
}
const url = '/api/v1/poi/add'
function AddPoi(formData: FormData): Promise<AxiosResponse<ApiResponse>> {
    return axios.post(url, formData, config);
}

export default function useAddPoi(poiData: PoiData) {
    return useMutation(
        {
            mutationFn: () => {
                const formData = new FormData();

                formData.append('poiData', new Blob([JSON.stringify(poiData)], { type: 'application/json' }));

                return AddPoi(formData);

            },
            onSuccess: (response: AxiosResponse<ApiResponse>) => {
                //재검색 및 페이지 이동
                console.log(response);
            },
            onError: () => {
                //에러시 새로고침?
            }
        }
    )
}