import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import DaumPostcode from 'react-daum-postcode';
type DaumAddressProps = {
  isModalOpen: boolean;
  setIsModalOpen: (modal: boolean) => void;
  selectedAddress: string;
  setSelectedAddress: (address: string) => void;
};
const DaumAddressInput = ({
  isModalOpen,
  setIsModalOpen,
  setSelectedAddress
}: DaumAddressProps) => {
  const handleAddressSelect = (data: any) => {
    setSelectedAddress(data.address);
    setIsModalOpen(false); // Close the modal after selecting the address
  };
  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>주소 검색</DialogTitle>
          </DialogHeader>
          <DaumPostcode onComplete={handleAddressSelect} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DaumAddressInput;
