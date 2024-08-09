import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import SearchClearButton from './search-clear-button';
import SearchForm from './search-form';
import IconComponent from '@/components/ui/icon';
import { useRef } from 'react';

const SearchComponent = () => {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleValueReset = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className='relative flex justify-between gap-3 p-4'>
      <Button variant='ghost' size='icon' onClick={() => navigate('/')}>
        <IconComponent name='chevronLeft' />
      </Button>
      <SearchForm ref={inputRef} />
      <SearchClearButton onClear={handleValueReset} />
    </div>
  );
};

export default SearchComponent;
