import NickNameInput from './NickNameInput';
import ProgileImgEdit from './ProgileImgEdit';

const ProfileDetailsForm = () => {
  return (
    <main className='flex flex-col items-center pt-[10px]'>
      <ProgileImgEdit />
      <NickNameInput />
    </main>
  );
};

export default ProfileDetailsForm;
