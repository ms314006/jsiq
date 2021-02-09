import { Box, Link, chakra } from '@chakra-ui/react';
import { AiOutlineEdit } from 'react-icons/ai';
import { TwitterBlock } from 'components/TwitterBlock';

type Props = {
  editPageHref?: string;
  authorHref?: string;
};

export const Footer = ({ editPageHref, authorHref }: Props) => (
  <Box as="footer">
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box mt={4} mb={4} display="flex" flexDir="column">
        <chakra.a href={authorHref} fontSize="sm" color="gray.500" target="_blank">
          Author of content
        </chakra.a>
      </Box>

      {editPageHref && (
        <Link isExternal href={editPageHref} display="flex" alignItems="center">
          <AiOutlineEdit size={20} />
          <chakra.span ml={2}>Edit this page</chakra.span>
        </Link>
      )}
    </Box>

    <TwitterBlock />
  </Box>
);
