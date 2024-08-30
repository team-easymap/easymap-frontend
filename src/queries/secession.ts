import { axiosInstance } from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// 회원 탈퇴 API 요청 함수
function secession() {
  return axiosInstance
    .delete(`/api/v1/user/withdraw`)
    .then((response) => response.data);
}

// 회원 탈퇴 훅
export function useDeleteSecession() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: secession,
    onSuccess: () => {
      // 회원 탈퇴 성공 시 처리 로직
      alert('회원 탈퇴가 완료되었습니다.');
      navigate('/'); // 탈퇴 후 리다이렉트
    },
    onError: (error) => {
      // 회원 탈퇴 실패 시 처리 로직
      alert('회원 탈퇴에 실패했습니다.');
      console.error(error);
    }
  });
}
