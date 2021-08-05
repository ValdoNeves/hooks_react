import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(num1, num2) {
    const a = parseInt(num1)
    const b = parseInt(num2)

    const future = Date.now() + 2000
    while(Date.now() < future) {} //espera 1s
    return a + b
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    //assim a funcao ira afetar todo o codigo
    // const result = sum(n1, n2)

    //uma alternativa para que o codigo nao seja afetado
    //por completo
    // const [result, setResult] = useState(0)
    // useEffect(function(){
    //     setResult(sum(n1,n2))
    // }, [n1, n2])

    //assim o resultado será similar ao feito com o useState e useEffect
    const result = useMemo(() => sum(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle />
            <div className="center">
                <input type="number" className="input"
                    value={n1}
                    onChange={e => setN1(e.target.value)}
                />
                <input type="number" className="input"
                    value={n2}
                    onChange={e => setN2(e.target.value)}
                />
                <input type="number" className="input"
                    value={n3}
                    onChange={e => setN3(e.target.value)}
                />
                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
