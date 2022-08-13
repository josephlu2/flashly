import { useEffect, useState } from 'react'
import { useSetsContext } from '../../hooks/useSetsContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
    Flex,
    Heading,
    Box,
    Spacer,
    Button,
    Input,
    Text,
    Switch,
    Stack,
    useToast
  } from "@chakra-ui/react";

const ModeWrite = () => {
    const toast = useToast()

    const {sets, dispatch} = useSetsContext()
    const {user, dispatch: authDispatch} = useAuthContext()
    const { id } = useParams();
    const navigate = useNavigate();
    const [cards, setCards] = useState(null)
    const [current, setCurrent] = useState(0)
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [score, setScore] = useState(0)
    const [solution, setSolution] = useState('Enter Answer Here')
    const [stillPlaying, setStillPlaying] = useState(true)
    const [firstTimeCorrect, setFirstTimeCorrect] = useState(true)
    const [options, setOptions] = useState(false)
    const handleChange = (event) => setValue(event.target.value)
    

    useEffect(() => {
        const fetchSet = async () => {
            const response = await fetch('https://quizzleapi.ml/api/sets/' + id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setCards(json)
                console.log(cards)
            } else {
                navigate('/')
            }
        }

        fetchSet()
        
    }, [dispatch, user, id])

    useEffect(() => {
        if (cards) {
            setTitle(cards.cards[current].term)
        }
    }, [cards, current])

    const handleClick = (e) => {
            if (value === cards.cards[current].definition) {
                if (solution === 'Enter Answer Here' && firstTimeCorrect) {
                    setScore(score + 1)
                }
                if (current < cards.cards.length - 1) {
                    setCurrent(current + 1)
                }
                setValue('')
                setSolution('Enter Answer Here')
                setFirstTimeCorrect(true)
            } else {
                toast({
                    title: `Incorrect Answer - Try Again`,
                    position: 'top',
                    isClosable: false,
                    status: 'error',
                    duration: 1500,
                  })
                  setFirstTimeCorrect(false)
            }

            if (current === cards.cards.length - 1) {
                setStillPlaying(false)
                console.log('won')
            }


        console.log(current)
    }

    const handleHintClick = (e) => {
        console.log('hint')
    }

    const handleSolutionClick = (e) => {
        console.log('solution')
        setSolution(cards.cards[current].definition)
    }

    const handleOptionsClick = (e) => {
        setOptions(!options)
    }


    return (
        <Flex align="center" justify="center" w = "100%">
            {cards && (
                <Box flex = "1" align = "center" justify = "center" mt = "10">

                    {!stillPlaying && (<h1>Game Over</h1>)}

                    {stillPlaying && (
                    <Flex flexDir = "column">
                        <Box mb = "10">
                            <Heading size='2xl'>Write Mode</Heading>
                        </Box>

                        <Box bg = "gray.200" pt = "5" pb = "5" w = "75%" borderRadius = "10">
                            <Heading pb = "5" size='xl'>{title}</Heading>
                            <Input
                                bg = "white"
                                borderColor='pink.400'
                                focusBorderColor='pink.400'
                                _hover={{
                                    borderColor: 'pink.400'
                                  }}
                                borderWidth="2px"
                                w = "75%"
                                value={value}
                                onChange={handleChange}
                                placeholder={solution}
                            ></Input>
                            <Box mt = "5" w = {{ base: '175px', md: '400px', lg: '500px' }}>
                                <Button colorScheme='green' onClick = {handleClick}>Submit</Button>
                                <Button mb = "2" mt = "2"colorScheme='yellow' ml = "5" mr = "5" onClick = {handleHintClick}>Hint</Button>
                                <Button colorScheme="red" onClick = {handleSolutionClick}>Show Solution</Button>
                            </Box>
                        </Box>

                        <Box mt = "5">
                            <Text>Current Score: {score} / {cards.cards.length}</Text>
                        </Box>
                    </Flex>
                    )}

                    <Box>
                        <Button mt = "5" onClick = {handleOptionsClick}>{!options ? "Show Options" : "Hide Options"}</Button>
                        {options && (
                            <Stack>
                                <Text>Answer Terms</Text>
                                <Switch></Switch>
                            </Stack>
                        )}
                        
                    </Box>

                </Box>
                
            )}
        </Flex>
    )
}

export default ModeWrite
