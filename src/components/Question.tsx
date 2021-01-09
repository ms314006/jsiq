import { NextSeo } from 'next-seo';
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
  url: string;
}

export default function Question({
  source,
  frontMatter,
  nextLink,
  prevLink,
  pagesMeta,
  url,
}: Props) {
  const content = hydrate(source, { components: MDXComponents });

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        canonical={url}
        openGraph={{ title: frontMatter.title, url }}
        additionalMetaTags={[
          {
            property: 'title',
            content: frontMatter.title,
          },
          {
            property: 'twitter:title',
            content: frontMatter.title,
          },
          {
            property: 'twitter:url',
            content: url,
          },
        ]}
      />
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
