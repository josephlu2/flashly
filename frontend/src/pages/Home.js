import { useEffect } from 'react'
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import {
    Flex,
    Heading,
    Box,
    Spacer,
    Text,
    Button
  } from "@chakra-ui/react";

// components
import SetDetails from '../components/SetDetails'
import SetForm from '../components/SetForm'

const Home = () => {
    const {sets, dispatch} = useSetsContext()
    const {user, dispatch: authDispatch} = useAuthContext()
    
    useEffect(() => {
        const fetchSets = async () => {
            const response = await fetch('https://quizzleapi.ml/api/sets', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_SETS', payload: json})
            }
            if (!response.ok) {
                authDispatch({type: 'LOGOUT'})
            }
        }

        if (user) {
            fetchSets()
        }
        
    }, [dispatch, user])

    return (
        <div>
            {sets && (sets.length === 0) && 
                <Flex align="center" w = "100%" justify="center">
                    <Box flex = "1" pt = "5%" pl = "10%" justify = "center" mt = "10">
                        <Heading as="span" size='4xl'>Welcome to </Heading>
                        <Heading as="span" bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text' size='4xl'>QUIZZLE</Heading>
                        <Heading mt = "3" mb = "10" >Get started by clicking "Create Set"</Heading>
                        <Link to="/create">
                            <Button size='lg' variant="solid" colorScheme = "green">Create Set</Button>
                        </Link>
                    </Box>
                </Flex>
                }
            <div className="home">
                <div className="sets">
                    {sets && sets.map((set) => (
                        <div key = {set._id}>
                            <Link to={`sets/${set._id}`}>
                                <SetDetails key = {set._id} set = {set}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Home

