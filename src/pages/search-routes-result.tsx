import { CommonButton } from '@/components/common/commonButton';
import SearchRoutesResultMap from '@/components/search-routes-result/map';
import IconComponent from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const SearchRoutesResultPage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <SearchRoutesResultMap />
      <CommonButton
        use='icon'
        className='absolute left-4 top-4 z-[9000]'
        color='white'
        radius='large'
        onClick={() => navigate(-1)}>
        <IconComponent name='arrowLeft' />
      </CommonButton>
      <CommonButton
        use='icon'
        className='absolute right-4 top-4 z-[9000]'
        color='white'
        radius='large'
        onClick={() => navigate('/')}>
        <IconComponent name='mapPin' />
      </CommonButton>
    </main>
  );
};

export default SearchRoutesResultPage;
