import React from 'react'
import { Box, Container, Flex, Heading, Text, Wrap } from '@chakra-ui/react'
import Projects from './Projects'
import CustomSkillTag from './utils/CustomSkillTag'
import FrameworkTag from './utils/FrameworkTag'
import ToolTag from './utils/ToolTag'

export default function SkillsProjects() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>

            <Flex id = 'projects' width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>

                <Box me={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Projects
                    </Heading>
                    <Projects />
                </Box>


                <Flex id='skills' width={['md', 'md', 'md']} flexDir={'column'} justifyContent='start' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>

                    <Heading textAlign={'start'}>Skills</Heading>

                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Programming Languages</Heading>

                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
                        {/* Icons  */}

                        <Wrap>
                            <CustomSkillTag skill={'C#'} />
                            <CustomSkillTag skill={'C++'} />
                            <CustomSkillTag skill={'C#'} />
                            <CustomSkillTag skill={'Python'} />
                            <CustomSkillTag skill={'Java'} />
                            <CustomSkillTag skill={'JavaScript'} />
                            <CustomSkillTag skill={'TypeScript'} />
                            <CustomSkillTag skill={'SQL'} />
                            <CustomSkillTag skill={'HTML'} />
                            <CustomSkillTag skill={'CSS'} />
                        </Wrap>
                    </Box>
                    <Box my={2}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}> Frameworks and Libraries</Heading>
                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
                        <Wrap>
                            <FrameworkTag skill={'Angular JS'} />
                            <FrameworkTag skill={'React JS'} />
                            <FrameworkTag skill={'Node JS'} />
                            <FrameworkTag skill={'Django'} />
                            <FrameworkTag skill={'.NET'} />
                            <FrameworkTag skill={'TensorFlow'} />
                            <FrameworkTag skill={'PyTorch'} />
                            <FrameworkTag skill={'Keras'} />
                            <FrameworkTag skill={'Amazon Boto3'} />
                            <FrameworkTag skill={'OpenCV'} />

                        </Wrap>

                    </Box>
                    <Box my={5}>
                        <Heading textAlign={'start'} as='h4' fontSize={'lg'}>Tools</Heading>

                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />

                        <Wrap>
                            <ToolTag skill={'Git'} />
                            <ToolTag skill={'MongoDB'} />
                            <ToolTag skill={'Google Firebase'} />
                            <ToolTag skill={'Amazon S3'} />
                            <ToolTag skill={'Amazon Web Services'} />
                            <ToolTag skill={'Amazon SageMaker'} />
                        </Wrap>

                    </Box>
                </Flex>
            </Flex>
        </Container>
    )
}
