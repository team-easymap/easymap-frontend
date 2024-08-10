import SearchRotateButton from './rotate-button';
import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import SearchRoutesForm from './search-routes-form';
import { SearchRoutesValueType } from '@/pages/search-routes';

type SearchRoutesProps = {
  handleRoutesValue: (v: SearchRoutesValueType) => void;
  value: SearchRoutesValueType;
  myLocation: string;
};

const SearchRoutes = (props: SearchRoutesProps) => {
  const { handleRoutesValue, value, myLocation } = props;
  const navigate = useNavigate();

  const handleRotate = () => {
    const rotated = { ...value, start: value.end, end: value.start };
    handleRoutesValue(rotated);
  };

  return (
    <div className='flex gap-3 px-3 py-4'>
      <SearchRotateButton handleRotate={handleRotate} />
      <SearchRoutesForm value={value} />
      <Button
        variant='ghost'
        size='icon'
        onClick={() => {
          handleRoutesValue({
            start: { id: 0, name: `내 위치: ${myLocation}` }
          });
          navigate('/');
        }}>
        <IconComponent name='close' />
      </Button>
    </div>
  );
};

export default SearchRoutes;
