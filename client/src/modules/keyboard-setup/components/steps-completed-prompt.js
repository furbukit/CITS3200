import * as React from 'react';

import {
  Box,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Container,
  Link,
} from '@chakra-ui/react';

import { HANGUL_REGEX } from '../../../common/contstants/hangul-regex';
import PropTypes from 'prop-types';

const StepsCompletedPrompt = ({ os }) => {
  const [isKoreanText, setIsKoreanText] = React.useState(null);

  const handleChange = (event) => {
    const lastKeyPressed = event.target.value[event.target.value.length - 1];

    lastKeyPressed
      ? setIsKoreanText(Boolean(lastKeyPressed.match(HANGUL_REGEX)))
      : setIsKoreanText(null);
  };

  return (
    <Box pt="8">
      <VStack>
        <Heading textAlign="center" as="h2" size="md">
          Woohoo! You have completed the keyboard setup instructions for {os} 🥳
        </Heading>
        {isKoreanText !== null ? (
          isKoreanText ? (
            <Container>
              <Text textAlign="center">
                Everything looks setup correctly! Have fun practicing your
                korean typing skills!
              </Text>
              <Link href="/practice">
                <Button
                  top="400px"
                  left="45vw"
                  right="45vw"
                  position="absolute">
                  Continue to Practice!
                </Button>
              </Link>
            </Container>
          ) : (
            <Text textAlign="center">
              Oh no! Looks like the was an error setting up your keyboard 😞
            </Text>
          )
        ) : (
          <Text textAlign="center">
            Type in the text box below to check your keyboard is setup properly!
          </Text>
        )}
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          w={{ base: 'sm', md: 'md' }}
          boxShadow={'lg'}
          paddingBottom={4}
          px={4}
          paddingTop={4}>
          <Stack spacing={4}>
            <Input onChange={handleChange} />
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
};

StepsCompletedPrompt.propTypes = {
  os: PropTypes.string,
};

export default StepsCompletedPrompt;
