import MainHeaderComponent from '@/components/main/header';
// import MyLocationComponent from '@/components/main/location';
import MainMap from '@/components/main/map';
import {
  useLocation,
  useNavigationType,
  useSearchParams
} from 'react-router-dom';
import POIList from '../components/main/poi-list/poi-list';
import { useEffect } from 'react';
import { useSelectMap } from '@/hooks/useSelectMap';
import SelectLocation from '@/components/common/select-location';

const MainPage = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const type = useNavigationType();
  const { buttonRef, mapRef, handleMarkerClick, isSelectMode } = useSelectMap();

  useEffect(() => {
    return () => searchParams.delete('pois');
  }, [searchParams]);

  return (
    <main className='flex w-full flex-col'>
      <MainHeaderComponent />
      <SelectLocation ref={buttonRef} isSelectMode={isSelectMode} />
      <MainMap mapRef={mapRef} handleMarkerClick={handleMarkerClick} />
      {search && type !== 'POP' && <POIList />}
    </main>
  );
};

export default MainPage;
