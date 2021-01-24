import { useCallback, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

export const useSystemTheme = () => {
  const { setColorMode } = useColorMode();

  const firstManage = useCallback(() => {
    const colorScheme =
      window?.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    const storageTheme = localStorage.getItem('chakra-ui-color-mode');

    if (colorScheme !== storageTheme) {
      setTimeout(() => {
        setColorMode(colorScheme);
      }, 100);
    }
  }, [setColorMode]);

  const colorModeHandler = useCallback(
    (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      setColorMode(newColorScheme);
    },
    [setColorMode],
  );

  useEffect(() => {
    firstManage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorModeHandler);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', colorModeHandler);
    };
  }, [colorModeHandler]);
};
