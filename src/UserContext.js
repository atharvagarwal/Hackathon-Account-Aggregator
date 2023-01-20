import React, { Children } from 'react'
import { useState, useEffect,createContext } from "react";
export const UserContext = createContext();

export const UserProvider=(props)=>{
    const [user,setUser]=useState(null);
    console.log(user)
    return(
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
            </UserContext.Provider>
    )
}

