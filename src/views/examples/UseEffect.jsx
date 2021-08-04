import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFactorial(n - 1) * n

}

function calcEvenOrOdd(num) {
    const n = parseInt(num)
    if(n % 2 === 0) return 0
    return 1
}


const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [evenOrOdd, setEvenOrOdd] = useState(0)

    useEffect(function () {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function () {
        setEvenOrOdd(calcEvenOrOdd(evenOrOdd))
    }, [evenOrOdd])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? "Don't exist" : factorial}</span>
                </div>

                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">State: </span>
                    <span className="text red">{evenOrOdd === 0 ? 'Even' : 'Odd'} </span>
                </div>
                <input type="number" className="input"
                    onChange={e => setEvenOrOdd(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
