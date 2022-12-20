import React, { createContext } from "react";
import { EntrevistasResponse } from "../interfaces/appInterface";


type EntrevistaContexProps={

    entrevista: EntrevistasResponse [];
    cargarEntrevista: () => Promise<void>
    agregarEntrevista: () => Promise <void>
}


export const EntrevistasContext = createContext({});

export const EntrevistasProvider = ({children}: any) => {


    return (
        <EntrevistasContext.Provider value ={{

        }}>
            {children}
        </EntrevistasContext.Provider>
    )
}