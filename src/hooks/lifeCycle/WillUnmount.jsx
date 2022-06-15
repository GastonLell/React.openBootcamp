/* 
    Ejemplo de uso del metodo componentWillUnmount para componente de clase
    Ejemplo de uso del hook para  componente funcional

    (cuando el componente va a desaparecer)
*/

import React, { Component, useEffect } from 'react'

// componente de clase

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log("Comportamiento antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        )
    }
}

// componente funcional
export const WillUnmountHook = () => {

    useEffect(() => {

        // aca no iria nada

        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        }

    }, [/* solo se ejecuta una vez */])

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
    )
}

