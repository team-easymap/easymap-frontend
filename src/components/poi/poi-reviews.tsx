import ReviewComponent from './review/review';

const POIReviews = () => {
  return (
    <section className='flex flex-col gap-3 p-4'>
      <h2 className='text-16M'>방문자 후기 · 3개</h2>
      <ul className='flex flex-col gap-3'>
        <ReviewComponent />
        <ReviewComponent />
        <ReviewComponent />
      </ul>
    </section>
  );
};

export default POIReviews;
