import { FC, ElementType } from 'react';
import { Icon, Link, useColorModeValue } from '@chakra-ui/react';

type Props = {
  icon?: ElementType;
  href?: string;
  label?: string;
  color?: string;
};

export const LinkIconButton: FC<Props> = ({ icon, href, label, color }) => {
  const defaultColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Link display="inline-block" href={href} aria-label={label} isExternal>
      <Icon
        as={icon}
        fontSize="xl"
        color="gray.400"
        transition="all 0.3s"
        _hover={{ color: color || defaultColor }}
        w="5"
        h="5"
      />
    </Link>
  );
};
