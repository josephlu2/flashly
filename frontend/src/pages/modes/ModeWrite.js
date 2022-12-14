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
    useToast,
    HStack
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
    const [answerState, setAnswerState] = useState(false)
    

    useEffect(() => {
        const fetchSet = async () => {
            const response = await fetch('https://quizzleapi.ml/api/sets/' + id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setCards(json.cards)
                console.log(cards)
            } else {
                navigate('/')
            }
        }

        fetchSet()
        
    }, [dispatch, user, id])

    useEffect(() => {
        if (cards) {
            setTitle(cards[current].term)
        }
    }, [cards, current])

    const handleClick = (e) => {
            if (value === cards[current].definition) {
                if (solution === 'Enter Answer Here' && firstTimeCorrect) {
                    setScore(score + 1)
                }
                if (current < cards.length - 1) {
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

            if (current === cards.length - 1) {
                setStillPlaying(false)
                console.log('won')
            }


        console.log(current)
    }

    const handleHintClick = (e) => {
        console.log('hint')
        setValue('')
        setSolution(cards[current].definition.slice(0, cards[current].definition.length / 3) + ''.padEnd(cards[current].definition.length / 3 * 2, '_'))
    }

    const handleSolutionClick = (e) => {
        setValue('')
        setSolution(cards[current].definition)
    }

    const handleOptionsClick = (e) => {
        setOptions(!options)
    }

    const handleSwitchChange = (e) => {
        //map through cards and set each card's term to the definition and vice versa
        setAnswerState(!answerState)
        setCards(cards.map(card => {
            return {
                term: card.definition,
                definition: card.term
            }
        }
        ))
    }

    const handleSwitchRandomChange = (e) => {
        //shuffle cards
        setCards(cards.sort(() => Math.random() - 0.5))
        setTitle(cards[current].term)
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
                            <Text>Current Score: {score} / {cards.length}</Text>
                        </Box>
                    </Flex>
                    )}

                    <Box>
                        <Button mt = "5" onClick = {handleOptionsClick}>{!options ? "Show Options" : "Hide Options"}</Button>
                        {options && (
                            <Stack mt = "5" bg = "gray.100" w = "30%" borderRadius = "10">
                                <HStack justify = "center">
                                    <Stack mr = "10">
                                        <Text pt = "5">Answer Terms</Text>
                                        <Switch pb = "5" isChecked = {answerState} onChange = {handleSwitchChange} ></Switch>
                                    </Stack>
                                    <Stack ml = "10">
                                        <Text pt = "5">Uppercase Check</Text>
                                        <Switch pb = "5" isChecked = {answerState} onChange = {handleSwitchChange} ></Switch>
                                    </Stack>
                                </HStack>
                                <Button mb = "5" colorScheme='teal' variant='solid'  onClick = {handleSwitchRandomChange} >Click to Randomize</Button>
                            </Stack>
                        )}
                        
                    </Box>

                </Box>
                
            )}
        </Flex>
    )
}

export default ModeWrite
