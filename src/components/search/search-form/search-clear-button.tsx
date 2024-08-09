import IconComponent from '@/components/ui/icon';
import { Button } from '../../ui/button';

type SearchClearButtonProps = {
  onClear: () => void;
};

const SearchClearButton = (props: SearchClearButtonProps) => {
  const { onClear } = props;
  return (
    <Button
      variant='ghost'
      size='icon'
      className='absolute right-4'
      onClick={onClear}>
      <IconComponent name='close' />
    </Button>
  );
};

export default SearchClearButton;
