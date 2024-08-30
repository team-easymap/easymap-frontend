import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/api/axiosInstance';

// ResponseApi 타입 정의
type ResponseApi = {
  category_id: string;
  bbox: number[];
};

// 요청 파라미터 타입 정의
type GetAddressParams = {
  category_id: string;
  bbox: number[];
};

// API 요청 함수
const url = '/api/v1/poi/list';

export function getAddress({
  category_id,
  bbox
}: GetAddressParams): Promise<AxiosResponse<ResponseApi>> {
  return axiosInstance
    .post(url, {
      category_id: null,
      bbox: [0, 0, 180.0, 180.0]
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error; // 오류를 다시 던져서 호출자에게 알려줍니다.
    });
}
