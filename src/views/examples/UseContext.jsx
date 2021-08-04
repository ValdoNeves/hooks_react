import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {

    const { state, setState } = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state,//sobrescreve todos os atributos
            number: state.number + delta //modifica apenas o number
        })

    }

    const { number, text, setNumber, setText } = useContext(AppContext)

    useEffect(function(){
        if(number > 1250){
            setText('Eita!!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">
                    {state.text}<br />
                    {state.number}
                </span>
                <div>
                    <button className="btn"
                        onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn"
                        onClick={() => addNumber(1)}
                    >+1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">
                    {number}
                </span>
                <div>
                    <button className="btn"
                        onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
