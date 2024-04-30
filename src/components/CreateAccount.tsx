import React, { useRef } from 'react'
import styles from "./authentication.module.css"
import { useState } from 'react';

export default function CreateAccount() {
    const [agree, setAgree] = useState<Boolean>(false);
    let leftPos: number | undefined;
    let formWidth: number | undefined = document.querySelector("form")?.clientWidth;
    function containerWidth() {
        let pos: number;
        if (formWidth !== undefined && Number(formWidth) < 500) {
            return pos = 125 - (500 - Number(formWidth));
        }
    }

    leftPos = containerWidth();

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
            <form action="" style={{ minHeight: "550px" }}>
                <p>Create a new account!</p>
                <label htmlFor="username" style={{ color: 'white', left: `${leftPos}px` }}>Username:</label>
                <input type="text" placeholder="" name="username" id="username" />
                <label htmlFor="email" style={{ color: 'white' }}>Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password1" style={{ color: 'white' }}>Enter a password:</label>
                <input type="password" placeholder="" name="password1" id="password1" />
                <label htmlFor="password2" style={{ color: 'white' }}>Confirm password:</label>
                <input type="password" placeholder="" name="password2" id="password2" />
                <input className={styles.account} type="checkbox" onClick={() => setAgree(true)} name="" id="" />
                <input type="submit" value="Create account" />
            </form>
        </div >
    )
}
