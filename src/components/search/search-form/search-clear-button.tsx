import IconComponent from '@/components/ui/icon';
import { Button } from '../../ui/button';

const SearchClearButton = () => {
  return (
    <Button variant='ghost' size='icon' className='absolute right-4'>
      <IconComponent name='close' />
    </Button>
  );
};

export default SearchClearButton;
