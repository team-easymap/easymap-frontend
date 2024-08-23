import { axiosInstance } from './axiosInstance';

type OauthType = 'kakao' | 'google';

export const postSignIn = async (type: OauthType) => {
  const urlPath = `oauth2/authorization/${type}`;
  const data = await axiosInstance.get(urlPath);
  if (data.status === 200) {
    window.location.href = '/';
  }
};
