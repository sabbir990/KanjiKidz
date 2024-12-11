import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../assets/Firebase.config';

export const authContext = createContext(null)

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createUser = (email, password) => {
      setIsLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
      setIsLoading(true)
      return updateProfile(auth.currentUser, {
        displayName : name, photoURL : photo
      })
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
          setUser(user);
        }else{
          console.log("Already logged out!")
        }

        setIsLoading(false)
      })

      return () => {
        unsubscribe()
      }
    }, [])

    const authObject = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        createUser,
        updateUserProfile
    }
  return (
    <authContext.Provider value={authObject}>
        {children}
    </authContext.Provider>
  )
}
