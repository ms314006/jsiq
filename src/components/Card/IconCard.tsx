import { Square } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  imageSrc: string;
  alt: string;
  href: string;
};

export const IconCard = ({ imageSrc, alt, href }: Props) => {
  return (
    <Link href={href} passHref>
      <a>
        <Square shadow="md" borderWidth="1px" borderRadius={6} size="150px" m={8}>
          <Image src={imageSrc} alt={alt} width={100} height={100} />
        </Square>
      </a>
    </Link>
  );
};
