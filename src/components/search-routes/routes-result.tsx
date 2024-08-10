import { SearchRoutesValueType } from '@/pages/search-routes';

type SearchRoutesResultProps = {
  searchRoutesValue: SearchRoutesValueType;
};

const SearchRoutesResult = (props: SearchRoutesResultProps) => {
  const { searchRoutesValue } = props;

  return <div>SearchRoutesResult</div>;
};

export default SearchRoutesResult;
