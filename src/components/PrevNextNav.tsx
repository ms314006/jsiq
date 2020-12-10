import { chakra } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowRight } from './ArrowRight';
import React from 'react';

export const PrevNextNav = () => {
  return (
    <>
      <chakra.nav display="flex" alignItems="center" justifyContent="space-between" my={4}>
        <Link href="/#" passHref>
          <chakra.a py={4} fontSize={20} fontWeight="bold" display="flex" alignItems="center">
            <ArrowRight transform="rotate(180deg)" mr={1} />
            Prev
          </chakra.a>
        </Link>
        <Link href="/#" passHref>
          <chakra.a py={4} fontSize={20} fontWeight="bold" display="flex" alignItems="center">
            Next
            <ArrowRight ml={1} />
          </chakra.a>
        </Link>
      </chakra.nav>
      <hr />
    </>
  );
};
