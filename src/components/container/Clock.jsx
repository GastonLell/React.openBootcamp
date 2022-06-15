import React, { useState, useEffect } from 'react'

const Clock = () => {
    const [state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Gastón',
        apellidos: 'Lell'
    });

    const tick = () => {
        setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }

    useEffect(() => {
        let timerID = setInterval(
            () => tick(), 1000
        );
        return () => {
            clearInterval(timerID)
        }
    }, [])

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )
}

export default Clock