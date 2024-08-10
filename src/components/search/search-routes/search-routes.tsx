import SearchRotateButton from './rotate-button';
import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import SearchRoutesForm from './search-routes-form';
import { SearchRoutesValueType } from '@/pages/search';

type SearchRoutesProps = {
  handleRoutesValue: (v: SearchRoutesValueType) => void;
  value: SearchRoutesValueType;
};

const SearchRoutes = (props: SearchRoutesProps) => {
  const { handleRoutesValue, value } = props;
  const navigate = useNavigate();

  const handleRotate = () => {
    handleRoutesValue({ ...value, start: value.end, end: value.start });
  };

  return (
    <div className='flex gap-3 px-3 py-4'>
      <SearchRotateButton handleRotate={handleRotate} />
      <SearchRoutesForm value={value} />
      <Button
        variant='ghost'
        size='icon'
        onClick={() => {
          handleRoutesValue({});
          navigate('/');
        }}>
        <IconComponent name='close' />
      </Button>
    </div>
  );
};

export default SearchRoutes;
