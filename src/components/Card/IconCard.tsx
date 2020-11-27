import { Square } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
  imageSrc: string;
  alt: string;
};

export const IconCard = ({ imageSrc, alt }: Props) => {
  return (
    <Square shadow="md" borderWidth="1px" borderRadius={6} size="200px" m={8}>
      <Image src={imageSrc} alt={alt} width={150} height={150} />
    </Square>
  );
};
