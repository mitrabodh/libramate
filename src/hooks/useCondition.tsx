import { useRef } from 'react'

export default function useCondition() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const showPass = function showPass(show: boolean) {
        let el = inputRef.current;
        if (el?.type === "password" && show === true) {
            el.type = "text";
        } else if (el?.type === "text" && show === false) {
            el.type = "password";
        }
    }
    return { inputRef, showPass };

}
