import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Flex, Heading, Button, VStack, Spacer } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Container maxW="100%" p={4}>
      {/* Navbar */}
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        p={4}
        align="center"
        mb={8}
        borderRadius="md"
      >
        <Heading as="h1" size="lg" color="white">
          Admin Dashboard
        </Heading>
        <Spacer />
        <Button as={Link} to="/attend" colorScheme="white" variant="outline" mr={4}>
          Mark Attendance
        </Button>
        <Button as={Link} to="/summery" colorScheme="white" variant="outline">
          View Attendance Summary
        </Button>
      </Flex>

      
      
    </Container>
  );
};

export default Dashboard;
