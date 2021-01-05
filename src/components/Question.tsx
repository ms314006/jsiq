import { PageLayout } from 'components/PageLayout';
import { FrontMatter, NextLink, PageMeta, PrevLink } from 'utils/getQuestions';
import hydrate from 'next-mdx-remote/hydrate';

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
    <PageLayout
      sidebar={<Sidebar pagesMeta={pagesMeta} />}
      pageNav={<PrevNextNav nextLink={nextLink} prevLink={prevLink} />}
      footer={<Footer editPageHref={frontMatter.editLink} />}
      frontMatter={frontMatter}
      pagesMeta={pagesMeta}
    >
      {content}
    </PageLayout>
  );
}
