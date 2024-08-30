import Header from '@/components/common/Header';
import POIAlly from '@/components/poi/poi-ally';
import POIButtons from '@/components/poi/poi-buttons';
import POIInfo from '@/components/poi/poi-description';
import POIImages from '@/components/poi/poi-images';
import POIReviews from '@/components/poi/poi-reviews';
import { useGetPOI } from '@/hooks/queries/useGetPOI';
import { Separator } from '@radix-ui/react-separator';
import { useNavigate, useParams } from 'react-router-dom';

const POIPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useGetPOI(+id!, !!id);

  if (!data) return null;

  return (
    <>
      <Header title='' prevOnClick={() => navigate(-1)} />
      <main className='scroll-hide h-[calc(100dvh-58px)] overflow-y-auto'>
        <POIInfo {...data} />
        <POIButtons data={{ ...data, lat: 0, lng: 0 }} />

        <Separator className='my-4 h-2 bg-gray-1' />

        <section>
          <h2 className='mb-2 px-4 text-16M'>
            사진 · {data.imgs_on_poi.length}장
          </h2>
          <POIImages images={data.imgs_on_poi} />
        </section>

        <Separator className='my-4 h-2 bg-gray-1' />

        <section>
          <h2 className='mb-3 px-4 text-16M'>
            접근성 · {data.poi_point_ally}점
          </h2>
          <POIAlly tags={data.tags_on_poi} />
        </section>

        <Separator className='my-4 h-2 bg-gray-1' />

        <POIReviews />
      </main>
    </>
  );
};

export default POIPage;
