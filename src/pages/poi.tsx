import Header from '@/components/common/Header';
import POIAlly from '@/components/poi/poi-ally';
import POIButtons from '@/components/poi/poi-buttons';
import POIDescription from '@/components/poi/poi-description';
import POIImages from '@/components/poi/poi-images';
import POIReviews from '@/components/poi/poi-reviews';
import { Separator } from '@radix-ui/react-separator';
import { useNavigate } from 'react-router-dom';

const POIPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title='' prevOnClick={() => navigate('/')} />
      <main className='h-[calc(100dvh-58px)] overflow-y-auto'>
        <POIDescription />
        <POIButtons />
        <Separator className='h-2 bg-gray-1' />
        <POIImages />
        <Separator className='h-2 bg-gray-1' />
        <POIAlly />
        <Separator className='h-2 bg-gray-1' />
        <POIReviews />
      </main>
    </>
  );
};

export default POIPage;
