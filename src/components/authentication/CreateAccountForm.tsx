import React from 'react'
import styles from "./authentication.module.css"
import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { useState } from 'react';


export default function CreateAccountForm() {
    interface FormInput {
        username: string;
        email: string;
        password: string;
        passwordConf: string;
        agree: boolean;
    }
    const [agree, setAgree] = useState<Boolean>(false);
    const { register, formState, handleSubmit } = useForm<FormInput>({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordConf: "",
            agree: false,
        }
    });
    const { errors } = formState;

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.acc}>
            <h1 className={errors ? `${styles.marginTopincr}` : ``}>Create a new account!</h1>
            <h5>All fields are required.</h5>

            {/* Username field */}
            <div className={styles.inputDiv}>
                <div className={styles.icon}><FaRegUser color='gray' size={"20px"} /></div>
                <input {...register("username", {
                    required: {
                        value: true,
                        message: "Please enter a username."
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9]/i,
                        message: "Use alphanumeric characters only.",
                    },
                    validate: (fieldValue: string) => {
                        let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                        return ((alpha.includes(fieldValue.toLowerCase().split("")[0])) || "Username must begin with a letter!");
                    },

                    maxLength: {
                        value: 8,
                        message: "Maximum length is 8 characters."
                    },
                    minLength: {
                        value: 4,
                        message: "Minimum length is 4 characters."
                    }
                })} aria-invalid={errors.username ? true : false} type="text" placeholder="Enter a username" />
                <p className={styles.inputErr}>{errors?.username?.message}</p>
            </div>

            {/* Email field*/}
            <div className={styles.inputDiv}>
                <div className={styles.icon}><MdOutlineMail color='gray' size={"20px"} /></div>
                <input {...register("email", {
                    required: {
                        value: true,
                        message: "Please enter your email address."
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/i,
                        message: "Please enter a valid email address!"
                    }

                })} type="email" placeholder="Enter your email" aria-invalid={errors.email ? true : false} />
                <p className={styles.inputErr}>{errors?.email?.message}</p>
            </div>

            {/* Password field*/}
            <div className={styles.inputDiv}>
                <div className={`${styles.icon} ${styles.iconUp}`}><RiLockPasswordLine color='gray' size={"20px"} /></div>
                <input type="password" placeholder="Create a password"  {...register("password", {
                    required: {
                        value: true,
                        message: "Please create a password."
                    },
                    minLength: {
                        value: 6,
                        message: "Min length of the password is 6 characters."
                    },
                    maxLength: {
                        value: 20,
                        message: "Max length of the password is 20 characters."
                    },
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/,
                        message: "Password must contain at least a digit, a small letter and a capital letter.",
                    },

                })} aria-invalid={errors.password ? true : false} />
                <p className={styles.inputErr}>{errors?.password?.message}</p>
            </div>

            {/* Confirm Password field*/}
            <div className={styles.inputDiv}>
                <div className={styles.icon}><RiLockPasswordLine color='gray' size={"20px"} /></div>
                <input type="password" placeholder="Confirm password"  {...register("passwordConf", {
                    required: {
                        value: true,
                        message: "Please confirm your password."
                    },
                    validate: (value, formValues) => value == formValues.password || "Password does not match."
                })} aria-invalid={errors.passwordConf ? true : false} />
                <p className={styles.inputErr}>{errors.passwordConf?.message}</p>
            </div>
            <input title="By checking this box, you are agreeing to our terms and conditions." className={errors.agree ? `${styles.redBox}` : ``} type="checkbox" onClick={() => setAgree(!agree)}  {...register("agree", {
                required: {
                    value: true,
                    message: "Please accept the terms and conditions to proceed."
                }
            })} /><p className={errors.agree ? `${styles.condition} ${styles.error}` : `${styles.condition}`}>By checking this box, you are agreeing to our terms and conditions.</p>
            <input className={styles.acc} disabled={errors.agree ? true : false} type="submit" value="Create account" />
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
    )
}
