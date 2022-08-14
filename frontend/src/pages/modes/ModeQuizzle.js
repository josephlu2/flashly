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
    Progress
  } from "@chakra-ui/react";


const ModeQuizzle = () => {

    const toast = useToast()
    const {sets, dispatch} = useSetsContext()
    const {user, dispatch: authDispatch} = useAuthContext()
    const { id } = useParams();
    const navigate = useNavigate();
    const [cards, setCards] = useState(null)
    const [current, setCurrent] = useState(null)
    const [currentCards, setCurrentCards] = useState([])
    const [currentNum, setCurrentNum] = useState(0)
    const [gamemode, setGamemode] = useState('flashcard')
    const [answerChoices, setAnswerChoices] = useState([])
    const [currentArray, setCurrentArray] = useState(0)
    const [totalIndex, setTotalIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [gameover, setGameover] = useState(false)
    const [progress, setProgress] = useState(0)

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
            } else {
                navigate('/')
            }
        }

        fetchSet()
        
    }, [dispatch, user, id])

    useEffect(() => {
        if (cards) {
            setIsLoading(true)
            setCurrentCards(cards.slice(currentArray, currentArray + 8)) 
            setCurrent(currentCards[currentNum])
            const choicer = currentCards.sort(() => Math.random() - 0.5).slice(0, 4)
            // if current card is not in choicer, add it and remove the first one
            if (!choicer.includes(current)) {
                choicer.push(current)
                choicer.shift()
                choicer.sort(() => Math.random() - 0.5)
            }
            setAnswerChoices(choicer)
            setProgress(totalIndex / (cards.length * 2 - 1) * 100)
            console.log(progress)
            setIsLoading(false)
        }

    }, [cards,currentNum,isLoading, currentArray, current, progress])

    //create a component that displays the current card
    const Flashcard = () => {
        if (current) {
            return (
                <Box bg = "gray.100" w = "50%" borderRadius = "10" mt = "10" p = "10">
                    <Heading as="h1" size="xl">{current.term}</Heading>
                    <Heading mt = "5" as="h1" size="lg">{current.definition}</Heading>
                </Box>
            )
        }
    }

    const handleIncorrectClick = (e) => {
        toast({
            title: `Incorrect - Try Again`,
            position: 'top',
            isClosable: false,
            status: 'error',
            duration: 1500,
          })
    }

    const handleCorrectClick = (e) => {
        toast({
            title: `Correct!`,
            position: 'top',
            isClosable: false,
            status: 'success',
            duration: 1500,
          })
          handleNextClick()
    }

    const Quiz = () => {

        //set answerchoices to four random cards from the current array

        if (current) {
            return (
                <Box bg = "gray.100" w = "50%" borderRadius = "10" mt = "10">
                    <Heading pt = "5" as="h1" size="md">Click the matching term:</Heading>
                    <Heading as="h1" size="xl">{current.term}</Heading>
                    <Box display = "flex" flexDirection = "column" justifyContent = "space-between" mt = "10">
                        {answerChoices.map((choice, index) => {
                            const len = choice.definition.length
                            if (choice.definition === current.definition) {
                                console.log('match')
                                
                                console.log(len)
                                return (
                                    <Button
                                    ml = "5" 
                                    mr = "2"
                                    mb = "5"
                                    p="40px"
                                    style={{
                                         whiteSpace: "normal",
                                         wordWrap: "break-word",
                                    }} 
                                    colorScheme='teal' 
                                    onClick = {handleCorrectClick} 
                                    key = {index}>
                                        {choice.definition}
                                    </Button>
                                )
                            } else {
                                return (
                                    <Button 
                                        ml = "5" 
                                        mr = "2"
                                        mb = "5"
                                        p="40px"
                                        style={{
                                            whiteSpace: "normal",
                                            wordWrap: "break-word",
                                        }} 
                                        colorScheme='teal' 
                                        onClick = {handleIncorrectClick} 
                                        key = {index}>
                                            
                                        {choice.definition}
                                    </Button>
                                )
                            }
                            })}
                    </Box>
                </Box>
            )
        }
    }

    const handleNextClick = (e) => {
        const maxLength = cards.length
        
        if (totalIndex < maxLength * 2 - 1) {
            setTotalIndex(totalIndex + 1)
        } else {
            setGameover(true)
        }

        if (currentNum < currentCards.length - 1) {
            setCurrentNum(currentNum + 1)
        } else {
            setCurrentNum(0)
            if (gamemode === 'quiz') {
                setCurrentArray(Math.floor(currentArray + 8))
            } else {
            }
            switchModes()
        }

    }

    const switchModes = (e) => {
        if (gamemode === 'flashcard') {
            setGamemode('quiz')
        } else {
            setGamemode('flashcard')
        }
    }


    

 
    return (
        <Flex align="center" justify="center" w = "100%">
            {cards && (
                <Box flex = "1" align = "center" justify = "center" mt = "10">

                    <Flex flexDir = "column">
                        <Box mb = "10">
                            {!gameover && <Heading size='2xl'>Quizzle Mode</Heading>}
                            {!gameover && <Progress mt = "5" w = "50%" colorScheme='green' size='md' value={progress} />}
                            {!gameover && (gamemode === "flashcard") && !isLoading && <Flashcard />}
                            {!gameover && (gamemode === "quiz") && <Quiz />}
                            {!gameover && (gamemode === "flashcard") && <Button onClick = {handleNextClick} mt = "10">Next Term</Button>}
                            {gameover && (
                                <Flex mt = "5" flexDir = "column">
                                    <Heading size='2xl'>Great work!</Heading>
                                    <Button mt = "10" w = "25%" colorScheme = "green" size = "lg" onClick = {() => navigate(-1)}>Return to Set</Button>
                                </Flex>
                            )}
                        </Box>
                    </Flex>

                

                </Box>
                
            )}
        </Flex>
    )
}

export default ModeQuizzle
