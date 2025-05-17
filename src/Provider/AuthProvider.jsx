import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const Gprovider = new GoogleAuthProvider()
    const [user, setUser] = useState({})
    const [expLocation, setexpLocation] = useState('')

    const signUpwithemail = (email,password)=>{
        return createUserWithEmailAndPassword( auth,email, password)
    }
    const signInwithemail = (email,password)=>{
        return signInWithEmailAndPassword( auth,email, password)
    }
    const signout = ()=>{
        return signOut(auth)
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,Gprovider)
    }
    const userUpdateProfile = (updateData)=>{
        return updateProfile(auth.currentUser, updateData)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe();
        }
    },[])
    const authData = {
        user,
        setUser,
        expLocation,
        setexpLocation,
        signUpwithemail,
        signInwithemail,
        signInWithGoogle,
        userUpdateProfile,
        signout
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;