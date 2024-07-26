import { Button } from '../ui/button';
import { Input } from '../ui/input';

const SearchComponent = () => {
  return (
    <div className='flex justify-between gap-3 p-4'>
      <Input placeholder='검색어를 입력해주세요.' />
      <Button>👉</Button>
    </div>
  );
};

export default SearchComponent;
