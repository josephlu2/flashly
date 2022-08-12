import { Link } from 'react-router-dom'
import {
  Flex,
  Heading,
  Box,
  Spacer,
} from "@chakra-ui/react";

const ModeSelect = () => {
  
  return (
    <Flex flexDir = "column" mt = "16" mr = "8">
      <Box flex="1" p={4} mb = {4} borderWidth = "3px" borderColor='black'  borderRadius = "10">
        <Heading textAlign = "center" as="h3" size="2xl">Flashcard Mode</Heading>
      </Box>
      <Box flex="1" p={4} mb = {4} borderWidth = "3px" borderColor='black'   borderRadius = "10">
        <Heading textAlign = "center" as="h3" size="2xl">Write Mode</Heading>
      </Box>
      <Box flex="1" p={4} borderWidth = "3px" borderColor='black'  borderRadius = "10">
        <Heading textAlign = "center" as="h3" size="2xl">Quizzie Mode</Heading>
      </Box>
    </Flex>
  )
}

export default ModeSelect
