import { Container, Stack, ButtonGroup, IconButton, Text, Link } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => (
  <Container maxW={'100%'} as="footer" role="contentinfo" py={{ base: '8', md: '8' }} bg='white' color={'primary.800'}>
    <Stack justify="center" spacing={{ base: '4', md: '5' }}>
      <Stack justify="center" direction="row" align="center">
        <ButtonGroup justifyContent={'center'} alignItems={'center'} variant='ghost' spacing={1.9}>
          <Link href="mailto:zmoeez@outlook.com" isExternal>
            <IconButton
              _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
              icon={<FaEnvelope size={24} />}
            />
          </Link>
          <Link href="https://github.com/zamam-moeez" isExternal>
            <IconButton
              _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
              icon={<FaGithub size={24} />}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/zamam-moeez" isExternal>
            <IconButton
              _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
              icon={<FaLinkedin size={24} />}
            />
          </Link>
        </ButtonGroup>
      </Stack>
      <Text textAlign={'center'} fontSize='20px' fontWeight={'bold'} color='gray.600'>Zamam Moeez</Text>
    </Stack>
  </Container>
);