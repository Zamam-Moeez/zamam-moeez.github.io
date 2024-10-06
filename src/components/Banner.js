import { Box, Container, Flex, Heading, HStack, IconButton, Image, Text, VStack, Link } from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Experience from './Experience';

export default function Banner() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex id='about-me' width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'stretch'} flexDir={['column', 'column', 'row', 'row']}>
                <Flex width={['md', 'md', '2xl']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='1xl' minHeight={'xl'} borderRadius='3xl' p='10' mb={10} height="100%">
                    <Box>
                        <Flex alignItems={'center'} justifyContent='center'>
                            <Image borderColor={'gray.100'} src='https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png' width='32' />
                        </Flex>

                        <Heading textAlign={'center'}>Zamam Moeez</Heading>

                        <Text fontSize={'sm'} textAlign='center'>
                            I am a 5th-year Software Engineering student at the University of Alberta, graduating in April 2025. Currently, I am honing my skills as a Software Engineering Intern at NOV.
                            My interests include full-stack development, data engineering, and machine learning. I am passionate about using software to solve real-world challenges and make a meaningful impact.
                            You can explore my projects, get insights into my journey and my skills on this website. I am also exploring opportunities starting in May 2025.
                        </Text>

                        <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box me={2}>
                                    <Link href="mailto:zmoeez@outlook.com" isExternal>
                                        <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}>
                                            <FaEnvelope />
                                        </IconButton>
                                    </Link>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Link href="mailto:zmoeez@outlook.com" isExternal>
                                        <Text fontWeight={'600'}>zmoeez@outlook.com</Text>
                                    </Link>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <Link href="https://github.com/zamam-moeez" isExternal>
                                        <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}>
                                            <FaGithub />
                                        </IconButton>
                                    </Link>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Link href="https://github.com/zamam-moeez" isExternal>
                                        <Text fontWeight={'600'}>Zamam-Moeez</Text>
                                    </Link>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <Link href="https://www.linkedin.com/in/zamam-moeez" isExternal>
                                        <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}>
                                            <FaLinkedin />
                                        </IconButton>
                                    </Link>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Linkedin</Text>
                                    <Link href="https://www.linkedin.com/in/zamam-moeez" isExternal>
                                        <Text fontWeight={'600'}>Zamam Moeez</Text>
                                    </Link>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Box>
                </Flex>
                <Flex id="work-experience" ms={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'xl'} borderRadius='3xl' p='10' mb={10} height="100%">
                    <Heading>
                        Work Experience
                    </Heading>
                    <Experience />
                </Flex>
            </Flex>
        </Container>
    );
}
