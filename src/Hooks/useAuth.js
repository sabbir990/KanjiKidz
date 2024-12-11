import React, { useContext } from 'react'
import { authContext } from '../Providers/AuthProvider'

export default function useAuth() {
  return useContext(authContext)
}
