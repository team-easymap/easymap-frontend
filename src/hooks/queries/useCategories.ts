import { getCategories } from '@/api/poi';
import { ConvertCategories, useCategoryStore } from '@/store/category';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories()
  });
  const setCategories = useCategoryStore((state) => state.setCategories);

  if (data?.category_response_dtolist) {
    const convertCategories: ConvertCategories =
      data.category_response_dtolist.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.category_name]: {
            detail: cur.detailed_category_list?.map((item) => ({
              id: item.detailed_category_id,
              name: item.detailed_category_name
            })),
            tags: cur.tag_response_dtolist.map((item) => ({
              id: item.tag_id,
              name: item.tag_name,
              point: item.tag_accessibility_point
            }))
          }
        };
      }, {});
    setCategories(convertCategories);
    return convertCategories;
  }

  return {};
};
