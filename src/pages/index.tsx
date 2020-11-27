import { Box, Text, VStack, Grid, Heading, Flex, Square, Center } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { Chakra } from 'components/Chakra';
import Image from 'next/image';

interface Props {
  cookies?: string;
}

export default function Home({ cookies }: Props) {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Center textAlign="center" fontSize="xl" mt="4.5rem" minH={500}>
          <VStack spacing={8}>
            <Heading as="h1">JavaScript Interview Questions</Heading>

            <Text>Collection of questions that can help you improve your JavaScript knowledge</Text>

            <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
              <Square shadow="md" borderWidth="1px" borderRadius={6} size="200px" m={8}>
                <Image
                  src="/icons/javascript.svg"
                  alt="React JS questions"
                  width={150}
                  height={150}
                />
              </Square>
              <Square shadow="md" borderWidth="1px" borderRadius={6} size="200px" m={8}>
                <Image src="/icons/react.svg" alt="React JS questions" width={150} height={150} />
              </Square>
              <Square shadow="md" borderWidth="1px" borderRadius={6} size="200px" m={8}>
                <Image src="/icons/angular.svg" alt="React JS questions" width={150} height={150} />
              </Square>
            </Flex>
          </VStack>
        </Center>
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from 'components/Chakra';
