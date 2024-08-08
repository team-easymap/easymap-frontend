import Profile from '@/assets/profile.svg?react';
import IconComponent from '@/components/ui/icon';

const ReviewInfo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Profile />
      <section className='flex flex-col gap-1'>
        <h2>꿀꿀이</h2>
        <div className='flex items-center gap-1'>
          <span className='text-14M'>5.0</span>
          <ul className='flex'>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
            <li>
              <IconComponent name='starFill' color='text-gray-3' />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ReviewInfo;
