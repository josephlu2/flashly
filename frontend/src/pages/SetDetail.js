import { useSetsContext } from "../hooks/useSetsContext"
import { useAuthContext } from '../hooks/useAuthContext'
import { useParams, Navigate, useNavigate } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from 'react'
import Flashcard from '../components/Flashcard'

const SetDetail = () => {
    const { id } = useParams();
    const { dispatch } = useSetsContext()
    const { user } = useAuthContext()
    const [ set, setSet ] = useState(null)
    const [ cards, setCards ] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchSet = async () => {
            const response = await fetch('/api/sets/' + id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            console.log(json)

            if (response.ok) {
                setSet(json)
                setCards(json.cards.map(({term, definition}) => ({ front: {text: term},  back: {text: definition}})))
            } else {
                navigate('/')
            }
        }

        fetchSet()
        if (user) {
            fetchSet()
        } else {
            navigate('/')
        }
        
    }, [dispatch, user, id])

    return (
        
        <div className="individual-set">
            {set && (
                <div className="set-details-container">
                    <h2>{set.title}</h2>
                    <h3>{set.desc}</h3>
                    <Flashcard dataSource = {cards}/>
                </div>
            )}
            
        </div>
    )
}

export default SetDetail