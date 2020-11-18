import { Box, Text, VStack, Grid, Heading } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { Chakra } from 'components/Chakra';

interface Props {
  cookies?: string;
}

export default function Home({ cookies }: Props) {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="calc(100vh - 4.5rem)" p={3} mt="4.5rem">
            <VStack spacing={8}>
              <Heading as="h1">JavaScript Interview Questions</Heading>

              <Text>
                Collection of questions that can help you improve your JavaScript knowledge
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from 'components/Chakra';
