import React, {useState} from 'react'
import {Layout} from '../components/layout/Layout'
import {Banner} from '../components/banner/Banner'
import {LoginForm} from '../components/login/LoginForm'

export const Login = () => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");
    const [data, setData] = useState({});

    const handleUserName = (e) => {
        return setUserName(e.target.value)
    };
    const handlePassword = (e) => {
        return setPassword(e.target.value)
    };

    const handleSubmit = () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                userName: userName,
                password: passWord,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        };
        return (
            fetch('https://jsonplaceholder.typicode.com/posts', options)
                .then(response => {
                    return (response.json())
                })
                .then(data => {
                        return (
                            setData(data)
                        )
                    },
                )
        )
    };

    return (
        <Layout>
            <Banner/>
            <LoginForm
                userName={userName}
                handleUserName={handleUserName}
                passWord={passWord}
                handlePassword={handlePassword}
                handleSubmit={handleSubmit}
            />
        </Layout>
    )
};