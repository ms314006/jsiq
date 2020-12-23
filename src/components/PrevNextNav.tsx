import { chakra } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowRight } from './ArrowRight';
import { NextLink, PrevLink } from 'utils/getQuestions';
import React from 'react';

type Props = {
  nextLink: NextLink;
  prevLink: PrevLink;
};

const PrevLinkButton = React.forwardRef(({ onClick, href, disabled }: any, ref: any) => {
  return (
    <chakra.a
      py={4}
      fontSize={20}
      fontWeight="bold"
      display="flex"
      alignItems="center"
      href={href}
      onClick={onClick}
      ref={ref}
      color={disabled && 'gray.400'}
      cursor={disabled && 'not-allowed'}
    >
      <ArrowRight transform="rotate(180deg)" mr={1} />
      Prev
    </chakra.a>
  );
});

const NextLinkButton = React.forwardRef(({ onClick, href, disabled }: any, ref: any) => {
  return (
    <chakra.a
      py={4}
      fontSize={20}
      fontWeight="bold"
      display="flex"
      alignItems="center"
      href={href}
      onClick={onClick}
      ref={ref}
      color={disabled && 'gray.400'}
      cursor={disabled && 'not-allowed'}
    >
      Next
      <ArrowRight ml={1} />
    </chakra.a>
  );
});

export const PrevNextNav = ({ prevLink, nextLink }: Props) => {
  return (
    <>
      <chakra.nav display="flex" alignItems="center" justifyContent="space-between" my={4}>
        {prevLink ? (
          <Link href={prevLink || ''} passHref>
            <PrevLinkButton />
          </Link>
        ) : (
          <PrevLinkButton disabled />
        )}

        {nextLink ? (
          <Link href={nextLink || ''} passHref>
            <NextLinkButton />
          </Link>
        ) : (
          <NextLinkButton disabled />
        )}
      </chakra.nav>
      <hr />
    </>
  );
};
