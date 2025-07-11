import React, { createContext } from 'react'

export const dataContext = createContext()
const UserContext = ({children}) => {
  const username = " Aviral Kaushik"
  return (
    <div>
        <dataContext.Provider value={username}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext