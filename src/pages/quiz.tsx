import { Box, VStack, Heading } from '@chakra-ui/react';
import { PageLayout } from 'components/PageLayout';

export default function Quiz() {
  return (
    <PageLayout>
      <Box
        textAlign="center"
        fontSize="xl"
        mt="4.5rem"
        minH="calc(100vh - 4.5rem - 101px)"
        pt="50px"
      >
        <VStack spacing={8}>
          <Heading as="h1">Quiz</Heading>
        </VStack>
      </Box>
    </PageLayout>
  );
}
