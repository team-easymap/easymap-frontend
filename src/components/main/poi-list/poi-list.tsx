import { Separator } from '@/components/ui/separator';
import POIListTab from './poi-list-tab';
import POIListItem from './poi-item';
import { mockPOI } from '@/mocks/poi';

const POIList = () => {
  return (
    <main className='absolute top-16 z-[5000] flex h-[calc(100dvh-9rem)] w-full flex-col items-center gap-2 overflow-y-hidden rounded-t-lg bg-white'>
      <Separator className='my-2 block h-1 w-8 rounded-[2px]' />
      <h2 className='p-1.5 text-20B'>현재 지도 범위 내 주요 장소</h2>
      <POIListTab />
      <ul className='grid w-full h-full grid-cols-2 gap-4 p-4 overflow-y-auto'>
        {Array(16)
          .fill(mockPOI)
          .map((poi, idx) => (
            <POIListItem key={`${poi.poi_id}-${idx}`} {...poi} />
          ))}
      </ul>
    </main>
  );
};

export default POIList;
