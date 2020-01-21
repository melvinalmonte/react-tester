import React, {useEffect, useState} from 'react'

import axios from 'axios'

export const Login = () => {
    const [data, setData] = useState({});
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        handleSubmit()
    }, []);

    const handleIncrease = () => {
        setCounter(counter + 1);
        handleSubmit();
    };

    const handleDecrease = () => {
        setCounter(counter - 1);
        handleSubmit();
    };

    const handleSubmit = () => {
        const options = {
            url: `https://jsonplaceholder.typicode.com/posts/${counter}`,
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        };
        axios(options)
            .then((response) => {
                return setData(response.data)
            })
    };

    const copyCounter = (creds) => e =>{
        let clipBoard = document.createElement("textarea");
        document.body.appendChild(clipBoard);
        clipBoard.value = creds;
        clipBoard.select();
        document.execCommand("copy");
        document.body.removeChild(clipBoard)
    };

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>add one</button>
            <button onClick={handleDecrease}>Subtract one</button>
            <button onClick={copyCounter(counter)}>Click to copy number in counter</button>
        </div>

    )
};