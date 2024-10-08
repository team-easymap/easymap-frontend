import Character from '@/assets/Character.svg';
import KaKaoIcon from '@/assets/KaKaoIcon.svg';
import GoogleIcon from '@/assets/GoogleIcon.png';
import AppleIcon from '@/assets/AppleIcon.svg';
import { postSignIn } from '@/api/signIn';

const login = () => {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-white'>
      <div>
        <img src={Character} />
      </div>
      <p className='my-[32px] text-24B leading-[20%]'>
        Title Text Area - Max 2 Line
      </p>

      {/* google,kakao,apple 로그인 버튼 div */}
      <div className='space-y-[12px]'>
        <button
          id='kakao-login-btn'
          className='flex h-[48px] w-[343px] items-center justify-center rounded-[10px] bg-[#FFE300] text-16M font-semibold'
          onClick={() => postSignIn('kakao')}>
          <img src={KaKaoIcon} />
          <span>카카오로 시작하기</span>
        </button>
        <button
          id='kakao-login-btn'
          className='flex h-[48px] w-[343px] items-center justify-center rounded-[10px] border border-[1px] border-[#EEEEEE] text-16M font-semibold'
          onClick={() => postSignIn('google')}>
          <img src={GoogleIcon} />
          <span>Google로 시작하기</span>
        </button>
        <button
          id='kakao-login-btn'
          className='flex h-[48px] w-[343px] items-center justify-center rounded-[10px] bg-[#212121] text-16M font-semibold text-[#FFFFFF]'>
          <img src={AppleIcon} />
          <span>Apple로 시작하기</span>
        </button>
      </div>
    </main>
  );
};

export default login;
