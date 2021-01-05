import { Square } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  imageSrc: string;
  alt: string;
};

export const IconCard = ({ imageSrc, alt }: Props) => {
  return (
    <Square shadow="md" borderWidth="1px" borderRadius={6} size="150px" m={8}>
      <Image src={imageSrc} alt={alt} width={100} height={100} />
    </Square>
  );
};
