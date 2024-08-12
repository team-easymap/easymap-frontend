import ChipComponent from '../ui/chip';

const POIAlly = () => {
  return (
    <section className='flex flex-col gap-3 p-4'>
      <h2 className='text-16M'>접근성 · 3점</h2>
      <ul className='flex flex-wrap gap-2'>
        <li>
          <ChipComponent size='sm' variant='fill'>
            출입구 경사로
          </ChipComponent>
        </li>
        <li>
          <ChipComponent size='sm' variant='fill'>
            장애인 화장실
          </ChipComponent>
        </li>
        <li>
          <ChipComponent size='sm' variant='fill'>
            직원 서빙
          </ChipComponent>
        </li>
      </ul>
    </section>
  );
};

export default POIAlly;
