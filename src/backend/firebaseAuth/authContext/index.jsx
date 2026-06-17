import React, { useContext, useEffect, useState } from "react";
import { auth } from ".firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside an <AuthProvider>");
  return ctx;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      // setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      // setUserLoggedIn(false);
    }
    setLoading(false);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

   async function signup(email, password) {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // Gate sensitive features behind emailVerified rather than trusting any
    // address typed into a form.
    await sendEmailVerification(user);
    return user;
  }
 
  async function login(email, password, rememberMe = true) {
    // rememberMe = true persists across browser restarts (localStorage-backed).
    // rememberMe = false clears when the tab/browser closes — better for shared
    // or public computers.
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  }
 
  function logout() {
    return signOut(auth);
  }
 
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
 
  function resendVerificationEmail() {
    if (!auth.currentUser) return Promise.resolve();
    return sendEmailVerification(auth.currentUser);
  }
  const value = {
    // currentUser,
    // // userLoggedIn,
    // loading,
    currentUser,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    resendVerificationEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
