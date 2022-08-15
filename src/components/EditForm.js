import { useState, useEffect } from "react"
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate, useParams } from "react-router-dom";
import { VStack, Flex, Spacer, Divider, Button, Box, FormControl, FormInput, Input, FormLabel, Heading, useToast, Select } from '@chakra-ui/react';

const EditForm = ({propsSet}) => {

    const { dispatch } = useSetsContext()
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const toast = useToast()
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')
    const [visibility, setVisibility] = useState(true)
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [cards, setCards] = useState([{ term: "", definition: "" }]);

    //set title to the title of the set
    useEffect(() => {
        setTitle(propsSet.title)
        setDesc(propsSet.desc)
        setCategory(propsSet.category)
        setVisibility(propsSet.visibility)
        setCards(propsSet.cards)
    }, [propsSet])

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

        if (cards.length === 0) {

          toast({
            title: `You need at least one card`,
            position: 'top',
            isClosable: true,
            status: 'error'
          })
          return
        }

        //iterate through cards and if any are empty, set error and return
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].term === "" || cards[i].definition === "") {
            toast({
              title: `Please fill out all cards`,
              position: 'top',
              isClosable: true,
              status: 'error'
            })
            return
          }
        }

        if (!user) {
          setError('You must be logged in')
          return
        }
    
        const set = {title, desc, cards, visibility, category}
        
        const response = await fetch('https://quizzleapi.ml/api/setS/' + id, {
          method: 'PATCH',
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
          toast({
            title: `Please fill out all fields`,
            position: 'top',
            isClosable: true,
            status: 'error'
          })
        }
        
        if (response.ok) {
          setError(null)
          setTitle('')
          setDesc('')
          setCategory('')
          setCards([{ term: "", definition: "" }])
          setEmptyFields([])
          console.log('new set added:', json)
          dispatch({type: 'CREATE_SET', payload: json})
          navigate('/')
        }
    
      }

    return (
        <Flex width="full" align="center" justifyContent="center">
          <Box width = "75%" mb = "100" pt = "10">
            <Heading mb = "5">Edit Set</Heading>
            <FormControl isRequired>
              <FormLabel>Set Title</FormLabel>
              <Input 
                placeholder='Title' 
                type="text" 
                onChange = {(e) => setTitle(e.target.value)} 
                value={title}
                className = {emptyFields.includes('title') ? 'error' : ''}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel pt = "4">Set Description</FormLabel>
              <Input 
                placeholder='Description' 
                type="text" 
                onChange = {(e) => setDesc(e.target.value)}
                value = {desc}
                className = {emptyFields.includes('desc') ? 'error' : ''}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel pt = "4">Category</FormLabel>
              <Input 
                placeholder='Category' 
                type="text" 
                onChange = {(e) => setCategory(e.target.value)} 
                value={category}
                className = {emptyFields.includes('title') ? 'error' : ''}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel pt = "4">Visibility</FormLabel>
              <Select value = {visibility} onChange = {(e) => setVisibility(e.target.value)}>
                <option value='true'>Public</option>
                <option value='false'>Private</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
            <FormLabel pt = "4">Cards:</FormLabel>
            {cards.map((form, index) => {
                return (
                  <div key={index}>
                      
                      <Flex mb = "4">
                      <Input
                        name="term"
                        placeholder="Term"
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.term}
                      />
                      <Input
                        ml = "4"
                        name="definition"
                        placeholder="Definition"
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.definition}
                      />
                      <Button ml = "4" minW = "100" type = "button" colorScheme = "red" onClick={() => removeFields(index)}>Remove</Button>
                      </Flex>
                    
                  </div>
                );
            })}
            </FormControl>
                
            <Button mt = "4" type="button" onClick = {addFields}>Add Card</Button>
            <Button mt = "4" ml = "4" variant = "solid" colorScheme = "green" onClick = { handleSubmit }>Complete Changes</Button>


          </Box>
        </Flex>
    )
}

export default EditForm