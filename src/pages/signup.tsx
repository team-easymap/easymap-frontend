import Header from '@/components/common/Header';
import TermsModal from '@/components/signup/TermsModal';
import { Outlet } from 'react-router-dom';

const signup = () => {
  return (
    <div>
      <Header title='프로필 등록' prevOnClick={() => console.log('')} />
      <Outlet />
      <TermsModal />
    </div>
  );
};

export default signup;
