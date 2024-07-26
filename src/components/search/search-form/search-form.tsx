import { Input } from '@/components/ui/input';

const SearchForm = () => {
  return (
    <form className='flex-1'>
      <Input className='border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' />
    </form>
  );
};

export default SearchForm;
