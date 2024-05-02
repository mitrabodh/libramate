import React from 'react'
import styles from "./authentication.module.css"
import { Link } from "react-router-dom"
import { useState } from 'react';

export default function CreateAccountForm() {
    const [agree, setAgree] = useState<Boolean>(false)
    return (
        <form action="" className={styles.acc} style={{ minHeight: "550px", alignItems: 'flex-start' }}>
            <h1>Create a new account!</h1>
            <h5>All fields are required.</h5>

            <input type="text" placeholder="Enter a username" name="username" id="username" />

            <input type="email" placeholder="Enter your email" name="email" id="email" />

            <input type="password" placeholder="Create a password" name="password1" id="password1" />

            <input type="password" placeholder="Confirm a password" name="password2" id="password2" />
            <input className={styles.account} type="checkbox" onClick={() => setAgree(true)} name="" id="" />
            <input className={styles.acc} disabled type="submit" value="Create account" />
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
    )
}
