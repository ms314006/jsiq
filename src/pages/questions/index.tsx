import { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Center,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PageLayout } from 'components/PageLayout';
import { getAllQuestionsMeta, FrontMatter } from 'utils/getQuestions';

interface Props {
  questions: {
    javascript: FrontMatter[];
    react: FrontMatter[];
    angular: FrontMatter[];
  };
}

export default function Questions({ questions }: Props) {
  const router = useRouter();
  const { type } = router.query;
  const [questionsList, setList] = useState<FrontMatter[]>([]);

  useEffect(() => {
    setList(questions[(type as string) || 'javascript']);
  }, [questions, type]);

  return (
    <PageLayout>
      <Box minH="calc(100vh - 4.5rem - 101px)" mb={10}>
        <Heading as="h1" textAlign="center">
          Overview
        </Heading>

        <Center>
          <VStack spacing={8} mt={10} align="stretch">
            {questionsList.map((item) => (
              <Link key={item.id} href={`/questions/${type || 'javascript'}/${item.slug}`} passHref>
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
  const javascript = getAllQuestionsMeta('javascript');
  const react = getAllQuestionsMeta('react');
  const angular = getAllQuestionsMeta('angular');

  const questions = { javascript, react, angular };

  return {
    props: { questions },
  };
};
