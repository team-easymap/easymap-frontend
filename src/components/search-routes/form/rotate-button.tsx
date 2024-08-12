import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';

type SearchRotateButtonProps = {
  handleRotate: () => void;
};

const SearchRotateButton = (props: SearchRotateButtonProps) => {
  const { handleRotate } = props;
  return (
    <Button variant='ghost' size='icon' onClick={handleRotate}>
      <IconComponent name='arrowUpDown' />
    </Button>
  );
};

export default SearchRotateButton;
