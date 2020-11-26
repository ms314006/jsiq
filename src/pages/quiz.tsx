import { Box, VStack, Grid, Heading } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { Chakra } from 'components/Chakra';

interface Props {
  cookies?: string;
}

export default function Quiz({ cookies }: Props) {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Box textAlign="center" fontSize="xl" mt="4.5rem">
          <Grid minH="calc(100vh - 4.5rem)" pt="50px">
            <VStack spacing={8}>
              <Heading as="h1">Quiz</Heading>
            </VStack>
          </Grid>
        </Box>
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from 'components/Chakra';
