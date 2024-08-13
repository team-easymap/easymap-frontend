import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog';
import { CommonButton } from './commonButton';

type ConfirmAlertProps = {
  type?: 'default' | 'warning';
  title: string;
  message?: string;
  cancel?: string;
  submit?: string;
  children?: React.ReactNode;
  onCancel: () => void;
  onSubmit: () => void;
};

const ConfirmAlert = (props: ConfirmAlertProps) => {
  const {
    type = 'default',
    title,
    message,
    cancel = '아니오',
    submit = '확인',
    onCancel,
    onSubmit,
    children
  } = props;

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className='z-[99999] w-80 rounded-md p-5'>
        <AlertDialogHeader className='mb-1 flex flex-col gap-1'>
          <AlertDialogTitle className='text-20B'>{title}</AlertDialogTitle>
          {message && (
            <AlertDialogDescription className='text-14M'>
              {message}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          {cancel && (
            <AlertDialogCancel asChild className='h-9'>
              <CommonButton color='white' onClick={onCancel}>
                {cancel}
              </CommonButton>
            </AlertDialogCancel>
          )}
          {submit && (
            <AlertDialogAction asChild className='h-9'>
              <CommonButton
                color={type === 'warning' ? 'red' : 'black'}
                onClick={onSubmit}>
                {submit}
              </CommonButton>
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmAlert;
