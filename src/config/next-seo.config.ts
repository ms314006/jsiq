import { DefaultSeoProps } from 'next-seo';
import { BASE_URL } from './links';

const title = 'JavaScript Interview Questions';
const description =
  'Collection of questions that can help you improve your JavaScript knowledge and prepare to an interview.';

const config: DefaultSeoProps = {
  title,
  description,
  canonical: BASE_URL,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_EN',
    url: BASE_URL,
    site_name: 'JavaScript Interview Questions',
    images: [
      {
        url: `${BASE_URL}banner.png`,
        width: 800,
        height: 600,
        alt: 'JSIQ banner',
      },
    ],
  },
  twitter: {
    handle: '@MikhailSakhnyuk',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      property: 'title',
      content: title,
    },
    {
      property: 'twitter:url',
      content: BASE_URL,
    },
    {
      property: 'twitter:image',
      content: `${BASE_URL}banner.png`,
    },
    {
      property: 'twitter:image:src',
      content: `${BASE_URL}banner.png`,
    },
    {
      property: 'twitter:image:alt',
      content: 'JSIQ',
    },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: description,
    },
  ],
};

export default config;
