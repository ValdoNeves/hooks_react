import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    produtcts: [],
    user: null,
    //foco apenas no number
    number: 0
}

/*
criar uma action para multiplcar por 7
outra pra dividir por 25
parser para int 

adicionar um numero qualquer passar junto da acao

 */

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
            break
        case 'login':
            return { ...state, user: { name: action.payload } }
            break
        case 'muiltSeven':
            return { ...state, number: state.number * 7 }
            break
        case 'divForTwentyFive':
            return { ...state, number: state.number / 25 }
            break
        case 'parseForInteger':
            return { ...state, number: parseInt(state.number) }
            break
        case 'addAnyNumber':
            return { ...state, number: state.number + action.payload}
            break
        case 'zerar':
            return { ...state, number: 0 }
        default:
            return state
            break
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {
                    state.user ?
                        <span className="text">{state.user.name}</span>
                        : <span className="text">Sem Usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Eu da silva 2' })}>Login</button>
                </div>
                <div>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'muiltSeven' })
                    }>x 7</button>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'divForTwentyFive' })
                    }>÷ 25</button>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'parseForInteger' })
                    }>Integer</button>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'addAnyNumber', payload: 15 })
                    }>add number</button>
                </div>
                <div>
                    <button className="btn" onClick={
                        () => dispatch({ type: 'zerar' })
                    }>Zerar</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
