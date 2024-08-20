import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useMutation } from "@tanstack/react-query"
interface Tag {
    tag_id: number;
}
interface PoiData {
    poi_name: string;
    poi_address: string;
    detailed_catetory_id: number;
    poi_code: string;
    tag_list: Tag[];
    images: File[];
}

type ApiResponse = {
    code: string;
    message: string;
}

const url = (poi_id: number) => `/api/v1/poi/${poi_id}/update/`


const config: AxiosRequestConfig = {
    headers: {
        'Content-type': 'multipart/form-data'
    }
}

function updatePoi(poi_id: number, formData: FormData): Promise<AxiosResponse<ApiResponse>> {
    return axios.patch(url(poi_id), formData, config);
}

export function useUpdatePoi(poi_id: number, poiData: PoiData) {
    return useMutation({
        mutationKey: ["v1/poi/update", poi_id],
        mutationFn: () => {
            const formData = new FormData();

            formData.append('poiData', new Blob([JSON.stringify(poiData)], { type: 'application/json' }));

            return updatePoi(poi_id, formData)
        },
        onSuccess: (response: AxiosResponse<ApiResponse>) => {
            console.log(response)
            //추가 예정
        },

        onError: () => {
            console.log("error")
        }
    })
}