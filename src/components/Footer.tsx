import { Box, Text, Stack, Link, chakra } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';
import { AiOutlineEdit } from 'react-icons/ai';
import { LinkIconButton } from 'components/LinkIconButton';
import { links, myName } from 'config';

const iconButtons = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: links.github,
  },
  {
    icon: IoLogoTwitter,
    label: 'Twitter',
    href: links.twitter,
    color: '#1DA1F2',
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: links.linkedin,
    color: '#0077B5',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: links.email,
    color: '#D14836',
  },
];

type Props = {
  editPageHref?: string;
  authorHref?: string;
};

export const Footer = ({ editPageHref, authorHref }: Props) => (
  <Box as="footer">
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box mt={4} mb={4} display="flex" flexDir="column">
        <chakra.a href={authorHref} fontSize="xs" color="gray.500" target="_blank">
          Author of content
        </chakra.a>

        <Text fontSize="sm">
          <span>MIT License</span>
        </Text>
      </Box>

      {editPageHref && (
        <Link isExternal href={editPageHref} display="flex" alignItems="center">
          <AiOutlineEdit size={20} />
          <chakra.span ml={2}>Edit this page</chakra.span>
        </Link>
      )}
    </Box>

    <Box mt={4} display="flex" flexDir="column" textAlign="center">
      <Text fontSize="sm" fontWeight="500">
        {myName}
      </Text>
    </Box>

    <Stack mb={10} direction="row" spacing="12px" justify="center">
      {iconButtons.map((link) => (
        <LinkIconButton key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
);
