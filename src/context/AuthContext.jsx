import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthCont = createContext()
export const AuthContext = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthCont.Provider value={{ user, loading }}>
      {children}
    </AuthCont.Provider>
  );
}
export const useAuth = () => useContext(AuthCont);
