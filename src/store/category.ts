import { Category } from '@/types/pois';
import { create } from 'zustand';

export type ConvertCategories = Record<
  Category['category_name'],
  {
    detail: {
      id: Category['detailed_category_list'][number]['detailed_category_id'];
      name: Category['detailed_category_list'][number]['detailed_category_name'];
    }[];
    tags: {
      id: Category['tag_response_dtolist'][number]['tag_id'];
      name: Category['tag_response_dtolist'][number]['tag_name'];
      point?: Category['tag_response_dtolist'][number]['tag_accessibility_point'];
    }[];
  }
>;

type CategoryState = {
  categories: ConvertCategories;
  setCategories: (categories: ConvertCategories) => void;
};

export const useCategoryStore = create<CategoryState>()((set) => ({
  categories: {},
  setCategories: (categories: ConvertCategories) => set({ categories })
}));
