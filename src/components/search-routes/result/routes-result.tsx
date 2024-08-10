import { SearchRoutesValueType } from '@/pages/search-routes';
import SearchRoutesResultMap from './routes-result-map';
import { searchRoutesResult } from '@/mocks/search-result';

type SearchRoutesResultProps = {
  searchRoutesValue: SearchRoutesValueType;
};

const SearchRoutesResult = (props: SearchRoutesResultProps) => {
  const { searchRoutesValue } = props;
  console.log(searchRoutesValue);

  return (
    <>
      <SearchRoutesResultMap routesResult={searchRoutesResult} />
    </>
  );
};

export default SearchRoutesResult;
