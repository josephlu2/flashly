import { useAuthContext } from './useAuthContext'
import { useSetsContext } from './useSetsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: setsDispatch } = useSetsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    setsDispatch({type: 'SET_SETS', payload: null})
  }

  return { logout }
}