import React, { useRef } from 'react'
import styles from "./authentication.module.css"
import useCheckbox from '../utils/Checkbox'
import { Link } from "react-router-dom"


export default function LoginPage() {
    const { inputRef, showPass } = useCheckbox();

    return (
        <div className={styles.container}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.starBox}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <form action="" >
                <h1>Welcome back!</h1>
                <input type="text" placeholder="Username or Email" name="id" id="" />
                <input ref={inputRef} type="password" placeholder="Password" name="password" id="password" />
                <input type="checkbox" onClick={showPass} name="" id="" />
                <input disabled type="submit" value="login" />
                <p><Link to="/create-account">Create a new account</Link></p>
            </form>
        </div >
    )
}
