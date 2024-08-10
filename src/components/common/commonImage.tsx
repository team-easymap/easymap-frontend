type ImageProps = {
  src: string;
  index: number;
  deleted?: boolean;
  handleDeleteImage?: (index: number) => void;
};

const CommonImage = (props: ImageProps) => {
  const { src, index, deleted, handleDeleteImage } = props;

  return (
    <div className='relative box-border h-[113px] w-[80px] flex-shrink-0'>
      <img className='h-full w-full rounded' src={src ? src : ``}></img>
      {deleted && handleDeleteImage && (
        <button
          onClick={() => handleDeleteImage(index)}
          className='absolute right-1 top-1 h-6 w-6 cursor-pointer text-white'>
          X
        </button>
      )}
    </div>
  );
};

export default CommonImage;
