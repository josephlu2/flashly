import { useEffect } from 'react'
import { useSetsContext } from '../hooks/useSetsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

import SetForm from '../components/SetForm'

const EditSet = () => {
    const {sets, dispatch} = useSetsContext()
    const {user, dispatch: authDispatch} = useAuthContext()
    

    return (
        <SetForm />
    )
}

export default EditSet;