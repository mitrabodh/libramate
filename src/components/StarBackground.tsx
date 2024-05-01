import React, { ReactNode } from 'react'
import styles from "./authentication.module.css"
export default function StarBackground({ children }: { children: ReactNode }) {
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
            {children}
        </div>
    )
}
