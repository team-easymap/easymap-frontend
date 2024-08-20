import Header from '@/components/common/Header';
import POIAlly from '@/components/poi/poi-ally';
import POIButtons from '@/components/poi/poi-buttons';
import POIInfo from '@/components/poi/poi-description';
import POIImages from '@/components/poi/poi-images';
import POIReviews from '@/components/poi/poi-reviews';
import { mockPOI } from '@/mocks/poi';
import { Separator } from '@radix-ui/react-separator';
import { useNavigate } from 'react-router-dom';

const POIPage = () => {
  const navigate = useNavigate();
  const data = mockPOI;

  return (
    <>
      <Header title='' prevOnClick={() => navigate(-1)} />
      <main className='h-[calc(100dvh-58px)] overflow-y-auto scroll-hide'>
        <POIInfo {...data} />
        <POIButtons data={data} />

        <Separator className='my-4 h-2 bg-gray-1' />

        <section>
          <h2 className='mb-2 px-4 text-16M'>사진 · 5장</h2>
          <POIImages images={data.imgs_on_poi} />
        </section>

        <Separator className='my-4 h-2 bg-gray-1' />

        <section>
          <h2 className='mb-3 px-4 text-16M'>접근성 · 3점</h2>
          <POIAlly tags={data.tags_on_poi} />
        </section>

        <Separator className='my-4 h-2 bg-gray-1' />

        <POIReviews />
      </main>
    </>
  );
};

export default POIPage;
