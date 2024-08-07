import AlbumIcon from '@/assets/icons/album.svg?react';
import ArrowDownIcon from '@/assets/icons/arrow-down.svg?react';
import ArrowLeftRigtIcon from '@/assets/icons/arrow-left-right.svg?react';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?react';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react';
import ArrowUpDownIcon from '@/assets/icons/arrow-up-down.svg?react';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg?react';
import BellRingIcon from '@/assets/icons/bell-ring.svg?react';
import BookmarkMinusIcon from '@/assets/icons/bookmark-minus.svg?react';
import BookmarkPlusIcon from '@/assets/icons/bookmark-plus.svg?react';
import BookmarkIcon from '@/assets/icons/bookmark.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';
import DetailIcon from '@/assets/icons/detail.svg?react';
import ChevronDownIcon from '@/assets/icons/down.svg?react';
import EditIcon from '@/assets/icons/edit.svg?react';
import FilterIcon from '@/assets/icons/filter.svg?react';
import ChevronLeftIcon from '@/assets/icons/left.svg?react';
import LocateIcon from '@/assets/icons/locate.svg?react';
import MapPinIcon from '@/assets/icons/map-pin.svg?react';
import MapIcon from '@/assets/icons/map.svg?react';
import OutIcon from '@/assets/icons/out.svg?react';
import PageIcon from '@/assets/icons/page.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import ChevronRightIcon from '@/assets/icons/right.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';
import SmileIcon from '@/assets/icons/smile.svg?react';
import StarIcon from '@/assets/icons/star.svg?react';
import TagIcon from '@/assets/icons/tag.svg?react';
import TagsIcon from '@/assets/icons/tags.svg?react';
import TrashIcon from '@/assets/icons/trash.svg?react';
import ChevronUpIcon from '@/assets/icons/up.svg?react';
import WarningIcon from '@/assets/icons/warning.svg?react';
import CheckIcon from '@/assets/icons/check.svg?react';

type IconProps = {
  name: keyof typeof icons;
  color?: string;
};

const icons = {
  album: AlbumIcon,
  arrowDown: ArrowDownIcon,
  arrowLeftRight: ArrowLeftRigtIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowUpDown: ArrowUpDownIcon,
  arrowUp: ArrowUpIcon,
  bellRing: BellRingIcon,
  bookmarkMinus: BookmarkMinusIcon,
  bookmarkPlus: BookmarkPlusIcon,
  bookmark: BookmarkIcon,
  close: CloseIcon,
  detail: DetailIcon,
  chevronDown: ChevronDownIcon,
  edit: EditIcon,
  filter: FilterIcon,
  chevronLeft: ChevronLeftIcon,
  locate: LocateIcon,
  mapPin: MapPinIcon,
  map: MapIcon,
  out: OutIcon,
  page: PageIcon,
  plus: PlusIcon,
  chevronRight: ChevronRightIcon,
  share: ShareIcon,
  smile: SmileIcon,
  star: StarIcon,
  tag: TagIcon,
  tags: TagsIcon,
  trash: TrashIcon,
  chevronUp: ChevronUpIcon,
  warning: WarningIcon,
  check: CheckIcon
} as const;

const IconComponent = (props: IconProps) => {
  const { name, color } = props;
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <span className={color}>
      <Icon />
    </span>
  );
};

export default IconComponent;
