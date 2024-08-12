import MainSearchComponent from './search';
import TagComponent from './tag';

const MainHeaderComponent = () => {
  return (
    <div className='absolute top-0 z-[1000] w-full p-4'>
      <MainSearchComponent />
      <TagComponent />
    </div>
  );
};
export default MainHeaderComponent;
