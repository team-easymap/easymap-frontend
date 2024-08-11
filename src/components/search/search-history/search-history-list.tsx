import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

type SearchHistoryProps = {
  list: { id: number; name: string }[];
  handleValueDelete: (id: number) => void;
};

const SearchHistoryList = (props: SearchHistoryProps) => {
  const { list, handleValueDelete } = props;

  return (
    <ul className='overflow-y-auto'>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          <li className='flex items-center gap-3 px-4 py-2'>
            <IconComponent name='search' color='text-gray-6' />
            <span className='flex-1 text-14M'>{item.name}</span>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => handleValueDelete(item.id)}>
              <IconComponent name='close' />
            </Button>
          </li>
          <Separator className='bg-gray-3' />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default SearchHistoryList;
