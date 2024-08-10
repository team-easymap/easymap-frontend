import SearchRotateButton from './rotate-button';
import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchRoutesForm from './search-routes-form';
import { useEffect } from 'react';
import { SearchRoutesValueType } from '@/pages/search-routes';

type SearchRoutesProps = {
  searchRoutesValue: SearchRoutesValueType;
  handleSearchRoutesValue: (value: SearchRoutesValueType) => void;
};

const SearchRoutes = (props: SearchRoutesProps) => {
  const { searchRoutesValue, handleSearchRoutesValue } = props;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      handleSearchRoutesValue({ ...searchRoutesValue, ...location.state });
    }
  }, [location.state]);

  const handleRotate = () => {
    const rotated = {
      ...searchRoutesValue,
      start: searchRoutesValue.end,
      end: searchRoutesValue.start
    };
    handleSearchRoutesValue(rotated);
  };

  return (
    <div className='flex gap-3 px-3 py-4'>
      <SearchRotateButton handleRotate={handleRotate} />
      <SearchRoutesForm value={searchRoutesValue} />
      <Button
        variant='ghost'
        size='icon'
        onClick={() => {
          handleSearchRoutesValue({});
          navigate('/');
        }}>
        <IconComponent name='close' />
      </Button>
    </div>
  );
};

export default SearchRoutes;
