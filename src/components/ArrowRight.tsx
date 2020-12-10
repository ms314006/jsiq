import { chakra } from '@chakra-ui/react';

export const ArrowRight = ({ height = 8, ...props }) => {
  return (
    <chakra.svg height={height} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </chakra.svg>
  );
};
