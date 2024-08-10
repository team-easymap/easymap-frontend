import CommonImage from '@/components/common/commonImage';
import { useCallback } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const ImageInput = () => {
  const [imgFile, setImgFile] = useState([]);
  const imgRef = useRef();

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
          reader.onload = () =>
            setImgFile((prev) => [...prev, reader.result as string]);
          reader.readAsDataURL(file);
        }
      };

      Array.from(files).forEach(readAndPreview);
    },
    [imgFile]
  );

  const handleDeleteImage = useCallback(
    (idx: number) => {
      console.log('hello');
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
    <div className='w-full p-4'>
      <span className='text-16M'>이미지 등록</span>
      <br />
      <span className='text-14R text-gray-6'>
        장소의 존재를 증명할 수 있는 사진(간판, 출입구 등)이 필요해요
      </span>
      <input
        type='file'
        accept='image/*'
        id='profileImg'
        onChange={saveImgFile}
        ref={imgRef}
        multiple
        className='hidden'
      />

      {imgFile.length === 0 && (
        <div
          onClick={handleFileUploadClick}
          className='mt-4 flex h-[80px] cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-gray-500 hover:bg-gray-100'>
          이미지 선택
        </div>
      )}

      <div className='m-auto my-2 box-border flex w-full gap-2 overflow-x-scroll'>
        {imgFile.map((img, index) => (
          <>
            <CommonImage
              src={img}
              deleted={true}
              key={index}
              index={index}
              handleDeleteImage={handleDeleteImage}
            />
          </>
        ))}
      </div>
    </div>
  );
};
export default ImageInput;
