import { Separator } from '@/components/ui/separator';
import POIListTab from './poi-list-tab';
import POIListItem from './poi-item';
import { mockPOI } from '@/mocks/poi';
import { useBottomSheet } from '@/hooks/common/useBottomSheet';
import { useNavigate } from 'react-router-dom';

const POIList = () => {
  const naviagte = useNavigate();
  const { BottomSheet } = useBottomSheet(80, () => naviagte('/'));

  return (
    <BottomSheet>
      <Separator className='my-2 block h-1 w-8 rounded-[2px]' />
      <h2 className='p-1.5 text-20B'>현재 지도 범위 내 주요 장소</h2>
      <POIListTab />
      <ul
        className={`grid h-[calc(100%-13rem)] w-full grid-cols-2 gap-4 overflow-y-auto p-4`}>
        {Array(16)
          .fill(mockPOI)
          .map((poi, idx) => (
            <POIListItem key={`${poi.poi_id}-${idx}`} {...poi} />
          ))}
      </ul>
    </BottomSheet>
  );
};

export default POIList;
