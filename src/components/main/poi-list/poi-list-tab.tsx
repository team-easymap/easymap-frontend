import { CATEGORY_LIST } from '@/const/category';
import { CategoryType } from './poi-list';

type POIListTabProps = {
  handleTabClick: (category: CategoryType) => void;
  activeTab: CategoryType;
};

const POIListTab = (props: POIListTabProps) => {
  const { handleTabClick, activeTab } = props;
  const activeColor = (category: CategoryType) =>
    category === activeTab ? 'bg-primary' : 'bg-white';

  const activeText = (category: CategoryType) =>
    category === activeTab ? 'text-primary' : 'text-gray-6';

  return (
    <ul className='flex w-full gap-4 px-4 overflow-x-auto scroll-hide text-14M'>
      {CATEGORY_LIST.map((category) => (
        <li
          key={category}
          onClick={() => handleTabClick(category)}
          className='cursor-pointer'>
          <div
            className={`whitespace-nowrap px-1 pb-1.5 pt-2.5 ${activeText(category)}`}>
            {category}
          </div>
          <div
            className={`h-[3px] w-full rounded-[2px] ${activeColor(category)}`}></div>
        </li>
      ))}
    </ul>
  );
};

export default POIListTab;
