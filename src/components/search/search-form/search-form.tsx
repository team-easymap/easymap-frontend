import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/common/useDebounce';
import { forwardRef, useEffect, useState } from 'react';

const SearchForm = forwardRef<HTMLInputElement>((props, ref) => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return (
    <form className='flex-1'>
      <Input
        ref={ref}
        className='border-gray-3'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
});

export default SearchForm;
