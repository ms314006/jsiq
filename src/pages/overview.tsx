import { Box, VStack, Grid, Heading } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { Chakra } from 'components/Chakra';

interface Props {
  cookies?: string;
}

export default function Overview({ cookies }: Props) {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Box
          textAlign="center"
          fontSize="xl"
          mt="4.5rem"
          minH="calc(100vh - 4.5rem - 101px)"
          pt="50px"
        >
          <VStack spacing={8}>
            <Heading as="h1">Overview</Heading>
          </VStack>
        </Box>
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from 'components/Chakra';
