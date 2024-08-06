import MainMap from '@/components/main/map';
import MainSearchComponent from '@/components/main/search';

import { CommonButton } from '@/components/common/commonButton';
const MainPage = () => {
  return (
    <main className='flex w-full flex-col'>
      <MainSearchComponent />
      <MainMap />
    </main>
  );
};

export default MainPage;
