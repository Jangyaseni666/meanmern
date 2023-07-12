import React, { useState } from "react";

function Signin(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    // console.log(email,pass);

    const handleSignin = () => {
        const obj = {
            email: email,
            password: pass,
        }
        console.log(obj);
        fetch("",{})
    }

    return (
        <div>
            <input type="text" placeholder="Enter Email" onChange={(e) => {
                setEmail(e.target.value);
            }}/><br/>
            <input type="password" placeholder="Enter Password" onChange={(e) => {
                setPass(e.target.value);
            }} /><br/>
            <button onClick={handleSignin}>Sign In</button>
        </div>
    )
}


export default Signin;