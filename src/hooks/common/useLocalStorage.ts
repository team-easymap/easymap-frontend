import { useCallback } from 'react';

export const useLocalStorage = <T>(storageKey: string) => {
  const filteredList = useCallback(
    (key: keyof T, value: T[keyof T]) => {
      const itemList: T[] = JSON.parse(
        localStorage.getItem(storageKey) || '[]'
      );
      return itemList.filter((item) => item[key] !== value);
    },
    [storageKey]
  );

  const updateStorage = useCallback(
    (itemKey: keyof T, item: T) => {
      const filtered = filteredList(itemKey, item[itemKey]);
      filtered.push(item);
      localStorage.setItem(storageKey, JSON.stringify(filtered));
    },
    [filteredList, storageKey]
  );

  const editStorage = useCallback(
    (itemKey?: keyof T, itemValue?: T[keyof T]) => {
      if (itemKey && itemValue) {
        const filtered = filteredList(itemKey, itemValue);
        localStorage.setItem(storageKey, JSON.stringify(filtered));
      } else {
        localStorage.setItem(storageKey, '[]');
      }
    },
    [filteredList, storageKey]
  );

  return { updateStorage, editStorage };
};
