import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { SearchLocateValueType } from '@/pages/search';
import * as React from 'react';

type SearchHistoryProps = {
  list: SearchLocateValueType[];
  handleValueDelete: (id: number | string) => void;
  handleValueSelect: (item: SearchLocateValueType) => void;
};

const SearchHistoryList = (props: SearchHistoryProps) => {
  const { list, handleValueDelete, handleValueSelect } = props;

  return (
    <ul className='overflow-y-auto'>
      {[...list].reverse().map((item) => (
        <React.Fragment key={item.id}>
          <li
            className='flex cursor-pointer items-center gap-3 px-4 py-2'
            onClick={() => handleValueSelect(item)}>
            <IconComponent name='search' color='text-gray-6' />
            <span className='flex-1 text-14M'>{item.name}</span>
            <Button
              variant='ghost'
              size='icon'
              onClick={(e) => {
                e.stopPropagation();
                handleValueDelete(item.id);
              }}>
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
