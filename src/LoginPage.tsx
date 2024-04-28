import React from 'react'
import styles from "./authentication.module.css"

export default function LoginPage() {
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
            <div className={styles.subContainer}>
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
                <input type="password" placeholder="Password" name="password" id="" />
                <input type="submit" value="login" />
            </form>
        </div >
    )
}
