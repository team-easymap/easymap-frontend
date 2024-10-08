import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import DaumPostcode, { Address } from 'react-daum-postcode';
type DaumAddressProps = {
  isModalOpen: boolean;
  setIsModalOpen: (modal: boolean) => void;
  selectedAddress: string;
  setSelectedAddress: React.Dispatch<
    React.SetStateAction<{
      address: string;
      bcode: string;
    }>
  >;
};
const DaumAddressInput = ({
  isModalOpen,
  setIsModalOpen,
  setSelectedAddress
}: DaumAddressProps) => {
  const handleAddressSelect = ({ address, bcode }: Address) => {
    setSelectedAddress({ address, bcode });
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
