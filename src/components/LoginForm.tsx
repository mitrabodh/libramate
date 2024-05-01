import React from 'react'
import { Link } from "react-router-dom"
import useCheckbox from '../hooks/useCheckbox'

export default function LoginForm() {
    const { inputRef, showPass } = useCheckbox();
    return (
        <form action="" >
            <h1>Welcome back!</h1>
            <input type="text" placeholder="Username or Email" name="id" id="" />
            <input ref={inputRef} type="password" placeholder="Password" name="password" id="password" />
            <input type="checkbox" onClick={showPass} name="" id="" />
            <input disabled type="submit" value="login" />
            <p><Link to="/create-account">Create a new account</Link></p>
        </form>
    )
}
