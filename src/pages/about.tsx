import { Box, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import { PageLayout } from 'components/PageLayout';
import { TwitterBlock } from 'components/TwitterBlock';
import { getAllQuestionsMeta } from 'utils/getQuestions';

type Props = {
  questionsCount: number;
};

export default function About({ questionsCount }: Props) {
  return (
    <PageLayout title="About">
      <Box textAlign="center" fontSize="xl" minH="calc(100vh - 5.5rem)">
        <Flex direction="column" align="center" justify="space-between" minH="calc(100vh - 5.5rem)">
          <VStack spacing={8} pt="50px">
            <Heading as="h1">About</Heading>

            <Text>
              <b>JavaScript Interview Questions</b> is a collection of questions that can help you
              improve your JavaScript knowledge and prepare to an interview.
            </Text>

            <Box px={6} py={4} border="1px solid" borderColor="gray.400" borderRadius={4}>
              <Text>Count of questions</Text>
              <Text fontWeight="bold" fontSize="4xl">
                {questionsCount}
              </Text>
            </Box>
          </VStack>

          <TwitterBlock />
        </Flex>
      </Box>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const javascript = getAllQuestionsMeta('javascript');
  const react = getAllQuestionsMeta('react');
  const angular = getAllQuestionsMeta('angular');

  const questionsCount = javascript.length + react.length + angular.length;

  return {
    props: { questionsCount },
  };
};
