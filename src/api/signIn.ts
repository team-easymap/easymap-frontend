type OauthType = 'kakao' | 'google';

export const postSignIn = (type: OauthType) => {
  const url = import.meta.env.VITE_BASE_URL + `oauth2/authorization/${type}`;
  window.location.href = url;
};
