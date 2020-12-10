import { PageLayout } from 'components/PageLayout';
import { FrontMatter, getAllQuestions, getQuestionBySlug } from 'utils/getQuestions';
import { GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import MDXComponents from 'components/mdComponents';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { PrevNextNav } from 'components/PrevNextNav';
import React from 'react';
import { Footer } from 'components/Footer';

interface Props {
  source: string;
  frontMatter: FrontMatter;
}

export default function Overview({ source, frontMatter }: Props) {
  const content = hydrate(source, { components: MDXComponents });

  return (
    <PageLayout
      sidebar={<Sidebar />}
      pageNav={<PrevNextNav />}
      footer={<Footer editPageHref={frontMatter.editLink} />}
      frontMatter={frontMatter}
    >
      {content}
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data }: any = getQuestionBySlug(params.id);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export async function getStaticPaths() {
  const questions = getAllQuestions();

  return {
    paths: questions.map((item: any) => {
      return {
        params: {
          id: `${item.data.id}`,
        },
      };
    }),
    fallback: false,
  };
}
