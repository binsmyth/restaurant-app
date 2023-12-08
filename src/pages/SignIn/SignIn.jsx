import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useState } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

const SignIn = () =>{
    const [info, setInfo] = useState({
        email: '',
        password:''
    })

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setInfo({...info,[name]:value});
    }
    const firebaseConfig = {
        apiKey: "AIzaSyDyGHrvDY5RikibnuJfiH3QzgrJPT5faAU",
        authDomain: "practice-project-d13b6.firebaseapp.com",
        projectId: "practice-project-d13b6",
        storageBucket: "practice-project-d13b6.appspot.com",
        messagingSenderId: "368240839133",
        appId: "1:368240839133:web:bd99330a5fcb69d4154e34",
        measurementId: "G-8WKE9Z0PM2"
      };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const navigate = useNavigate();
    const handleClick = () => {
        signInWithEmailAndPassword(auth,info.email,info.password)
        .then((userCredential) =>{
            console.log(userCredential);
            return navigate("/home");
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <>
            <input type="text" placeholder="email" name="email" id="email-id" value={info.email} onChange={handleChange}/>
            <input type="text" placeholder="password" name="password" id="password-id" value={info.password} onChange={handleChange}/>
            <button onClick={handleClick}>Sign In</button>
        </>
    )
}

export default SignIn;