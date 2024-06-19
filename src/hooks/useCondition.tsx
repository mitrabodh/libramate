import { useRef } from 'react'

//A custom hook to facilitate a functionality to hide or show the password entered by the user.
export default function useCondition(input: HTMLElement | null) {

    const showPass = function showPass(show: boolean) {
        if (input?.getAttribute("type") === "password" && show === true) {
            input.setAttribute("type", "text")
        } else if (input?.getAttribute("type") === "text" && show === false) {
            input.setAttribute("type", "password");
        }
    }
    return { showPass };

}
