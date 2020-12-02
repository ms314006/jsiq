import { Box, VStack, Heading, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { getAllQuestions } from 'utils/getQuestions';
import Link from 'next/link';

interface Props {
  cookies?: string;
  allPosts: any;
}

export default function Overview({ allPosts }: Props) {
  return (
    <Layout>
      <Box mt="4.5rem" minH="calc(100vh - 4.5rem - 101px)" pt="50px">
        <Heading as="h1" textAlign="center">
          Overview
        </Heading>

        <Flex>
          <VStack spacing={8} mt={10}>
            {allPosts.map((item) => (
              <Link key={item.data.id} href={`/overview/${item.data.id}`} passHref>
                <ChakraLink fontSize={16} display="block" aria-label="JSIQ, Back to homepage">
                  {item.data.title}
                </ChakraLink>
              </Link>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllQuestions();

  return {
    props: { allPosts },
  };
};
