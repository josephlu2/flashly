import { useEffect } from 'react'
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

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
    )
}

export default Home

