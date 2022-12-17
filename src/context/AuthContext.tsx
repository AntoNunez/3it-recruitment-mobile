import React, { createContext } from "react";

type AuthContextProps = {
    errorMessage: string;
    token:string;
    //user:Usuario??
}


const AuthContext = createContext({} as AuthContextProps);