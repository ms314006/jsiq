import { Box, VStack, Heading, Text } from '@chakra-ui/react';
import { Layout } from 'components/Layout';

export default function About() {
  return (
    <Layout>
      <Box
        textAlign="center"
        fontSize="xl"
        mt="4.5rem"
        minH="calc(100vh - 4.5rem - 101px)"
        pt="50px"
      >
        <VStack spacing={8}>
          <Heading as="h1">About</Heading>

          <Text>
            JavaScript Questions <br />
            for prepare to Interview
          </Text>
        </VStack>
      </Box>
    </Layout>
  );
}
