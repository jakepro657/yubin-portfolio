"use client"
import React, { useEffect, useState } from 'react'


type Props = {
    text: string
}

function TextStream({ text }: Props) {

    const [state, setState] = useState({
        text: ''
    })
    const [i, setI] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            if (i < text.length) {
                setState({ text: state.text + text[i] })
                setI(i + 1)
            } else {
                clearInterval(interval)
            }
        }, 100)

        return () => clearInterval(interval)
    }, [text, state.text])

    return (
        <div className=''>{state.text}</div>
    )
}

export default TextStream