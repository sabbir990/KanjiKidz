import React, { createContext, useState } from 'react'

export const authContext = createContext(null)

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const authObject = {
        user,
        setUser,
        isLoading,
        setIsLoading
    }
  return (
    <authContext.Provider value={authObject}>
        {children}
    </authContext.Provider>
  )
}
