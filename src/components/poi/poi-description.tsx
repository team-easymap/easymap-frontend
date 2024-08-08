import ChipComponent from '../ui/chip';
import IconComponent from '../ui/icon';

const POIDescription = () => {
  return (
    <div className='flex justify-between p-4'>
      <section className='flex flex-col gap-1 px-0.5'>
        <h2 className='text-18M'>땡땡 월드</h2>
        <div className='flex items-center gap-0.5'>
          <span>5.0</span>
          <ul className='flex'>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
          </ul>
          <span className='text-12R text-gray-6'>리뷰 38</span>
        </div>
        <p>서울시 강남구 강남대로 145 - 13</p>
      </section>
      <div>
        <ChipComponent>~Text~</ChipComponent>
      </div>
    </div>
  );
};

export default POIDescription;
