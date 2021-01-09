import { FrontMatter, getAllQuestionsMeta, getQuestionBySlug } from 'utils/getQuestions';
import { GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from 'components/mdComponents';
import Question from 'components/Question';
import { BASE_URL } from 'config/links';

export default Question;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, content, pagesMeta, nextLink, prevLink } = getQuestionBySlug(
    params.id as string,
    'react',
  );

  const scope: { [key: string]: any } = data;

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    scope,
  });

  const url = `${BASE_URL}questions/react/${data.slug}`;

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      pagesMeta,
      nextLink,
      prevLink,
      url,
    },
  };
};

export async function getStaticPaths() {
  const questions = getAllQuestionsMeta('react');

  return {
    paths: questions.map((item: FrontMatter) => {
      return {
        params: {
          id: `${item.slug}`,
        },
      };
    }),
    fallback: false,
  };
}
