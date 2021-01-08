import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { PageLayout } from 'components/PageLayout';

export default function About() {
  return (
    <PageLayout>
      <Box textAlign="center" fontSize="xl" minH="calc(100vh - 5.5rem)" pt="50px">
        <VStack spacing={8}>
          <Heading as="h1">About</Heading>

          <Text>JavaScript Interview Questions</Text>
        </VStack>
      </Box>
    </PageLayout>
  );
}
