import { CommonButton } from '@/components/common/commonButton';
import SelectLocation from '@/components/common/select-location';
import SearchRoutesResultMap from '@/components/search-routes-result/map';
import IconComponent from '@/components/ui/icon';
import { useSelectMap } from '@/hooks/useSelectMap';
import { useNavigate } from 'react-router-dom';

const SearchRoutesResultPage = () => {
  const navigate = useNavigate();
  const { buttonRef, mapRef } = useSelectMap();
  return (
    <main>
      <SearchRoutesResultMap ref={mapRef} />
      <CommonButton
        use='icon'
        className='absolute left-4 top-4 z-[9000]'
        color='white'
        radius='large'
        onClick={() => navigate(-1)}>
        <IconComponent name='arrowLeft' />
      </CommonButton>
      <SelectLocation ref={buttonRef} className='top-4 mt-0' />
    </main>
  );
};

export default SearchRoutesResultPage;
