import { Separator } from '@/components/ui/separator';

const POIList = () => {
  return (
    <main className='absolute top-12 z-[5000] flex h-full w-full flex-col items-center overflow-y-auto rounded-t-lg bg-white'>
      <Separator className='my-2 block h-1 w-8 rounded-[2px]' />
      <h2 className='my-2 p-1.5 text-20B'>현재 지도 범위 내 주요 장소</h2>
    </main>
  );
};

export default POIList;
