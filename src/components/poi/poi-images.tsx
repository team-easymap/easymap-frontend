const POIImages = () => {
  return (
    <section className='flex flex-col gap-2 overflow-x-auto p-4'>
      <h2 className='text-16M'>사진 · 5장</h2>
      <ul className='flex gap-2 overflow-auto'>
        <li className='h-28 w-20 flex-none rounded-sm bg-gray-3'></li>
        <li className='h-28 w-20 flex-none rounded-sm bg-gray-3'></li>
        <li className='h-28 w-20 flex-none rounded-sm bg-gray-3'></li>
        <li className='h-28 w-20 flex-none rounded-sm bg-gray-3'></li>
        <li className='h-28 w-20 flex-none rounded-sm bg-gray-3'></li>
      </ul>
    </section>
  );
};

export default POIImages;
