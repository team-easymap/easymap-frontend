import { getCategories } from '@/api/poi';
import { useCategoryStore } from '@/store/category';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  });
  const setCategories = useCategoryStore((state) => state.setCategories);

  if (data?.category_response_dtolist) {
    const convertCategories = data.category_response_dtolist.reduce(
      (acc, cur) => {
        return {
          ...acc,
          [cur.category_name]: {
            detail: cur.detailed_category_list,
            tags: cur.tag_response_dtolist
          }
        };
      },
      {}
    );
    setCategories(convertCategories);
    return convertCategories;
  }

  return {};
};
