import React, { useRef } from 'react'
import styles from "./authentication.module.css"
import StarBackground from './StarBackground';
import useCheckbox from '../hooks/useCondition'
import LoginForm from './LoginForm';


export default function LoginPage() {
    const { inputRef, showPass } = useCheckbox();

    return (
        <StarBackground>
            <LoginForm />
        </StarBackground>
    )
}
