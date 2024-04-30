import React from 'react'
import { useRef } from 'react'

export default function useCheckbox() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const showPass = function showPass() {
        let el = inputRef.current;
        if (el?.type === "password") {
            el.type = "text";
        } else if (el !== null) {
            el.type = "password";
        }
    }
    return { inputRef, showPass };

}
