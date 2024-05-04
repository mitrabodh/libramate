import { useRef } from 'react'

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
