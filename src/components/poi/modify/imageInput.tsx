import { useState } from 'react';
import { useRef } from 'react';

const ImageInput = () => {
  const [imgFile, setImgFile] = useState([]);
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = (e) => {
    const files = e.target.files!;
    if (!files[0]) return;
    if (imgFile.length + files.length > 10) {
      return alert('최대 10개 사진만 첨부할 수 있습니다.');
    }
    const readAndPreview = (file: any) => {
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        const reader = new FileReader();
        reader.onload = () =>
          setImgFile((prev) => [...prev, reader.result as string]);
        reader.readAsDataURL(file);
      }
    };
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  };

  // <div>
  // <img src={imgFile ? imgFile : ''} alt='프로필 이미지' />
  // 이미지 업로드 input
  // <input
  //   type='file'
  //   accept='image/*'
  //   id='profileImg'
  ///   onChange={saveImgFile}
  //   ref={imgRef}
  // />
  // </div>
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
      />
      <div className='m-auto my-2 box-border flex w-full gap-2 overflow-x-scroll'>
        {imgFile.map((img) => (
          <img
            className='h-[113px] w-[80px] rounded'
            src={imgFile ? img : ``}></img>
        ))}
      </div>
    </div>
  );
};
export default ImageInput;
