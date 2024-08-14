import MainHeaderComponent from '@/components/main/header';
// import MyLocationComponent from '@/components/main/location';
import MainMap from '@/components/main/map';
import {
  useLocation,
  useNavigationType,
  useSearchParams
} from 'react-router-dom';
import POIListPage from './poi-list';
import { useEffect } from 'react';

const MainPage = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const type = useNavigationType();

  useEffect(() => {
    return searchParams.delete('pois');
  }, [searchParams]);

  return (
    <main className='flex flex-col w-full'>
      <MainHeaderComponent />
      <MainMap />
      {search && type !== 'POP' && <POIListPage />}
    </main>
  );
};

export default MainPage;
