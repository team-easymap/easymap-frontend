import { Input } from '@/components/ui/input';
import { SearchRoutesValueType } from '@/pages/search';
import { useNavigate } from 'react-router-dom';

type SearchRoutesFormProps = {
  value: SearchRoutesValueType;
};

const SearchRoutesForm = (props: SearchRoutesFormProps) => {
  const { value } = props;
  const navigate = useNavigate();

  return (
    <form className='flex flex-col w-full gap-3'>
      <Input
        onFocus={() => navigate('/search/poi', { state: { type: 'start' } })}
        placeholder='출발지를 입력해주세요'
        value={value.start?.name || ''}
        onChange={() => {}}
      />
      <Input
        onFocus={() => navigate('/search/poi', { state: { type: 'end' } })}
        placeholder='도착지를 입력해주세요'
        value={value.end?.name || ''}
        onChange={() => {}}
      />
    </form>
  );
};

export default SearchRoutesForm;
