import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { QuestionType } from 'utils/getQuestions';

type Props = {
  language: QuestionType;
  label: string;
  icon: string;
  onClick: () => void;
};

export const LanguageCard = ({ language, label, icon, onClick }: Props) => {
  return (
    <Box
      shadow="sm"
      px={4}
      py={2}
      borderRadius={4}
      border="1px solid"
      borderColor={useColorModeValue(
        language === label.toLowerCase() ? 'gray.500' : 'gray.300',
        'gray.600',
      )}
      _hover={{ shadow: 'md' }}
      transition="all 0.3s"
      bg={useColorModeValue('white', 'gray.700')}
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={onClick}
      minW={150}
    >
      <Image src={icon} alt="Language Logo" width={30} height={30} />
      <Text fontSize="md" ml={2} fontWeight={language === label.toLowerCase() && 'bold'}>
        {label}
      </Text>
    </Box>
  );
};
