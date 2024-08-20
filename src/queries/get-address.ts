import axios, { AxiosResponse } from "axios"
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type LatLngProps = {
    latitude: number;
    longitude: number;
}
type AddressProps = {
    zipcode: number;
    parcel: string;
    road: string;
}
type ResponseApi = {
    code: string;
    message: string;
    data: AddressProps
}
const url = "/api/v1/search/address"

function getAddress({ latitude, longitude }: LatLngProps): Promise<AxiosResponse<ResponseApi>> {
    return axios.get(url, {
        params:
        {
            latitude, longitude
        }
    }).then((response) => response.data);
}

export function useGetAddress({ latitude, longitude }: LatLngProps): UseQueryResult<ResponseApi> {
    return useQuery({
        queryKey: ["v1/search/address", { latitude, longitude }],
        queryFn: () => {
            getAddress({ latitude, longitude });
        }
    })
}