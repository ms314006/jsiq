import { Text, VStack, Heading, Flex, Center } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { IconCard } from 'components/Card/IconCard';

export default function Home() {
  return (
    <Layout>
      <Center textAlign="center" fontSize="xl" mt="4.5rem" minH={500}>
        <VStack spacing={8}>
          <Heading as="h1">JavaScript Interview Questions</Heading>

          <Text>Collection of questions that can help you improve your JavaScript knowledge</Text>

          <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
            <IconCard imageSrc="/icons/javascript.svg" alt="JS questions" />
            <IconCard imageSrc="/icons/react.svg" alt="ReactJS questions" />
            <IconCard imageSrc="/icons/angular.svg" alt="Angular JS questions" />
          </Flex>
        </VStack>
      </Center>
    </Layout>
  );
}
