type PoiBoxProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const PoiInputBox = (props: PoiBoxProps) => {
  const { title, subtitle, children } = props;

  return (
    <div className='w-full border-y-4 border-gray-100 p-4'>
      <span className='text-16M'>{title} </span>
      <br />
      <span className='text-14R text-gray-6'>{subtitle}</span>
      {children}
    </div>
  );
};

export default PoiInputBox;
