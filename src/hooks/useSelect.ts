import { useCallback, useState } from 'react';

export const useSelect = (initialSelectedId: number | string | boolean) => {
  const [selected, setSelected] = useState(initialSelectedId);

  const handleSelectClick = useCallback((selectedId: number | string | boolean) => {
    setSelected(selectedId);
  }, []);

  return { selected, handleSelectClick };
};
