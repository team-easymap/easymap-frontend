import { Separator } from '@/components/ui/separator';
import POIListTab from './poi-list-tab';
import POIListItem from './poi-item';
import { mockPOI } from '@/mocks/poi';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CATEGORY_LIST } from '@/const/category';
import { POI } from '@/types/pois';

export type CategoryType = (typeof CATEGORY_LIST)[number];

const POIList = () => {
  const naviagte = useNavigate();
  const { BottomSheet } = useBottomSheet(80, () => naviagte('/'));
  const [activeTab, setActiveTab] = useState<CategoryType>('전체');
  const [categoryData, setCategoryData] = useState<POI[]>([mockPOI]);

  useEffect(() => {
    const firstIndex = Math.floor(Math.random() * 16);
    const secondIndex = Math.floor(Math.random() * 16);
    const index =
      firstIndex > secondIndex
        ? [secondIndex, firstIndex]
        : [firstIndex, secondIndex];
    setCategoryData(Array(16).fill(mockPOI).slice(index[0], index[1]));
  }, [activeTab]);

  return (
    <BottomSheet>
      <Separator className='my-2 block h-1 w-8 rounded-[2px]' />
      <h2 className='p-1.5 text-20B'>현재 지도 범위 내 주요 장소</h2>
      <POIListTab
        handleTabClick={(category: CategoryType) => setActiveTab(category)}
        activeTab={activeTab}
      />
      <ul
        className={`grid h-[calc(100%-13rem)] w-full auto-rows-min grid-cols-2 gap-4 overflow-y-auto scroll-hide p-4`}>
        {categoryData.map((poi, idx) => (
          <POIListItem key={`${poi.poi_id}-${idx}`} {...poi} />
        ))}
      </ul>
    </BottomSheet>
  );
};

export default POIList;
