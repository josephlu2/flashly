import { createContext, useReducer } from 'react'

export const CurrentSetContext = createContext()

export const currentSetsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SET':
            return {
                sets: action.payload
            }
        case 'DELETE_SET':
            return {
                sets: state.sets.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const CurrentSetContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(currentSetsReducer, {
        sets: null
    })


    return (
        <CurrentSetContext.Provider value = {{...state, dispatch}}>
            { children }
        </CurrentSetContext.Provider>
    )
}