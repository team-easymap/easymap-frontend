import { Suspense, lazy } from 'react';

type IconProps = {
  name: keyof typeof icons;
  color?: string;
  size?: 'sm' | 'md';
};

const icons = {
  myplace: lazy(() => import('@/assets/icons/My_Place.svg?react')),
  fillon: lazy(() => import('@/assets/icons/Fill_on.svg?react')),
  filloff: lazy(() => import('@/assets/icons/Fill_off.svg?react')),
  album: lazy(() => import('@/assets/icons/album.svg?react')),
  arrowDown: lazy(() => import('@/assets/icons/arrow-down.svg?react')),
  arrowLeftRight: lazy(
    () => import('@/assets/icons/arrow-left-right.svg?react')
  ),
  arrowLeft: lazy(() => import('@/assets/icons/arrow-left.svg?react')),
  arrowRight: lazy(() => import('@/assets/icons/arrow-right.svg?react')),
  arrowUpDown: lazy(() => import('@/assets/icons/arrow-up-down.svg?react')),
  arrowUp: lazy(() => import('@/assets/icons/arrow-up.svg?react')),
  bellRing: lazy(() => import('@/assets/icons/bell-ring.svg?react')),
  bookmarkMinus: lazy(() => import('@/assets/icons/bookmark-minus.svg?react')),
  bookmarkPlus: lazy(() => import('@/assets/icons/bookmark-plus.svg?react')),
  bookmark: lazy(() => import('@/assets/icons/bookmark.svg?react')),
  close: lazy(() => import('@/assets/icons/close.svg?react')),
  detail: lazy(() => import('@/assets/icons/detail.svg?react')),
  chevronDown: lazy(() => import('@/assets/icons/down.svg?react')),
  edit: lazy(() => import('@/assets/icons/edit.svg?react')),
  filter: lazy(() => import('@/assets/icons/filter.svg?react')),
  chevronLeft: lazy(() => import('@/assets/icons/left.svg?react')),
  locate: lazy(() => import('@/assets/icons/locate.svg?react')),
  mapPin: lazy(() => import('@/assets/icons/map-pin.svg?react')),
  map: lazy(() => import('@/assets/icons/map.svg?react')),
  out: lazy(() => import('@/assets/icons/out.svg?react')),
  page: lazy(() => import('@/assets/icons/page.svg?react')),
  plus: lazy(() => import('@/assets/icons/plus.svg?react')),
  chevronRight: lazy(() => import('@/assets/icons/right.svg?react')),
  share: lazy(() => import('@/assets/icons/share.svg?react')),
  smile: lazy(() => import('@/assets/icons/smile.svg?react')),
  star: lazy(() => import('@/assets/icons/star.svg?react')),
  tag: lazy(() => import('@/assets/icons/tag.svg?react')),
  tags: lazy(() => import('@/assets/icons/tags.svg?react')),
  trash: lazy(() => import('@/assets/icons/trash.svg?react')),
  chevronUp: lazy(() => import('@/assets/icons/up.svg?react')),
  warning: lazy(() => import('@/assets/icons/warning.svg?react')),
  check: lazy(() => import('@/assets/icons/check.svg?react')),
  starFill: lazy(() => import('@/assets/icons/star-fill.svg?react')),
  search: lazy(() => import('@/assets/icons/search.svg?react')),
  image: lazy(() => import('@/assets/icons/image.svg?react'))
} as const;

const IconComponent = (props: IconProps) => {
  const { name, color, size = 'md' } = props;
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <span className={color}>
        <Icon className={iconSize} />
      </span>
    </Suspense>
  );
};

export default IconComponent;
