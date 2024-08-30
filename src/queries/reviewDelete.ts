import { axiosInstance } from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

// 후기 삭제 API 요청 함수
function reviewDelete(review_id: number) {
  return axiosInstance
    .delete(`/api/v1/user/review/${review_id}`)
    .then((response) => response.data);
}

// 회원 탈퇴 훅
export function useDeleteReview() {
  return useMutation({
    mutationFn: reviewDelete,
    onSuccess: () => {
      // 후기 삭제 성공 시 처리 로직
      alert('후기 삭제가 완료되었습니다.');
    },
    onError: (error) => {
      // 후기 삭제 실패 시 처리 로직
      alert('후기 삭제에 실패했습니다.');
      console.error(error);
    }
  });
}
