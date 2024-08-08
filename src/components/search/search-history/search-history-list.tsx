import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import React from 'react';

type SearchHistoryProps = {
  list: { id: number; name: string }[];
};

const SearchHistoryList = (props: SearchHistoryProps) => {
  const { list } = props;
  return (
    <ul>
      {list.map((item) => (
        <React.Fragment key={item.id}>
          <li className='flex items-center gap-3 px-4 py-2'>
            <IconComponent name='mapPin' color='text-gray-6' />
            <span className='flex-1 text-14M'>{item.name}</span>
            <Button variant='ghost' size='icon'>
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
