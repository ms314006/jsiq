import { NextSeo } from 'next-seo';
import Head from 'next/head';
import hydrate from 'next-mdx-remote/hydrate';
import { PageLayout } from 'components/PageLayout';
import { FrontMatter, NextLink, PageMeta, PrevLink } from 'utils/getQuestions';

import MDXComponents from 'components/mdComponents';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { PrevNextNav } from 'components/PrevNextNav';
import { Footer } from 'components/Footer';

interface Props {
  source: string;
  frontMatter: FrontMatter;
  pagesMeta: PageMeta[];
  nextLink: NextLink;
  prevLink: PrevLink;
}

export default function Question({ source, frontMatter, nextLink, prevLink, pagesMeta }: Props) {
  const content = hydrate(source, { components: MDXComponents });

  return (
    <>
      <NextSeo title={frontMatter.title} openGraph={{ title: frontMatter.title }} />
      <PageLayout
        sidebar={<Sidebar pagesMeta={pagesMeta} />}
        pageNav={<PrevNextNav nextLink={nextLink} prevLink={prevLink} />}
        footer={<Footer editPageHref={frontMatter.editLink} authorHref={frontMatter.original} />}
        frontMatter={frontMatter}
        pagesMeta={pagesMeta}
        title={frontMatter.title}
      >
        {content}
      </PageLayout>
    </>
  );
}
