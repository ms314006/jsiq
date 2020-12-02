import { Box, Text, Stack } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';
import { LinkIconButton } from 'components/LinkIconButton';
import { links } from 'config';

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
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: links.linkedin,
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: links.email,
  },
];

export const Footer = () => (
  <Box as="footer" mt={4} mb={4} textAlign="center">
    <Text fontSize="sm">
      <span>Mikhail Sakhnyuk</span>
    </Text>

    <Stack mt={2} direction="row" spacing="12px" justify="center">
      {iconButtons.map((link) => (
        <LinkIconButton key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
);
