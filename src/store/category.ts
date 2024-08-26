import { Category } from '@/types/pois';
import { create } from 'zustand';

type Categories = Record<
  Category['category_name'],
  Category['detailed_category_list'] & Category['tag_response_dtolist']
>;

type CategoryState = {
  categories: Categories;
  setCategories: (categories: Categories) => void;
};

export const useCategoryStore = create<CategoryState>()((set) => ({
  categories: {},
  setCategories: (categories: Categories) => set({ categories })
}));
