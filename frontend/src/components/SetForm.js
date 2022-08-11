import { useState } from "react"
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const SetForm = () => {

    const { dispatch } = useSetsContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [cards, setCards] = useState([{ term: "", definition: "" }]);

    const handleFormChange = (event, index) => {
      let data = [...cards];
      data[index][event.target.name] = event.target.value;
      setCards(data);
    };

    const addFields = () => {
      let object = {
        term: "",
        definition: ""
      };
  
      setCards([...cards, object]);
    };

    const removeFields = (index) => {
      let data = [...cards];
      data.splice(index, 1);
      setCards(data);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(cards);

        if (!user) {
          setError('You must be logged in')
          return
        }
    
        const set = {title, desc, cards}
        
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
          setDesc('')
          setCards([{ term: "", definition: "" }])
          setEmptyFields([])
          console.log('new set added:', json)
          dispatch({type: 'CREATE_SET', payload: json})
        }
    
      }

    return (
        <form className="create" onSubmit = { handleSubmit }>
            <h3>Add a New Set</h3>

            <label>Title:</label>
            <input 
                type="text" 
                onChange = {(e) => setTitle(e.target.value)} 
                value={title}
                className = {emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Desc:</label>
            <input 
                type="text" 
                onChange = {(e) => setDesc(e.target.value)}
                value = {desc}
                className = {emptyFields.includes('desc') ? 'error' : ''}
            />

            {cards.map((form, index) => {
                return (
                  <div key={index}>
                    <input
                      name="term"
                      placeholder="Term"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.term}
                    />
                    <input
                      name="definition"
                      placeholder="Definition"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.definition}
                    />
                    <button type = "button" onClick={() => removeFields(index)}>Remove</button>
                  </div>
                );
            })}
                
            <button type="button" onClick = {addFields}>Add Card</button>

            <button>Complete Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SetForm