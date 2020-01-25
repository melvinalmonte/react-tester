import {useState} from 'react';

const useLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (e) => setUsername(e.target.value);
    const handlePass = (e) => setPassword(e.target.value);
    const handleSubmit =() => console.log(username, password);


    return [
        username,
        password,
        handlePass,
        handleUser,
        handleSubmit
    ]
};

export default useLogin;
