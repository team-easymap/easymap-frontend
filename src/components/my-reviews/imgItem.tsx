type ImgItemProps = {
  // 이미지 주소
  imgUrl: string;
};

const ImgItem: React.FC<ImgItemProps> = ({ imgUrl }) => {
  return (
    <li className='h-[80px] min-w-[128px] rounded-[4px] bg-blue-200'>
      <img src={imgUrl} />
    </li>
  );
};

export default ImgItem;
