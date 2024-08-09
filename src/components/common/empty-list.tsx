import { Button } from '../ui/button';
import Warning from '@/assets/warning-lg.svg?react';

type EmptyListComponentProps = {
  message: string | React.ReactNode;
  action: string;
  onClick: () => void;
};

const EmptyListComponent = (props: EmptyListComponentProps) => {
  const { message, action, onClick } = props;
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-4'>
      <Warning />
      <p className='text-center text-18M'>{message}</p>
      <Button onClick={onClick} className='bg-black'>
        {action}
      </Button>
    </div>
  );
};

export default EmptyListComponent;
