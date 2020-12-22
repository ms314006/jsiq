import { PageLayout } from 'components/PageLayout';
import {
  FrontMatter,
  getAllQuestionsMeta,
  getQuestionBySlug,
  NextLink,
  PageMeta,
  PrevLink,
  QuestionProps,
} from 'utils/getQuestions';
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
  pagesMeta: PageMeta[];
  nextLink: NextLink;
  prevLink: PrevLink;
}

export default function Overview({ source, frontMatter, nextLink, prevLink, pagesMeta }: Props) {
  const content = hydrate(source, { components: MDXComponents });

  return (
    <PageLayout
      sidebar={<Sidebar pagesMeta={pagesMeta} />}
      pageNav={<PrevNextNav nextLink={nextLink} prevLink={prevLink} />}
      footer={<Footer editPageHref={frontMatter.editLink} />}
      frontMatter={frontMatter}
    >
      {content}
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data, content, pagesMeta, nextLink, prevLink } = getQuestionBySlug(params.id as string);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    scope: data,
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
  const questions = getAllQuestionsMeta();

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
