import { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Center,
  Link as ChakraLink,
  useColorModeValue,
  Wrap,
  WrapItem,
  chakra,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
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
  const router = useRouter();
  const { type } = router.query;
  const [language, setLanguage] = useState<QuestionType>('javascript');
  const [questionsList, setList] = useState<FrontMatter[]>([]);

  const languageHandler = useCallback(
    (typeLang: QuestionType) => {
      setLanguage(typeLang || 'javascript');
      setList(questions[(typeLang as string) || 'javascript']);
    },
    [questions],
  );

  useEffect(() => {
    languageHandler(type as QuestionType);
  }, [languageHandler, type]);

  return (
    <PageLayout>
      <Box minH="calc(100vh - 4.5rem - 101px)" mb={10}>
        <Heading as="h1" textAlign="center">
          Questions
        </Heading>

        <Wrap mt={6} align="center" justify="center">
          <WrapItem>
            <LanguageCard
              onClick={() => languageHandler('javascript')}
              language={language}
              icon="/icons/javascript.svg"
              label="JavaScript"
            />
          </WrapItem>

          <WrapItem>
            <LanguageCard
              onClick={() => languageHandler('react')}
              language={language}
              icon="/icons/react.svg"
              label="React"
            />
          </WrapItem>

          <WrapItem>
            <LanguageCard
              onClick={() => languageHandler('angular')}
              language={language}
              icon="/icons/angular.svg"
              label="Angular"
            />
          </WrapItem>
        </Wrap>

        <Center>
          <Wrap spacing={8} mt={10} align="center" justify="center">
            {questionsList.map((item) => (
              <WrapItem>
                <Link
                  key={item.id}
                  href={`/questions/${language || 'javascript'}/${item.slug}`}
                  passHref
                >
                  <ChakraLink fontSize={16} display="block" aria-label="JSIQ, Back to homepage">
                    <Box
                      shadow="sm"
                      px={6}
                      py={4}
                      w={300}
                      minH={150}
                      borderRadius={4}
                      border="1px solid"
                      borderColor={useColorModeValue('gray.300', 'gray.600')}
                      _hover={{ shadow: 'md' }}
                      transition="all 0.3s"
                      bg={useColorModeValue('white', 'gray.700')}
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
