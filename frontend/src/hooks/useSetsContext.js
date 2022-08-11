import { SetsContext } from '../context/SetContext'
import { useContext } from 'react'

export const useSetsContext = () => {
    const context = useContext(SetsContext)

    if (!context) {
        throw Error('useSetContext must be used inside a SetContextProvider')
    }

    return context
}