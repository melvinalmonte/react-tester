import React from 'react'
import { NavBar } from '../navbar/NavBar'

export const Layout = ({children}) => {
    return(
        <>
        <NavBar/>
        <div>{children}</div>
        </>

    )
}