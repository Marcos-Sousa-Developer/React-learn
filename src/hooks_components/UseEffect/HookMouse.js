import React, { useState, useEffect} from 'react'

function HookMouse() {

    const [X, setX] = useState(0)

    const [Y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse Event')

        setX(e.clientX) 
        setY(e.clientY)
    }

    useEffect(() => {

        console.log("effect caleed")
        window.addEventListener('mouse', logMousePosition)
    },[]) //chama uma unica vez

    return (
        <div>
            X - {X}, Y - {Y}
        </div>
    )
}
