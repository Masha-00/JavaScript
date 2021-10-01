import React, { useContext, useState } from "react";
import { AuthContext } from '../context/authContext';
import classes from './Login.module.css';

function Login() {
    const { setIsUserLogin } = useContext(AuthContext);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function checkingData(event){
        event.preventDefault();
        if(email === "email@gmail.com" && password === '123456789'){
            localStorage.setItem('isLogin', true);
            setIsUserLogin(true);
        } else {
            localStorage.clear();
            alert('Incorrect. Try again!');
        }
    }

    return ( 
        <div className={classes.container}>
            <form action="#" onSubmit={checkingData}>
                <input className={classes.input} type="text" placeholder="email@gamil.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input className={classes.input} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button className={classes.btnLogin} type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;