import { useEffect, useRef, useState } from 'react';
import { BoxProps, Box, useUpdateEffect } from '@chakra-ui/react';
import { useElementScroll } from 'framer-motion';

export const MobileScrollView = (props: BoxProps & { onScroll?: any }) => {
  const { onScroll, ...rest } = props;
  const [y, setY] = useState(0);
  const elRef = useRef<any>();
  const { scrollY } = useElementScroll(elRef);

  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useUpdateEffect(() => {
    onScroll?.(y > 5 ? true : false);
  }, [y]);

  return <Box ref={elRef} flex="1" id="routes" overflow="auto" px="4" pb="4" {...rest} />;
};
