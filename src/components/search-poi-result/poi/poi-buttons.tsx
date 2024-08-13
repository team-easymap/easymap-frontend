import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';

type SearchPOIResultButtonsProps = {
  isPOI: boolean;
};

const SearchPOIResultButtons = (props: SearchPOIResultButtonsProps) => {
  const { isPOI } = props;

  const buttons = [
    { icon: 'edit', value: '후기 등록', onClick: () => {} },
    { icon: 'share', value: '공유하기', onClick: () => {} },
    { icon: 'map', value: '길 찾기', onClick: () => {} },
    { icon: 'warning', value: '수정 요청', onClick: () => {} }
  ].slice(isPOI ? 0 : 1, 4) as {
    icon: 'edit' | 'share' | 'map' | 'warning';
    value: string;
    onClick: () => void;
  }[];

  return (
    <ul className='flex justify-between gap-2 m-4'>
      {buttons.map((button) => (
        <li key={button.icon}>
          <Button
            variant='ghost'
            className='flex h-fit w-20 flex-col items-center px-2.5 py-2 text-14M'>
            <IconComponent name={button.icon} />
            {button.value}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SearchPOIResultButtons;
