import { SearchRoutesValueType } from '@/pages/search-routes';
import SearchRoutesResultMap from './routes-result-map';
import { searchRoutesResult } from '@/mocks/search-result';
import SearchRoutesResultList from './routes-result-list';

type SearchRoutesResultProps = {
  searchRoutesValue: SearchRoutesValueType;
};

const SearchRoutesResult = (props: SearchRoutesResultProps) => {
  const { searchRoutesValue } = props;

  return (
    <div className='relative flex flex-col'>
      <SearchRoutesResultMap routesResult={searchRoutesResult} />
      <SearchRoutesResultList routesResult={searchRoutesResult} />
    </div>
  );
};

export default SearchRoutesResult;
