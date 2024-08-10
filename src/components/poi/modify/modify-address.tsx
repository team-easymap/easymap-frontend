import { Input } from '@/components/ui/input';
import { CommonButton } from '@/components/common/commonButton';
import { useState } from 'react';
import DaumAddressInput from './daumAddressInput';

type AddressProps = {
  address: string;
  setAddress: (address: string) => void;
};
const PoiModifyAddress = ({ address, setAddress }: AddressProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddressClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='w-full p-4'>
      <span className='text-16M'>주소를 입력해주세요</span>
      <div className='mt-2 flex gap-2'>
        <Input value={address} onClick={handleAddressClick} readOnly />
        <CommonButton
          color='black'
          use='text'
          radius='small'
          onClick={handleAddressClick}>
          주소 검색
        </CommonButton>
        <DaumAddressInput
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedAddress={address}
          setSelectedAddress={setAddress}
        />
      </div>
    </div>
  );
};

export default PoiModifyAddress;
