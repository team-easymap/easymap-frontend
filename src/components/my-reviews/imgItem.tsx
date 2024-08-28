type ImgItemProps = {
  // 이미지 주소
  imgUrl: string;
};

const ImgItem: React.FC<ImgItemProps> = ({ imgUrl }) => {
  return (
    <li className='h-[80px] min-w-[128px] max-w-[128px] bg-blue-200'>
      <img src={imgUrl} className='h-[100%] w-[100%] rounded-[4px]' />
    </li>
  );
};

export default ImgItem;
