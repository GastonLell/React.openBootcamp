/* 
    ejemplo de uso del metodo
    de ciclo de vida  en componente clase y el hook de ciclo de vida 
    rn componente funcional
*/

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount() {
        console.log('comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }

    render() {
        return (
            <div>
                <h1>Did Mount</h1>
            </div>
        )
    }
}

// componente funcional

export const DidMountHook = () => {
    useEffect(() => {
        console.log('comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }, [])

    return (
        <div>
            <h1>Did Mount</h1>
        </div>
    )
}
