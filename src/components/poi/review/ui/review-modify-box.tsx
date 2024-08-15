type PoiReviewProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const PoiReviewBox = (props: PoiReviewProps) => {
  const { title, subtitle, children } = props;

  return (
    <div className='w-full border-y-4 border-gray-100 p-4'>
      <span className='text-16M'>{title} </span>

      {subtitle && (
        <>
          <br /> <span className='text-14R text-gray-6'>{subtitle}</span>{' '}
        </>
      )}
      {children}
    </div>
  );
};

export default PoiReviewBox;
