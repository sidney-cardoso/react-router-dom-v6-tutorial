import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Redirect = () => {
    const [time, setTime] = useState(3)
    const timeout = useRef(0)
    const navigate = useNavigate()

    useEffect(() => {
        clearTimeout(timeout.current)

        timeout.current = setTimeout(() => {
            setTime(time => time -1)
        }, 1000)
        if (time === 0 ) {
            navigate('/')
        }
        return () => clearTimeout(timeout.current)
    }, [time])

    return (
        <div>
            <h1>Get out here in {time} </h1>
        </div>
    )
}