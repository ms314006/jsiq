import { Square, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  imageSrc: string;
  alt: string;
  href: string;
  title: string;
};

export const IconCard = ({ imageSrc, alt, href, title }: Props) => {
  return (
    <Link href={href} passHref>
      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Square
          shadow="md"
          borderWidth="1px"
          borderRadius={4}
          size="150px"
          m={4}
          p={4}
          flexDirection="column"
        >
          <Image src={imageSrc} alt={alt} width={60} height={60} />
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            {title}
          </Text>
        </Square>
      </motion.a>
    </Link>
  );
};
