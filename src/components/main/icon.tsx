import { CommonButton } from '../common/commonButton';
import IconComponent from '../ui/icon';

const MainIconComponent = () => {
  return (
    <CommonButton
      use='icon'
      color='white'
      radius='large'
      className='float-right'>
      <IconComponent name='warning' />
    </CommonButton>
  );
};

export default MainIconComponent;
