import { useState } from 'react';
import {
  Box,
  Heading,
  Center,
  Link as ChakraLink,
  useColorModeValue,
  Wrap,
  WrapItem,
  chakra,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PageLayout } from 'components/PageLayout';
import { getAllQuestionsMeta, FrontMatter, QuestionType } from 'utils/getQuestions';
import { LanguageCard } from 'components/Card/LanguageCard';

interface Props {
  questions: {
    javascript: FrontMatter[];
    react: FrontMatter[];
    angular: FrontMatter[];
  };
}

export default function Questions({ questions }: Props) {
  const { query } = useRouter();
  const [language, setLanguage] = useState<QuestionType>(
    (query.type as QuestionType) || 'javascript',
  );

  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const bg = useColorModeValue('white', 'gray.700');

  return (
    <PageLayout>
      <Box minH="calc(100vh - 4.5rem - 101px)" mb={10}>
        <Heading as="h1" textAlign="center">
          Questions
        </Heading>

        <Wrap mt={6} align="center" justify="center">
          <WrapItem>
            <LanguageCard
              onClick={() => setLanguage('javascript')}
              language={language}
              icon="/icons/javascript.svg"
              label="JavaScript"
            />
          </WrapItem>

          <WrapItem>
            <LanguageCard
              onClick={() => setLanguage('react')}
              language={language}
              icon="/icons/react.svg"
              label="React"
            />
          </WrapItem>

          <WrapItem>
            <LanguageCard
              onClick={() => setLanguage('angular')}
              language={language}
              icon="/icons/angular.svg"
              label="Angular"
            />
          </WrapItem>
        </Wrap>

        <Center>
          <Wrap spacing={8} mt={10} align="center" justify="center">
            {questions[language].map((item) => (
              <WrapItem key={item.id}>
                <Link href={`/questions/${language || 'javascript'}/${item.slug}`} passHref>
                  <ChakraLink fontSize={16} display="block" aria-label="JSIQ, Back to homepage">
                    <Box
                      shadow="sm"
                      px={6}
                      py={4}
                      w={300}
                      minH={150}
                      borderRadius={4}
                      border="1px solid"
                      borderColor={borderColor}
                      _hover={{ shadow: 'md' }}
                      transition="all 0.3s"
                      bg={bg}
                    >
                      <chakra.p fontSize="sm" fontWeight="bold">
                        {item.id}. {item.title}
                      </chakra.p>
                    </Box>
                  </ChakraLink>
                </Link>
              </WrapItem>
            ))}
          </Wrap>
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
