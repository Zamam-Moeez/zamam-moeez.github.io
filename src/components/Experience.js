import React from 'react';
import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    Flex,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react';

const milestones = [
    {
        id: 1,
        date: 'May 2024 - Present',
        title: 'Software Engineering Intern',
        company: 'NOV',
    },
    {
        id: 2,
        date: 'January 2023 - August 2023',
        title: 'Software Development Intern',
        company: 'Promise Robotics Inc',
    },
    {
        id: 3,
        date: 'May 2022 - August 2022',
        title: 'Software Development Intern',
        company: 'Promise Robotics Inc',
    },
];

const Experience = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Container maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
            mt={3}
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
                <Flex key={milestone.id} mb="10px" justifyContent="flex-end">
                    <LineWithDot />
                    <Card {...milestone} />
                </Flex>
            ))}
        </Container>
    );
};

const Card = ({ id, title, company, date }) => {
    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.300', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
        >
            <Box width="100%" textAlign="left">
                <Text fontSize="sm" color="black">
                    {date}
                </Text>
                <Text lineHeight={1.2} fontWeight="bold" w="100%" color="black">
                    {title}
                </Text>
                <Text color="black">
                    {company}
                </Text>
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
            ml={{ base: '0', md: '30px' }}
        >
            <chakra.span
                position="absolute"
                left="20%" // Moved line further left
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.400', 'gray.700')}
                top="0px"
                width="2px"
                transform="translateX(-50%)"
            ></chakra.span>
            <Box
                pos="absolute"
                top="50%"
                left="20%" // Moved dot further left
                transform="translate(-50%, -50%)"
                width="8px"
                height="8px"
                bg={useColorModeValue('primary.800', 'gray.200')}
                borderRadius="100px"
                opacity={1}
            ></Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Experience;
