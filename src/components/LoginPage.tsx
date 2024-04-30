import React, { useRef } from 'react'
import styles from "./authentication.module.css"
import useCheckbox from '../utils/Checkbox'

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
                <p>Welcome back!</p>
                <input type="text" placeholder="Username or Email" name="id" id="" />
                <input ref={inputRef} type="password" placeholder="Password" name="password" id="password" />
                <input type="checkbox" onClick={showPass} name="" id="" />
                <input type="submit" value="login" />
            </form>
        </div >
    )
}
