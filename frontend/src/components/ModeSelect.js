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

      <Link to="./flashcard">
        <Box flex="1" p={4} mb = {4} borderWidth = "3px" borderColor='black' borderRadius = "10">
          <Heading textAlign = "center" as="h3" size="2xl">Flashcard Mode</Heading>
        </Box>
      </Link>

      <Link to="./write">
        <Box flex="1" p={4} mb = {4} borderWidth = "3px" borderColor='black'   borderRadius = "10">
          <Heading textAlign = "center" as="h3" size="2xl">Write Mode</Heading>
        </Box>
      </Link>
      <Box flex="1" p={4} borderWidth = "3px" borderColor='black'  borderRadius = "10" bgGradient = 'linear(to-r, pink.500, pink.300, blue.500)' bgClip='text'>
        <Heading textAlign = "center" as="h3" size="2xl">Quizzle Mode</Heading>
      </Box>
    </Flex>
  )
}

export default ModeSelect
