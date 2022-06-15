import React, { useState } from 'react'

function Ejemplo1() {

    const valorInicial = 0;

    const personaInicial = {
        nombre: "Martin",
        email: "martin@gmail.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    const incrementarContador = () => {
        setContador(contador + 1)
    }

    const actualizarPersona = () => {
        setPersona({
            nombre: "Gaston",
            email: "gaston@hotmail.com"
        })
    }
    return (
        <div>
            <h1>Ejemplo de useState</h1>

            <h2>contador: {contador}</h2>

            <h2>Datos de la persona:</h2>
            <h3>
                {persona.nombre}
            </h3>
            <h4>
                {persona.email}
            </h4>


            <div>
                <button onClick={incrementarContador}>Incrementar</button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
            </div>
        </div>
    )
}

export default Ejemplo1