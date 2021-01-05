import { FrontMatter, getAllQuestionsMeta, getQuestionBySlug } from 'utils/getQuestions';
import { GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from 'components/mdComponents';
import Question from 'components/Question';

export default Question;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, content, pagesMeta, nextLink, prevLink } = getQuestionBySlug(
    params.id as string,
    'javascript',
  );

  const scope: { [key: string]: any } = data;

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    scope,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      pagesMeta,
      nextLink,
      prevLink,
    },
  };
};

export async function getStaticPaths() {
  const questions = getAllQuestionsMeta('javascript');

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
