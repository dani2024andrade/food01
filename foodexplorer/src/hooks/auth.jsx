import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { api } from '../services/api'
export const AuthContext = createContext({})
function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      // eslint-disable-next-line dot-notation
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // eslint-disable-next-line dot-notation
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível entrar.')
      }
    }
  }
  function signOut() {
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:user')

    setData({})
  }
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,

        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)

  return context
}
export { AuthProvider, useAuth }