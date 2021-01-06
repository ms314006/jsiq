import { Text, VStack, Heading, Flex, Center, Wrap, WrapItem } from '@chakra-ui/react';
import { PageLayout } from 'components/PageLayout';
import { IconCard } from 'components/Card/IconCard';
import { questionsRoutes } from 'config/routes';

export default function Home() {
  return (
    <PageLayout>
      <Center textAlign="center" fontSize="xl" mt="4.5rem" minH={500}>
        <VStack spacing={8}>
          <Heading as="h1">JavaScript Interview Questions</Heading>

          <Text>Collection of questions that can help you improve your JavaScript knowledge</Text>

          <Wrap align="center" justify="center">
            <WrapItem>
              <IconCard
                href={questionsRoutes.javascript}
                imageSrc="/icons/javascript.svg"
                alt="JS questions"
              />
            </WrapItem>
            <WrapItem>
              <IconCard
                href={questionsRoutes.react}
                imageSrc="/icons/react.svg"
                alt="ReactJS questions"
              />
            </WrapItem>
            <WrapItem>
              <IconCard
                href={questionsRoutes.angular}
                imageSrc="/icons/angular.svg"
                alt="Angular JS questions"
              />
            </WrapItem>
          </Wrap>
        </VStack>
      </Center>
    </PageLayout>
  );
}
