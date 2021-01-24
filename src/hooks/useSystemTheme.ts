import { useCallback, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

export const useSystemTheme = () => {
  const { setColorMode } = useColorMode();

  const colorModeHandler = useCallback(
    (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      setColorMode && setColorMode(newColorScheme);
    },
    [setColorMode],
  );

  useEffect(() => {
    colorModeHandler(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)'));

    window?.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorModeHandler);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', colorModeHandler);
    };
  }, [colorModeHandler]);
};
