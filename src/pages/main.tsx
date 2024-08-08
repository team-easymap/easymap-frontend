import MainHeaderComponent from '@/components/main/header';
import MainMap from '@/components/main/map';

const MainPage = () => {
  return (
    <main className='flex w-full flex-col'>
      <MainHeaderComponent />
      <MainMap />
    </main>
  );
};

export default MainPage;
