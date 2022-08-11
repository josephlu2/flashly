import { useState } from "react"
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const SetForm = () => {

    const { dispatch } = useSetsContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
          setError('You must be logged in')
          return
        }
    
        const set = {title, load, reps}
        
        const response = await fetch('/api/sets', {
          method: 'POST',
          body: JSON.stringify(set),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
          setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
          setError(null)
          setTitle('')
          setLoad('')
          setReps('')
          setEmptyFields([])
          console.log('new set added:', json)
          dispatch({type: 'CREATE_SET', payload: json})
        }
    
      }

    return (
        <form className="create" onSubmit = { handleSubmit }>
            <h3>Add a New Set</h3>

            <label>Title 1:</label>
            <input 
                type="text" 
                onChange = {(e) => setTitle(e.target.value)} 
                value={title}
                className = {emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Title 2:</label>
            <input 
                type="number" 
                onChange = {(e) => setLoad(e.target.value)}
                value = {load}
                className = {emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Title 3:</label>
            <input 
                type="number" 
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
                className = {emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Set</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SetForm