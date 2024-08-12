import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import SearchClearButton from './search-clear-button';
import SearchForm from './search-form';
import IconComponent from '@/components/ui/icon';

type SearchComponentProps = {
  searchValue: string;
  handleValueChange: (value: string) => void;
};

const SearchComponent = (props: SearchComponentProps) => {
  const { handleValueChange, searchValue } = props;
  const navigate = useNavigate();

  return (
    <div className='relative flex justify-between gap-3 p-4'>
      <Button variant='ghost' size='icon' onClick={() => navigate(-1)}>
        <IconComponent name='chevronLeft' />
      </Button>
      <SearchForm
        searchValue={searchValue}
        handleValueChange={handleValueChange}
      />
      <SearchClearButton onClear={() => handleValueChange('')} />
    </div>
  );
};

export default SearchComponent;
