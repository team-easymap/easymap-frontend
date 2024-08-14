import { CommonButton } from '../common/commonButton';

const tagList = [
  '식음료',
  '생활시설',
  '장애인용 화장실 ',
  '휠체어 이동시설',
  '장애물'
];

const TagComponent = () => {
  return (
    <div className='mb-5 box-border flex w-full gap-1 overflow-x-scroll'>
      {tagList.map((tag, index) => (
        <CommonButton
          use='text'
          color='white'
          radius='large'
          key={index}
          onClick={() => {
            console.log('검색 값을 가지고 검색 페이지로 이동');
          }}>
          {' '}
          {tag}
        </CommonButton>
      ))}
    </div>
  );
};

export default TagComponent;
