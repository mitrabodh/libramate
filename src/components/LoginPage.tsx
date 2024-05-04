import React, { useRef } from 'react'
import styles from "./authentication.module.css"
import StarBackground from './StarBackground';
import useCheckbox from '../hooks/useCondition'
import LoginForm from './LoginForm';


export default function LoginPage() {


    return (
        <StarBackground>
            <LoginForm />
        </StarBackground>
    )
}
