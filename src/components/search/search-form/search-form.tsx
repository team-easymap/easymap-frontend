import { Input } from '@/components/ui/input';

type SearchFormProps = {
  handleValueChange: (value: string) => void;
  searchValue: string;
};

const SearchForm = (props: SearchFormProps) => {
  const { handleValueChange, searchValue } = props;

  return (
    <form className='flex-1'>
      <Input
        className='border-gray-3'
        value={searchValue}
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
