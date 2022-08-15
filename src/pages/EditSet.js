import { useEffect, useState } from 'react'
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link, useParams, useNavigate } from 'react-router-dom'

import EditForm from '../components/EditForm'

import {
    Flex,
    Heading,
    Box,
    Spacer,
    Button
  } from "@chakra-ui/react";

const EditSet = () => {
    const {sets, dispatch} = useSetsContext()
    const {user, dispatch: authDispatch} = useAuthContext()

    const { id } = useParams();
    const [ set, setSet ] = useState(null)
    const [ cards, setCards ] = useState([])
    const [ owner, setOwner ] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSet = async () => {
            const response = await fetch('https://quizzleapi.ml/api/sets/' + id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setSet(json)
                setCards(json.cards.map(({term, definition}) => ({ front: {text: term},  back: {text: definition}})))
                dispatch({type: 'SET_SET', payload: json.cards})
                if (json.owner === false) {
                    navigate('/')
                }
                
            } else {
                navigate('/')
            }

        }
        fetchSet()
    }, [dispatch, user, id])


    return (
        <div className="individual-set">
            {set && ( <EditForm propsSet = {set} /> )}
        </div>
    )
    
}

export default EditSet;