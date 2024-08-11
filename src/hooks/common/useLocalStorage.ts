export const useLocalStorage = <T>(storageKey: string) => {
  const init: T[] = JSON.parse(localStorage.getItem(storageKey) || '[]');

  const updateStorage = (itemKey: keyof T, item: T) => {
    const filtered = init.filter((p) => p[itemKey] !== item[itemKey]);
    filtered.push(item);
    localStorage.setItem(storageKey, JSON.stringify(filtered));

    return filtered;
  };

  const editStorage = (itemKey?: keyof T, itemValue?: T[keyof T]) => {
    if (itemKey && itemValue) {
      const filtered = init.filter((p) => p[itemKey] !== itemValue);
      localStorage.setItem(storageKey, JSON.stringify(filtered));
      return filtered;
    } else {
      localStorage.setItem(storageKey, '[]');
      return [];
    }
  };

  return { updateStorage, editStorage };
};
