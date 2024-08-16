const POIListTab = () => {
  const categories = [
    '전체',
    '음식점',
    '카페',
    '장애인용 화장실',
    '휠체어 충전소',
    '공원'
  ];

  const active = '전체';
  const activeColor = (category: (typeof categories)[number]) =>
    category === active ? 'bg-primary' : 'bg-white';

  const activeText = (category: (typeof categories)[number]) =>
    category === active ? 'text-primary' : 'text-gray-6';

  return (
    <ul className='flex w-full gap-4 px-4 overflow-x-auto text-14M'>
      {categories.map((category) => (
        <li key={category}>
          <div
            className={`whitespace-nowrap px-1 pb-1.5 pt-2.5 ${activeText(category)}`}>
            {category}
          </div>
          <div
            className={`h-[3px] w-full rounded-[2px] ${activeColor(category)}`}></div>
        </li>
      ))}
    </ul>
  );
};

export default POIListTab;
