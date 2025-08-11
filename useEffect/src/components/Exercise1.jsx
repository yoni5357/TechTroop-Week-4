import { useEffect, useState } from "react";


export default function Exercise1(){
    const [time, setTime] = useState("");

    function getFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    useEffect(() => {
        setInterval(() => {
            setTime(getFormattedTime());
        },1000)
    },[])

    return(
        <div>{time}</div>
    )
}