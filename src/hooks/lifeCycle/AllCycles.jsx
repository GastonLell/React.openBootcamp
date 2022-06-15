import React, { useEffect } from 'react'

function AllCycles() {

    useEffect(() => {

        console.log("componente creado")

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('actualizacion del componente')
        }, 1000);

        return () => {
            console.log('el componente va a desaparecer')
            document.title = "Tiempo detenido"
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>AllCycles</div>
    )
}

export default AllCycles