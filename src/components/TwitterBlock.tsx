import { Button, Center, Text } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { myName, links } from 'config';

export const TwitterBlock = () => {
  return (
    <Center py={4} flexDirection="column">
      <Text fontSize="sm">
        Made by <b>{myName}</b>
      </Text>

      <Button
        colorScheme="twitter"
        leftIcon={<FaTwitter />}
        as="a"
        href={links.twitter}
        target="_blank"
        size="xs"
        mt={2}
        rel="noreferrer noopener"
      >
        Twitter
      </Button>
    </Center>
  );
};
