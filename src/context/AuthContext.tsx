import React, { createContext, useReducer } from "react";
import { Usuario } from "../interfaces/appInterface";
import { authReducer, AuthState } from "./authReducer";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInicialState)

    const signUp = () => { };
    const logOut = () => { };
    const removeError = () => { };


    return (
        <AuthContext.Provider value ={{
            ...state,
            signUp,
            logOut ,
            removeError

        }}>
            {children}
        </AuthContext.Provider>
    )
}
