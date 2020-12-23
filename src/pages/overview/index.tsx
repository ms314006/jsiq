import {
  Box,
  VStack,
  Heading,
  Center,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { PageLayout } from 'components/PageLayout';
import { getAllQuestionsMeta, FrontMatter } from 'utils/getQuestions';
import Link from 'next/link';

interface Props {
  questions: FrontMatter[];
}

export default function Overview({ questions }: Props) {
  return (
    <PageLayout>
      <Box minH="calc(100vh - 4.5rem - 101px)" mb={10}>
        <Heading as="h1" textAlign="center">
          Overview
        </Heading>

        <Center>
          <VStack spacing={8} mt={10} align="stretch">
            {questions.map((item) => (
              <Link key={item.id} href={`/overview/${item.slug}`} passHref>
                <ChakraLink fontSize={16} display="block" aria-label="JSIQ, Back to homepage">
                  <Box
                    shadow="md"
                    px={6}
                    py={4}
                    w="100%"
                    borderRadius={10}
                    _hover={{ shadow: 'xl' }}
                    transition="all 0.3s"
                    bg={useColorModeValue('white', 'gray.700')}
                  >
                    {item.id}. {item.title}
                  </Box>
                </ChakraLink>
              </Link>
            ))}
          </VStack>
        </Center>
      </Box>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const questions = getAllQuestionsMeta();

  return {
    props: { questions },
  };
};
