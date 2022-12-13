import { useRef } from "react";

export default function useFirstRender(): boolean {
    const firstRender = useRef(true)

    if(firstRender.current){
        firstRender.current = false
        return true
    }
    return firstRender.current;
}