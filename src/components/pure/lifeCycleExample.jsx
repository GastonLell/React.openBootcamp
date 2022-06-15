import React, { Component } from 'react'

export default class lifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log("CONSTRUCTOR: cuando se instancia el componente");
        // el constructor solo para iniciacion de variables, no para peticiones http
    }

    componentWillMount(){
        console.log("WillMount: antes de montar el componente");
    }

    componentDidMount(){
        // donde se trabajan las peticiones
        console.log("DidMount: justo al montar el componente y antes de pintarlo");
    }

    componentWillReceiveProps(){
        console.log("WillReceiveProps: si va a recibir props");
    }

    shouldComponentUpdate(nextProps, nextState){
        // retorna true o false
        /* sirve para saber si el componente debe actualizarse */
    }

    componentWillUpdate(){
        console.log("WillUpdate: antes de actualizar el componente");
    }

    componentDidUpdate(){
        console.log("DidUpdate: justo al actualizar el componente");
    }
    componentWillUnmount(){
        console.log("WillUnmount: justo antes de desaparecer");
    }
    
    render() {
        return (
            <div>
                <h1>compoenente de clase</h1>
            </div>
        )
    }
}

rc