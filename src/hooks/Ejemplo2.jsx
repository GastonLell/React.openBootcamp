import React, { useState, useRef, useEffect } from 'react'

const Ejemplo2 = () => {
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    const miRef = useRef();

    function incrementar1(params) {
        setContador1(contador1 + 1)
    }
    function incrementar2(params) {
        setContador2(contador2 + 1)
    }

    useEffect(() => {
        console.log('Cambio de estado en el componente');
        console.log('Mostrando referencia del elemento del dom');
        console.log(miRef);
    }, [contador1])

    return (
        <div>
            <h1>Ejemplo useState,, useEffect, useRef</h1>

            <h2>contador: {contador1}</h2>
            <h2>contador: {contador2}</h2>
            <h4 ref={miRef}>Mi referencia</h4>
            <div>
                <button onClick={incrementar1}>Incrementar1</button>
                <button onClick={incrementar2}>Incrementar2</button>
            </div>
        </div>
    )
}

export default Ejemplo2