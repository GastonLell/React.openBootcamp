import React, { useState } from 'react'
import { getNumbers } from '../../services/observableService'

const ObservableExample = () => {
    const [numbers, setNumbers] = useState(0)

    const obtainNewNumbers = () => {
        console.log('subscription to observable')
        getNumbers.subscribe(
            {
                next(newNumber) {
                    console.log('new Number', newNumber)
                    setNumbers(newNumber)
                },
                error(error) {
                    alert('error en observable', error)
                },
                complete() {
                    alert('Observable completed')
                    console.log('Done whit the observable')
                }
            }
        )
        console.log('finished receiving numbers')

    }
    return (
        <div>
            <h2>
                Number: {numbers}
            </h2>

            <button onClick={obtainNewNumbers}>Obtain new Number</button>

        </div>
    )
}

export default ObservableExample