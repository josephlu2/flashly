import { useEffect } from 'react'
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// components
import SetDetails from '../components/SetDetails'
import SetForm from '../components/SetForm'

const Home = () => {
    const {sets, dispatch} = useSetsContext()
    const {user, dispatch: authDispatch} = useAuthContext()
    
    useEffect(() => {
        const fetchSets = async () => {
            const response = await fetch('/api/sets', {
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
                    <SetDetails key = {set._id} set = {set}/>
                ))}
            </div>
            <SetForm />
        </div>
    )
}

export default Home

