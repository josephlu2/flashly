import { CurrentSetContext } from '../context/CurrentSetContext'
import { useContext } from 'react'

export const useCurrentSetContext = () => {
    const context = useContext(CurrentSetContext)

    if (!context) {
        throw Error('CurrentSetContext must be used inside a SetContextProvider')
    }

    return context
}