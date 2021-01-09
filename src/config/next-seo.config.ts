import { DefaultSeoProps } from 'next-seo';

const title = 'JavaScript Interview Questions';
const description =
  'Collection of questions that can help you improve your JavaScript knowledge and prepare to an interview.';

const config: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_EN',
    url: 'https://iq.js.org/',
    site_name: 'JavaScript Interview Questions',
    images: [
      {
        url: '/banner.png',
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
};

export default config;
