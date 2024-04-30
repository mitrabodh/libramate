import React, { useRef } from 'react'
import styles from "./authentication.module.css"
import { useState } from 'react';
import { Link } from "react-router-dom"

export default function CreateAccount() {
    const [agree, setAgree] = useState<Boolean>(false);


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
            <form action="" className={styles.acc} style={{ minHeight: "550px", alignItems: 'flex-start' }}>
                <h1>Create a new account!</h1>
                <h5>All fields are required.</h5>
                <label htmlFor="username" style={{ color: 'white' }}>Username:</label>
                <input type="text" placeholder="" name="username" id="username" />
                <label htmlFor="email" style={{ color: 'white' }}>Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password1" style={{ color: 'white' }}>Enter a password:</label>
                <input type="password" placeholder="" name="password1" id="password1" />
                <label htmlFor="password2" style={{ color: 'white' }}>Confirm password:</label>
                <input type="password" placeholder="" name="password2" id="password2" />
                <input className={styles.account} type="checkbox" onClick={() => setAgree(true)} name="" id="" />
                <input disabled type="submit" value="Create account" />
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div >
    )
}
