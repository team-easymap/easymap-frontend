import { useState } from 'react';

export const useLocalStorage = <T>(storageKey: string) => {
  const init: T[] = JSON.parse(localStorage.getItem(storageKey) || '[]');
  const [list, setList] = useState<T[]>(init);

  const updateStorage = (itemKey: keyof T, item: T) => {
    const filtered = list.filter((p) => p[itemKey] !== item[itemKey]);
    filtered.push(item);
    localStorage.setItem(storageKey, JSON.stringify(filtered));
    setList(filtered);
  };

  const editStorage = (itemKey?: keyof T, itemValue?: T[keyof T]) => {
    if (itemKey && itemValue) {
      const filtered = list.filter((p) => p[itemKey] !== itemValue);
      localStorage.setItem(storageKey, JSON.stringify(filtered));
      setList(filtered);
    } else {
      localStorage.setItem(storageKey, '[]');
      setList([]);
    }
  };

  return { updateStorage, editStorage };
};
