import { createContext, useReducer } from 'react'

export const SetsContext = createContext()

export const setsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SETS':
            return {
                sets: action.payload
            }
        case 'CREATE_SET':
            return {
                sets: [action.payload, ...state.sets]
            }
        case 'DELETE_SET':
            return {
                sets: state.sets.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const SetsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(setsReducer, {
        sets: null
    })


    return (
        <SetsContext.Provider value = {{...state, dispatch}}>
            { children }
        </SetsContext.Provider>
    )
}