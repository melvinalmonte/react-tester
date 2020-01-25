import React from 'react'
import useLogin from "../components/login/helpers/useLogin";
import {LoginForm} from "../components/login/LoginForm";

export const Login = () => {
    const [ username, password, handlePass, handleUser, handleSubmit] = useLogin();

    return (
        <LoginForm
            username={username}
            password={password}
            handleUser={handleUser}
            handlePass={handlePass}
            handleSubmit={handleSubmit}
        />
    )
};