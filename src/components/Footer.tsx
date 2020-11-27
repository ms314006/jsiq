import { Box, Icon, Text, Stack, Link, chakra } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
);

const links = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: 'https://github.com/sakhnyuk',
  },
  {
    icon: IoLogoTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/MikhailSakhnyuk',
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mikhail-sakhniuk-96765aa8/',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:sakhnyukmikhail@gmail.com',
  },
];

export const Footer = () => (
  <Box as="footer" mt={6} mb={6} textAlign="center">
    <Text fontSize="sm">
      <span>Mikhail Sakhnyuk</span>
    </Text>
    <Stack mt={2} direction="row" spacing="12px" justify="center">
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
);
