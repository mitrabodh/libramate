import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styles from "./authentication.module.css"
import { FaRegUser } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import useCondition from '../hooks/useCondition';
export default function LoginForm() {
    const { inputRef, showPass } = useCondition();
    const [show, setShow] = useState(false);
    showPass(show);
    return (
        <form action="" >
            <h1>Login</h1>
            <div className={styles.inputDiv}>
                <div className={styles.icon}><FaRegUser color='gray' size={"20px"} /></div>
                <input type="text" placeholder="Username or Email" name="id" id="" /></div>
            <div className={styles.inputDiv}>
                <div className={styles.icon}><RiLockPasswordLine color='gray' size={"20px"} /></div>
                <input ref={inputRef} type="password" placeholder="Password" name="password" id="" />
                <div className={`${styles.icon} ${styles.eye}`} onClick={() => setShow(!show)}>{show ? <IoIosEye color='gray' size={"20px"} /> : <IoIosEyeOff color='gray' size={"20px"} />}</div></div>
            <div><input disabled type="submit" value="login" /></div>
            <p style={{ marginLeft: "-10px" }}><Link to="/create-account">Create a new account</Link></p>
        </form>
    )
}
