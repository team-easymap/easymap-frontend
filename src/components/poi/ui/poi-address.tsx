import { Input } from '@/components/ui/input';
import { CommonButton } from '@/components/common/commonButton';
import { useState } from 'react';
import DaumAddressInput from '@/components/common/daumAddressInput';

type AddressProps = {
  address: string;
  setAddress: (address: string) => void;
};
const PoiAddress = ({ address, setAddress }: AddressProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddressClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='mt-2 w-full'>
      <div className='flex gap-2'>
        <Input
          value={address}
          onClick={handleAddressClick}
          className='text-ellipsis'
          readOnly
        />
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

export default PoiAddress;
