import React, { useRef } from 'react'
import styles from "./authentication.module.css"


export default function LoginPage() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    function showPass() {
        let el = inputRef.current;
        if (el?.type === "password") {
            el.type = "text";
        } else if (el !== null) {
            el.type = "password";
        }
    }
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
            <form action="" className={styles.form}>
                <p>Login!</p>
                <input type="text" placeholder="Username or Email" name="id" id="" />
                <input ref={inputRef} type="password" placeholder="Password" name="password" id="password" />
                <input type="checkbox" onClick={showPass} name="" id="" />
                <input type="submit" value="login" />
            </form>
        </div >
    )
}
