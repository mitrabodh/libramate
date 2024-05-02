import React from 'react'
import styles from "./authentication.module.css"
import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { useState } from 'react';


export default function CreateAccountForm() {
    const [agree, setAgree] = useState<Boolean>(false)
    return (
        <form action="" className={styles.acc} style={{ minHeight: "550px", alignItems: 'flex-start' }}>
            <h1>Create a new account!</h1>
            <h5>All fields are required.</h5>
            <div className={styles.inputDiv}>
                <div className={styles.icon}><FaRegUser color='gray' size={"20px"} /></div>
                <input type="text" placeholder="Enter a username" name="username" id="username" />
            </div>
            <div className={styles.inputDiv}>
                <div className={styles.icon}><MdOutlineMail color='gray' size={"20px"} /></div>
                <input type="email" placeholder="Enter your email" name="email" id="email" />
            </div>
            <div className={styles.inputDiv}>
                <div className={styles.icon}><RiLockPasswordLine color='gray' size={"20px"} /></div>
                <input type="password" placeholder="Create a password" name="password1" id="password1" />
            </div>
            <div className={styles.inputDiv}>
                <div className={styles.icon}><RiLockPasswordLine color='gray' size={"20px"} /></div>
                <input type="password" placeholder="Confirm password" name="password2" id="password2" />
            </div>
            <input className={styles.account} type="checkbox" onClick={() => setAgree(true)} name="" id="" />
            <input className={styles.acc} disabled type="submit" value="Create account" />
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
    )
}
