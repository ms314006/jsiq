import { Icon, Link, useColorModeValue } from '@chakra-ui/react';

type Props = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
};

export const LinkIconButton: React.FC<Props> = ({ icon, href, label }) => {
  return (
    <Link display="inline-block" href={href} aria-label={label} isExternal>
      <Icon
        as={icon}
        fontSize="xl"
        color="gray.400"
        transition="all 0.3s"
        _hover={{ color: useColorModeValue('gray.600', 'gray.200') }}
        w="5"
        h="5"
      />
    </Link>
  );
};
