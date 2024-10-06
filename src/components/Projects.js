import React from 'react';
import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Tag,
    Link
} from '@chakra-ui/react';

const milestones = [
    {
        id: 1,
        date: 'September 2024',
        title: 'Weld Defect Detection Model',
        description: `Developed a deep learning model for weld defect detection, achieving 96% accuracy 
                      on a dataset of 24,000 radiographic images. Created a data pipeline for streamlined 
                      ingestion from the RIAWELC dataset into a Convolutional Neural Network.`,
        link: 'https://github.com/WeldDefectDC/WeldDefectCNN'
    },
    {
        id: 2,
        date: 'December 2023',
        title: 'BreadHeads Inventory Manager',
        description: `Collaborated with a team to create an Android application for inventory management, 
                      utilizing Java and Google Firebase. Implemented user authentication and back-end 
                      features for secure data handling and user profile management.`,
        link: 'https://github.com/CMPUT301F23T09/Bread-Heads'
    },
    {
        id: 3,
        date: 'January 2022',
        title: 'Diabetes Diagnosis Model',
        description: `Developed a predictive model using TensorFlow to diagnose diabetes based on eight 
                      features from a Kaggle dataset, achieving an accuracy of 80% in predictions.`,
        link: 'https://github.com/Zamam-Moeez/Projects/tree/main/Diabetes%20Diagnosis'
    }
];

const Projects = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
            my={2}
            css={{
                '&::-webkit-scrollbar': {
                    marginTop: '8px',
                    width: '8px',
                    height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    marginTop: '8px',
                    width: '2px',
                    height: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    marginTop: '8px',
                    background: '#121212',
                    borderRadius: '12px',
                },
            }}
        >

            {milestones.map((milestone) => (
                <Flex key={milestone.id} mb="10px">
                    {isDesktop && milestone.id % 2 === 0 && (
                        <>
                            <EmptyCard />
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}
                    {isMobile && (
                        <>
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}
                    {isDesktop && milestone.id % 2 !== 0 && (
                        <>
                            <Card {...milestone} />
                            <LineWithDot />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};

const Card = ({ id, title, description, date, link }) => {
    const isEvenId = id % 2 === 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
        borderWidthValue = '15px 15px 15px 0';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.300', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>
                <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
                    {date}
                </Text>

                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    </chakra.h1>
                    <Text fontSize="sm">{description}</Text>
                </VStack>

                <Link href={link} color="teal.500" isExternal>
                    View Project
                </Link>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.400', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="8px"
                    height="8px"
                    bg={useColorModeValue('primary.800', 'gray.200')}
                    borderRadius="100px"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Projects;
