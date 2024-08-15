import CommonImage from '@/components/common/commonImage';
import { useCallback } from 'react';
import { useRef } from 'react';
import IconComponent from '../ui/icon';

type ImageProps = {
  imgFile: string[];
  setImgFile: React.Dispatch<React.SetStateAction<string[]>>;
};
const ImageInput = (props: ImageProps) => {
  const { imgFile, setImgFile } = props;
  const imgRef = useRef<HTMLInputElement | null>(null);

  const saveImgFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation(); // 이벤트 버블링 방지
      const files = e.target.files;
      if (!files || !files[0]) return;

      if (imgFile.length + files.length > 10) {
        alert('최대 10개 사진만 첨부할 수 있습니다.');
        return;
      }
      const readAndPreview = (file: File) => {
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          const reader = new FileReader();
          reader.onload = () => {
            // 상태 업데이트 함수에서 이전 상태를 기반으로 새로운 상태를 설정
            setImgFile((prev) => [...prev, reader.result as string]);
          };
          reader.readAsDataURL(file);
        }
      };

      Array.from(files).forEach(readAndPreview);
    },
    [imgFile]
  );

  const handleDeleteImage = useCallback(
    (idx: number) => {
      setImgFile(imgFile.filter((_, index) => index !== idx));
    },
    [imgFile]
  );

  const handleFileUploadClick = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click(); // 파일 선택 창 열기
    }
  }, []);

  return (
    <div className='mt-2 w-full'>
      <input
        type='file'
        accept='image/*'
        id='profileImg'
        onChange={saveImgFile}
        ref={imgRef}
        multiple
        className='hidden'
      />

      <div className='m-auto my-2 box-border flex w-full gap-2 overflow-x-scroll'>
        <div
          onClick={handleFileUploadClick}
          className='flex h-[113px] w-20 flex-shrink-0 items-center justify-center bg-gray-1'>
          <IconComponent name='image' />
        </div>
        {imgFile.map((img, index) => (
          <CommonImage
            src={img}
            deleted={true}
            key={index}
            index={index}
            handleDeleteImage={handleDeleteImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageInput;
