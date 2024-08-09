import POIListCategory from '@/components/poi-list/category';
import POIListComponent from '@/components/poi-list/poi-list';
import { Separator } from '@/components/ui/separator';

const POIListPage = () => {
  return (
    <main className='mt-12 flex h-[calc(100dvh-128px)] w-full flex-col items-center overflow-y-auto'>
      <Separator className='my-2 block h-1 w-8 rounded-[2px]' />
      <h2 className='my-2 p-1.5 text-20B'>현재 지도 범위 내 주요 장소</h2>
      <POIListCategory />
      <POIListComponent />
    </main>
  );
};

export default POIListPage;
