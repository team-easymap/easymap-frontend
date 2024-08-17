import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useClipboard = () => {
  const { pathname, search, hash } = useLocation();
  const url = window.location.origin + pathname + search + hash;
  const copyURL = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return copyURL;
};
