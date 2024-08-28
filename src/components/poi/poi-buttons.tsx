import { Button } from '@/components/ui/button';
import IconComponent from '@/components/ui/icon';
import { useClipboard } from '@/hooks/common/useClipboard';
import type { POI, SearchResult } from '@/types/pois';
import { useNavigate } from 'react-router-dom';

type POIButtonsProps = {
  data: POI & SearchResult & { name?: string };
};

const POIButtons = (props: POIButtonsProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const copyURL = useClipboard();

  const POIState = {
    id: data.poi_id || `lat?${data.lat}&lng?${data.lng}`,
    name: data.poi_name || data.name || data.address,
    lat: !data.poi_id ? data.lat : undefined,
    lng: !data.poi_id ? data.lng : undefined
  };

  const buttons = [
    {
      icon: 'edit',
      value: '후기 등록',
      onClick: () => navigate(`/pois/${data.poi_id}/review/modify`),
      disabled: true
    },
    { icon: 'share', value: '공유하기', onClick: copyURL, disabled: false },
    {
      icon: 'map',
      value: '길 찾기',
      onClick: () => navigate('/search/routes', { state: { end: POIState } }),
      disabled: true
    },
    {
      icon: 'warning',
      value: `장소 ${data.poi_id ? '수정' : '등록'}`,
      onClick: () =>
        navigate(`/pois/${data.poi_id ? `${data.poi_id}/modify` : 'register'}`),
      disabled: true
    }
  ].slice(data.poi_id ? 0 : 1, 4) as {
    icon: 'edit' | 'share' | 'map' | 'warning';
    value: string;
    onClick: () => void;
    disabled: boolean;
  }[];

  return (
    <ul className='m-4 flex justify-between gap-2'>
      {buttons.map((button) => (
        <li key={button.icon}>
          <Button
            variant='ghost'
            className='flex h-fit w-16 flex-col items-center gap-2 px-2.5 py-2 text-14M'
            onClick={button.onClick}
            disabled={button.disabled}>
            <IconComponent name={button.icon} />
            {button.value}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default POIButtons;
