import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import Auth from '../Firebase/Firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null)
const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    //    create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password);
    }
    // update user
    const userUpdate = (name, URL) => {
        updateProfile(Auth.currentUser, {
            displayName: name, photoURL: URL
        })
    }
    // Sign in 
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    // sign out
    const signOutUser = async () => {
        setLoading(true)
        await axios.get("http://localhost:5000/logout", {
            withCredentials: true
        })

        return signOut(Auth)
    }
    //google log in
    const googleProvider = new GoogleAuthProvider();
    const googleLogIn = async () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser.displayName)
            }
            else {
                setUser(null);
                setLoading(false);
            }

        });
        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        googleLogIn,
        createUser,
        loading,
        setLoading,
        userUpdate,
        singInUser,
        signOutUser

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;