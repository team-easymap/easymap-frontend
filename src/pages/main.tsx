import MainHeaderComponent from '@/components/main/header';
import MyLocationComponent from '@/components/main/location';
import MainMap from '@/components/main/map';

const MainPage = () => {
  return (
    <main className='flex w-full flex-col'>
      <MainHeaderComponent />
      <MainMap />
      <MyLocationComponent />
    </main>
  );
};

export default MainPage;
