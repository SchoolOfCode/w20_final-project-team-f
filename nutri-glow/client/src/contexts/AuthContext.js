import React, { useContext, useState, useEffect } from 'react'
import firebase from "firebase"

import { auth } from '../firebase'


const AuthContext = React.createContext()

// create hook to get access to context for later use
export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState("")

    // signup user with firebase

    function signup(fullname, email, age, password) {
        return auth.createUserWithCredentials(fullname, email, age, password)
    }

    // set current user
    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    // contains all value to be provided for authentication
    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;