import axios, { AxiosResponse } from "axios"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
// 태그 정보
interface TagResponseDTO {
    tagId: number;
    tagName: string;
    tagAccessibilityPoint: number;
}

// 세부 카테고리 정보
interface DetailedCategory {
    detailedCategoryId: number;
    detailedCategoryName: string;
}

// 카테고리 정보
interface CategoryResponseDTO {
    categoryId: number;
    categoryName: string;
    detailedCatgoryList: DetailedCategory[];
    tagResponseDTOList: TagResponseDTO[];
}

// 전체 API 응답
interface ApiResponse {
    code: string;
    message: string;
    categoryResponseDTOList: CategoryResponseDTO[];
}


const url = "/api/v1/poi/categorys"

function getCategories(): Promise<AxiosResponse<ApiResponse>> {
    return axios.get<ApiResponse>(url);
}

// 카테고리 데이터를 가져오기 위한 커스텀 훅
export function useGetCategories(): UseQueryResult<ApiResponse> {
    return useQuery({
        queryKey: ['v1/poi/categorys'],
        queryFn: () => getCategories().then(response => response.data),
    });
}