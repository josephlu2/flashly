import { useSetsContext } from "../hooks/useSetsContext"
import { useAuthContext } from '../hooks/useAuthContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const SetDetails = ({ set }) => {
    const { dispatch } = useSetsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/api/sets/' + set._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }) 
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_SET', payload: json})
        }
    }

    return (
        <div className="set-details">
            <h4>{set.title}</h4>
            <p><strong></strong> {set.desc} </p>
            <p>{formatDistanceToNow(new Date(set.createdAt), { addSuffix: true})}</p>
            <span className = "material-symbols-outlined" onClick = {handleClick}>delete</span>
        </div>
    )
}

export default SetDetails