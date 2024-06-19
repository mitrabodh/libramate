import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import styles from "./authentication.module.css"
import { FaRegUser } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import useCondition from '../../hooks/useCondition';


export default function LoginForm() {

    
    const [show, setShow] = useState(false);
    const input = document.getElementById("password");

    //The useCondition custom hook is used to hide or show the password entered by the user.
    const { showPass } = useCondition(input);
    showPass(show);

    
    interface FormInput {
        title: string;
        password: string;
    }

    //The useForm is a custom hook provided by the React-Hook-Form library to manage the form state and form submission process.
    const { register, formState, handleSubmit } = useForm<FormInput>({
        defaultValues: {
            title: "",
            password: "",
        }
    });

    //The 'errors' api helps manage the errors.
    const { errors } = formState;

    //A handler to handle the form submission process.
    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data);
        document.querySelector("form")?.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}  >
            <h1>Login</h1>
            {/* Username or Email */}
            <div className={styles.inputDiv}>
                <div className={styles.icon}><FaRegUser color='gray' size={"20px"} /></div>
                <input type="text" placeholder="Username or Email" {...register("title", {
                    required: {
                        value: true,
                        message: "Please enter your username or email."
                    }
                })} />
                <p className={styles.inputErr}>{errors.title?.message}</p>
            </div>


            {/* Password */}
            <div className={styles.inputDiv}>
                <div className={styles.icon}><RiLockPasswordLine color='gray' size={"20px"} /></div>
                <input type="password" placeholder="Password" id="password" {...register("password", {
                    required: {
                        value: true,
                        message: "Please enter your password."
                    }
                })} />
                <div className={`${styles.icon} ${styles.eye}`} onClick={() => setShow(!show)}>{show ? <IoIosEye color='gray' size={"20px"} /> : <IoIosEyeOff color='gray' size={"20px"} />}</div>
                <p className={styles.inputErr}>{errors.password?.message}</p>
            </div>

            <div><input type="submit" value="login" /></div>
            <p style={{ marginLeft: "-10px" }}><Link to="/create-account">Create a new account</Link></p>
        </form>
    )
}
